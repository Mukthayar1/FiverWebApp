import React, { useState, useEffect } from "react";
import HeaderJobs from "../../Components/Jobs/HeaderJobs";
import ListJobs from "../../Components/Jobs/ListJobs";
import Footer from "../../Components/Footer";
import { GetServices, GetJobs } from "../../store/action/GetData";
import useAuth from "../../util/Contex/useAuth";
import { MutatingDots } from "react-loader-spinner";


const Jobs = () => {

  let { auth } = useAuth();

  const [loading, SetLoading] = useState(true);
  const [Services, SetServices] = useState([])
  const [Jobs, SetJobs] = useState([])

  useEffect(() => {
    SetLoading(true)
    GetServices(SetServices, SetLoading)
    GetJobs(SetJobs, SetLoading)
  }, [])
  const MyServices = Services?.filter((data) => data?.email == auth?.email);
  const Myjobs = Jobs?.filter((data) => data?.email == auth?.email);

  console.log('MyServices', MyServices)

  return (
    <>
      <HeaderJobs />
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
          <ListJobs data={auth?.userType == 0 ? Myjobs : MyServices} />
        )}
      </>
      <Footer />
    </>
  );
};

export default Jobs;
