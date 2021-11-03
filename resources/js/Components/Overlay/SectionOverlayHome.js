import { GetFetch } from '@/Utils/Fetch';
import React, { useEffect, useState } from 'react';
import BrowseAll from '../BrowseAll';
import ItemHome from '../Card/ItemHome';
import LabelPackage from '../LabelPackage';

const SectionOverlayHome = () => {
  const [products, setProducts] = useState([]);
  const loadData = () => {
    GetFetch({
      url: route("store.category", "Overlay"),
      onSuccess: data => { setProducts(data); console.log(data) }
    })
  }
  useEffect(() => {
    loadData();
  }, []);
  return (
    <section className="py-9">
      <div className="body mt-[53px]">
        <LabelPackage value="OVERLAY PACKAGES" className=" mr-2" />
        <div className="content flex justify-between flex-wrap">
          {
            // [1, 1, 1, 1, 1, 1].map((v, i) => <ItemHome key={i} item={v} />)
          }
        </div>
        <div className="link-overlay text-center">
          <BrowseAll />
        </div>
      </div>
    </section>

  );
}

export default SectionOverlayHome;
