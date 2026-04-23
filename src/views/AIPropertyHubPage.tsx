import React, { useRef, useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AIHeroSection from '../components/ai-hub/AIHeroSection';
import AISearchResults from '../components/ai-hub/AISearchResults';
import AIAnalysisPanel from '../components/ai-hub/AIAnalysisPanel';
import AILocationTrends from '../components/ai-hub/AILocationTrends';
import AICTASection from '../components/ai-hub/AICTASection';
import { useSEO } from '../hooks/useSEO';
import { aiAPI } from '../services/api';

export interface ScrapedProperty {
  building_name: string;
  builder_name?: string;
  property_type: string;
  bhk_config?: string;
  location_address: string;
  price: string;
  price_per_sqft?: string;
  description: string;
  amenities: string[];
  area_sqft: string;
  floor_number?: string;
  total_floors?: string;
  possession_status?: string;
  rera_number?: string;
  parking?: string;
  property_url?: string;
  source?: string;
  facing_direction?: string;
  nearby_landmarks?: string[];
}

export interface PropertyOverview {
  name: string;
  price: string;
  area: string;
  location: string;
  highlight: string;
  match_score?: number | null;
  one_line_insight?: string;
  red_flags?: (string | { flag: string; severity: 'critical' | 'medium' | 'low' })[];
  value_verdict?: 'good_deal' | 'fair' | 'overpriced' | null;
}

export interface PropertyAnalysis {
  overview: PropertyOverview[];
  best_value: { name: string; reason: string } | null;
  recommendations: string[];
  error?: string;
}

export interface LocationData {
  location: string;
  price_per_sqft: string;
  percent_increase: string;
  rental_yield: string;
}

export interface TrendDetail {
  location: string;
  price_per_sqft: string;
  yearly_change_pct: string;
  rental_yield_pct: string;
  outlook: string;
}

export interface LocationAnalysis {
  trends: TrendDetail[];
  top_appreciation: { location: string; reason: string } | null;
  best_rental_yield: { location: string; reason: string } | null;
  investment_tips: string[];
  error?: string;
}

export interface SearchParams {
  city: string;
  locality: string;
  bhk: string;
  possession: string;
  maxBudget: number;
  propertyType: string;
  category: string;
}

const AIPropertyHubPage: React.FC = () => {
  useSEO({
    title: 'AI Property Hub',
    description: 'Frontend-only AI-style property search, market analysis, location trends, and investment insights.',
  });

  const [searchParams, setSearchParams] = useState<SearchParams>({
    city: '',
    locality: '',
    bhk: 'Any',
    possession: 'any',
    maxBudget: 2,
    propertyType: 'Flat',
    category: 'Residential',
  });
  const [properties, setProperties] = useState<ScrapedProperty[]>([]);
  const [analysis, setAnalysis] = useState<PropertyAnalysis | null>(null);
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [locationAnalysis, setLocationAnalysis] = useState<LocationAnalysis | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [trendsLoading, setTrendsLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [trendsError, setTrendsError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasLoadedTrends, setHasLoadedTrends] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (params: SearchParams) => {
    setSearchParams(params);
    setSearchLoading(true);
    setSearchError(null);
    setProperties([]);
    setAnalysis(null);
    setLocations([]);
    setLocationAnalysis(null);
    setHasSearched(true);
    setHasLoadedTrends(false);

    try {
      const response = await aiAPI.search({
        city: params.city,
        locality: params.locality,
        bhk: params.bhk,
        possession: params.possession,
        price: { min: 0, max: params.maxBudget * 10_000_000 },
        type: params.propertyType,
        category: params.category,
      });

      setProperties(response.data.properties || []);
      setAnalysis(response.data.analysis || null);

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch {
      setSearchError('The local demo search could not be completed. Please try again.');
    } finally {
      setSearchLoading(false);
    }
  };

  const fetchTrends = async (city: string) => {
    setTrendsLoading(true);
    setTrendsError(null);
    setLocations([]);
    setLocationAnalysis(null);
    setHasLoadedTrends(true);

    try {
      const response = await aiAPI.locationTrends(city);
      setLocations(response.data.locations || []);
      setLocationAnalysis(response.data.analysis || null);
    } catch {
      setTrendsError('The local trend demo could not be completed. Please try again.');
    } finally {
      setTrendsLoading(false);
    }
  };

  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Navbar />

      <AIHeroSection onSearch={handleSearch} loading={searchLoading} />

      <div ref={resultsRef}>
        {hasSearched && (
          <section className="bg-[#FFFCF7] py-14 border-t border-[#F2DFA8]/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:flex-1 min-w-0 order-2 lg:order-1">
                  <AISearchResults
                    properties={properties}
                    loading={searchLoading}
                    error={searchError}
                    city={searchParams.city}
                    analysis={analysis}
                  />
                </div>

                <div className="w-full lg:w-[340px] shrink-0 order-1 lg:order-2 lg:sticky lg:top-8">
                  <AIAnalysisPanel
                    analysis={analysis}
                    loading={searchLoading}
                    error={searchError}
                    city={searchParams.city}
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {hasSearched && !searchLoading && properties.length > 0 && (
        !hasLoadedTrends ? (
          <section className="bg-[#FFFCF7] py-10 border-t border-[#F2DFA8]">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
              <p className="font-manrope text-sm text-[#6b7280] mb-4">
                Want to see frontend demo price trends and rental yields for {searchParams.city}?
              </p>
              <button
                onClick={() => fetchTrends(searchParams.city)}
                className="inline-flex items-center gap-2 bg-[#E0B030] hover:bg-[#B98215] text-[#221410] font-manrope font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-[#E0B030]/20"
              >
                <span className="font-material-icons text-base">trending_up</span>
                Load Location Trends
              </button>
            </div>
          </section>
        ) : (
          <AILocationTrends
            locations={locations}
            analysis={locationAnalysis}
            loading={trendsLoading}
            error={trendsError}
            city={searchParams.city}
          />
        )
      )}

      <AICTASection />
      <Footer />
    </div>
  );
};

export default AIPropertyHubPage;
