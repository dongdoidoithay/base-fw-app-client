/* eslint-disable @next/next/inline-script-id */
'use client'
import Script from "next/script";
import React from "react";
/**
 * 
 * @param param0 
 * @returns  Stickey _
 */
function AdsPubfutureStickey({ current }: any) {
    let _key = '';
    let _unit = '';
    if (current.setting.ads.find((p:any) => p.key == "pubfuture-sticky") != null) {
        var ads = current.setting.ads.find((p:any) => p.key == "pubfuture-sticky");
        if (ads != null) {
            _key = ads?.value;
           _unit = ads?.unit;
        }
    }
    return (
        <>
            {_key  && _unit && 
            <div style={{ textAlign: "center","marginTop": "5px" }}>
               {/* <Script async src={`https://cdn.pubfuture-ad.com/v2/unit/pt.js`} strategy="afterInteractive" /> */}
               <Script id={`"${_key}"`} >
                    {`
                        window.pubfuturetag = window.pubfuturetag || [];window.pubfuturetag.push({unit: "${_unit}", id: "${_key}"})
                    `}
                </Script>
            </div>
            }
        </>
    );
}

export default AdsPubfutureStickey;
