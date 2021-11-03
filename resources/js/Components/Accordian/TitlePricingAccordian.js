import React from 'react';

export default function TitlePricingAccordian({ value }) {
  return (
    <div className="h-12 w-full pl-5 flex items-center">
      <h1 className="text-[30px] font-bold text-primary hover:text-sky-700">
        {value}
      </h1>
    </div>
  );
}

