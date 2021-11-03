import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import LabelPackage from '@/Components/LabelPackage';

export default function MyAccount({ children }) {
  return (
    <div className="w-full">
      <div className="head">
        <h2><LabelPackage value="My Account" className="text-primary" /></h2>
      </div>
      <div className="body">
        <div className="flex">
          <div className="w-2/5 mr-3">
            <LinkMyAccount children="Dashboard" />
            <LinkMyAccount name="user.orders" children="Orders" />
            <LinkMyAccount name="user.downloads" children="Downloads" />
            <div className="font-bold text-[20px] border-b border-white py-[20px]">
              <Link href={route("logout")} method="post" as="button">Logout</Link>
            </div>
          </div>
          <div className="w-3/5 pl-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
const LinkMyAccount = ({ name = false, children, className }) => {
  let url = "#";
  if (typeof name == "string")
    url = route(name)
  else if (Array.isArray(name))
    url = route(name[0], name[1])
  return (
    <div className={"font-bold text-[20px] border-b  py-[20px]" + (name && route().current(name) ? " border-primary text-primary" : ' border-white')}>
      <Link href={url} className={"" + className}>{children}</Link>
    </div>
  )
}

