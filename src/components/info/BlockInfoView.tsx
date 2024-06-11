import { UrlInfo } from "@/utils/commons";
import { BlockSlide } from "../listpage/blockSlide";
import DisqusComments from "../share/Disqus";
import { BreadcrumbInfo } from "./BreadcrumbInfo";
import { ChapterListView } from "./ChapterListView";
import { InfoView } from "./InfoView";
import { RightComponents } from "../share/RightComopents";


import dynamic from 'next/dynamic';
const Ads_Block_Banner = dynamic(() => import('../ads/Ads_Block_Banner'), { ssr: false });


export function BlockInfoView({ data,dataChapter, current }: any) {
    return (<>
        <BreadcrumbInfo data={data} current={current} />

        <section className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-9">
                        <div className="row">
                            <InfoView current={current} data={data} />
                            <Ads_Block_Banner current={current}/>
                            <ChapterListView current={current} dataInfo={data} dataList={dataChapter}/>
                            <DisqusComments current={current} url={`${UrlInfo(data?.infoDoc?.idDoc, current)}`} />       
                        </div>
                    </div>
                    <div className="col-12 col-xl-3">
                        {/* Slide Bar */}
                      {/*   <BlockSlide data={[]} current={current}/> */}
                      <RightComponents  current={current}/>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
