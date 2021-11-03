import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react';

export default function LinkNavbar({ name, children, start }) {
  let url = "#";
  if (typeof name == "string")
    url = route(name)
  else if (Array.isArray(name))
    url = route(name[0], name[1])
  return (
    <Link href={url} className={"mr-2 hover:text-white hover:rounded-md hover:bg-primary hover:shadow-md py-1 px-2" + (name && route().current(name) ? " sm:border-b  border-primary text-primary" : '')}>{children}</Link>
  );
}

