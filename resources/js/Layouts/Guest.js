import React from 'react';
import Navbar from './Navbar';
import { RecoilRoot } from 'recoil';

export default function Guest({ children, props }) {

  return (
    <RecoilRoot>
      <div className="bg-[#04131E] text-white min-h-screen flex flex-col justify-between font-CenturyGothic">
        <div>
          <Navbar auth={props.auth} />
          <div className="max-w-7xl mx-auto flex flex-col sm:justify-center items-center pt-6 sm:pt-0 my-[50px] px-4 sm:px-6 ">
            {children}
          </div>
        </div>

        <section className="footer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row text-white mb-20">
            <div className="w-full sm:w-1/2 pr-2">
              <div>
                <div className="title font-bold text-[20px] font-CenturyGothic">About SamGFX99</div>
                <div>Originaly Start as Mascot Logo Designer and known as a brand name mascotlogo99 we are now expanded our services to everything a streamer whould need. As in time passed we decided to change with a brand new name SamGFX99. Our Goal is simple make a high quality stuf for streamers.</div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:mt-0 mt-5 sm:pl-2">
              <div className="flex w-full justify-between">
                <div>
                  <div className="title font-bold text-[20px] font-CenturyGothic">Custom Design</div>
                  <div>
                    <ul>
                      <li>Animated</li>
                      <li>Emotes</li>
                      <li>Logo Design</li>
                      <li>Animated Intro</li>
                    </ul>
                  </div>
                </div>
                <div className="ml-2">
                  <div className="title font-bold text-[20px] font-CenturyGothic">Get In Tocuh</div>
                  <div>
                    <div className="itemSosmed flex items-center mb-2 last:mb-0">
                      <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 35.997 35.779">
                        <path id="Icon_simple-facebook" data-name="Icon simple-facebook" d="M36,18a18,18,0,1,0-20.811,17.78V23.2h-4.57V18h4.57V14.033c0-4.511,2.687-7,6.8-7a27.68,27.68,0,0,1,4.029.352v4.429H23.744a2.6,2.6,0,0,0-2.933,2.811V18H25.8L25,23.2H20.811V35.779A18,18,0,0,0,36,18Z" fill="#fff" />
                      </svg>
                      </span>
                      <span className="ml-2">Syamsul Rahmat</span>
                    </div>
                    <div className="itemSosmed flex items-center mb-2 last:mb-0">
                      <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 31.518 31.51">
                        <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z" transform="translate(0.005 -2.238)" fill="#fff" />
                      </svg>
                      </span>
                      <span className="ml-2">SamGFX99</span>
                    </div>
                    <div className="itemSosmed flex items-center mb-2 last:mb-0">
                      <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 30.094 31.5">
                        <path id="Icon_awesome-twitch" data-name="Icon awesome-twitch" d="M2.82,2.25.7,7.657v22.1H8.227V33.75h4.233l3.994-3.994H22.57L30.8,21.53V2.25ZM27.977,20.116l-4.7,4.7H15.75l-3.994,3.994V24.82H5.407V5.07h22.57V20.116Zm-4.7-9.64V18.7h-2.82v-8.22Zm-7.523,0V18.7H12.93v-8.22Z" transform="translate(-0.703 -2.25)" fill="#fff" />
                      </svg>
                      </span>
                      <span className="ml-2">SamGFX99</span>
                    </div>
                    <div className="itemSosmed flex items-start sm:items-center mb-2 last:mb-0">
                      <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 37.332 25.2">
                        <path id="Icon_zocial-email" data-name="Icon zocial-email" d="M.072,27.036V6.3q0-.036.108-.684l12.2,10.44L.216,27.756a3.051,3.051,0,0,1-.144-.72Zm1.62-22.86A1.551,1.551,0,0,1,2.3,4.068H35.172a2.039,2.039,0,0,1,.648.108L23.58,14.652l-1.62,1.3-3.2,2.628-3.2-2.628-1.62-1.3ZM1.728,29.16,14,17.388l4.752,3.852,4.752-3.852L35.784,29.16a1.729,1.729,0,0,1-.612.108H2.3a1.631,1.631,0,0,1-.576-.108Zm23.4-13.1L37.3,5.616A2.149,2.149,0,0,1,37.4,6.3V27.036a2.759,2.759,0,0,1-.108.72Z" transform="translate(-0.072 -4.068)" fill="#fff" />
                      </svg>
                      </span>
                      <span className="ml-2 break-all">Syamsulrahmat007@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="my-5 px-3">
            <div className="text-center text-white">@2021 SamGFX99 All Right Reserved - By using this site you agree to our Terms and Conditions and Privacy Policy</div>
          </footer>
        </section>

      </div>
    </RecoilRoot>
  );
}
