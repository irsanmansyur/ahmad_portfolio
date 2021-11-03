import Tooltip from '@/Components/Tooltip';
import Guest from '@/Layouts/Guest';
import MyAccount from '@/Layouts/MyAccount';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';
export default function DownloadsPage() {
  return (<>
    <div className="border border-primary p-3 mb-3 rounded-lg">
      No Downloads has been made yet
    </div>
    <Tooltip title="See Products">
      <Link as="button" href={route("store")} className="bg-primary text-black py-2 px-3 rounded-lg shadow-lg">Browse Products</Link>
    </Tooltip>
  </>);
}
DownloadsPage.layout = page => <Guest children={<MyAccount children={page} />} props={page.props} />
