/* eslint-disable @next/next/inline-script-id */
import Script from "next/script";
import ReactDisqusComments from "react-disqus-comments";

const DisqusComments = ({ id, image, title, url, type, current }: any) => {

  const disqusShortname = "manga-new";

  const mapComment = (data: any) => {
    let _result = "";
    if (data != null) {
      let _sp = data.split(" ");
      for (let c of _sp) {
        if (c.startsWith("http://") || c.startsWith("https://"))
          _result += `<img src='${c}' alt='comment'/>`;
        else _result += `${c}`;
      }
    }
    return _result;
  };
  const handleNewComment = async (comment: any) => {
    console.log("comment", comment);

    /* const params = new URLSearchParams({
      id_ref: comment.id,
      id_manga: id,
      image_manga: image,
      name_manga: title,
      type_manga: type,
      domain: config?.configSetting?.lbl_domain_Page,
      contents: mapComment(comment.text),
    });

    //console.log("_datapost", params);
    await AxiosPostApi(
      config_base?.apiConfigPath + config.endPointPath.configAddcomment,
      params
    ); */
  };
  return (
    <>
      {/*@ts-ignore*/}
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-3 mb-3">
              <div className="section-header mb-0">
                <div className="section-header-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--zmdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 432 432">
                    <path d="M405 88q9 0 15.5 6.5T427 109v320l-86-85H107q-9 0-15.5-6.5T85 323v-43h278V88h42zm-85 128q0 9-6.5 15t-14.5 6H85L0 323V24q0-9 6.5-15T21 3h278q8 0 14.5 6t6.5 15v192z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="section-header-title me-auto">
                  <h2 className="max-caracter-2">{current.lable_info.comment_lable}</h2>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-2 mb-2">
              <div className="w-100">
                {/*   {current.setting?.domain_name && 
               <ReactDisqusComments
                  shortname={disqusShortname}
                  identifier={id}
                  title={title}
                  url={`https://${current.setting?.domain_name}${url}`}
                  category_id="manga-new"
                  onNewComment={(value: any) => handleNewComment(value)}
                />} */}

                  <Script
                        dangerouslySetInnerHTML={{__html: `
                        document.addEventListener("DOMContentLoaded", function() 
                        {
                          setTimeout(function () {
                            $('#disqus_thread iframe[sandbox]').remove();
                          }, 5000);
                          setTimeout(function () {
                              $('#disqus_thread iframe[sandbox]').remove();
                          }, 10000);
                          setTimeout(function () {
                              $('#disqus_thread iframe[sandbox]').remove();
                          }, 15000);
                        }); `,
                        }}
                    />
                {/* <Script id="script-disqus-setting">
                  {`
                    setTimeout(function () {
                      $('#disqus_thread iframe[sandbox]').remove();
                    }, 5000);
                    setTimeout(function () {
                        $('#disqus_thread iframe[sandbox]').remove();
                    }, 10000);
                    setTimeout(function () {
                        $('#disqus_thread iframe[sandbox]').remove();
                    }, 15000);
                  `}
                </Script> */}
                <div id="disqus_thread"></div>
                <Script id="script-disqus">
                  {` var disqus_config = function () {
                    this.page.url = 'https://${current.setting?.domain_name}${url}';
                    this.page.identifier = 'https://${current.setting?.domain_name}${url}';
                    };

                    (function () { // DON'T EDIT BELOW THIS LINE
                        var d = document,
                            s = d.createElement('script');
                        s.src = 'https://manga-new.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                    })();
                  `}
                </Script>


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisqusComments;
