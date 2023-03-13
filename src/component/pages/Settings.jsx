import * as React from "react";
import { useSearchParams } from "react-router-dom";
import Authenticate from "../customHook/Authenticate";

const Settings = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  Authenticate();

  // The serialize function here would be responsible for
  // creating an object of { key: value } pairs from the
  // fields in the form that make up the query.
  const serializeFormQuery = (form) => {
    let y = {};
    Object.entries(form).forEach((x) => {
      if (x[1]["name"] !== undefined && x[1]["name"]) {
        y[x[1]["name"]] = x[1]["value"];
      }
    });
    return y;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let params = serializeFormQuery(event.target);
    setSearchParams(params);
  };

  return (
    <div>
      <h4>Use Params:</h4>
      <form
        className="col-12 col-md-5 d-flex flex-column border p-3"
        onSubmit={handleSubmit}
      >
        {["setting_one", "setting_two"].map((x) => (
          <div className="input-group mb-3" key={x+'input'}>
            <span className="input-group-text" id="inputGroup-sizing-default">
              {x.replace("_", " ")}
            </span>
            <input
              type="text"
              name={x}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        ))}
        <button className="btn btn-primary">Submit</button>
      </form>

      {["setting_one", "setting_two"].map((x,i) => {
        return (
          <h3 key={x+i}>
            {x}: {searchParams.get(x)}
          </h3>
        );
      })}
    </div>
  );
};
export default Settings;
