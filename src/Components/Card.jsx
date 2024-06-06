import React from "react";
const productList = [
  {
    id: 1,
    name: "Multi Finish",
    description: "Solvent Cement",
    price: "Solvent Cement",
  },
  {
    id: 2,
    name: "Multi Finish",
    description: "Solvent Cement",
    price: "Solvent Cement",
  },
  {
    id: 3,
    name: "Multi Finish",
    description: "Solvent Cement",
    price: "Solvent Cement",
  },
];

const ProductCard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <h3 className="mb-5">Our Products</h3>
        {productList.map((data) => {
          return (
            <div className="col-4">
              <div className="cardProduct card" style={{ width: "18rem" }}>
                <img
                  src="https://www.selcobw.com/media/catalog/product/cache/fbd356b8f3e9619ed1a59b569255263a/5/0/507460001_01_v13.jpg"
                  className="cardProduct-img-top card-img-top"
                  alt="Product"
                />
                <div className="cardProduct-body card-body">
                  <h5 className="cardProduct-title card-title">{data.name}</h5>
                  <p className="cardProduct-text card-text">
                    {data.description}
                  </p>
                  <a href="#" className="cardProduct-button btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
