import { useRouter } from 'next/router'
import { useEffect } from 'react';
export function NoDataFound() {
    const router = useRouter()
    
    useEffect(()=>{
        const timeoutID = window.setTimeout(() => {
            Reload();
        }, 5000);
    
        return () => window.clearTimeout(timeoutID);
    },[])
    function Reload() {
        router.reload();
    }
    return (<>
        <section className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header">
                            <div className="section-header-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="iconify iconify--mdi" width="32" height="32"><path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 25.5-10.1 49.9-28.1 67.9L192 210.7l-67.9-67.9C106.1 124.9 96 100.4 96 75z" fill="currentColor" /></svg>
                            </div>
                            <div className="section-header-title me-auto">
                                <h2 className="max-caracter-2">Server is Busy</h2>
                                <span className="max-caracter-1">You F5 browser or click refresh</span>
                            </div>
                            <a onClick={Reload} className="section-header-button" style={{ "cursor": "pointer" }}>Refresh</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}