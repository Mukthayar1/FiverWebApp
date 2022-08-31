import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import star from "../../assets2/images/star.png";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LoopIcon from "@mui/icons-material/Loop";
import DoneIcon from "@mui/icons-material/Done";
import Divider from "@mui/material/Divider";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import IconButton from "@mui/material/IconButton";
import Carousel from "react-elastic-carousel";
import "./Product.css";
import Header from "../Header";
import Footer from "../Footer";
import { GetDocDetails } from "../../store/action/GetData";
import { MutatingDots } from "react-loader-spinner";

function Product() {
  let Docid = useParams();
  const [data, Setdata] = useState();
  const [loading, Setloading] = useState(true);
  console.log("data", Docid);

  useEffect(() => {
    GetDocDetails(Setdata, Setloading, Docid);
  }, []);

  console.log("data", data);

  let ratingStars = 5;
  let services = ["API Development", "Frontend", "Backend"];
  let ordersQueue = 3;
  let reviewsCount = 7;
  let items = [
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/251414203/original/5d243712bd6064c704bd0c6c4302c5dbed8a43f7/certified-ondemand-aws-solutions-architect-and-consultant.jpeg",
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/251414203/original/5d243712bd6064c704bd0c6c4302c5dbed8a43f7/certified-ondemand-aws-solutions-architect-and-consultant.jpeg",
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/251414203/original/5d243712bd6064c704bd0c6c4302c5dbed8a43f7/certified-ondemand-aws-solutions-architect-and-consultant.jpeg",
  ];
  let review = [
    {
      pic: "https://mui.com/static/images/avatar/1.jpg",
      name: "michel_ricky",
      country: "United States",
      flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
      text: "Great service! Communicates well and responsive. Very educated in cloud computing services. Would highly recommend!",
      published: "Published 1 year ago",
    },
    {
      pic: "https://mui.com/static/images/avatar/1.jpg",
      name: "michel_ricky",
      country: "United States",
      flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
      text: "Great service! Communicates well and responsive. Very educated in cloud computing services. Would highly recommend!",
      published: "Published 1 year ago",
    },
    {
      pic: "https://mui.com/static/images/avatar/1.jpg",
      name: "michel_ricky",
      country: "United States",
      flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
      text: "Great service! Communicates well and responsive. Very educated in cloud computing services. Would highly recommend!",
      published: "Published 1 year ago",
    },
    {
      pic: "https://mui.com/static/images/avatar/1.jpg",
      name: "michel_ricky",
      country: "United States",
      flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
      text: "Great service! Communicates well and responsive. Very educated in cloud computing services. Would highly recommend!",
      published: "Published 1 year ago",
    },
  ];

  return (
    <>
      {loading == true ? (
        <MutatingDots
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{
            justifyContent: "center",
            alignSelf: "center",
            marginTop: "20%",
          }}
          wrapperClass=""
          visible={loading}
        />
      ) : (
        <div className="w-full">
          {/* <Header /> */}
          <div className="mt-20 mb-14 ml-14 mr-14 flex">
            <div style={{ flex: 0.65 }}>
              <div>
                <p className="text-3xl font-bold">
                  {data?.title}
                </p>

                <div
                  className="flex items-center"
                  style={{ marginTop: "-0.6765rem" }}
                >
                  <Avatar
                    src="https://mui.com/static/images/avatar/1.jpg"
                    alt="person"
                  />

                  <span className="ml-3.5 font-semibold tracking-wide">
                    {" "}
                    {data?.firstName} {data?.lastName}{" "}
                  </span>

                  <span className="ml-2.5 text-gray-500"> | </span>

                  {/* <div className="ml-2 flex items-center">
                    {Array(ratingStars)
                      .fill("")
                      .map((letter, i) => (
                        <img
                          key={i}
                          src={star}
                          alt="star"
                          style={{ height: "1rem", width: "1rem" }}
                        />
                      ))}
                  </div>

                  <span className="ml-1 text-gray-500"> ({ratingStars}) </span>

                  {ordersQueue && (
                    <span className="ml-3.5 mt-0.5 text-gray-500">
                      {" "}
                      {ordersQueue} Orders in Queue{" "}
                    </span>
                  )} */}
                </div>

                <div className="mt-7">
                  <Carousel>
                    {/* {items.map((image, i) => ( */}
                      <img src={data?.file_Url} alt="" />
                      <img src={data?.file_Url} alt="" />
                      <img src={data?.file_Url} alt="" />
                    {/* ))} */}
                  </Carousel>
                </div>
              </div>

              <div className="mt-7">
                <p
                  className="text-xl font-bold"
                  style={{ wordSpacing: "1.125px" }}
                >
                  About This Gig
                </p>

                <p
                  className="text-base tracking-wide text-justify"
                  style={{ width: "99%" }}
                >
                 {data?.description}
                </p>

                <Divider className="pt-2" />

                <div
                  className="mt-7 flex items-center justify-between"
                  style={{ width: "98.5%" }}
                >
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-lg"> Type  </span>
                    <span className="text-gray-700 text-base">
                      {" "}
                      {Docid?.Type}{" "}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-gray-500 text-lg">
                      {" "}
                      Categories{" "}
                    </span>
                    <span className="text-gray-700 text-base">
                      {" "}
                      {data?.jobtype}{" "}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-gray-500 text-lg"> Created Date </span>
                    <span className="text-gray-700 text-base">
                      {" "}
                      {data?.CreateDateTime}{" "}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p
                  className="text-xl font-bold"
                  style={{ wordSpacing: "1.125px" }}
                >
                  {" "}
                  About The Seller{" "}
                </p>

                <div className="flex items-center">
                  <Avatar
                    src="https://mui.com/static/images/avatar/1.jpg"
                    alt="person"
                    sx={{ width: "8.25rem", height: "8.25rem" }}
                  />

                  <div className="ml-3.5">
                    <p className="font-bold text-lg"> {data?.firstName} {data?.lastName} </p>

                    <div
                      className="flex items-center"
                      style={{ marginTop: "-0.795rem" }}
                    >
                      {Array(ratingStars)
                        .fill("")
                        .map((letter, i) => (
                          <img
                            key={i}
                            src={star}
                            alt="star"
                            style={{ height: "1rem", width: "1rem" }}
                          />
                        ))}

                      <span className="ml-1.5 text-gray-500">
                        {" "}
                        ({ratingStars}){" "}
                      </span>
                    </div>

                    <button
                      className="border-gray-500 border-1 font-bold tracking-wide rounded-md mt-5"
                      style={{
                        height: "2.565rem",
                        width: "7.255rem",
                        wordSpacing: "1.025px",
                      }}
                    >
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-gray-300 border-1 mt-6">
                <div className="mt-5 ml-6 mr-6 mb-2">
                  <div>
                    <div
                      className="flex items-center justify-between"
                      style={{ width: "50%" }}
                    >
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-base"> From </span>
                        <span className="text-black font-bold tracking-wide text-base">
                          {" "}
                          Pakistan{" "}
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-gray-500 text-base">
                          {" "}
                          Member since{" "}
                        </span>
                        <span className="text-black font-bold tracking-wide text-base">
                          {" "}
                          Aug 2020{" "}
                        </span>
                      </div>
                    </div>

                    <div
                      className="flex items-center justify-between mt-4"
                      style={{ width: "50%" }}
                    >
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-base">
                          {" "}
                          Avg. response time{" "}
                        </span>
                        <span className="text-black font-bold tracking-wide text-base">
                          {" "}
                          2 hours{" "}
                        </span>
                      </div>

                      <div className="flex flex-col pr-2.5">
                        <span className="text-gray-500 text-base">
                          {" "}
                          Last delivery{" "}
                        </span>
                        <span className="text-black font-bold tracking-wide text-base">
                          {" "}
                          5 days{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Divider className="pt-4" />

                  <p className="text-base tracking-wide text-justify leading-6 mt-4">
                    I am software developer I have an experience of 4 years in
                    Angular2+, Cloud Computing, AWS Services, React Native,
                    React JS, NodeJS, MongoDB, Javascript. If you have an idea
                    and want to make it real I can help you in achieving that. I
                    can build any kind of Website, Software and Mobile
                    applications from scratch as well as change or add new
                    features in any kind of Website, Software and Mobile
                    Application. I will deliver your end product which will be
                    easily accessible over the internet in a more efficient way
                    using my most favorite and best skills of Cloud Computing.
                  </p>
                </div>
              </div>

              <div className="mt-11">
                <div className="flex items-center">
                  <p
                    className="text-xl font-bold mt-1.5"
                    style={{ wordSpacing: "1.125px" }}
                  >
                    {reviewsCount} Reviews
                  </p>

                  <div
                    className="flex items-center ml-4"
                    style={{ marginTop: "-0.795rem" }}
                  >
                    {Array(ratingStars)
                      .fill("")
                      .map((letter, i) => (
                        <img
                          key={i}
                          src={star}
                          alt="star"
                          style={{ height: "1rem", width: "1rem" }}
                        />
                      ))}

                    <span className="ml-1.5 text-gray-500">
                      {" "}
                      ({ratingStars}){" "}
                    </span>
                  </div>
                </div>

                <Divider className="pt-1" />

                <div className="mb-11">
                  {review.map((item, i) => (
                    <div key={i} className="mt-3.5">
                      <div className="flex items-center">
                        <Avatar src={item.pic} alt="person" />

                        <div className="mt-3.5 ml-3.5">
                          <p className="font-semibold tracking-wide text-base">
                            {" "}
                            {item.name}{" "}
                          </p>

                          <div
                            className="flex items-center"
                            style={{ marginTop: "-0.875rem" }}
                          >
                            <img
                              src={item.flag}
                              alt="flag"
                              style={{ height: "1.5rem", width: "1.5rem" }}
                            />
                            <span className="ml-2.5 text-gray-500 text-sm">
                              {" "}
                              {item.country}{" "}
                            </span>
                          </div>

                          <div className="flex items-center mt-5">
                            <div
                              className="flex items-center"
                              style={{ marginTop: "-0.795rem" }}
                            >
                              {Array(ratingStars)
                                .fill("")
                                .map((letter, i) => (
                                  <img
                                    key={i}
                                    src={star}
                                    alt="star"
                                    style={{ height: "1rem", width: "1rem" }}
                                  />
                                ))}

                              <span className="ml-1.5 text-gray-500">
                                {" "}
                                ({ratingStars}){" "}
                              </span>
                            </div>

                            <p className="ml-2.5 text-gray-500"> | </p>

                            <span className="text-gray-500 text-sm ml-2 mb-2">
                              {" "}
                              {item.published}{" "}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p
                        className="ml-12 pl-1.5 text-base tracking-wide text-justify leading-6 text-gray-700 mt-4"
                        style={{ width: "80%", marginTop: "0.1545rem" }}
                      >
                        {item.text}
                      </p>

                      <div
                        className="flex items-center"
                        style={{ width: "30%", marginTop: "-0.9765rem" }}
                      >
                        <p
                          className="ml-12 pl-1.5 text-sm font-bold tracking-wide text-justify leading-6 text-gray-700 mt-4"
                          style={{ width: "80%" }}
                        >
                          Helpful?
                        </p>

                        <div className="flex items-center">
                          <IconButton>
                            <ThumbUpOffAltIcon fontSize="small" />
                            <span className="text-sm font-bold tracking-wide text-justify leading-6 text-gray-700">
                              {" "}
                              Yes{" "}
                            </span>
                          </IconButton>

                          <IconButton className="mb-0.5">
                            <ThumbDownOffAltIcon fontSize="small" />
                            <span className="text-sm font-bold tracking-wide text-justify leading-6 text-gray-700">
                              {" "}
                              No{" "}
                            </span>
                          </IconButton>
                        </div>
                      </div>

                      <Divider className="pt-2.5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ flex: 0.05 }} />

            <div
              style={{ flex: 0.3, height: "25.25rem" }}
              className="border-gray-300 border-1 mt-1 sticky top-10"
            >
              <div className="mt-5 ml-6 mr-6 mb-2">
                <div className="w-full flex items-center justify-between">
                  <p className="text-sm font-bold tracking-wide"> Package </p>
                  <p className="text-2xl mt-4 tracking-wide"> {data?.charges} $ </p>
                </div>

                {/* <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>

                <div className="w-full flex items-center">
                  <div className="flex items-center">
                    <ScheduleIcon fontSize="small" />
                    <span> 7 Days Delivery </span>
                  </div>

                  <div className="flex items-center ml-3">
                    <LoopIcon fontSize="small" />
                    <span> 1 Revision </span>
                  </div>
                </div> */}

                {/* <div className="w-full mt-3.5">
                  {services &&
                    services.map((text, i) => (
                      <div key={i} className="flex place-items-center mt-1">
                        <DoneIcon
                          fontSize="small"
                          style={{ fill: "#1dbf73" }}
                        />
                        <span className="ml-1"> {text} </span>
                      </div>
                    ))}
                </div> */}

                <button
                  className="w-full text-white font-bold p-2 rounded-md mt-3.5"
                  style={{ background: "#1dbf73" }}
                >
                  Continue {data?.charges} $
                </button>

                {/* <button
                  className="w-full p-2 rounded-md mt-3.5"
                  style={{ color: "#1dbf73" }}
                >
                  Compare Packages
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
