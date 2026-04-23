import React from 'react';

const SimpleFooter: React.FC = () => {
  return (
    <footer className="border-t border-[#F2DFA8] bg-[#FBF7EF] py-8">
      <div className="mx-auto max-w-[1280px] px-8 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <div className="h-2 w-2 rounded-full bg-[#E0B030]" />
          <span className="font-manrope text-sm font-bold uppercase tracking-widest text-[#1b1812]">
            Ideal Spaces
          </span>
        </div>
        <p className="font-manrope text-xs text-[#8a7d65]">
          Copyright 2026 Ideal Spaces. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SimpleFooter;
