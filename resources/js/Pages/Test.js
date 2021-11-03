import React, { useState } from 'react';

export default function TestPage({ data = [1, 2, 3, 4, 5, 6, 7, 8], length = 3 }) {
  const [dataArray, setDataArray] = useState(data);
  const lengthView = data.length > length ? length : data.length;
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(lengthView - 1);
  const [origin, setOrigin] = useState("origin-left");
  const handlePrev = () => {
    setOrigin("origin-right")
    if (prev == 0) {
      let beforeArr = dataArray.slice(-1);
      let nextArr = dataArray.slice(0, -1)
      setDataArray([...beforeArr, ...nextArr].reverse())
      setPrev(dataArray.length - lengthView)
      setNext(dataArray.length - 1)
    } else {
      setPrev(prev - 1)
      setNext(next - 1)
    }
  }
  const handleNext = () => {
    setOrigin("origin-left")
    if (dataArray.length == next + 1) {
      let beforeArr = dataArray.slice(-(lengthView - 1))
      let nextArr = dataArray.slice(0, -(lengthView - 1))
      setDataArray([...beforeArr, ...nextArr])
      setNext(lengthView - 1)
      setPrev(0)
    } else {
      setNext(next + 1)
      setPrev(prev + 1)
    }
  }
  return (
    <div className='min-h-screen w-full flex items-center justify-center flex-wrap'>
      <div className="mx-auto flex items-center justify-center  h-[200px]">
        {
          dataArray.map((v, i) => {
            let status = "bg-red-500 opacity-0 w-0";
            if (prev <= i && next >= i)
              status = "bg-sky-500  border px-2 w-auto "
            return (<span key={i} className={origin + " transition h-full  flex justify-center items-center text-white duration-500 ease-in-out transform " + status}>{v}</span>)
          })
        }
      </div>
      <div className="flex justify-between w-full">
        <button className="bg-sky-500 rounded-full p-5 text-white" onClick={handlePrev}>P</button>
        <button className="bg-red-500 rounded-full p-5 text-white" onClick={handleNext}>N</button>
      </div>
    </div>
  );
}

