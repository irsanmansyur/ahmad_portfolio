import React from 'react';
import BrowseAll from '../BrowseAll';
import LabelPackage from '../LabelPackage';

const SectionEmoteHome = () => {
  return (
    <section className="py-9">
      <div className="body mt-[53px]">
        <LabelPackage value="EMOTES PACKAGES" className=" mr-2" />
        <div className="content flex justify-between flex-wrap">
          {
            ["emote sa", "emote kasd", "pegebbds", "asghag", "heuyew", "saughsdgd "].map((v, i) => (
              <div key={i} className="content-item sm:w-1/3 w-1/2 mb-3 px-3">
                <div className="rounded-lg bg-gray-50 w-full">
                  <div className="image">
                    <img src="/image/overlay/default.png" className="w-full rounded-t-lg" />
                  </div>
                  <div className="name bg-primary rounded-b-lg text-center py-[20px]">
                    <span className="text-[18px] font-bold leading-[22px]">{v} Package</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="link-overlay text-center">
          <BrowseAll />
        </div>
      </div>
    </section>

  );
}

export default SectionEmoteHome;
