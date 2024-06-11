/* eslint-disable @next/next/inline-script-id */
'use client'
import Script from "next/script";
import React, { useEffect, useState } from "react";
/**
 * 
 * @param param0 
 * @returns  popup
 */
function Ads_Popcash({ current }: any) {
    const [key, setkey] = useState(null);
    useEffect(() => {
        if (current.setting.ads.find((p: any) => p.key == "popcash-popup") != null) {
            var ads = current.setting.ads.find((p: any) => p.key == "popcash-popup");
            if (ads != null) {
                const _key = ads?.value;
                if (_key != null && _key != undefined && document != undefined) {
                    setkey(_key);
                    let popTag = document.createElement('script');
                    popTag.src = '//cdn.popcash.net/show.js';
                    document.body.appendChild(popTag);

                    popTag.onerror = function () {
                        popTag = document.createElement('script');
                        popTag.src = '//cdn2.popcash.net/show.js';
                        document.body.appendChild(popTag)
                    };
                }
            }

        }

    }, []);


    return (
        <>
            {key && <Script id="show-popcash">
                {`
                    var uid = '198238'
                    var wid = '${key}';
                    var pop_fback = 'up';
                `}
            </Script>
            }
        </>);
}

export default Ads_Popcash;
