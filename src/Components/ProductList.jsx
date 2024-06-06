// src/ProductList.js
import React from "react";
import ProductCardComp from "./ProductCardComp";
// import "./ProductList.css"; // Import the CSS file for styling
import productImg from "../assets/image/productBanner.png";

const products = [
  {
    id: 1,
    name: "Timber",
    price: 29.99,
    image:
      "https://acrelanetimber.co.uk/content/images/thumbs/0002364_timber_460.jpeg",
    description:
      "Timbers available of all the sizes and can also provide special orders",
  },
  {
    id: 2,
    name: "Rafter Square",
    price: 39.99,
    image: "https://i.ebayimg.com/images/g/cxAAAOSwHGllp-Ak/s-l1600.webp",
    description:
      "Rolson 300mm Aluminium Rafter Square, a lightweight and durable measuring tool",
  },
  {
    id: 3,
    name: "Gloves",
    price: 49.99,
    image: "https://i.ebayimg.com/images/g/u6kAAOSw3LFlp8q1/s-l960.webp",
    description: "Rolson Gloves better grip on rocks and on every material.",
  },
  {
    id: 4,
    name: "Multifinish",
    price: 59.99,
    image:
      "https://www.selcobw.com/media/catalog/product/cache/362735fedd794dfeacba982736806e38/5/0/507460001_01_v14.jpg",
    description:
      "Suitable for use on a wide range of backgrounds, Thistle MultiFinish is a gypsum finish plaster.",
  },
  {
    id: 5,
    name: "Pinkgrip",
    price: 59.99,
    image:
      "https://www.selcobw.com/media/catalog/product/cache/362735fedd794dfeacba982736806e38/5/2/527680681_01_v24.jpg",
    description:
      "Suitable for internal and external use.PINK GRIP's 'direct bond' properties means that it will stick to virtually anything",
  },
  {
    id: 6,
    name: "Gripfill",
    price: 59.99,
    image:
      "https://www.selcobw.com/media/catalog/product/cache/362735fedd794dfeacba982736806e38/5/2/527680041_01_v28.jpg",
    description:
      "EVO-STIK GRIPFILL™ is a multi-purpose, high-strength, solvent-based gap-filling adhesive, which sticks to almost any building material.",
  },
  {
    id: 7,
    name: "Non Slip wall Adhesive",
    price: 59.99,
    image:
      "https://www.selcobw.com/media/catalog/product/cache/362735fedd794dfeacba982736806e38/5/2/527732478_01.jpg",
    description:
      "Dunlop RX-1000 Non-Slip Wall Tile Adhesive for fixing ceramic and mosaic wall tiles in kitchens, bathrooms and domestic showers.",
  },
  {
    id: 8,
    name: "Combination Square",
    price: 59.99,
    image:
      "https://www.selcobw.com/media/catalog/product/cache/362735fedd794dfeacba982736806e38/4/3/436150361_01_v7.jpg",
    description:
      "A heavy duty, die-case aluminium combination square with a 300mm hardened steel blade and clear metric and imperial graduations.",
  },
  {
    id: 9,
    name: "Boot and Shoe Scrubber",
    price: 59.99,
    image: "https://www.rolsontools.com/wp-content/uploads/2019/08/61006-1.jpg",
    description:
      "Heavy duty boot/shoe scrubber, made from durable steel & hardwood, portable for convenient use includes mounting hardware, dimensions: 230 x 152 x 115mm",
  },
  {
    id: 10,
    name: "SandPaper",
    price: 59.99,
    image:
      "https://www.rolsontools.com/wp-content/uploads/2019/08/24509_pack-1.jpg",
    description:
      "An assortment of extra fine, fine, medium, & coarse sheets.Ideal for sanding wood, painted surfaces, and plastic",
  },
  {
    id: 11,
    name: "SandPaper",
    price: 59.99,
    image: "https://www.rolsontools.com/wp-content/uploads/2021/05/61123-1.jpg",
    description:
      "This pack contains both of our roller sleeve types. We have one style manufactured from a medium pile and one from foam, both for good paint absorption and release.",
  },
  {
    id: 11,
    name: "Handsaw",
    price: 59.99,
    image: "https://www.rolsontools.com/wp-content/uploads/2019/09/58377.jpg",
    description:
      "Our dynabite 505mm crosscut saw has 7TPI and is laquered for a superior cutting action.",
  },
  {
    id: 12,
    name: "Handsaw",
    price: 59.99,
    image: "https://www.rolsontools.com/wp-content/uploads/2019/08/12182-1.jpg",
    description:
      "1 1/2lb Hand Axe With fibreglass handle, rubber grip & sheath",
  },
  {
    id: 13,
    name: "200mm Adj Wrench Dipped Handle",
    price: 59.99,
    image: "https://www.rolsontools.com/wp-content/uploads/2019/08/11218-1.jpg",
    description:
      "Adjustable Wrench 200mm adjustable wrench with drop forged heat treated steel, fully polished jaw faces with rubber dipped comfort grip.",
  },
  {
    id: 14,
    name: "Utility Knife",
    price: 59.99,
    image:
      "https://www.rolsontools.com/wp-content/uploads/2022/07/62821-3-scaled.jpg",
    description:
      "A handy set of 3 utility knives in 3 different widths. All come with a set of 10 replacement blades",
  },
  {
    id: 14,
    name: "Folding Tradesman Knife",
    price: 59.99,
    image: "https://www.rolsontools.com/wp-content/uploads/2019/08/62841-1.jpg",
    description:
      "Tradesman Knife Manufactured with strong plastic body and belt clip on reverse. Features quick blade change mechanism. ",
  },
];

const ProductList = () => {
  return (
    <>
      <img src={productImg} width="100%" />
      <div className="product-list">
        {products.map((product) => (
          <ProductCardComp key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
