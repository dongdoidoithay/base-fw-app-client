
import SlideBar from "./SlideBar";
import { Constants } from "@/constants/constants";


async function fetchDataTopMonth(current: any) {
    const _url = `${Constants.UrlApi}${current.uri_select.prefix_url_api}${Constants.path_home_top_month}/6`;
    const response = await fetch(_url, { cache: 'force-cache' });
    const data = await response.json();
    return data;
  }
  
export async function RightComponents({ current }: any)
{
    const dataTopMonth=await fetchDataTopMonth(current);
    return (<SlideBar dataToview={dataTopMonth.data} current={current}/>
    )
}
