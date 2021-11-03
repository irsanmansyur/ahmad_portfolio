import FilterOption from '@/Components/Produk/FilterOption';
import HeadingImage from '@/Components/Produk/HeadingImage';
import ListProduk from '@/Components/Produk/ListProduk';
import Guest from '@/Layouts/Guest';
import { XIcon } from '@heroicons/react/solid';
import { Link, useForm } from '@inertiajs/inertia-react';
import React from 'react';

export default function ListPage({ categories, products }) {
  const queryParams = new URLSearchParams(window.location.search);
  const categoryString = queryParams.get("category")
  const search = queryParams.get("search")
  const { get, data, setData } = useForm({ search, category: categoryString });
  const searchProducts = event => {
    event.preventDefault();
    get(route("store"));
  }
  return (
    <div className="px-3 sm:px-0 w-full">
      <HeadingImage />
      <div className="mt-[22px] flex flex-col sm:flex-row w-full">
        <form onSubmit={searchProducts} className="w-full sm:mx-2 relative bg-white rounded-md sm:px-2 px-1 inline-flex justify-between items-center py-1 mb-2 sm:mb-0">
          <input type="text" onChange={e => setData("search", e.target.value)} className="bg-white mr-[30px] w-full text-black py-1 border-none focus:ring-0 active:outline-none focus:outline-none z-0" placeholder="Search Product" value={data.search ?? ''} />
          {data.search && <button type="reset" className="z-10 text-red-500 absolute right-[30px] mx-auto" onClick={e => setData("search", '')}>
            <XIcon className="w-5 h-5" />
          </button>}
          <button className="ml-2 z-10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </form>
        <div className="sm:w-[290px] sm:ml-8 text-black">
          <FilterOption />
        </div>
      </div>
      <div className={"flex text-white sm:flex-row flex-col mt-[63px]"}>
        <div className="sm:mr-[67px] sm:w-[270px] mb-3 sm:border-b-0 pb-3 border-b overflow-x-auto px-2">
          <div className="overflow-x-auto flex flex-row sm:flex-col hide-scroll-bar">
            <Link as="button" replace preserveScroll href={route("store")} className="px-2 mr-2 last:mr-0 sm:mr-0 sm mt-[8px] shadow-sm md:shadow-none sm:px-0 inline-flex sm:w-full justify-between rounded-md text-sm bg-primary sm:bg-transparent sm:hover:text-primary">
              <span className="whitespace-nowrap">All Category</span>
              <span className="ml-[10px] text-black sm:text-white">{categories.reduce((a, b) => a += b.products_count, 0)}</span>
            </Link>
            {
              categories.map((category, i) => {
                if (categoryString != category.name)
                  return (<Link replace preserveScroll key={i} as="button" href={route("store")} data={{ category: category.name, search: data.search }} className="px-2 mr-2 last:mr-0 sm:mr-0 sm mt-[8px] shadow-sm md:shadow-none sm:px-0 inline-flex sm:w-full justify-between rounded-md text-sm bg-primary sm:bg-transparent sm:hover:text-primary">
                    <span className="whitespace-nowrap">{category.name}</span>
                    <span className="ml-[10px] text-black sm:text-white">{category.products_count}</span>
                  </Link>)
                return (<span key={i} className="px-2 mr-2 last:mr-0 sm:mr-0 sm mt-[8px] shadow-sm md:shadow-none sm:px-0 inline-flex sm:w-full justify-between rounded-md text-sm bg-primary sm:bg-transparent sm:text-primary">
                  <span className="whitespace-nowrap">{category.name}</span>
                  <span className="ml-[10px] text-black sm:text-white">{category.products_count}</span>
                </span>)
              })
            }
          </div>
        </div>
        <ListProduk products={products} />
      </div>
    </div>
  );
}
ListPage.layout = page => <Guest props={page.props} children={page} />
