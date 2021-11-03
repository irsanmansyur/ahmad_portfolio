import ButtonRounded from '@/Components/ButtonRounded';
import ItemHome from '@/Components/Card/ItemHome';
import Guest from '@/Layouts/Guest';
import React from 'react';

export default function PortfolioPage() {
  return (
    <>
      <div className="w-full px-4">
        <div className="overflow-x-auto w-full inline-flex sm:justify-center">
          <ButtonRounded value="osajds" className="mr-2 last:mr-0" />
          <ButtonRounded value="osajds" className="mr-2 last:mr-0" />
          <ButtonRounded value="osajds" className="mr-2 last:mr-0" />
          <ButtonRounded value="osajds" className="mr-2 last:mr-0" />
          <ButtonRounded value="osajds" className="mr-2 last:mr-0" />
          <ButtonRounded value="osajds" className="mr-2 last:mr-0" />
        </div>
      </div>
      <div className="my-5 w-full flex flex-wrap">
        {/* {[2323, 2323, 5445, 576, 768, 322, 756756, 234, 906789, 45675460, 42424, 767546546].map((v, i) => <ItemHome key={i} item={v} />)} */}
      </div>
      <div className="my-3 text-center">
        <ButtonRounded value="LOAD MORE" />
      </div>
      <div className="my-6 text-center">
        <ButtonRounded value="Ready to have your own  custom work? Let us know" className="text-black sm:text-lg" />
      </div>
    </>
  );
}
PortfolioPage.layout = page => <Guest children={page} props={page.props} />