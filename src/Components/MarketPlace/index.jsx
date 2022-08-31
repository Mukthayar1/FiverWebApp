import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceModal from "../../View/Freelancer/AddService/ServicesModa";
import "./styleMarketPlace.css";
import useAuth from "../../util/Contex/useAuth";
import Swal from "sweetalert2";

const MarketPlace = ({ heading, showback }) => {
  const navigation = useNavigate();
  const [show, Setshow] = useState(false);
  const [ServiceType, SetServiceType] = useState("");
  let { auth } = useAuth();
  const AddService = (id, name) => {
    if (auth?.email != undefined) {
      Setshow(true);
      SetServiceType({
        name: name,
        id: id,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login To Continue",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  console.log("auth", auth);

  return (
    <div className="xl:container xl:mx-0 mx-8">
      <div className="flex flex-wrap text-center">
        {showback == true ? (
          <img
            onClick={() => navigation(-1)}
            loading="lazy"
            className="text-3xl my-20 font-bold"
            src="https://firebasestorage.googleapis.com/v0/b/clancers-inc.appspot.com/o/images%2Fback.png?alt=media&token=6844150b-43c0-43d5-b8f0-80a752d90662"
            style={{ height: 40, width: 40, marginRight: 40 }}
          />
        ) : null}
        <h2 className="text-3xl my-20 font-bold">
          {heading ? heading : "Explore the marketplace"}
        </h2>
      </div>
      <div>
        <ul className="flex flex-wrap text-center">
          <li
            onClick={() => AddService(1, "Graphics & Design")}
            className="mb-14 w-1/2 md:w-1/3  lg:w-1/4 xl:w-1/5 col-auto "
          >
            <a className="image">
              <img
                loading="lazy"
                className=" w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics & Design"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Graphics & Design</p>
            </a>
          </li>

          <li
            onClick={() => AddService(2, "Digital Marketing")}
            className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 col-span-1"
          >
            <a className="image">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt="Digital Marketing"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Digital Marketing</p>
            </a>
          </li>

          <li
            onClick={() => AddService(3, "Writing & Translation")}
            className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <a className="image">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt="Writing & Translation"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">
                {" "}
                Writing & Translation
              </p>
            </a>
          </li>

          <li
            onClick={() => AddService(4, "ideo & Animation")}
            className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <a className="image">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt="Video & Animation"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Video & Animation</p>
            </a>
          </li>

          <li
            onClick={() => AddService(5, "Music & Audio")}
            className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <a className="image">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt="Music & Audio"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Music & Audio</p>
            </a>
          </li>

          <li
            onClick={() => AddService(6, "Programming & Tech")}
            className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <a className="image">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt="Programming & Tech"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Programming & Tech</p>
            </a>
          </li>

          <li
            onClick={() => AddService(7, "Business")}
            className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <a className="image">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt="Business"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Business</p>
            </a>
          </li>

          <li
            onClick={() => AddService(8, "Lifestyle")}
            className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <a className="image">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt="Lifestyle"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Lifestyle</p>
            </a>
          </li>

          <li
            onClick={() => AddService(9, "Data")}
            className="mb-14 w-1/2 md:w-1/3 md:mt-3  xl:mt-0  lg:w-1/4 xl:w-1/5"
          >
            <a className="image">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:mt-3 pb-1 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt="Data"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black md:mt-5 lg:mt-3">Data</p>
            </a>
          </li>
        </ul>
      </div>
      <ServiceModal show={show} Setshow={Setshow} ServiceType={ServiceType} />
    </div>
  );
};

export default MarketPlace;
