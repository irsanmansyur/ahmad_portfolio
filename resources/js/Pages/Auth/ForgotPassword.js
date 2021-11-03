import React from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import AuthLayout from '@/Layouts/AuthLayout';

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('password.email'));
  };

  return (
    <>
      <Head title="Forgot Password" />

      <div className="mb-4 text-sm text-white leading-normal">
        Forgot your password? No problem. Just let us know your email address and we will email you a password
        reset link that will allow you to choose a new one.
      </div>

      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

      <ValidationErrors errors={errors} />

      <form onSubmit={submit}>
        <Input
          type="text"
          name="email"
          value={data.email}
          className="mt-1 block w-full"
          isFocused={true}
          className="focus:ring-primary bg-transparent border border-primary focus:outline-none focus:ring-primary w-full"
          handleChange={onHandleChange}
        />

        <div className="flex items-center justify-end mt-4">
          <Button className="ml-4 bg-primary font-bold" processing={processing}>
            Email Password Reset Link
          </Button>
        </div>
      </form>
    </>
  );
}
ForgotPassword.layout = page => (
  <Guest props={page.props}>
    <AuthLayout children={page} />
  </Guest>
)