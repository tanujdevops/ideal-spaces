import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MapPin, IndianRupee, Home, Building2, Search, Loader2, CheckCircle2 } from 'lucide-react';
import type { SearchParams } from '../../views/AIPropertyHubPage';

interface AIHeroSectionProps {
  onSearch: (params: SearchParams) => void;
  loading: boolean;
  externalOpenModal?: boolean;   // P1-1: parent can force-open key modal (e.g. on 403)
  onModalClosed?: () => void;    // callback to reset the flag after opening
}

const POPULAR_CITIES = [
  'Mumbai', 'Bangalore', 'Delhi', 'Kolhapur',
  'Hyderabad', 'Chennai', 'Ahmedabad', 'Gurgaon',
];

// Extended list for autocomplete
const ALL_CITIES = [
  'Mumbai', 'Bangalore', 'Delhi', 'Kolhapur', 'Hyderabad', 'Chennai',
  'Ahmedabad', 'Gurgaon', 'Noida', 'Kolkata', 'Jaipur', 'Lucknow',
  'Chandigarh', 'Indore', 'Nagpur', 'Bhopal', 'Kochi', 'Coimbatore',
  'Vadodara', 'Surat', 'Thane', 'Navi Mumbai', 'Mysore', 'Vizag',
  'Nashik', 'Faridabad', 'Ghaziabad', 'Dehradun', 'Mangalore',
  'Thiruvananthapuram', 'Bhubaneswar', 'Patna', 'Ranchi', 'Raipur',
  'Agra', 'Varanasi', 'Amritsar', 'Ludhiana', 'Greater Noida',
  'Mohali', 'Panchkula', 'Zirakpur', 'Dera Bassi', 'Sonipat',
  'Panipat', 'Karnal', 'Ambala', 'Udaipur', 'Jodhpur', 'Kota',
  'Rajkot', 'Gandhinagar', 'Anand', 'Vapi', 'Bhavnagar',
  'Aurangabad', 'Solapur', 'Sangli', 'Satara',
];

const PROPERTY_TYPES = ['Flat', 'Villa', 'House', 'Penthouse', 'Plot', 'Studio'];
const CATEGORIES = ['Residential', 'Commercial'];

const LOAD_STEPS = [
  { label: 'Searching listings',        desc: 'Querying 99acres, MagicBricks, Housing.com & NoBroker' },
  { label: 'Reading property details',  desc: 'Extracting data from live listing pages'  },
  { label: 'Getting AI insights',       desc: 'Ranking & analysing by your criteria'     },
];

type BudgetUnit = 'Lakh' | 'Cr';

const AIHeroSection: React.FC<AIHeroSectionProps> = ({ onSearch, loading }) => {
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [bhk, setBhk] = useState('Any');
  const [possession, setPossession] = useState('any');
  const [loadStep, setLoadStep] = useState(0); // 0=idle, 1=searching, 2=reading, 3=analyzing
  const [maxBudget, setMaxBudget] = useState('2');
  const [budgetUnit, setBudgetUnit] = useState<BudgetUnit>('Cr');
  const [propertyType, setPropertyType] = useState('Flat');
  const [category, setCategory] = useState('Residential');

  // Autocomplete state
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Advance loading steps on a timer so the user sees progress while waiting
  useEffect(() => {
    if (!loading) { setLoadStep(0); return; }
    setLoadStep(1);
    const t2 = setTimeout(() => setLoadStep(2), 8_000);
    const t3 = setTimeout(() => setLoadStep(3), 25_000);
    return () => { clearTimeout(t2); clearTimeout(t3); };
  }, [loading]);

  // Filter cities based on input
  const filteredCities = city.trim()
    ? ALL_CITIES.filter(
      (c) => c.toLowerCase().includes(city.toLowerCase()) && c.toLowerCase() !== city.toLowerCase()
    ).slice(0, 6)
    : [];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Node) &&
        cityInputRef.current &&
        !cityInputRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    setShowSuggestions(true);
    setHighlightedIndex(-1);
  };

  const selectCity = (selectedCity: string) => {
    setCity(selectedCity);
    setShowSuggestions(false);
    setHighlightedIndex(-1);
  };

  const handleCityKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || filteredCities.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < filteredCities.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredCities.length - 1));
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      selectCity(filteredCities[highlightedIndex]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;

    // Convert to Crores for the local search model.
    const rawValue = parseFloat(maxBudget) || 2;
    const valueInCrores = budgetUnit === 'Lakh' ? rawValue / 100 : rawValue;

    onSearch({
      city:         city.trim(),
      locality:     locality.trim(),
      bhk,
      possession,
      maxBudget:    valueInCrores,
      propertyType,
      category,
    });
  };

  return (
    <section className="relative bg-[#FFFCF7] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-[#E0B030]/10 to-transparent" />
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#E0B030]/10 rounded-full blur-[100px]" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(224,176,48,0.08),transparent_60%)]" />
      </div>

      <div className="relative pt-32 pb-24 max-w-[1200px] mx-auto px-6">
        {/* ── Heading ──────────────────────────────── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#E0B030]/20 rounded-full px-4 py-2 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#E0B030]" />
            <span className="font-space-mono text-xs text-[#E0B030] uppercase tracking-wider font-semibold">
              AI-Powered Search
            </span>
          </div>

          <h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl leading-tight text-[#221410] mb-6">
            Find Properties with<br />
            <span className="text-[#E0B030]">AI Intelligence</span>
          </h1>

          <p className="font-manrope text-lg text-[#6B7280] max-w-[600px] mx-auto leading-relaxed">
            Our AI analyzes live market data and real listings to deliver highly personalized property recommendations in seconds.
          </p>
        </div>

        {/* Local demo banner */}
        <div className="max-w-[800px] mx-auto mb-6 relative z-10">
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 shadow-sm rounded-xl px-5 py-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="font-manrope text-sm font-medium text-emerald-800 flex-1">
              Frontend demo mode is active. Searches use curated local data with no backend calls.
            </p>
          </div>
        </div>

        {/* ── Search form card ─────────────────────── */}
        <div className="max-w-[900px] mx-auto relative z-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 md:p-8"
          >
            {/* City */}
            <div className="mb-6">
              <label className="block font-space-mono text-[11px] text-[#6B7280] font-semibold uppercase tracking-widest mb-2 ml-1">
                Where do you want to live?
              </label>
              <div className="relative">
                <div className="relative bg-white border border-[#F2DFA8] rounded-xl p-4 flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#E0B030]/30 focus-within:border-[#E0B030] transition-all shadow-sm">
                  <MapPin className="w-5 h-5 text-[#E0B030] shrink-0" />
                  <input
                    ref={cityInputRef}
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                    onFocus={() => setShowSuggestions(true)}
                    onKeyDown={handleCityKeyDown}
                    className="flex-1 bg-transparent font-manrope text-base text-[#221410] outline-none placeholder:text-[#9CA3AF] placeholder:font-light"
                    placeholder="Enter city — e.g. Mumbai, Kolhapur, Bangalore…"
                    autoComplete="off"
                    required
                  />
                </div>

                {/* Autocomplete dropdown */}
                {showSuggestions && filteredCities.length > 0 && (
                  <div
                    ref={suggestionsRef}
                    className="absolute z-50 left-0 right-0 mt-2 bg-white border border-[#F2DFA8] rounded-xl shadow-xl overflow-hidden"
                  >
                    {filteredCities.map((c, idx) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => selectCity(c)}
                        onMouseEnter={() => setHighlightedIndex(idx)}
                        className={`w-full text-left px-5 py-3.5 flex items-center gap-3 transition-colors ${idx === highlightedIndex
                          ? 'bg-[#FFFCF7] text-[#221410]'
                          : 'text-[#6B7280] hover:bg-[#FFFCF7] hover:text-[#221410]'
                          }`}
                      >
                        <MapPin className="w-4 h-4 text-[#E0B030] shrink-0" />
                        <span className="font-manrope text-sm font-medium">{c}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick-pick city pills */}
              <div className="flex flex-wrap gap-2 mt-4 ml-1">
                {POPULAR_CITIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => selectCity(c)}
                    className={`font-manrope text-xs px-4 py-1.5 rounded-full border transition-all ${city === c
                      ? 'bg-[#E0B030] border-[#E0B030] text-[#221410] font-medium shadow-sm'
                      : 'bg-white border-[#F2DFA8] text-[#6B7280] hover:border-[#E0B030]/50 hover:text-[#E0B030]'
                      }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Locality / Area ─────────────────────────────── */}
            <div className="mb-6">
              <label className="block font-space-mono text-[11px] text-[#6B7280] font-semibold uppercase tracking-widest mb-2 ml-1">
                Specific Area <span className="font-normal normal-case text-[#9CA3AF]">(optional — highest impact on results)</span>
              </label>
              <div className="relative bg-white border border-[#F2DFA8] rounded-xl p-4 flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#E0B030]/30 focus-within:border-[#E0B030] transition-all shadow-sm">
                <MapPin className="w-5 h-5 text-[#9CA3AF] shrink-0" />
                <input
                  type="text"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="flex-1 bg-transparent font-manrope text-base text-[#221410] outline-none placeholder:text-[#9CA3AF] placeholder:font-light"
                  placeholder="e.g. Powai, Andheri West, Koramangala, SG Highway…"
                />
              </div>
            </div>

            {/* Budget · Type · Category */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {/* Budget */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-space-mono text-[11px] text-[#6B7280] font-semibold uppercase tracking-widest ml-1">
                    Max Budget
                  </label>
                  {/* Unit toggle */}
                  <div className="flex items-center bg-[#FFFCF7] border border-[#F2DFA8] rounded p-0.5">
                    {(['Lakh', 'Cr'] as BudgetUnit[]).map((unit) => (
                      <button
                        key={unit}
                        type="button"
                        onClick={() => {
                          if (unit !== budgetUnit) {
                            const val = parseFloat(maxBudget) || 0;
                            if (unit === 'Lakh') {
                              setMaxBudget(String(val * 100));
                            } else {
                              setMaxBudget(String(val / 100));
                            }
                            setBudgetUnit(unit);
                          }
                        }}
                        className={`font-space-mono text-[10px] uppercase font-bold px-2.5 py-1 transition-all rounded-sm ${budgetUnit === unit
                          ? 'bg-white shadow-sm text-[#E0B030]'
                          : 'text-[#9CA3AF] hover:text-[#6B7280]'
                          }`}
                      >
                        {unit}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="relative bg-white border border-[#F2DFA8] rounded-xl p-4 flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#E0B030]/30 focus-within:border-[#E0B030] transition-all shadow-sm">
                  <IndianRupee className="w-5 h-5 text-[#E0B030] shrink-0" />
                  <input
                    type="number"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                    className="flex-1 bg-transparent font-space-mono text-base text-[#221410] outline-none placeholder:text-[#9CA3AF] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder={budgetUnit === 'Lakh' ? '50' : '2'}
                    min="0.1"
                    step="any" // P2: Fix HTML5 validation bug, allow any increment (e.g. 2.0 when jumping by 0.5 was strictly failing)
                    required
                  />
                </div>
              </div>

              {/* Property type */}
              <div>
                <label className="block font-space-mono text-[11px] text-[#6B7280] font-semibold uppercase tracking-widest mb-2 ml-1">
                  Property Type
                </label>
                <div className="relative bg-white border border-[#F2DFA8] rounded-xl p-4 flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#E0B030]/30 focus-within:border-[#E0B030] transition-all shadow-sm">
                  <Home className="w-5 h-5 text-[#E0B030] shrink-0" />
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="flex-1 bg-transparent font-manrope text-base text-[#221410] outline-none cursor-pointer"
                  >
                    {PROPERTY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block font-space-mono text-[11px] text-[#6B7280] font-semibold uppercase tracking-widest mb-2 ml-1">
                  Category
                </label>
                <div className="relative bg-white border border-[#F2DFA8] rounded-xl p-4 flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#E0B030]/30 focus-within:border-[#E0B030] transition-all shadow-sm">
                  <Building2 className="w-5 h-5 text-[#E0B030] shrink-0" />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="flex-1 bg-transparent font-manrope text-base text-[#221410] outline-none cursor-pointer"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* ── BHK Configuration ───────────────────────────── */}
            <div className="mb-6">
              <label className="block font-space-mono text-[11px] text-[#6B7280] font-semibold uppercase tracking-widest mb-3 ml-1">
                BHK Configuration
              </label>
              <div className="flex flex-wrap gap-2">
                {(['Any', '1BHK', '2BHK', '3BHK', '4BHK+'] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBhk(option)}
                    className={`font-manrope text-sm font-medium px-5 py-2.5 rounded-xl border transition-all ${
                      bhk === option
                        ? 'bg-[#E0B030] border-[#E0B030] text-[#221410] shadow-sm'
                        : 'bg-white border-[#F2DFA8] text-[#6B7280] hover:border-[#E0B030]/50 hover:text-[#E0B030]'
                    }`}
                  >
                    {option === 'Any' ? 'Any BHK' : option}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Possession ──────────────────────────────────── */}
            <div className="mb-8">
              <label className="block font-space-mono text-[11px] text-[#6B7280] font-semibold uppercase tracking-widest mb-3 ml-1">
                Possession
              </label>
              <div className="flex flex-wrap gap-2">
                {([
                  { value: 'any',               label: 'Any' },
                  { value: 'ready',             label: 'Ready to Move' },
                  { value: 'underconstruction', label: 'Under Construction' },
                ] as const).map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setPossession(opt.value)}
                    className={`font-manrope text-sm font-medium px-5 py-2.5 rounded-xl border transition-all ${
                      possession === opt.value
                        ? 'bg-[#221410] border-[#221410] text-white shadow-sm'
                        : 'bg-white border-[#F2DFA8] text-[#6B7280] hover:border-[#221410]/30 hover:text-[#221410]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="relative group mt-2">
              <button
                type="submit"
                disabled={loading || !city.trim()}
                className="w-full bg-[#E0B030] hover:bg-[#B98215] disabled:opacity-50 disabled:cursor-not-allowed text-[#221410] font-manrope font-semibold text-lg py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E0B030]/20 hover:shadow-xl hover:shadow-[#E0B030]/30"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Searching properties…
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Search with AI
                  </>
                )}
              </button>
            </div>

            {loading && (
              <div className="mt-5 bg-[#FFFCF7] border border-[#F2DFA8] rounded-xl p-5">
                {/* 3-step progress */}
                <div className="space-y-4">
                  {LOAD_STEPS.map((s, i) => {
                    const stepNum = i + 1;
                    const isDone    = loadStep > stepNum;
                    const isActive  = loadStep === stepNum;
                    const isPending = loadStep < stepNum;
                    return (
                      <div key={s.label} className={`flex items-start gap-3 transition-opacity duration-500 ${isPending ? 'opacity-35' : 'opacity-100'}`}>
                        <div className="mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center">
                          {isDone   ? <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          : isActive ? <Loader2 className="w-5 h-5 text-[#E0B030] animate-spin" />
                          :            <div className="w-4 h-4 rounded-full border-2 border-[#E0B030]/30" />}
                        </div>
                        <div>
                          <p className={`font-manrope text-sm font-semibold ${isDone ? 'text-[#6B7280] line-through decoration-[#9CA3AF]' : isActive ? 'text-[#221410]' : 'text-[#9CA3AF]'}`}>
                            {s.label}{isActive ? '…' : ''}
                          </p>
                          {isActive && (
                            <p className="font-manrope text-xs text-[#9CA3AF] mt-0.5">{s.desc}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Search context summary */}
                <p className="font-manrope text-xs text-[#9CA3AF] text-center mt-5 leading-relaxed">
                  {bhk !== 'Any' ? `${bhk} ` : ''}{propertyType.toLowerCase()}s
                  {locality ? ` in ${locality},` : ' in'} <span className="font-semibold text-[#6B7280]">{city}</span>
                  {' '}· under ₹{maxBudget} {budgetUnit} · usually takes 15–30 s
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

    </section>
  );
};

export default AIHeroSection;
