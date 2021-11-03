import Popup from '@/Components/Popup/Modal';
import Guest from '@/Layouts/Guest';
import { useForm } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

export default function CartPage({ carts: crts }) {
  const [carts, setCarts] = useState(crts);
  useEffect(() => {
    setCarts(crts)
  }, [crts]);
  return (
    <div className="w-full">
      <div className="head border-b"><h3 className="text-primary text-[32px] font-bold">Products</h3></div>
      <div className="body my-[32px]">
        <div className="list">
          {carts.map((cart, i) => {
            const product = cart.product
            return (<div key={i} className="flex justify-between text-[32px] pb-[32px] mb-[44px] border-b">
              <div className="inline-flex">
                <div className="image"><img src="http://127.0.0.1:8001/image/overlay/default.png" className="w-[333px] h-[187px] rounded-t-lg" /></div>
                <div className="text-primary ml-[50px]">{product.name}</div>
              </div>
              <div className="flex justify-between min-w-[292px] items-start">
                <div className="price">
                  {
                    product.type == "open_pay" ?
                      <NumberFormat placeholder="Pay what you want" defaultValue={product.harga} className="text-center focus:outline-none rounded-full px-3 py-1 border border-primary text-[20px] focus:border-primary bg-transparent text-white font-bold" thousandSeparator={true} prefix={'$'}
                        onValueChange={(values) => {
                          const { formattedValue /* $2,223 */, value /*2223*/ } = values;
                          let newCarts = [...carts];
                          cart.product.harga = parseInt(value == '' ? 0 : value);
                          newCarts[i] = cart;
                          console.log(newCarts);
                          setCarts(newCarts)
                        }} /> : <span className="text-primary"><NumberFormat value={product.harga} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                  }
                </div>
                <DeleteCart cart={cart} />
              </div>
            </div>)
          })}

        </div>
        <div className="mt-4">
          <div className="text-[32px] font-bold">Pay what you want</div>
          <p className="text-[20px]">ascotlogo99 we are now expanded our services to everything a streamer whould need. As in time passed we decided to change with a brand new name SamGFX99. Our Goal is simple make a high quality stuf f</p>
          <div className="text-right font-bold text-[32px] border-b pb-[20px]">
            <div>SUBTOTAL</div>
            <div><NumberFormat value={carts.reduce((b, cart) => b += parseInt(cart.product.harga), 0)} displayType={'text'} thousandSeparator={true} />$</div>
          </div>
          <div className="action text-[32px] font-bold text-right mt-4">
            <button className="bg-sky-900 rounded-full px-3 py-1 inline-flex items-center hover:opacity-80">Keep Shopping</button>
            <button className="bg-primary rounded-full px-3 py-1 ml-3 inline-flex items-center hover:opacity-80">Continue to Checkout</button>
          </div>
        </div>
      </div>
    </div >

  );
}
const DeleteCart = ({ cart }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const { delete: destroy } = useForm();
  const onDelete = event => {
    event.preventDefault();
    destroy(route("cart.destroy", cart.id), {
      preserveScroll: true,
      onSuccess: () => setOpenDelete(false),
    });
  }
  return (<>
    {!openDelete ? <button onClick={e => setOpenDelete(true)} className="action-delete mt-[16px]">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
    </button> :
      <button className="ml-2"><svg className="animate-spin h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg></button>
    }
    <Popup open={openDelete} callBack={e => setOpenDelete(false)} className="w-[400px]">
      <div className="p-3 bg-red-400 text-white rounded-lg text-sm">Apakah Anda yakin ingin manghapus.?
        <button onClick={onDelete} className="rounded-lg ml-3 bg-red-700 text-white py-1 px-3 hover:opacity-80">Yakin</button></div>
    </Popup>
  </>)
}

CartPage.layout = page => <Guest children={page} props={page.props} />