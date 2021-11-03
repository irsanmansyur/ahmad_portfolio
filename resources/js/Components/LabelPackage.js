import React from 'react';

export default function LabelPackage({ value, className }) {
  return (
    <span className={"font-bold text-base sm:text-[32px] px-2" + className}>{value}</span>
  );
}
