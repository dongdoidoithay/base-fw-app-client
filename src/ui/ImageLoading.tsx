"use server"
import { Constants } from '@/constants/constants';
import Images from 'next/image'
const myLoader = ({ src}:any) => {
  return `${src}`
}

const ImageLoading = ({url, title,classStyle,style}:any) => {
  let raw_url=url?.replace('{apiRoot}',"https://api.unionmanga.xyz");
  if (!raw_url?.includes('http')) {
    raw_url = Constants.UrlImage + raw_url;
}
  console.log(raw_url)
  return <Images 
            loader={myLoader} 
            src={raw_url}
            alt={title||'No title'}
            width={20}
            height={20}
            style={style}
            className={`bg-white ${classStyle}`}
            loading="lazy"
         
            />
};

export default ImageLoading;
