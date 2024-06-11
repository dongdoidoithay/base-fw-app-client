/* eslint-disable @next/next/inline-script-id */
'use client'
import Head from "next/head";
import Script from "next/script";
import React from "react";
/**
 * 
 * @param param0 
 * @returns banner 
 */
function AdsYandex({ current }: any) {
    let _key = '';
    if (current.setting.ads.find((p: any) => p.key == "yandex") != null) {
        var ads = current.setting.ads.find((p: any) => p.key == "yandex");
        if (ads != null) {
            _key = ads?.value;
        }
    }
    return (
        <>
            {_key &&
                <div style={{ textAlign: "center", "marginTop": "5px" }}>

                    <div id={`"yandex_rtb_${_key}"`}></div>
                    <Script
                        dangerouslySetInnerHTML={{
                            __html: `
                        document.addEventListener("DOMContentLoaded", function() 
                        {
                        window.yaContextCb.push(()=>{
                            Ya.Context.AdvManager.render({
                            "blockId": "${_key}",
                            "renderTo": "yandex_rtb_${_key}"
                            })
                        })
                        }); `,
                        }}
                    />
                </div>
            }
            {/* --test-- */}


            <div id="yandex_rtb_R-A-7005229-2"></div>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
            document.addEventListener("DOMContentLoaded", function() 
            {
                window.yaContextCb.push(()=>{
                    Ya.Context.AdvManager.render({
                        "blockId": "R-A-7005229-2",
                        "renderTo": "yandex_rtb_R-A-7005229-2"
                    })
                })
            }); `,
                }}
            />

        </>
    );
}

export default AdsYandex;
