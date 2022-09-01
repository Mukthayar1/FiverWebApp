import { Card, Image, Popover } from "antd";
import React from "react";
import { HeartFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./style.css"

const ItemJobs = (props) => {
  const { _id, title, file_Url ,charges ,description } = props.item;

  console.log('props.item',props.item)

  const content = (
    <div>
      <p>Save to My first list</p>
    </div>
  );

  return (
    <NavLink to={`/detail/${_id}`}>
      <Card
        className="w-full  xl:w-72 "
        cover={
          <Image
            placeholder={true}
            preview={false}
            height="176px"
            src={file_Url}
          />
        }
        actions={[
          <Popover style={{ backgroundColor: "#000" }} content={content}>
            <HeartFilled style={{ color: "#b5b6ba" }} />
          </Popover>,

          <p>Total Amount $ {charges}</p>
        ]}
      >
        <p>{title}</p>
        {/* <p>{description}</p> */}
      </Card>
    </NavLink>
  );
};

export default ItemJobs;
