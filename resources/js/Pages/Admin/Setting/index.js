import Button from '@/Components/Button';
import Popup from '@/Components/Popup/Modal';
import Authenticated from '@/Layouts/Authenticated';
import { Link, useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react';

export default function SettingPage({ setting }) {
  const [selectedURLImage, setSelectedURLImage] = useState(setting.url_logo);
  const { data, setData, post, processing, errors, reset, progress } = useForm({
    about_app: setting.about_app, story_app: setting.story_app, logo_app: setting.logo_app, name_app: setting.name_app
  });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const renderPhoto = (source) => {
    return <img src={source} className="h-[40px] w-[40px] rounded-lg mr-2 last:mr-0" />;
  }
  const submit = (e) => {
    e.preventDefault();
    post(route('admin.setting.store'));
  };
  return (
    <>
      <div id="payment-head" className="relative bg-sky-500 my-4 -ml-4 max-w-[90%] md:max-w-[75%] py-3 rounded-full rounded-bl-none px-[16px] shadow-md">
        <h1 className="title font-bold text-xl ml-3 text-white font-serif">Settings</h1>
        <div className="w-[16px] h-[15px] bg-sky-500 absolute bottom-[-15px] left-0" />
        <div className="w-[16px] h-[32px] bg-sky-700 opacity-100 absolute bottom-[-32px] left-0 rounded-l-full shadow-md border-r border-gray-100" />
      </div>
      <div id="box-list-transaksi" className="p-3">
        <form onSubmit={submit}>
          <div className='mb-2 last:mb-0'>
            <label htmlFor="about_app" className="block font-medium text-sm  font-CenturyGothic">About</label>
            <div className="flex flex-col items-start">
              <textarea name="about_app" id="about_app" onChange={onHandleChange} className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-primary border-primary border focus:border-primary" rows="4" defaultValue={data.about_app} />
            </div>
            {errors.about_app && <span className="text-primary text-xs">{errors.about_app}</span>}
          </div>
          <div className='mb-2 last:mb-0'>
            <label htmlFor="story_app" className="block font-medium text-sm  font-CenturyGothic">Story</label>
            <div className="flex flex-col items-start">
              <textarea name="story_app" id="story_app" onChange={onHandleChange} className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-primary border-primary border focus:border-primary" rows="4" defaultValue={data.story_app} />
            </div>
            {errors.story_app && <span className="text-primary text-xs">{errors.story_app}</span>}
          </div>
          <div className='mb-2 last:mb-0'>
            <label htmlFor="name_app" className="block font-medium text-sm  font-CenturyGothic">Name App</label>
            <div className="flex flex-col items-start">
              <input type="text" name="name_app" id="name_app" onChange={onHandleChange} className="border-primary border    rounded-md shadow-sm mt-1 block w-full bg-transparent h-[46px] px-2 focus:ring-0 active:outline-none focus:outline-none focus:border-primary" defaultValue={data.name_app} />
            </div>
            {errors.name_app && <span className="text-primary text-xs">{errors.name_app}</span>}
          </div>
          <div className='mb-2 last:mb-0'>
            <label htmlFor="logo_app" className="block font-medium text-sm  font-CenturyGothic">Log App</label>
            <div className="flex flex-col items-start">
              <input name="logo_app" type="file" id="logo_app" classID="logo_app" className="border-primary border    rounded-md shadow-sm mt-1 block w-full bg-transparent h-[46px] px-2 focus:ring-primary active:outline-none focus:outline-none focus:border-primary" accept="image/JPEG,images/png,images/jpg,images/svg,image/x-png,image/gif,image/jpeg,image/svg+xml"
                onChange={(e) => {
                  if (e.target.files) {
                    setData("logo_app", e.target.files[0])
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
            {errors.logo_app && <span className="text-primary text-xs">{errors.logo_app}</span>}
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

SettingPage.layout = page => <Authenticated props={page.props} children={page} />



