import Guest from '@/Layouts/Guest';
import MyAccount from '@/Layouts/MyAccount';
import React from 'react';
export default function AccountPage() {
  return (
    <></>
  );
}

AccountPage.layout = page => <Guest children={<MyAccount children={page} />} props={page.props} />
