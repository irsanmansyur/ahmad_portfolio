import LabelPackage from '@/Components/LabelPackage';
import LinkIconSosmedMe from '@/Components/LinkIconSosmedMe';
import Guest from '@/Layouts/Guest';
import React from 'react';

export default function AboutPage({ setting }) {
  return (
    <div className="w-4/5 mx-auto">
      <div>
        <div className="head text-center my-[39px]">
          <button className="hover:opacity-75 cursor-default">
            <LabelPackage value="ABOUT US" className=" text-primary" />
            <div className="mt-[4px] sm:mt-[11px] w-[50%] rounded-l-full rounded-r-full bg-primary h-[3px] sm:h-[5px] mx-auto" />
          </button>
        </div>
        <div className="body">
          <h2 className="text-[32px]">Our Story</h2>
          <p className="text-[20px] font-roboto">
            {setting.about_app}
          </p>
        </div>
      </div>
      <div className="mt-[90px]">
        <div className="head my-[39px] text-center">
          <button className="hover:opacity-75 cursor-default">
            <LabelPackage value="FOUNDER'S STORY" className=" text-primary" />
            <div className="mt-[4px] sm:mt-[11px] w-[50%] rounded-l-full rounded-r-full bg-primary h-[3px] sm:h-[5px] mx-auto" />
          </button>
          <div className="text-center pt-[30px]">
            <img src="http://127.0.0.1:8001/image/overlay/default.png" alt="" className="w-[120px] h-[120px] rounded-full border-primary border-2 mx-auto" />
          </div>
        </div>
        <div className="body">
          <p className="text-[20px] font-roboto">
            {setting.story_app}
          </p>
        </div>
        <div className="footer inline-flex justify-center my-3 w-full">
          <LinkIconSosmedMe />
        </div>
      </div>
    </div >
  );
}
AboutPage.layout = page => <Guest props={page.props} children={page} />

