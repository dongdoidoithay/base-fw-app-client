'use client'
import React from "react";
import sample from "lodash/sample";
/* import Ads_Popcash from "./Ads_Popcash";
import Ads_Monetag_Inital from "./Ads_Monetag_Inital";
import Ads_Monetag_Popup from "./Ads_Monetag_Popup"; */

import dynamic from 'next/dynamic';

const Ads_Popcash = dynamic(() => import('./Ads_Popcash'), { ssr: false });
const Ads_Monetag_Inital = dynamic(() => import('./Ads_Monetag_Inital'), { ssr: false });
const Ads_Monetag_Popup = dynamic(() => import('./Ads_Monetag_Popup'), { ssr: false });
/**
 * 
 * @param param0 
 * @returns  show one Popup in domain random
 */
function Ads_Block_PopUp({ current }: any) {
    let allowPopup: any = [];
    allowPopup = current.setting.ads.filter((p: any) => p.type == "popup");
    const _select_popup_key: any = sample(allowPopup)?.key;
    //console.log('select_popup:', _select_popup_key);
    //return <Ads_Monetag_Popup current={current} />
    switch (_select_popup_key) {
        case 'popcash-popup':
            return <Ads_Popcash current={current}  />
        case 'monetag-inital':
            return <Ads_Monetag_Inital current={current}  />
        case 'monetag-popup':
            return <Ads_Monetag_Popup current={current}  />

    }
}

export default Ads_Block_PopUp;
