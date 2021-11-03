import React from 'react';
import BrowseAll from '../BrowseAll';
import ItemHome from '../Card/ItemHome';
import LabelPackage from '../LabelPackage';

export default function ItemSection({ category }) {
  return (
    <>
      <section className="py-9">
        <div className="body mt-[53px]">
          <LabelPackage value={category.name.toUpperCase()} className=" mr-2" />
          <div className="content flex justify-start flex-wrap">
            {
              category.products.map((v, i) => <ItemHome key={i} item={v} />)
            }
          </div>
          <div className="link-overlay text-center">
            <BrowseAll category={category} />
          </div>
        </div>
      </section>
    </>
  );
}

