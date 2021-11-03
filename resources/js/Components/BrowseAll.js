import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import LabelPackage from './LabelPackage';

const BrowseAll = ({ category }) => {
  return (
    <Link className="hover:opacity-75" href={route("store")} data={{ category: category.name }} as="button" >
      <LabelPackage value="Browse All" />
      <div className="mt-[4px] sm:mt-[11px] w-[50%] rounded-l-full rounded-r-full bg-white h-[3px] sm:h-[5px] mx-auto" />
    </Link >
  );
};

export default BrowseAll;