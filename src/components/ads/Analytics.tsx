/* eslint-disable @next/next/inline-script-id */

import Script from "next/script";
import React from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

function Analytics({ current }:any) {
  return (
    <>
   {/*  <GoogleAnalytics  gaId={current?.setting?.analytics_key} /> */}
      <Script  async src={`https://www.googletagmanager.com/gtag/js?id=${current?.setting?.analytics_key}`} strategy="afterInteractive" />
      <Script id={`"${current?.setting?.analytics_key}"`} >
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
  
                gtag('config', '${current?.setting?.analytics_key}');
            `}
        </Script>
    </>
  );
}

export default Analytics;
