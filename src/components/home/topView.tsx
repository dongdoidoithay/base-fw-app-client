import { FomatDate } from "@/utils/caldate";
import { UrlInfo, TitleShow, TypeDoc, UrlDetail } from "@/utils/commons";
import LazyImage from "@/ui/ImageLazy";
import Loadding from "@/components/ui/Loadding";


import { Swiper, SwiperSlide } from "swiper/react"

import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/free-mode";
import ImageLoading from "@/ui/ImageLoading";
import { Boundary } from "@/ui/boundary";

export function TopView({ data, current }: any) {

  const trending = (data: any) => {
    if (data == null)
      return <></>;
    return (
      <a
        key={data.idDoc}
        rel="dofollow"
        href={`${UrlInfo(data.idDoc, current)}`}
        className="border border-slate-700 rounded-md hover:border-dashed hover:border-sky-400 w-full h-64 overflow-hidden"
      >
        <div className="relative bg-red-950 ">
          <LazyImage src={data.image} srcSet={data.image} title={data.name} className="bg-white w-full object-cover" />
          {/*  <ImageLoading url={data.image} title="silde" classStyle="w-full object-cover"/> */}
          <div className="absolute inset-0  bg-stripes-gray bg-slate-800/95 mt-32 text-sm rounded-md"></div>

          <div className="absolute mt-32 text-sm px-1 inset-0">
            <h2 className="py-1 truncate ... font-semibold first-line:uppercase text-sky-500 dark:text-sky-400 first-letter:text-2xl first-letter:font-bold w-80" >
              {data.name}
            </h2>
            <div className="block text-slate-300 dark:text-slate-400 toverflow-hidden">
              {current?.lable_info?.info_genres}:<span className="font-semibold runcate ... inline"> {data.genres}</span>
            </div>
            <span className="block text-slate-300 dark:text-slate-400">
              {current?.lable_info?.info_date}:<span className="font-semibold"> {FomatDate(data.date, current)}</span>
            </span>
          </div>
        </div>
      </a>
    )
  };
  const blockSlide = (dataArr: any) => {
    return (
      dataArr &&
      dataArr.map((item: any) => {
        return (
          <a
            className="flex h-1/2 w-full lg:w-1/2 text-sm text-sky-500 dark:text-sky-400  hover:text-sky-200 hover:scale-95 "
            key={item.idDoc}
            rel="dofollow"
            href={`${UrlInfo(item.idDoc, current)}`} >
            <div id="box" className="flex flex-row mx-1 my-1 border border-slate-700 rounded-lg w-full hover:border-dashed hover:border-sky-400"
            >
              <div id="image-box" className="flex w-1/3 h-28">
                <LazyImage src={item.image} srcSet={item.image} title={item.name} className="bg-white w-full object-cover rounded-lg hover:-skew-y-6  hover:-translate-x-4" />
              </div>
              <div id="conten" className="flex flex-col w-2/3">
                <h2 className="px-1 truncate .. font-semibold first-line:uppercase first-letter:text-xl hover:text-md hover:font-semibold hover:text-sky-200 w-full">
                  {item.name}
                </h2>
                <span className="px-1 text-slate-300 dark:text-slate-400">
                  {current?.lable_info?.info_status}:
                  <strong>{item.status}</strong>
                </span>
                <span className="px-1  text-slate-300 dark:text-slate-400">
                  {current?.lable_info?.info_date}:
                  <strong>{FomatDate(item.date, current)}</strong>
                </span>
                <span className="px-1  text-slate-300 dark:text-slate-400">
                  {current?.lable_info?.info_year}:
                  <strong>{item.year}</strong>
                </span>
              </div>
            </div>
          </a>
        );
      })
    );
  };
  const popular = (data: any) => {
    return (
      <a
        rel="dofollow"
        href={`${UrlInfo(data.idDoc, current)}`}
        title={`${TitleShow(data.name,TypeDoc.Info, current,"1",data.nameOther, "",data.authName,data.desc,data.nameOther)}`}
        key={data.idDoc}
        className="block flex h-1/2 w-full lg:w-1/2 text-sm text-sky-500 dark:text-sky-400 " 
      >
        <div className="overflow-auto my-1 mx-1 border-slate-700 border rounded-md hover:border-dashed hover:border-sky-400">
          <div className="overflow-hidden relative mx-auto flex items-center gap-6">
            <LazyImage src={data.image} 
                        srcSet={data.image} 
                        title={data.name} 
                        className="absolute  w-24 h-24 rounded-full shadow-lg" />
          
            <div className="flex flex-col py-5 pl-24 ">
              <h2 className="px-1 truncate .. font-semibold first-line:uppercase first-letter:text-xl hover:text-md hover:font-semibold hover:text-sky-200">
                {data.name}
              </h2>
              <span className="px-1 text-slate-300 dark:text-slate-400">
                {current?.lable_info?.info_status}:{" "}
                <strong>{data.status}</strong>
              </span>
              <span className="px-1 text-slate-300 dark:text-slate-400">
                {current?.lable_info?.info_date}:{" "}
                <strong>{FomatDate(data.date, current)}</strong>
              </span>
            </div>
          </div>
        </div>
      </a>
    );
  };
  return (
    <>
      <Boundary labels={current?.lable_info?.info_top_view_list} />
      <div className="flex flex-col lg:flex-row">
        <div className="flex w-full lg:w-1/3 ">
          {data && data[0] && trending(data[0])}
        </div>
        <div className="flex w-full lg:w-2/3">

          <div className="swiper">
             {/*  <div className="swiper-slide flex-col lg:flex-row flex-wrap">
                  {data && data.length > 0 &&
                   data.slice(1, 4).map((item: any) => popular(item))}
               </div> 
               <div className="swiper-slide flex-col lg:flex-row flex-wrap">
                  {data && data.length > 0 &&
                   data.slice(5, 9).map((item: any) => popular(item))}
               </div> */}
              <div className=" swiper-slide flex-col lg:flex-row flex-wrap">
                  {data &&
                  data.length > 0 &&
                  blockSlide( data.slice(1, 5))}
              </div>
          
            </div>
        </div>

        {/*  <div className="flex w-full lg:w-2/3">
              {(data==null || data.length<=0) && slideSkeleton()}
              <Swiper
                slidesPerView={1}
                spaceBetween={1}
                loop={true}
                freeMode={true}
                autoplay={{
                  delay: 6500,
                  disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className="flex-col lg:flex-row flex-wrap">
                  {data &&
                    data.length>0 &&
                    blockSlide(data.slice(1, 5))}
                </SwiperSlide>
                <SwiperSlide className="flex-col lg:flex-row flex-wrap">
                  {data &&
                    data.length>0 &&
                    blockSlide(data.slice(6, 10))}
                </SwiperSlide>
              </Swiper>
            </div> */}
      </div>
    </>
  );
}
