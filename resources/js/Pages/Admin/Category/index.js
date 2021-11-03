import Authenticated from '@/Layouts/Authenticated';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function CategoryPage({ categories }) {
  return (
    <>
      <div id="payment-head" className="relative bg-sky-500 my-4 -ml-4 max-w-[90%] md:max-w-[75%] py-3 rounded-full rounded-bl-none px-[16px] shadow-md">
        <h1 className="title font-bold text-xl ml-3 text-white font-serif">Daftar Category</h1>
        <div className="w-[16px] h-[15px] bg-sky-500 absolute bottom-[-15px] left-0" />
        <div className="w-[16px] h-[32px] bg-sky-700 opacity-100 absolute bottom-[-32px] left-0 rounded-l-full shadow-md border-r border-gray-100" />
      </div>
      <div id="box-list-transaksi" className="p-3">
        <div className="head my-3">
          <Link className="rounded-lg bg-primary hover:opacity-80 text-white py-1 px-3 my-3" href={route("admin.category.create")}>Add</Link>
        </div>
        <div className="inline-block overflow-x-auto w-full max-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <TableCategory categories={categories} />
        </div>
      </div>
    </>
  );
}
const TableCategory = ({ categories }) => {

  return (<>
    {categories.length < 1 ? <div className=" bg-red-500 rounded-lg p-3 text-white border border-white">Category Empty</div> :
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="align-top px-2 md:px-6 py-2 md:py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              <div className="inline-flex">
                <span>
                  Name
                </span>
                {/* <button onClick={e => setSortColumn("name")}>
              {
                <SortColumnComponent column={sortColumns.name} />
              }
            </button> */}
              </div>
            </th>
            <th className="align-top px-2 md:px-6 py-2 md:py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {categories.map((category, i) => (
            <tr key={i}>
              <td className="align-top px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap border-b border-gray-200 text-xs">
                {category.name}
              </td>
              <td className="align-top px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap border-b border-gray-200 text-xs">
                <Link href={route("admin.category.edit", category.id)} className="mr-2 rounded-lg bg-primary text-white py-1 px-3 hover:opacity-80">
                  edit
                </Link>
                <Link href={route("admin.category.destroy", category.id)} method="delete" as="button" className="rounded-lg bg-red-500 text-white py-1 px-3 hover:opacity-80">
                  delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}
  </>)
}

CategoryPage.layout = page => <Authenticated props={page.props} children={page} />
