import React, { useEffect, useRef } from 'react';

const Inputlogin = ({ isFocused, name = '', type = 'text', label = '', error = false, handleChange, value = '' }) => {
  const input = useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return (
    <div className='mb-2 last:mb-0'>
      <label htmlFor={name} className="block font-medium text-sm text-white font-CenturyGothic">{label}</label>
      <div className="flex flex-col items-start">
        <input ref={input} type={type} name={name} onChange={handleChange} className="border-primary border text-white   rounded-md shadow-sm mt-1 block w-full bg-transparent h-[46px] px-2 focus:ring-0 active:outline-none focus:outline-none focus:border-primary" defaultValue={value} />
      </div>
      {error && <span className="text-primary text-xs">{error}</span>}
    </div>

  );
}

export default Inputlogin;
