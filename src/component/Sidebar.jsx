import React, { useContext, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { navlinks } from "./controllerData";
import { MyContext } from "./myContext";
import "./styles/Sidebar.css";
const Sidebar = (props) => {
  // useLocation to get current path
  const location = useLocation();

  // sidebar toggler
  const [toggle, setToggle] = useState(false);
  // store users details
  const { state } = useContext(MyContext);

  return (
    <>
      <header>
        {/* side bar */}
        <aside className={`sidebar sidebar--${toggle ? "active" : "close"}`}>
          <div className="aside__top">
            <button
              className={`toggler`}
              onClick={() => setToggle((prev) => !prev)}
            >
              <i
                className={`bi bi-chevron-double-${toggle ? "left" : "right"}`}
              ></i>
            </button>
          </div>

          {/* users list */}
          <p
            style={{
              color: "white",
              margin: "20px 0px 10px 0px",
              color: "#f0f8ff61",
            }}
          >
            Pages
          </p>
          <ul className="links">
            {navlinks.map((x,i) => (
              <li className="sidebar__link" key={x.toString()+i}>
                <NavLink to={x.path}>
                  <i className={x.icon}></i>
                  {x.path}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
      </header>
      {/* set common body for pages */}
      <main style={{ display: "flex", width: "100vw" }}>
        {/* to sychronize with sidebar give space */}
        <div style={{ width: "90px" }}></div>
        {/* this is the body wrapper */}
        <div className="wrapper">
          {state.loading ? (
            <div className="loading__wrapper">
              <img
                src={process.env.PUBLIC_URL + "/1amw.gif"}
                style={{ width: "10vw" }}
                alt="loader"
              />
              <h3>Loading...</h3>
            </div>
          ) : (
            <div className="col-12">
              <div className="bg-light col-12 d-flex align-items-center justify-content-end">
           
              </div>
              <div className="col-12 px-md-5">
                <p className="text-secondary fw-normal ms-3 mt-3">
                  {location.pathname}
                </p>
                <Outlet />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Sidebar;
