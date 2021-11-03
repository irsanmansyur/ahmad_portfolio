
import Button from '@/Components/Button';
import Inputlogin from '@/Components/InputLogin';
import Authenticated from '@/Layouts/Authenticated';
import { useForm } from '@inertiajs/inertia-react';
import React from 'react';

export default function EditPage({ category }) {
  const { data, setData, put, processing, errors, reset } = useForm({ name: category.name });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    put(route('admin.category.update', category.id));
  };

  return (
    <>
      <div id="payment-head" className="relative bg-sky-500 my-4 -ml-4 max-w-[90%] md:max-w-[75%] py-3 rounded-full rounded-bl-none px-[16px] shadow-md">
        <h1 className="title font-bold text-xl ml-3 text-white font-serif">Edit Category</h1>
        <div className="w-[16px] h-[15px] bg-sky-500 absolute bottom-[-15px] left-0" />
        <div className="w-[16px] h-[32px] bg-sky-700 opacity-100 absolute bottom-[-32px] left-0 rounded-l-full shadow-md border-r border-gray-100" />
      </div>
      <div id="box-list-transaksi" className="p-3">
        <form onSubmit={submit}>
          <div className='mb-2 last:mb-0'>
            <label htmlFor="name" className="block font-medium text-sm  font-CenturyGothic">Name</label>
            <div className="flex flex-col items-start">
              <input type="text" name="name" onChange={onHandleChange} className="border-primary border    rounded-md shadow-sm mt-1 block w-full bg-transparent h-[46px] px-2 focus:ring-0 active:outline-none focus:outline-none focus:border-primary" defaultValue={data.name} />
            </div>
            {errors.name && <span className="text-primary text-xs">{errors.name}</span>}
          </div>
          <div className='mb-2 last:mb-0'>
            <Button className="hover:opacity-80" processing={processing}>
              Update
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

EditPage.layout = page => <Authenticated props={page.props} children={page} />
