import UserAtom from '@/Atom/UserAtom';
import LinkIconlogin from '@/Components/Auth/LinkIconLogin';
import LinkIconCart from '@/Components/Cart/LinkIconCart';
import LinkNavbar from '@/Components/LinkNavbar';
import { Link } from '@inertiajs/inertia-react';

import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const Navbar = ({ auth }) => {
  const [user, setUser] = useRecoilState(UserAtom)
  useEffect(() => {
    setUser(auth.user)
    return () => {
      setUser({})
    };
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black border-b border-primary w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:justify-between flex-col sm:flex-row py-3 sm:items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/"><h1 className="title-app text-[22px] sm:text-[32px] text-primary hover:opacity-80">SAMGFX99</h1></Link>
          </div>
          <div className={"justify-between sm:items-center flex-col sm:flex-row sm:mt-0 mt-2" + (open ? " flex" : " hidden sm:flex")}>
            <div className="sm:mx-2 relative bg-white rounded-md px-2 inline-flex justify-between items-center py-1 mb-2 sm:mb-0">
              <input type="text" className="bg-white text-black sm:min-w-[320px] py-1 border-none focus:ring-0 active:outline-none focus:outline-none z-0" placeholder="Search for overlay,emotes and more" />
              <button className="ml-2 z-10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
            <div className="flex sm:flex-row flex-col sm:mx-2">
              <LinkNavbar name={"store"} children={"Store"} />
              <LinkNavbar children={"Custom"} />
              <LinkNavbar name={"portfolio"} children={"Portfolio"} />
              <LinkNavbar name={"about"} children={"About"} />
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center mt-2 sm:mt-0">
            <LinkIconlogin user={auth.user} />
            <LinkIconCart />
          </div>
        </div>
      </div>
      <div className="sm:hidden text-white absolute top-3 right-[10px] z-10 font-bold flex items-center" >
        <LinkIconlogin user={auth.user} /><button className="text-white flex items-center p-1 rounded-sm mx-1 rounded-sm hover:bg-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </button>
        <button onClick={e => setOpen(!open)} className="text-white flex items-center p-1 rounded-sm rounded-sm">
          {!open ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
