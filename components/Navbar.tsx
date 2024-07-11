import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className='px-4'>
      <div className='flex justify-between items-center py-0 h-20 my-2 mx-auto mb-6 max-w-max-w-screen border-b border-b-gray-600'>
        <div className='flex flex-row items-center gap-4'>
          <Link href='/'>
            <Image
              src='/images/metamare-logo-60-60.png'
              height='60'
              width='60'
              alt='Logo'
            />
          </Link>
          <h1>
            <p>Art Gallery</p>
            <p>Demo</p>
            {/* <div className='text-lg'>
              by{" "}
              <a target='_blank' href='https://metamare.de/'>
                metamare
              </a>
            </div> */}
          </h1>
        </div>
        <ConnectWallet
          theme={darkTheme({
            colors: {
              accentText: "#3385FF",
              accentButtonBg: "#163a4a",
              modalBg: "#131418",
              dropdownBg: "#131418",
              primaryButtonBg: "#163a4a",
              primaryButtonText: "#ededef",
              connectedButtonBg: "#163a4a",
              connectedButtonBgHover: "#163a4a",
            },
          })}
          btnTitle='Sign in'
          modalTitle={"Choose a Sign in Method"}
          modalTitleIconUrl={""}
          switchToActiveChain={true}
          modalSize={"wide"}
          welcomeScreen={() => (
            <div
              style={{
                flex: "1 1 0%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "24px",
                paddingRight: "24px",
                minHeight: "300px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  justifyContent: "center",
                  animation:
                    "logo-animation 2s ease-in-out 0s infinite alternate none",
                }}
              >
                <Image
                  width='120'
                  height='120'
                  src='/images/metamare-logo-60-60.png'
                  alt=''
                  decoding='async'
                  draggable='false'
                  style={{
                    height: "120px",
                    width: "120px",
                    userSelect: "none",
                  }}
                />
              </div>
              <div style={{ height: "48px" }}></div>
              <span
                color='primaryText'
                style={{ fontSize: "1.2rem", textAlign: "center" }}
              >
                Demo Art Gallery
              </span>
              <div style={{ height: "16px" }}></div>
              <span
                color='secondaryText'
                className='css-9c8pv8'
                style={{ textAlign: "center", lineHeight: "1.5rem" }}
              >
                provided by{" "}
                <a href='https://metamare.de/' target='_blank'>
                  metamare
                </a>
                , built with{" "}
                <a href='https://thirdweb.com/' target='_blank'>
                  thirdweb
                </a>
              </span>
            </div>
          )}
        />
      </div>
    </header>
  );
}
