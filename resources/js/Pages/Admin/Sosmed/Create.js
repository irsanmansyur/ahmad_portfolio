import Button from '@/Components/Button';
import Authenticated from '@/Layouts/Authenticated';
import { useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import Select from 'react-select';
export default function CreatePage({ categories }) {
  const [selectedURLImage, setSelectedURLImage] = useState([]);
  const { data, setData, post, processing, errors, reset, progress } = useForm({ name: '' });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const renderPhoto = (source) => {
    return <img src={source} className="h-[40px] w-[40px] rounded-lg mr-2 last:mr-0" />;
  }
  const submit = (e) => {
    e.preventDefault();
    post(route('admin.sosmed.store'));
  };
  return (
    <>
      <div>
        <div className="head"></div>
        <div className="body p-3">
          <form onSubmit={submit}>
            <div className='mb-2 last:mb-0'>
              <label htmlFor="name" className="block font-medium text-sm  font-CenturyGothic">Name</label>
              <div className="flex flex-col items-start">
                <input type="text" name="name" onChange={onHandleChange} className="border-primary border    rounded-md shadow-sm mt-1 block w-full bg-transparent h-[46px] px-2 focus:ring-0 active:outline-none focus:outline-none focus:border-primary" defaultValue={data.name} />
              </div>
              {errors.name && <span className="text-primary text-xs">{errors.name}</span>}
            </div>
            <div className='mb-2 last:mb-0'>
              <label htmlFor="url" className="block font-medium text-sm  font-CenturyGothic">Url</label>
              <div className="flex flex-col items-start">
                <input type="text" name="url" id="url" onChange={onHandleChange} className="border-primary border    rounded-md shadow-sm mt-1 block w-full bg-transparent h-[46px] px-2 focus:ring-0 active:outline-none focus:outline-none focus:border-primary" defaultValue={data.url} />
              </div>
              {errors.url && <span className="text-primary text-xs">{errors.url}</span>}
            </div>
            <div className='mb-2 last:mb-0'>
              <label htmlFor="value" className="block font-medium text-sm  font-CenturyGothic">Value</label>
              <div className="flex flex-col items-start">
                <input type="text" name="value" id="value" onChange={onHandleChange} className="border-primary border    rounded-md shadow-sm mt-1 block w-full bg-transparent h-[46px] px-2 focus:ring-0 active:outline-none focus:outline-none focus:border-primary" defaultValue={data.value} />
              </div>
              {errors.value && <span className="text-primary text-xs">{errors.value}</span>}
            </div>
            <div className='mb-2 last:mb-0'>
              <label htmlFor="icon" className="block font-medium text-sm  font-CenturyGothic">Icon</label>
              <div className="flex flex-col items-start">
                <input name="icon" type="file" id="icon" classID="icon" className="border-primary border    rounded-md shadow-sm mt-1 block w-full bg-transparent h-[46px] px-2 focus:ring-primary active:outline-none focus:outline-none focus:border-primary" accept="image/JPEG,images/png,images/jpg,images/svg,image/x-png,image/gif,image/jpeg,image/svg+xml"
                  onChange={(e) => {
                    if (e.target.files) {
                      setData("icon", e.target.files[0])
                      const file = Array.from(e.target.files).map(file => URL.createObjectURL(file))
                      setSelectedURLImage(file[0])
                    }
                  }} />
                <div className="w-full result flex justify-center items-start">
                  {renderPhoto(selectedURLImage)}
                </div>
                {progress && (
                  <progress value={progress.percentage} max="100">
                    {progress.percentage}%
                  </progress>
                )}
              </div>
              {errors.icon && <span className="text-primary text-xs">{errors.icon}</span>}
            </div>
            <div className='mb-2 last:mb-0'>
              <Button className="hover:opacity-80" processing={processing}>
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
CreatePage.layout = page => <Authenticated props={page.props} children={page} />


