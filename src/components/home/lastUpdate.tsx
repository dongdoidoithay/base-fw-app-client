"use client"

import { FomatDate } from "@/utils/caldate";
import { UrlInfo, TitleShow, TypeDoc, UrlDetail } from "@/utils/commons";
import LazyImage from "@/ui/ImageLazy";
import Loadding from "@/components/ui/Loadding";
import { RightComponents } from "@/components/share/RightComopents";
import Link from "next/link";
import { Boundary } from "@/ui/boundary";

export function LastUpdate({ data, current }: any) {
  //const router = useRouter();

  const _renderItem = (data: any, index: number) => {
    if(data.type=="Anime")
    return (
      <tr key={index + "-" + data.idDoc} className="border-b border-dotted border-slate-600 hover:border-dashed hover:border-sky-400">
        <td className="w-1/12 justify-center text-center text-lg font-semibold">
          <div className="font-semibold border border-dotted rounded-full justify-center w-2/3 bg-slate-950/70 hover:border-dashed hover:border-sky-400">
            {index + 1}
          </div>
        </td>
        <td className="w-1/2">
          <a className="text-sm text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-200"
            rel="dofollow"
            href={`${UrlInfo(data.idDoc, current)}?ep=${data.idDetail}`}
            title={`${TitleShow(data.nameDoc, TypeDoc.View, current, data.nameChapter, data.nameDoc)}`}
          >
            {data.name}
          </a>
        </td>
        <td className="hidden sm:block py-5 align-middle">
          <div>
            {current?.lable_info?.info_status}: <strong className="  text-sky-600 dark:text-sky-500">{data.status}</strong>
          </div>
          <div>
            {current?.lable_info?.info_view}: <strong className=" text-sky-600 dark:text-sky-500">{data.view}</strong>
          </div>
        </td>
        <td className="w-1/5 xs:1/2">
          <table className="w-full text-left border-collapse text-sm ">
            <tbody>
              {data.lsDetail &&
                data.lsDetail.slice(0,2).map((item: any, index: number) => (
                  <tr
                    className="m-3 border-b border-dotted border-slate-600 hover:border-dashed hover:border-sky-400"
                    key={index + "" + item.idDetail}
                  >
                    <td className="py-2 mr-1">
                      <a
                        className="text-sm text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-300"
                        rel="dofollow"
                        href={`${UrlInfo(item.idDoc, current)}?ep=${item.idDetail}`}
                        title={`${TitleShow(item.nameDoc, TypeDoc.View, current, item.nameChapter, item.nameDoc)}`}
                      >
                        {item.nameChapter}
                      </a>
                    </td>
                    <td className="hidden sm:block justify-end float-right">
                      {FomatDate(item.date, current)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </td>
      </tr>
    );
    else
    return (
      <tr key={index + "-" + data.idDoc} className="border-b border-dotted border-slate-600 hover:border-dashed hover:border-sky-400">
        <td className="w-1/12 justify-center text-center text-lg font-semibold">
          <div className="font-semibold border border-dotted rounded-full justify-center w-2/3 bg-slate-950/70 hover:border-dashed hover:border-sky-400">
            {index + 1}
          </div>
        </td>
        <td className="w-1/2">
          <a className="text-sm text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-200"
            rel="dofollow"
            href={`${UrlInfo(data.idDoc, current)}`}
            title={`${TitleShow(data.nameDoc, TypeDoc.View, current, data.nameChapter, data.nameDoc)}`}
          >
            {data.name}
          </a>
        </td>
        <td className="hidden sm:block py-5 align-middle">
          <div>
            {current?.lable_info?.info_status}: <strong className="  text-sky-600 dark:text-sky-500">{data.status}</strong>
          </div>
          <div>
            {current?.lable_info?.info_view}: <strong className=" text-sky-600 dark:text-sky-500">{data.view}</strong>
          </div>
        </td>
        <td className="w-1/5 xs:1/2">
          <table className="w-full text-left border-collapse text-sm ">
            <tbody>
              {data.lsDetail &&
                data.lsDetail.slice(0,2).map((item: any, index: number) => (
                  <tr
                    className="m-3 border-b border-dotted border-slate-600 hover:border-dashed hover:border-sky-400"
                    key={index + "" + item.idDetail}
                  >
                    <td className="py-2 mr-1">
                      <a
                        className="text-sm text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-300"
                        rel="dofollow"
                        href={`${UrlDetail(item.idDoc, item.idDetail, current)}`}
                        title={`${TitleShow(item.nameDoc, TypeDoc.View, current, item.nameChapter, item.nameDoc)}`}
                      >
                        {item.nameChapter}
                      </a>
                    </td>
                    <td className="hidden sm:block justify-end float-right">
                    {FomatDate(item.date, current)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </td>
      </tr>
    );

  };
  return (
    <>
    <div className="container flex">
        <div className="w-3/4">
        <Boundary labels={current?.lable_info?.lable_home_last_update}  
                  lableLink={current?.lable_info?.lable_action_view_more} 
                  linkNext={`/${current?.uri_select?.key_uri}/last-update`}
                  />
          <table className="w-full text-left border-collapse text-sm " >
            <tbody>
              {data && data.map((data: any, index: number) => (_renderItem(data, index)))} 
            </tbody>
          </table>
        </div>
        <div className="w-1/4">
            <RightComponents current={current} /> 
        </div>
      </div>
     
    </>
  );
}
