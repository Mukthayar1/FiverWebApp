import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./style.css";
import "./ProfessionalServices.css";
const Service = ({ title, data ,type}) => {
  let navigate = useNavigate();

  function SampleNextArrow(props) {
    const { className, style, onClick,  } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="xl:container xl:mx-0 mx-5 my-0  xl:my-20">
      <h2 className="text-4xl py-2 pb-3 font-medium xl:text-3xl  ml-4">
        {title}
      </h2>
      <Slider {...settings}>
        {data &&
          data?.map((item, key) => {
            console.log("data", item);
            return (
              // <div className="rounded relative" key={key}>
              //   <img
              //     className="px-4 rounded w-full h-full"
              //     src={item?.file_Url}
              //     alt="photo"
              //     style={{minHeight:300}}
              //   />
              //   <div className="absolute top-2 left-9 text-white">
              //     <p className="mb-0 font-normal text-base">{item?.title}</p>
              //     <h4 className="text-white text-2xl font-bold">{item?.charges} $</h4>
              //   </div>
              // </div>
              <div>
                <main
                  className="cards"
                  key={key}
                  onClick={() => navigate(`/product/${item?.docId}/${type}`)}
                >
                  <section className="card contact">
                    <div className="icon">
                      <img src={item?.file_Url} alt="Contact us." />
                    </div>
                    <div className="card_body">
                      <div className="user">
                        <img
                          className="user_icon"
                          src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                          alt="user"
                        />
                        <h3>
                          {item?.firstName} {item?.lastName}
                        </h3>
                      </div>
                      <div className="user_text">
                        <h3>{item?.title}</h3>
                      </div>
                      {/* <div className="user_star">
                      <span>&#9733;</span>
                      <p className="yellow">5.0</p>
                      <p className="bracket">(131)</p>
                    </div> */}
                    </div>
                    <div className="user_line">
                      <hr></hr>
                    </div>
                    {/* <h3>Contact us.</h3> */}
                    <div className="card_bottom">
                      <i className="fas fa-heart"></i>
                      <div className="right" style={{ margin: 5 }}>
                        <p>TOTAL AMOUNT</p>
                        <p className="right_price" style={{ fontSize: 15 }}>
                          USD {item?.charges}
                        </p>
                      </div>
                    </div>
                    {/* <button className="btn1">{item?.charges}$</button> */}
                  </section>
                </main>
              </div>
              //             <div className="cards" key={key}>
              //   <div className="card">
              //     <img className="card-img" src={item?.file_Url}/>
              //         <div className="user">
              //               <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
              //               <div className="user-info">
              //                 <h5>July Decaa</h5>
              //                 <h1>{item?.title}</h1>
              //                 {/* <small>2h ago</small> */}
              //               </div>
              //             </div>
              //         <p className="">
              //         Loremm ipsum dolor sit Praesentium aperiam adipisci exercitationem.
              //       </p>
              //       <div className="box" style={{display:"flex",}}>
              //       <button type="button"className="on">
              //           <span className="star">&#9733;</span>
              //           </button>
              //           <h4>5.0</h4>
              //           <h5>(3)</h5>
              //           </div>
              //             {/* <p>(3)</p> */}
              //       {/* <span className="tag tag-teal">{item?.charges} $</span> */}
              //       {/* <hr className="line-break"></hr> */}
              //       {/* <div className="star-rating">
              //     </div> */}
              //           </div>
              // </div>
            );
          })}
        {/* <div to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Customize your site</p>
            <h4 className="text-white text-2xl font-bold">WordPress</h4>
          </div>
        </div>
        <div to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Share your message</p>
            <h4 className="text-white text-2xl font-bold">Voice Over</h4>
          </div>
        </div>
        <div to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Engage your audience</p>
            <h4 className="text-white text-2xl font-bold">Video Explainer</h4>
          </div>
        </div>
        <div to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Reach more customers</p>
            <h4 className="text-white text-2xl font-bold">Social Media</h4>
          </div>
        </div>
        <div to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Unlock growth online</p>
            <h4 className="text-white text-2xl font-bold">SEO</h4>
          </div>
        </div>
        <div to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Color your dreams</p>
            <h4 className="text-white text-2xl font-bold">Illustration</h4>
          </div>
        </div>
        <div to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Go global</p>
            <h4 className="text-white text-2xl font-bold">Translation</h4>
          </div>
        </div>
        <div to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Learn your business</p>
            <h4 className="text-white text-2xl font-bold">Data Entry</h4>
          </div>
        </div>
        <div to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Showcase your story</p>
            <h4 className="text-white text-2xl font-bold">Book Covers</h4>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};
export default Service;
