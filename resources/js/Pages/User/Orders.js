import Tooltip from '@/Components/Tooltip';
import Guest from '@/Layouts/Guest';
import MyAccount from '@/Layouts/MyAccount';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import LabelPackage from "../../Components/LabelPackage"
export default function OrdersPage() {
  return (<>
    <div className="border border-primary p-3 mb-3 rounded-lg">
      No Downloads has been made yet
    </div>
    <Tooltip title="See Products">
      <Link as="button" href={route("store")} className="bg-primary text-black py-2 px-3 rounded-lg shadow-lg">Browse Products</Link>
    </Tooltip>
  </>);
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
OrdersPage.layout = page => <Guest children={<MyAccount children={page} />} props={page.props} />
