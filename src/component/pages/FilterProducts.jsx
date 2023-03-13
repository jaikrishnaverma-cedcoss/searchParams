import React, { useContext } from "react";
import useIndexKey from "../customHook/useIndexKey";
import { MyContext } from "../myContext";

const FilterProducts = (props) => {
  const { data, loading, error } = props
  // store users details
  const { state, setState } = useContext(MyContext);

  const getIndex = useIndexKey();

  // handle cart and manage cart products with rspect to stocks also manage cart quantity incr/decr
  const cartHandler = (prod, type = "inc") => {
    let { index } = getIndex(state.cart, "id", prod.id);
    let indexInCart = state.cart.findIndex((item) => item.id == prod.id);
    ["images", "discountPercentage", "stock", "rating"].map((x) => {
      delete prod[x];
    });

    if (indexInCart == -1) {
      state.cart.push({ ...prod, quantity: 1, total: prod.price });
    } else if (
      !(
        (type === "inc" &&
          state.cart[indexInCart].quantity + 1 > data[index].stock) ||
        (type === "dec" && state.cart[indexInCart].quantity - 1 < 0)
      )
    ) {
      state.cart[indexInCart].quantity =
        type == "inc"
          ? state.cart[indexInCart].quantity + 1
          : state.cart[indexInCart].quantity - 1;
      state.cart[indexInCart].total =
        state.cart[indexInCart].price * state.cart[indexInCart].quantity;
    }
    state.cart.forEach((item, i) => {
      if (item.quantity == 0) state.cart.splice(i, 1);
    });

    setState({ ...state, cart: [...state.cart] });
  };
  return (
    <>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Filter Products</h1>
              <p className="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nesciunt eaque hic.
              </p>
              {loading && (
                <img src="1amw.gif" alt="loading" width="100px" />
              )
              }
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            {!loading && (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                {data.length>0 ?
                  data.map((x,i) => (
                    <div className="col" key={JSON.stringify(x)+i}>
                      <div className="card shadow-sm">
                        <img
                          src={x.thumbnail}
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          height="225"
                          alt=""
                        />
                        <div className="card-body">
                          <p className="card-text">{x.title}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{x.price} Rs.</small>
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn addtocart btn-primary"
                                onClick={() => cartHandler(x)}
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )):
                  <h3>No Product found</h3>}

              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default FilterProducts;
