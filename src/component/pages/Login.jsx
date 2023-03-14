import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWrappedContext } from "../customHook/useMyContext";
import { MyContext } from "../myContext";

const Login = () => {
  //get all dataset from redux which is datahubType
  const { state, setState } = useWrappedContext(MyContext);
  // useRef for displaying error message ex: wrong password
  const msg = useRef(null);
  // this hook for navigate through router
  const navigate = useNavigate();

  // if Already loggedIn
  useEffect(() => {
    if (Object.keys(state.session).length !== 0) navigate("/Profile");
  }, [state]);

  //   handle form Submit for login and sign up both also don validation here and error msg propogate
  const AuthHandler = (e) => {
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    msg.current.innerText = "";
    // if for login
    let details = state.users.filter(
      (x) => x.email === email && x.password === password
    );
    if (details.length === 1) {
      navigate("/profile");
      setState({ ...state, session: details[0] });
      e.currentTarget.reset();
    } else {
      msg.current.innerText = "wrnong Username or Password";
    }
  };

  return (
    <>
      <div className="row justify-content-center mx-auto w-100">
        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex justify-content-center py-0">
          <div className="credits">
            <h4 ref={msg} className="fs-6 text-danger m-0 text-center"></h4>
          </div>
          </div>
          <div className="card m-3">
            <div className="card-body">
              <div className="p-2">
                <h5 className="card-title text-center pb-0 fs-4">
                  Login to Your Account
                </h5>
                <p className="text-center small">
                  Enter your email & password to login
                </p>
              </div>
              <form
                className="row g-3 needs-validation"
                onSubmit={(e) => {
                  e.preventDefault();
                  AuthHandler(e);
                }}
              >
                <div className="col-12">
                  <label htmlFor="yourUsername" className="form-label">
                    Email
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="yourUsername"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your username.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="yourPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="yourPassword"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your password!
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="remember"
                      value="true"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100" type="submit">
                    Login
                  </button>
                </div>
                <div className="col-12">
                  <p className="small mb-0">
                    <Link to={"/signup"}>Create an account?</Link>
                  </p>
                  <small className="text-secondary">
                    HINT: email:'jai@gmail.com' &nbsp; password:'2222'
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
