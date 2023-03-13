

import React, { useContext } from "react";
import { MyContext } from "../myContext";
// Cart details showing
const ListProducts = () => {
      // store users details
  const {state,setState} = useContext(MyContext)
  let table=state.users
  // delete list row
  const deleteThis = (i) => {
      state.cart.splice(i, 1);
    setState({ ...state });
  };

  if (!Array.isArray(table)) {
    let obj = {};
    Object.entries(table).forEach((x) => {
      obj[x[0]] = x[1];
    });
    table = [obj];
  }

  return (
    <div className="d-flex flex-wrap justify-content-center overflow-scroll p-4 tabdiv">
      <table className="table table-striped table-hover border">
        <thead>
          <tr>
            {table.length == 0 && <th>No Data Available</th>}
            {table.length > 0 &&
              Object.keys(table[table.length - 1]).map((x) => (
                <th scope="col" key={x[0]+'th'}>{x.replaceAll("_", " ")}</th>
              ))}
            {table.length > 0 && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {table.length > 0 &&
            table.map((row, i) => {
              return (
                <tr key={JSON.stringify(row)+i+'tr'}>
                  {Object.keys(row).map((val,j ) => (
                    <td key={row[val]+j}>{row[val]}</td>
                  ))}
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteThis(i)}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListProducts;