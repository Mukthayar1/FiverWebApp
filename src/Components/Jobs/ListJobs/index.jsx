import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "antd";
import { Card } from "antd";
// import { fetchListJobs } from "../../../store/action/jobs";
import ItemJobs from "../ItemJobs";


const ListJobs = ({data}) => {
  const { Meta } = Card;
  const dispatch = useDispatch();
  // const listJobs = useSelector((state) => state.jobs.listJobs);
  // console.log({ listJobs });

  const count = 12;
  const [pageSize, setPageSize] = useState({
    data: data,
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0
  });

  useEffect(() => {
    // dispatch(fetchListJobs());
    setPageSize({
      data,
      totalPage: data.length / count,
      current: 1,
      minIndex: 0,
      maxIndex: count
    });
  }, [dispatch, setPageSize]);

  console.log('data',data)

  const handleChange = useCallback(
    (page) => {
      setPageSize({
        current: page,
        minIndex: (page - 1) * count,
        maxIndex: page * count
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    [setPageSize]
  );

  return (
    <div className="mx-12 xl:mx-0 xl:container border-b pb-10 mt-10 xl:pb-20 xl:mt-20">
      <div className="grid grid-cols-1 mb-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item, index) => {
          return (
            index >= pageSize.minIndex &&
            index < pageSize.maxIndex && (
              <div
                key={item._id}
                className="col-span-1 mb-4 md:mr-4 lg:mr-6 xl:mb-8"
              >
                <ItemJobs item={item} />
              </div>
            )
          );
        })}
      </div>

      <Pagination
        onChange={handleChange}
        pageSize={count}
        current={pageSize.current}
        total={data.length}
        className="text-center"
      />
    </div>
  );
};

export default ListJobs;
