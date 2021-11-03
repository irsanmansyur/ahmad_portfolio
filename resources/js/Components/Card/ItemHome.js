import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function ItemHome({ item, className }) {
  return (
    <div className={"content-item sm:w-1/3 w-1/2 mb-3 px-3 group "}>
      <div className={"rounded-lg w-full bg-primary hover:bg-sky-400 " + className}>
        <div className="image overflow-hidden rounded-t-lg h-[300px]">
          <img src={item.cover ? item.cover.url : "/image/overlay/default.png"} className="w-full h-full bg-cover bg-center bg-fixed rounded-t-lg group-hover:scale-110 origin-top duration-700 delay-200" />
        </div>
        <Link href={route("store.view", item.id ?? "null")}>
          <div className="name  relative  rounded-b-lg text-center py-[20px]">
            <span className="text-[18px] font-bold leading-[22px]">{item.name ?? ''} Package</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
