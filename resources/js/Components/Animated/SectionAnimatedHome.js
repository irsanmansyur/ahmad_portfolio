import React from 'react';

export default function Sectionanimatedhome() {
  return (
    <section className="py-9">
      <div className="body mt-[53px]">
        <LabelPackage value="ABINATED INTRO" className=" mr-2" />
        <div className="content flex justify-between flex-wrap">
          {
            [1, 1, 1, 1, 1, 1].map((v, i) => <ItemHome key={i} item={v} />)
          }
        </div>
        <div className="link-animated text-center">
          <BrowseAll />
        </div>
      </div>
    </section>
  );
}


