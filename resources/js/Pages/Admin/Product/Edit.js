import Button from '@/Components/Button';
import Authenticated from '@/Layouts/Authenticated';
import { useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import Select from 'react-select';

export default function EditPage({ product, categories }) {
  const [selectedURLImage, setSelectedURLImage] = useState(product.data.urls);
  const { data, setData, post, processing, errors, reset, progress } = useForm({
    _method: 'put', name: product.data.name, description: product.data.description, harga: product.data.harga, image: product.data.images, categories: product.data.categories.map(c => c.id)
  });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const renderPhoto = (source) => {
    return source.map((photo, i) => {
      return <img src={photo} key={i} className="h-[40px] w-[40px] rounded-lg mr-2 last:mr-0" />;
    })
  }
  const submit = (e) => {
    e.preventDefault();
    post(route('admin.product.update', product.data.id));
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
              <label htmlFor="name" className="block font-medium text-sm  font-CenturyGothic">Description</label>
              <div className="flex flex-col items-start">
                <textarea name="description" onChange={onHandleChange} className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-primary border-primary border focus:border-primary" rows="4" defaultValue={data.description} />
              </div>
              {errors.description && <span className="text-primary text-xs">{errors.description}</span>}
            </div>
            <div className='mb-2 last:mb-0'>
              <label className="block text-left ">
                <span className="text-gray-700">Category</span>
                <Select
                  defaultValue={product.data.categories.map(category => {
                    return { value: category.id, label: category.name }
                  })}
                  isMulti
                  name="categories[]"
                  options={categories.map(category => {
                    return { value: category.id, label: category.name }
                  })}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={val => {
                    setData("categories", val.map(v => v.value))
                  }}
                />
              </label>
              {errors.categories && <span className="text-primary text-xs">{errors.categories}</span>}

            </div>

            <div className='mb-2 last:mb-0'>
              <label htmlFor="name" className="block font-medium text-sm  font-CenturyGothic">Harga</label>
              <div className="flex flex-col items-start">
                <NumberFormat name="harga" placeholder="$10" className="border-primary border    rounded-md shadow-sm mt-1 block w-full bg-transparent h-[46px] px-2 focus:ring-primary active:outline-none focus:outline-none focus:border-primary" thousandSeparator={true} prefix={'$'} defaultValue={data.harga}
                  onValueChange={(values) => {
                    const { formattedValue /* $2,223 */, value /*2223*/ } = values;
                    setData("harga", value)
                  }} />
              </div>
              {errors.harga && <span className="text-primary text-xs">{errors.harga}</span>}
            </div>
            <div className='mb-2 last:mb-0'>
              <label htmlFor="image" className="block font-medium text-sm  font-CenturyGothic">Images</label>
              <div className="flex flex-col items-start">
                <input name="image" type="file" id="image" classID="image" className="border-primary border    rounded-md shadow-sm mt-1 block w-full bg-transparent h-[46px] px-2 focus:ring-primary active:outline-none focus:outline-none focus:border-primary" multiple accept="image/JPEG,images/png,images/jpg"
                  onChange={(e) => {
                    if (e.target.files) {
                      setData("image", e.target.files)
                      const fileArray = Array.from(e.target.files).map(file => URL.createObjectURL(file))
                      setSelectedURLImage(fileArray)
                      Array.from(e.target.files).map(file => URL.revokeObjectURL(file));
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
              {errors.image && <span className="text-primary text-xs">{errors.image}</span>}
            </div>
            <div className='mb-2 last:mb-0'>
              <Button className="hover:opacity-80" processing={processing}>
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
EditPage.layout = page => <Authenticated props={page.props} children={page} />


