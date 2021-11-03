import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import ItemHome from '../Card/ItemHome';

export default function ListProduk({ products: productProps }) {
  const [products, setProducts] = useState(productProps.data);
  return (
    <div className="w-full flex flex-wrap justify-center">
      {
        products.map((v, i) => <ItemHome key={i} className="h-full " item={v} />)
      }
      <div className="w-full sm:mt-[45px]">
        <div className="pagination text-center">
          {productProps.meta.current_page < productProps.meta.last_page && productProps.meta.links.map((pg, i) => {
            if (pg.url && !pg.active)
              return (<Link href={pg.url} key={i} className="bg-primary rounded-full px-3 font-bold text-[28px] sm:mr-[20px] mr-2 hover:bg-sky-300" ><span dangerouslySetInnerHTML={{ __html: pg.label }} ></span></Link>)
            return (<button key={i} className="bg-sky-300 rounded-full px-3 font-bold text-[28px] sm:mr-[20px] mr-2 hover:opacity-80" ><span dangerouslySetInnerHTML={{ __html: pg.label }} /></button>)
          })}
        </div>
      </div>

    </div>
  );
}

