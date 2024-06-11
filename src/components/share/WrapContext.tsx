import { currentByDomain } from "@/utils/currentSetting";

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { CurrentsContextProvider } from "@/context/current";

export const getServerSideProps = (async (context) => {
    /**Setting Block */
    var _ct_host = context.req.headers.host;
    let domain = "default";
    if (_ct_host && !_ct_host.includes("localhost")) {
        domain = _ct_host.replace("www.", "");
    }

    let _current: any;
    _current = currentByDomain(domain);


    let repo = {
        current: _current ?? {}
    };
    //const repo_data=Encrypt(repo);
    //console.log("rp", repo);
    return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: any }>

export default function WrapContext({ children, repo }: { children: React.ReactNode; repo: InferGetServerSidePropsType<typeof getServerSideProps> }) {
    return (
        <CurrentsContextProvider>
            {children}
        </CurrentsContextProvider>
    );
}
