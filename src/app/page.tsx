import { currentByDomain } from "@/utils/currentSetting";
import { Metadata, ResolvingMetadata } from "next"
import { headers } from 'next/headers'
import sample from "lodash/sample";
import { GlobalNav } from "@/ui/global-nav";
import { Constants } from "@/constants/constants";
import Head from "next/head";
import { TopView } from "@/components/home/topView";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { LastUpdate } from "@/components/home/lastUpdate";


export interface Props {
  params: any;
  request: Request;
  resolvedUrl: string;
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {

  const _host = headers();
  const _ct_host = _host?.get('host');
  let domain = "default";
  if (_ct_host && !_ct_host.includes("localhost")) {
    domain = _ct_host.replace("www.", "");
  }

  const current = currentByDomain(domain);
  console.log(current);
  const _title = sample(current.seo_select?.title).replaceAll('{domain}', current.setting?.brand_name_other).replaceAll('{domain_name}', current.setting?.domain_name).replaceAll('{brand_name}', current.setting?.brand_name);
  const _desc = sample(current.seo_select?.desc).replaceAll('{domain}', current.setting?.brand_name_other).replaceAll('{domain_name}', current.setting?.domain_name).replaceAll('{brand_name}', current.setting?.brand_name);
  const _keyword = sample(current.seo_select?.key).replaceAll('{domain}', current.setting?.brand_name_other).replaceAll('{domain_name}', current.setting?.domain_name).replaceAll('{brand_name}', current.setting?.brand_name);


  return {
    title: _title,
    description: _desc,
    referrer: 'origin-when-cross-origin',
    keywords: [_keyword],
    openGraph: {
      title: _title,
      description: _desc,
      url: 'https://nextjs.org',
      siteName: current.setting?.domain_name,
      images: [
        {
          url: `https://${current.setting?.domain_name}${current.setting?.image_bg}`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: `https://${current.setting?.domain_name}${current.setting?.image_bg}`, // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: _title,
        },
      ],
      locale: current.setting?.lang_seo,
      type: 'website',
    },
  };
}

// Hàm giả lập để gọi API và lấy dữ liệu dựa trên domain
async function fetchDataLastUpdate(current: any) {
  const _url = `${Constants.UrlApi}${current.uri_select.prefix_url_api}${Constants.path_home_update}/24/0`;
  const response = await fetch(_url, { cache: 'force-cache' });
  const data = await response.json();
  return data;
}
async function fetchDataSlide(current: any) {
  const _url = `${Constants.UrlApi}${current.uri_select.prefix_url_api}${Constants.path_home_topfllow}/6/0`;
  const response = await fetch(_url, { cache: 'force-cache' });
  const data = await response.json();
  return data;
}

export default async function Home() {

  const _host = headers();
  const _ct_host = _host?.get('host');
  let domain = "default";
  if (_ct_host && !_ct_host.includes("localhost")) {
    domain = _ct_host.replace("www.", "");
  }

  const current = currentByDomain(domain);
  const _title = sample(current.seo_select?.title).replaceAll('{domain}', current.setting?.brand_name_other).replaceAll('{brand_name}', current.setting?.brand_name);
  const _desc = sample(current.seo_select?.desc).replaceAll('{domain}', current.setting?.brand_name_other).replaceAll('{brand_name}', current.setting?.brand_name);
  const _keyword = sample(current.seo_select?.key).replaceAll('{domain}', current.setting?.brand_name_other).replaceAll('{brand_name}', current.setting?.brand_name);
  const _dataSlide = await fetchDataSlide(current);
  console.log(_dataSlide.data);
  const _dataUpdate = await fetchDataLastUpdate(current);
  console.log(_dataUpdate);
  
  return (
    <>
     <Head>
      <meta httpEquiv="content-language" content={current?.setting?.lang_seo} />
      <meta name="sitemap" content={`https://${current?.setting?.domain_name}/${domain}/sitemap-index.xml`}></meta>
      <meta name="robots" content={`https://${current?.setting?.domain_name}/${domain}/robots.txt`}></meta>
    </Head>
      <h1 style={{ "position": "absolute", "top": "-999px" }} suppressHydrationWarning > {_title}</h1>
      <GlobalNav domain={domain} />
      <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
        <main className="px-2">

            <TopView data={_dataSlide.data} current={current} /> 
            <LastUpdate data={_dataUpdate.data} current={current} />
      
           {/*  <AdsTop domain={domain}/>
            <HistoryHome domain={domain}/>
            <PopupHome typeManga={null} nameLable={null} data_popular={data_popular} domain={domain}/>
            <AdsViews domain={domain}/>
            <LastUpdateHome typeManga={null} data_lastuppdate={data_lastuppdate} domain={domain}/>
            <AdsDetail domain={domain}/>
            <TopComment domain={domain}/>   */}
           
        </main>
      </div>
    </>
  );
}
