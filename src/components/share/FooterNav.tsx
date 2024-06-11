import { Constants } from "@/constants/constants";
import { LableMenuName, UrlByKeyType, UrlInfo } from "@/utils/commons"
import { FetchApi, FetchOneApi } from "@/utils/handleApi";
import Link from "next/link"
import { useEffect, useState } from "react";


export function FooterNav({ current, desc = null }: any) {
    const [dataTopWeek, setDataTopWeek] = useState([]);
    const [dataLink, setDataLink] = useState([]);
    useEffect(() => {
        console.log("call footer -$");
        loadData();
        loadDomainData();
    }, [current]);

    async function loadDomainData() {
        try {
            const _ = require('lodash');
            const urls = [
                `${Constants.UrlApp}/api/getdomain`
            ];
            let _raw_rq = await FetchApi(urls);

            if (_raw_rq) {
                let _array = _.sampleSize(_raw_rq.flat(), 9);
                // console.log(_array);
                setDataLink(_array);
            }
        } catch (e) {
            console.log(e);
        }
    }
    async function loadData() {
        try {
            let _data = await FetchOneApi(`${Constants.UrlApi}${current.uri_select.prefix_url_api}${Constants.path_home_top_month}/9`);
            if (_data && _data.success) {
                setDataTopWeek(_data.data);
            }
        } catch (e) {
            console.log(e);
        }
    }
    function ScrollTop() {
        window && window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <>
            <div className="back-to-top" onClick={() => ScrollTop()}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path d="M7.03 9.97h4v8.92l2.01.03V9.97h3.99l-5-5z" fill="currentColor"></path>
                </svg>
            </div>
            <footer className="mt-5 notranslate">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 mt-3 text-center text-sm-start">
                            <div className="logo mb-3"><Link href="/"><img src={`https://${current.setting?.domain_name}/${current?.setting?.image_logo}`} alt="" className="site-logo" /></Link></div>
                            <p className="max-caracter-4">
                                {desc}
                                {!desc && `Read manga online free.Read latest updated japanese manga, chinese manhua, korean manhwa.Read latest releases, latest chapters and new manga.`}
                            </p>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-3 mt-3 text-center text-sm-start">
                            <h2>Menu</h2>
                            <ul>
                                {current.Menu.map((item: any) => {
                                    if (item?.child.length > 0) {
                                        return item.child.map((item_child: any) => {
                                            return (
                                                <li key={item_child.key_type}>
                                                    <Link href={UrlByKeyType(item_child.key_type, current)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="iconify iconify--mdi" width="12" height="12"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor" /></svg>
                                                        {LableMenuName(item_child.key_type, current)}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    } else {
                                        return (
                                            <li key={item.key_type}>
                                                <Link href={UrlByKeyType(item.key_type, current)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="iconify iconify--mdi" width="12" height="12"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor" /></svg>
                                                    {LableMenuName(item.key_type, current)}
                                                </Link>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-3 mt-3 text-center text-sm-start">
                            <h2>Popular Links</h2>
                            <ul>
                                {dataTopWeek && dataTopWeek.map((item) => {
                                    return (
                                        <li key={item.idDoc}><Link href={`${UrlInfo(item.idDoc, current)}`}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="iconify iconify--mdi" width="12" height="12"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor" /></svg>{item.name}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-3 mt-3 text-center text-sm-start">
                            <h2>Helpfull Links</h2>
                           <ul>
                            {dataLink &&dataLink.map((item)=>{
                                 return (
                                    <li key={item}><Link href={`https://${item}`}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="iconify iconify--mdi" width="12" height="12"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor" /></svg>{item}</Link></li>
                                )
                            })}
                           </ul>
                        </div>
                        <div className="col-md-12 text-center text-sm-start">
                            <div className="footer-content">
                                <div className="footer-left">© {new Date().getFullYear()} {current.setting.brand_name}</div>
                                <div className="footer-right"> </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}