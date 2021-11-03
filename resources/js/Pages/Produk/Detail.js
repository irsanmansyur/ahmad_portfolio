import UserAtom from '@/Atom/UserAtom';
import ButtonRounded from '@/Components/ButtonRounded';
import ItemHome from '@/Components/Card/ItemHome';
import ImagesProduk from '@/Components/Produk/ImagesProduk';
import Guest from '@/Layouts/Guest';
import { GetFetch, PostFetch } from '@/Utils/Fetch';
import { Link, useForm } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';

export default function DetailPage({ product: prd, length = 5, recentProducts }) {
  const [product, setProduct] = useState(prd);
  return (
    <>
      <div className="flex">
        <div className="w-7/12">
          <ImagesProduk images={product.images} length={5} />
        </div>
        <div className="w-5/12 sm:pl-4 flex justify-between flex-col">
          <div>
            <div className="head">
              <h2 className="title font-bold text-[32px] text-primary">{product.name}</h2>
            </div>
            <div className="body">
              <p className="text-[15px]">{product.description}</p>
            </div>
          </div>
          <div className="mt-[83px] text-center">
            <button className="text-[19px] font-bold py-2 px-3 rounded-full hover:bg-primary hover:text-white inline-flex items-center border border-primary text-primary hover:opacity-80">
              <span className="">Complete Pack</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg></span>
            </button>
            <p className="text-[15px] font-bold mt-[20px]">Start as Mascot Logo Designer and known as a brand name mascotlogo99 we are now expanded our services to everything a streamer whould need. As in time passed we decided to change</p>
          </div>
          <div>
            <div className="text-center">
              {
                !product.keranjang_exist ?
                  <ButtonAddToCart callback={setProduct} product={product} /> :
                  <ButtonShowCart product={product} />
              }

              <a href="#" className="text-primary font-bold text-[20px] mt-2">Proceed Payment</a>
            </div>
            <div>
              <a href="#" className="text-primary font-bold text-[20px]">Work With</a>
              <p className="items-center space-x-3">
                <button>
                  <svg id="Twitch" xmlns="http://www.w3.org/2000/svg" width="25.239" height="26.395" viewBox="0 0 25.239 26.395">
                    <path id="Path_4" data-name="Path 4" d="M1129.761-1175.922l-4.016,4.017h-6.311l-3.439,3.439v-3.439h-5.167v-16.641h18.934v12.624" transform="translate(-1106.814 1190.839)" fill="#fff" />
                    <path id="Icon_simple-twitch" data-name="Icon simple-twitch" d="M1107.074-1191.674l-1.72,4.591v18.358h6.306v3.446h3.446l3.439-3.446h5.163l6.885-6.883v-16.067Zm2.293,2.293H1128.3v12.624l-4.016,4.016h-6.311l-3.439,3.439v-3.439h-5.167Zm6.313,11.479h2.293v-6.885h-2.293Zm6.306,0h2.293v-6.885h-2.291Z" transform="translate(-1105.354 1191.674)" fill="#9146ff" />
                  </svg>

                </button>
                <button>
                  <svg id="YT" xmlns="http://www.w3.org/2000/svg" width="31.814" height="22.371" viewBox="0 0 31.814 22.371">
                    <path id="Icon_awesome-youtube" data-name="Icon awesome-youtube" d="M1202.577-1185.429a4,4,0,0,0-2.814-2.832c-2.482-.67-12.43-.67-12.43-.67s-9.951,0-12.431.67a4,4,0,0,0-2.818,2.832,42.071,42.071,0,0,0-.663,7.708,42.047,42.047,0,0,0,.663,7.707,3.939,3.939,0,0,0,2.813,2.786c2.482.67,12.431.67,12.431.67s9.951,0,12.431-.67a3.939,3.939,0,0,0,2.813-2.786,42.055,42.055,0,0,0,.663-7.707,42.05,42.05,0,0,0-.663-7.708Z" transform="translate(-1171.421 1188.93)" fill="red" />
                    <path id="Icon_awesome-youtube-2" data-name="Icon awesome-youtube" d="M1188.681-1170.631v-9.463l8.317,4.732Z" transform="translate(-1176.026 1186.573)" fill="#fff" />
                  </svg>

                </button>
                <button><svg xmlns="http://www.w3.org/2000/svg" width="30.997" height="30.779" viewBox="0 0 35.997 35.779">
                  <path id="Icon_simple-facebook" data-name="Icon simple-facebook" d="M36,18a18,18,0,1,0-20.811,17.78V23.2h-4.57V18h4.57V14.033c0-4.511,2.687-7,6.8-7a27.68,27.68,0,0,1,4.029.352v4.429H23.744a2.6,2.6,0,0,0-2.933,2.811V18H25.8L25,23.2H20.811V35.779A18,18,0,0,0,36,18Z" fill="#fff" />
                </svg>

                </button>
                <button><svg xmlns="http://www.w3.org/2000/svg" width="30.097" height="30.097" viewBox="0 0 30.097 30.097">
                  <g id="obsstudio" transform="translate(0)">
                    <g id="Group_37" data-name="Group 37" transform="translate(0)">
                      <circle id="Ellipse_5" data-name="Ellipse 5" cx="14.353" cy="14.353" r="14.353" transform="translate(0.695 0.696)" fill="#302e31" />
                      <path id="Path_33" data-name="Path 33" d="M-1164.9-1212.3a15.066,15.066,0,0,1-15.049-15.049A15.066,15.066,0,0,1-1164.9-1242.4a15.066,15.066,0,0,1,15.049,15.049A15.066,15.066,0,0,1-1164.9-1212.3Zm0-28.706a13.673,13.673,0,0,0-13.658,13.657,13.673,13.673,0,0,0,13.658,13.657,13.674,13.674,0,0,0,13.658-13.657A13.673,13.673,0,0,0-1164.9-1241.008Z" transform="translate(1179.944 1242.399)" fill="#fff" />
                    </g>
                    <path id="Path_34" data-name="Path 34" d="M-1158.449-1229.674a7.329,7.329,0,0,1,3.825-5.012c-.338.343-.746.605-1.058.979a6.106,6.106,0,0,0-1.5,5.212,6.13,6.13,0,0,0,5.934,5.052,6.1,6.1,0,0,0,5.453-3.1,7.552,7.552,0,0,1,5.894,3.2,6.572,6.572,0,0,1,1.243,3.4,6.293,6.293,0,0,0-2.979-3.881,6.133,6.133,0,0,0-4.731-.533,6.1,6.1,0,0,0-4.13,4.13,6.386,6.386,0,0,0,.473,4.731,7.339,7.339,0,0,1-4.932,3.456,7.59,7.59,0,0,1-4.651-.581,6.526,6.526,0,0,0,4-.014,6.161,6.161,0,0,0,3.793-3.68,6.166,6.166,0,0,0-.742-5.693,6.171,6.171,0,0,0-3.764-2.47c-.477-.085-.958-.123-1.44-.167a7.574,7.574,0,0,1-.661-5.011Z" transform="translate(1166.201 1237.186)" fill="#c4c2c4" />
                  </g>
                </svg>

                </button>
                <button><img src="/image/Streamelements.png" alt="" /></button>
                <button><img src="/image/ae icon.png" alt="" /></button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[20px] font-bold mt-[75px]">
        <h2 className="text-primary text-[30px] mb-[23px]">Got Questions? Need help to customize?<br />We get you covered!</h2>
        <p>Originaly Start as Mascot Logo Designer and known as a brand name mascotlogo99 we are now expanded our services to everything a streamer whould need. As in time passed we decided to change with a brand new name SamGFX99. Our Goal is simple make a high quality stuf for streamers</p>
        <p className="justify-center space-x-3 mt-6">
          <button><svg xmlns="http://www.w3.org/2000/svg" width="38.048" height="29.809" viewBox="0 0 38.048 29.809">
            <g id="email" transform="translate(1355.76 348.847)">
              <path id="Path_42" data-name="Path 42" d="M-1336.736-336.5l-16.686-11.67a4.765,4.765,0,0,1,2.458-.678h28.456a4.763,4.763,0,0,1,2.458.678Z" fill="#00c2ff" />
              <path id="Path_43" data-name="Path 43" d="M-1317.712-343.98v20.144a4.8,4.8,0,0,1-4.8,4.8h-28.456a4.8,4.8,0,0,1-4.8-4.8V-343.98l19.024,13.3Z" fill="#00c2ff" />
            </g>
          </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="31.776" height="31.583" viewBox="0 0 31.776 31.583">
              <path id="Path_41" data-name="Path 41" d="M-1267.421-333.846a15.888,15.888,0,0,0-15.888-15.888,15.888,15.888,0,0,0-15.888,15.888,15.892,15.892,0,0,0,13.406,15.7v-11.1h-4.034v-4.593h4.034v-3.5c0-3.982,2.372-6.182,6-6.182a24.448,24.448,0,0,1,3.556.31v3.91h-2a2.3,2.3,0,0,0-2.589,2.482v2.98h4.406l-.7,4.593h-3.7v11.1A15.892,15.892,0,0,0-1267.421-333.846Z" transform="translate(1299.197 349.734)" fill="#00c2ff" />
            </svg>

          </button>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="31.518" height="31.51" viewBox="0 0 31.518 31.51">
            <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z" transform="translate(0.005 -2.238)" fill="#fff" />
          </svg>
          </button>
        </p>
      </div>
      <div className="mt-[72px]">
        <h2 className="text-primary font-bold text-[30px] text-center">Recent Product</h2>
        <div className="flex justify-center mt-8">
          {recentProducts.map((v, i) => <ItemHome key={i} item={v} />)}
        </div>
      </div>
    </>
  );
}
const ButtonAddToCart = ({ product, callback }) => {
  const user = useRecoilValue(UserAtom)
  const { get } = useForm()
  const [loading, setLoading] = useState(false);
  const addToCart = event => {
    event.preventDefault()
    if (!user) {
      return Swal.fire({
        icon: 'error',
        title: 'Anda Belum Login',
        confirmButtonText: 'Login',
        confirmButtonColor: '#00C2FF',
      }).then((result) => {
        if (result.isConfirmed) {
          return get(route("login"))
        } else if (result.isDenied) {
          setLoading(false)
        }
      })
    }
    setLoading(true)
    PostFetch({
      url: route("cart.add"),
      data: { user_id: user.id, product_id: product.id },
      onSuccess: res => {
        product.keranjang_exist = res;
        callback({ ...product })
        Swal.fire({
          title: 'Berhasil Di Tambahkan ke keranjang',
          confirmButtonColor: '#00C2FF',
          buttons: {
            confirm: { text: 'Ok', className: 'sweet-warning' },
          },
        })
      },
      onFinaly: res => {
        setLoading(false)
      }
    })
  }

  return (<> {!loading ? <form onSubmit={addToCart}>
    <ButtonRounded type="submit" value="Add To Cart" /> <br />
  </form> : ''}</>)
}
const ButtonShowCart = ({ product }) => {
  const [loading, setLoading] = useState(false);
  return (<> {!loading ? <> <Link href={route("cart")} className="py-1 bg-sky-500 text-white hover:opacity-80  rounded-full px-3 font-bold text-base sm:text-[32px] sm:leading-[39px] mt-2">Show Cart</Link><br /></> : ''}</>)
}
DetailPage.layout = page => <Guest children={page} props={page.props} />

