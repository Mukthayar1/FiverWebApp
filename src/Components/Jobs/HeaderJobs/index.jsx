import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../store/action/auth";
import { Menu, Dropdown, Space } from "antd";
import { UserOutlined, CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { fetchTitleJobs } from "../../../store/action/jobs";
const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const me = useSelector((state) => state.user.me);
  const title = useSelector((state) => state.jobs.titleJobs);
  useEffect(() => {
    dispatch(fetchTitleJobs());
  }, [dispatch]);

  const handleSignOut = () => {
    dispatch(
      signOut(() => {
        if (navigation.location.pathname === "/me") {
          navigation("/");
        }
      })
    );
  };

  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => setSideBar(!sideBar);

  const [showOption, setShowOption] = useState(false);
  const handleShowOption = () => {
    setShowOption(!showOption);
  };

  return (
    <header className="xl:p-4 xl:pb-0">
      <div className="grid grid-cols-3 mx-auto h-16 border-b md:border-0  md:px-0 md:container xl:pl-20  xl:flex xl:justify-between  ">
        {/* responsive header */}
        <div className="col-span-3 relative grid grid-cols-3 z-0 xl:hidden  md:grid-cols-8 ">
          <p
            onClick={handleSideBar}
            className="pl-6 pt-5 col-span-1 md:col-start-1 md:pl-16 md:pt-7 lg:pt-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 z-20 md:text-black lg:text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </p>

          {/* SideBar */}
          <div
            className={
              sideBar
                ? "w-full left-0   z-50  fixed transition duration-400 ease-linear "
                : "-left-full   z-50 fixed transition duration-400 ease-linear "
            }
          >
            <div
              onClick={handleSideBar}
              className={
                sideBar
                  ? "bgSideBar  fixed z-50 h-full right-0 duration-400 ease-linear w-1/2 md:w-3/5 lg:w-2/3 "
                  : "fixed z-50  -right-full"
              }
            ></div>
            <div className=" bg-white transition duration-600 ease-linear w-1/2 md:w-2/5 lg:w-1/3">
              <div className="ml-5 pt-5 ">
                <div className="grid grid-cols-3">
                  {me ? (
                    <p className="text-base">Hello, Kudo</p>
                  ) : (
                    <NavLink className="col-span-2 " to="/signin">
                      <button className=" bg-green-500 text-base rounded text-white p-2 md:w-1/2">
                        Join Clancers INC
                      </button>
                    </NavLink>
                  )}
                  <span
                    onClick={handleSideBar}
                    className="col-start-3 text-center text-gray-500 text-2xl"
                  >
                    <CloseOutlined />
                  </span>
                </div>
                <ul className="pl-2 pt-4">
                  <li className="py-2 ">
                    <NavLink
                      to="/signin"
                      className="text-base text-gray-500 hover:text-gray-500"
                    >
                      Signin
                    </NavLink>
                  </li>
                  <li className="py-2 text-base text-gray-500">
                    Browse Categories
                  </li>
                  <li className="py-2 text-base text-gray-500">Explore</li>
                  <li className="py-2 text-base text-gray-500">
                    Clancers INC Pro
                  </li>
                  <li className="py-2 text-base text-gray-500">
                    Clancers Business
                  </li>
                </ul>
                <div className="pb-64 pt-8 pl-2">
                  <h4 className="text-gray-500 text-base">General</h4>
                  <hr />
                  <ul>
                    <li className="text-gray-500 py-2 text-base">Home</li>
                    <li className="text-gray-500 py-2 text-base">English</li>
                    <li className="text-gray-500 py-2 text-base">$USD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End sidebar */}

          <NavLink
            to="/"
            aria-label="Back to homepage"
            className="pt-4 pl-6  xl:hidden md:col-start-2 md:pl-1 md:pt-6 lg:pt-4"
          >
            <img src={'https://firebasestorage.googleapis.com/v0/b/clancers-inc.appspot.com/o/w1.jpeg?alt=media&token=2ee46425-98c8-4a55-af50-27f76eaedf0d '}
              style={{ height: 65, width: 100, marginTop: -20, marginRight: 20 }}
            />

          </NavLink>

          <NavLink
            to="/"
            aria-label="Back to homepage"
            className="pt-4 pl-6 hidden xl:block md:col-start-2 md:pl-1"
          >
            <img src={'https://firebasestorage.googleapis.com/v0/b/clancers-inc.appspot.com/o/w1.jpeg?alt=media&token=2ee46425-98c8-4a55-af50-27f76eaedf0d '}
              style={{ height: 65, width: 100, marginTop: -20, marginRight: 20 }}
            />
          </NavLink>

          {me ? (
            <div className="relative inline-block text-center md:col-start-7  lg:mx-auto">
              <div onClick={handleShowOption} className="text-black pt-1.5">
                <UserOutlined
                  style={{
                    paddingLeft: "3.5rem",
                    paddingTop: 6,
                    fontSize: "2rem",
                  }}
                />
              </div>
              {/* {showOption && (
                <div
                  className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <NavLink
                      to="/me"
                      className="text-gray-700 block text-left px-4 py-2 text-sm font-medium"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Profile
                    </NavLink>

                    <button
                      onClick={handleSignOut}
                      type="button"
                      className="text-gray-700 block w-full text-left px-4 pb-2 text-sm font-medium"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )} */}
            </div>
          ) : // <>
            //   <NavLink
            //     to="/signin"
            //     className="text-font-semibold text-base font-semibold text-center mt-5 text-gray-600 md:col-start-7 md:text-black hidden md:block lg:text-black "
            //   >
            //     Sign In
            //   </NavLink>
            //   <NavLink
            //     to="/signin"
            //     className="text-font-semibold text-base font-semibold text-center mt-5 text-gray-600 md:mr-16  md:col-start-8 md:text-black lg:h-7 lg:rounded lg:text-white lg:border-green-600 lg:bg-green-500 "
            //   >
            //     Join
            //   </NavLink>
            // </>
            null}
        </div>

        {/* End responsive header */}

        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="pt-3 xl:block hidden md:hidden sm:flex sm:items-center p-2 col-start-2"
        >
          <img src={'https://firebasestorage.googleapis.com/v0/b/clancers-inc.appspot.com/o/w1.jpeg?alt=media&token=2ee46425-98c8-4a55-af50-27f76eaedf0d '}
            style={{ height: 65, width: 100, marginTop: -20, marginRight: 20 }}
          />
        </NavLink>

        <div className="relative w-1/4 -ml-32 pb-7 mt-1 flex">
          <SearchOutlined
            className="text-xl text-black absolute left-1 top-1 z-20 "
            style={{ color: "#9ca3af", height: '12px', width: '12px' }}
          />
          <div className="flex items-center">
            <input
              className="w-3/4 pl-6 py-2 rounded-tl rounded-bl outline-none border"
              type="text"
              placeholder="Find Services"
            />
            <button className=" py-2 px-4 border bg-green-500 border-green-500 text-white rounded-tr rounded-br">
              Search
            </button>
          </div>
        </div>

        <ul className="mb-4 items-stretch mr-14 hidden space-x-3 xl:flex">
          <li className="flex">
            <NavLink
              to="/"
              className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base"
            >
              Clancers Business
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/"
              className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base "
            >
              Explore
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/"
              className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base "
            >
              Become a Seller
            </NavLink>
          </li>
          {me ? (
            <li className="flex">
              <NavLink
                to="/me"
                className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base "
              >
                Hi, {me.name}
              </NavLink>
              <button
                onClick={handleSignOut}
                className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base "
              >
                Sign out
              </button>
            </li>
          ) : (
            <>
              <li className="flex">
                <NavLink
                  to="/signin"
                  className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base "
                >
                  Sign In
                </NavLink>
              </li>
              <li className="flex mt-2">
                <NavLink
                  to="/signin"
                  className="flex items-center px-6 h-8 -mb-1 bg-transparent  text-green-500 text-base font-semibold border border-green-500  rounded hover:text-white hover:bg-green-500 "
                >
                  Join
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="border-b border-t border-gray-300 hidden md:block ">
        <div className="container flex flex-auto flex-wrap text-center">
          {title.slice(0, 10).map((item) => {
            return (
              <Space
                key={item._id}
                className=" mt-3 md:mr-3 lg:mr-5 xl:mr-8 h-10 "
                direction="vertical"
              >
                <Space wrap>
                  <Dropdown
                    overlay={
                      <Menu className="grid grid-cols-6  w-auto ml-40">
                        {item.subTypeJobs.map((subType) => {
                          return (
                            <Menu.Item key={subType._id} className="col-span-1">
                              <p className="text-base">{subType.name}</p>
                            </Menu.Item>
                          );
                        })}
                      </Menu>
                    }
                  >
                    <p className="subType cursor-pointer text-base text-gray-600 font-medium">
                      {item.name}
                    </p>
                  </Dropdown>
                </Space>
              </Space>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
