import React, { useEffect, useState } from 'react';

export default function ImagesProduk({ images: img = [], length = 1 }) {
  const [images, setImages] = useState(img);
  const [openIndex, setOpenIndex] = useState(0);
  const [next, setNext] = useState((images.length > length ? length : images.length) - 1);
  const [prev, setPrev] = useState(0);
  const [origin, setOrigin] = useState("origin-left");
  useEffect(() => {
    let selected = images.length > length ? length : images.length;
    setOpenIndex(selected >= images.length ? 0 : Math.ceil(selected / 2))
  }, [images]);

  const handlePrev = () => {
    setOrigin("origin-right")
    if (prev == 0) {
      let beforeArr = images.slice(-1);
      let nextArr = images.slice(0, -1)
      setImages([...beforeArr, ...nextArr].reverse())
      setPrev(images.length - length)
      setNext(images.length - 1)
    } else {
      setPrev(prev - 1)
      setNext(next - 1)
    }
  }
  const handleNext = () => {
    setOrigin("origin-left")
    if (images.length == next + 1) {
      let beforeArr = images.slice(-(length - 1))
      let nextArr = images.slice(0, -(length - 1))
      setImages([...beforeArr, ...nextArr])
      setNext(length - 1)
      setPrev(0)
    } else {
      setNext(next + 1)
      setPrev(prev + 1)
    }
  }
  return (
    <>
      <div className="slider">
        <div className="image">
          {images.length > openIndex &&
            <img src={images[openIndex].url} className="w-full h-[450px]" />}
        </div>
        <div className="px-[34px] mt-[46px] relative">
          <div className="flex w-full justify-center items-start">
            {
              images.map((image, i) => {
                let status = "opacity-0 w-0 overflow-hidden";
                if (prev <= i && next >= i)
                  status = origin + " w-1/5 opacity-100 hover:scale-105 mx-1 h-[100px] "
                return (
                  <div key={i} className={"transition duration-500 ease-in-out transform cursor-pointer " + status + (openIndex == i ? " border-2 border-primary rounded-lg overflow-hidden p-1 bg-white" : '')} onClick={e => setOpenIndex(i)}>
                    <img src={image.url} className="w-full h-full" />
                  </div>)
              })
            }
          </div>
          {images.length > length &&
            <button onClick={handlePrev} htmlFor="carousel-1" className="border-2 border-primary w-[30px] h-[30px] absolute cursor-pointer flex items-center justify-center text-3xl font-bold text-primary rounded-full e hover:bg-white leading-tight text-center z-10 inset-y-0 left-0 my-auto"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
            </svg></button>}
          {images.length > length &&
            <label htmlFor="carousel-1" onClick={handleNext} className="border-2 border-primary w-[30px] h-[30px] absolute cursor-pointer flex items-center justify-center text-3xl font-bold text-primary rounded-full e hover:bg-white leading-tight text-center z-10 inset-y-0 right-0 my-auto"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg></label>}
        </div>
      </div>
    </>
  );
}

