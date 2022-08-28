import React, { useState } from "react";
import user from "../../../assets/images/user.jpg";
import ViewDetailsPopup from "../../popup/viewDetailsPopup";
import { useEffect } from "react";
import instance from "../../instance/index";

const VerifiedUsers = () => {
  const [detailPopup, setDetailPopup] = useState(false);
  const [verifiedUserList, setVerifiedUserList] = useState([]);
  const [verifiedUserDetail, setVerifiedUserDetail] = useState({});

  // getting verified users list
  const getAllVerificationUser = () => {
    instance
      .post("admin/getVerifiedUsers")
      .then((res) => {
        console.log("Verification User List >>>", res.data.data.successResult);
        setVerifiedUserList(res.data.data.successResult);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllVerificationUser();
  }, []);

  return (
    <div className="pending_table_body">
      {detailPopup && (
        <ViewDetailsPopup
          verifiedUserDetail={verifiedUserDetail}
          setDetailPopup={setDetailPopup}
          detailPopup={detailPopup}
        />
      )}
      <div className="pending_table">
        <table>
          <tr className="pending_table_header">
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Details</th>
            <th></th>
          </tr>

          <tr className="pending_table_rows">
            <td>
              <img className="pending_table_profile" src={user} alt="" />
            </td>
            <td>Habib</td>
            <td>Habib@gmail.com</td>
            <td>22/2/2020</td>
            <td>
              <i
                onClick={() => {
                  setDetailPopup(true);
                }}
                className="fas fa-eye"
              ></i>
            </td>
            <td></td>
          </tr>

          <tr className="pending_table_rows">
            <td>
              <img className="pending_table_profile" src={user} alt="" />
            </td>
            <td>Ali</td>
            <td>ali@gmail.com</td>
            <td>1/7/2022</td>
            <td>
              <i
                onClick={() => {
                  setDetailPopup(true);
                }}
                className="fas fa-eye"
              ></i>
            </td>
            <td></td>
          </tr>

          <tr className="pending_table_rows">
            <td>
              <img className="pending_table_profile" src={user} alt="" />
            </td>
            <td>Iqbal</td>
            <td>iqbal@gmail.com</td>
            <td>5/4/2022</td>
            <td>
              <i
                onClick={() => {
                  setDetailPopup(true);
                }}
                className="fas fa-eye"
              ></i>
            </td>
            <td></td>
          </tr>

          <tr className="pending_table_rows">
            <td>
              <img className="pending_table_profile" src={user} alt="" />
            </td>
            <td>Ijaaz</td>
            <td>ijaaz@gmail.com</td>
            <td>24/9/2022</td>
            <td>
              <i
                onClick={() => {
                  setDetailPopup(true);
                }}
                className="fas fa-eye"
              ></i>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default VerifiedUsers;
