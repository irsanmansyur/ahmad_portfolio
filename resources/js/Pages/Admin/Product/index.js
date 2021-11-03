import Popup from '@/Components/Popup/Modal';
import Authenticated from '@/Layouts/Authenticated';
import { Link, useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react';

export default function ListPage({ products }) {
  return (
    <>
      <div id="payment-head" className="relative bg-sky-500 my-4 -ml-4 max-w-[90%] md:max-w-[75%] py-3 rounded-full rounded-bl-none px-[16px] shadow-md">
        <h1 className="title font-bold text-xl ml-3 text-white font-serif">Daftar Product</h1>
        <div className="w-[16px] h-[15px] bg-sky-500 absolute bottom-[-15px] left-0" />
        <div className="w-[16px] h-[32px] bg-sky-700 opacity-100 absolute bottom-[-32px] left-0 rounded-l-full shadow-md border-r border-gray-100" />
      </div>
      <div id="box-list-transaksi" className="p-3">
        <div className="head my-3">
          <Link className="rounded-lg bg-primary hover:opacity-80 text-white py-1 px-3 my-3" href={route("admin.product.create")}>Add</Link>
        </div>
        <div className="inline-block overflow-x-auto w-full max-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <TableProducts products={products} />
        </div>
      </div>
    </>
  );
}
const TableProducts = ({ products }) => {
  return (<>
    {products.length < 1 ? <div className=" bg-red-500 rounded-lg p-3 text-white border border-white">Product Empty</div> :
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="align-top px-2 md:px-6 py-2 md:py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              <div className="inline-flex">
                <span>
                  Name
                </span>
              </div>
            </th>
            <th className="align-top px-2 md:px-6 py-2 md:py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {products.map((product, i) => (
            <tr key={i}>
              <td className="align-top px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap border-b border-gray-200 text-xs">
                {product.name}
              </td>
              <td className="align-top px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap border-b border-gray-200 text-xs">
                <div className="flex items-center justify-center">
                  <EditProduck product={product} />
                  <DeleteProduck product={product} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}
  </>)
}
const EditProduck = ({ product }) => {
  const [loading, setLoading] = useState(false);
  return (<>

    {
      !loading ? <Link href={route("admin.product.edit", product.id)} onClick={e => setLoading(true)} className="inline-flex items-center justify-center p-[5px] bg-sky-500 text-white rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </Link> :
        <button className="inline-flex items-center justify-center p-[5px] ml-2">
          <svg className="animate-spin h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </button>
    }

  </>)
}
const DeleteProduck = ({ product }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const { delete: destroy } = useForm();
  const onDelete = event => {
    event.preventDefault();
    destroy(route("admin.product.destroy", product.id), {
      preserveScroll: true,
      onSuccess: () => setOpenDelete(false),
    });
  }
  return (<>
    {!openDelete ? <button onClick={e => setOpenDelete(true)} className="ml-2 rounded-lg inline-flex items-center justify-center p-[5px] bg-red-500 text-white hover:opacity-80">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button> :
      <button className="ml-2"><svg className="animate-spin h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg></button>
    }
    <Popup open={openDelete} callBack={e => setOpenDelete(false)} className="mt-[100px] w-[400px]">
      <div className="p-3 bg-red-400 text-white rounded-lg">Apakah Anda yakin ingin manghapus.?
        <button onClick={onDelete} className="rounded-lg ml-3 bg-red-700 text-white py-1 px-3 hover:opacity-80">Yakin</button></div>
    </Popup>
  </>)
}

ListPage.layout = page => <Authenticated props={page.props} children={page} />

