import React from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, description }) => (
  <section className="bg-[#FFFCF7] border-b border-[rgba(229,214,177,0.5)] py-20 px-8">
    <div className="max-w-[1280px] mx-auto text-center">
      <p className="mb-4 font-space-mono text-xs uppercase tracking-widest text-[#E0B030]">
        {eyebrow}
      </p>
      <h1 className="mx-auto max-w-[860px] font-fraunces text-5xl leading-tight text-[#221410] lg:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-[720px] font-manrope text-lg leading-relaxed text-[#4B5563]">
        {description}
      </p>
    </div>
  </section>
);

export default PageHeader;
