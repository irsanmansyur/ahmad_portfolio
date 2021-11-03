import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Inputlogin from '@/Components/InputLogin';
import AuthLayout from '@/Layouts/AuthLayout';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    post(route('login'));
  };

  return (
    <>
      <Head title="Log in" />

      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
      <h2 className="text-primary text-lg font-bold my-3">Login</h2>
      <form onSubmit={submit}>
        <Inputlogin label="Email" name="email" type="email" value={data.email} isFocused={true} handleChange={onHandleChange} error={errors.email} />
        <Inputlogin label="Password" name="password" type="password" value={data.password} handleChange={onHandleChange} error={errors.password} />
        <div className="block mt-4 flex justify-between">
          <label className="flex items-center">
            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
            <span className="ml-2 text-sm text-primary">Remember me</span>
          </label>
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className="underline text-sm text-primary hover:text-gray-100"
            >
              Forgot your password?
            </Link>
          )}
        </div>
        <div className="flex items-center justify-end mt-4">
          <Link
            href={route('register')}
            className="underline text-sm text-primary hover:text-gray-100"
          >
            Don'nt have Account?
          </Link>

          <Button className="ml-4" processing={processing}>
            Log in
          </Button>
        </div>
      </form>
    </>
  );
}

Login.layout = page => (
  <Guest props={page.props}>
    <AuthLayout children={page} />
  </Guest>
)
