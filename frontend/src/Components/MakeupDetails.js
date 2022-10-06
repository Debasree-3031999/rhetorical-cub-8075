import React from "react";
import { useParams } from "react-router-dom";
import makeups from "./makeups";
import "./makeupDesc.css";
import { MdetailsA } from "./MdetailsA";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function MakeupDetails() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser._id, "currrrrrr");
  var uid = currentUser._id;
  console.log(makeups, "makeups");
  const makeupId = useParams().id;
  const makeupDesc = makeups.find((el) => el._id == makeupId);
  console.log(makeupId, makeupDesc);
  let arr = [];
  let rating = +makeupDesc.Rating;
  let key = 1;
  let fullStar =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Plain_Yellow_Star.png/640px-Plain_Yellow_Star.png";

  let halfStar =
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Half_Star.png?20180308025809";
  for (let i = 1; i <= 5; i++) {
    if (rating >= 1) {
      arr.push(fullStar);
    }
    if (rating > 0 && rating < 1) {
      arr.push(halfStar);
    }
    rating -= 1;
  }

  const handleaddCart = async () => {
    await axios.post(`http://localhost:8080/api/cart`, {
      userId: uid,
      productId: makeupDesc._id,
      quantity: 1,
    });
    toast.success("Added to cart!");
  };

  return (
    <div>
      <div id="productPath">
        <img
          src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg"
          alt="Home icon"
        />
        <p>/ Makeup</p>
        <p style={{ cursor: "pointer" }}>/ {makeupDesc.category}</p>
        <p style={{ cursor: "pointer" }}>/ {makeupDesc.prodEyesHeading}</p>
        <p>/ {makeupDesc.Title}</p>
      </div>

      <div id="prodDetail">
        <div>
          <div id="productdiv">
            <div>
              <div id="productDetailImg">
                <img
                  src={makeupDesc.ImageUrl}
                  alt={makeupDesc.prodEyesHeading}
                />
              </div>

              <div id="productDetailMiniImg">
                <img
                  src={makeupDesc.ImageUrl}
                  alt={makeupDesc.prodEyesHeading}
                />
              </div>
            </div>

            <div id="productDetailPrice">
              <p>{makeupDesc.Title}</p>

              <div id="productDetailPriceRating">
                {arr.map((elem) => {
                  return <img key={key++} src={elem} alt="stars" />;
                })}
                <p>
                  {makeupDesc.Rating} {makeupDesc.RatingTotal}
                </p>
              </div>

              <p>
                {makeupDesc.Currency}
                {makeupDesc.Price}
              </p>

              <button
                style={{ zIndex: 10, cursor: "pointer" }}
                id="productDetailCart"
                onClick={handleaddCart}
              >
                Add to cart
              </button>

              <p id="productDetailsWish">
                <img
                  src="https://i.ibb.co/QpM4sbW/1077035.png"
                  alt="Wishlist"
                />
                Save to Wishlist
              </p>

              <p id="productDetailsSocial">
                Share with friends
                <img
                  src="https://in.sugarcosmetics.com/sharebtn/Whatsapp.svg"
                  alt="Whatsapp"
                />
                <img
                  src="https://in.sugarcosmetics.com/sharebtn/Facebook.svg"
                  alt="Facebook"
                />
                <img
                  src="https://in.sugarcosmetics.com/sharebtn/Twitter.svg"
                  alt="Twitter"
                />
                <img
                  src="https://in.sugarcosmetics.com/sharebtn/Tumblr.svg"
                  alt="Tumblr"
                />
                <img
                  src="https://in.sugarcosmetics.com/sharebtn/Mail.svg"
                  alt="Mail"
                />
                <img
                  src="https://in.sugarcosmetics.com/sharebtn/Linkedin.svg"
                  alt="Linkedin"
                />
              </p>
            </div>
          </div>
        </div>

        <MdetailsA />
        {/* <ProductsDetailOne data={prod} cartData={cartData} />

        <ProductsDetailTwo />

        <ProductsDetailThree />

        <ProductsDetailFour data={alldata} /> */}
      </div>
      <ToastContainer />
    </div>
  );
}
