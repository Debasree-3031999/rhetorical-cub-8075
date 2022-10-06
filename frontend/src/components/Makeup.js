
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Makeup.css';
import { useSelector } from 'react-redux';
import Star from './Rating'
import Rating from 'react-rating'



// import { Link } from 'react-router-dom';
export default function Makeup(){
    const [data, setData] = useState([])
    const { currentUser } = useSelector((state) => state.user);
    // console.log(currentUser._id,"currrrrrr")
    var uid=currentUser._id;
    console.log(uid)



    const getData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/products"
        )
        const data = await res.data
        setData(data)

        // console.log('data: ', data)

      } catch (error) {
        console.log('error: ', error)
      }

    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleaddCart = (el) => {
    axios.post(`http://localhost:8080/api/cart`, {
      userId: uid,
      productId: el._id,
      quantity: 1,
    });
    alert("Added to cart!");
  };

  const handleSort = (e) => {
    console.log(e.target.value, "select data");
    const sort = e.target.value;
    console.log(sort, "sort");

    if (sort == 1) {
      setData((data) => [...data.sort((a, b) => b.Rating - a.Rating)]);
      console.log(data, "a-b");
    } else if (sort == 2) {
      setData((data) => [...data.sort((a, b) => b.Price - a.Price)]);
      console.log(data, "a-b");
    } else if (sort == 3) {
      setData((data) => [...data.sort((a, b) => a.Price - b.Price)]);
      console.log(data, "b-a");
    }
  };

  return (
    <div className="makeupCont">
      <div>
        <img
          className="background"
          src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg"
          alt="Aleq"
        ></img>
        <div className="banner">
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg"
            alt="banner"
          />
        </div>

        </div>
        



<div className='afterbanner' style={{display:"flex", justifyContent:"space-between"}}>

  <div className='afterbanner_left'style={{marginLeft:"4%"}}>

      <div style={{display:"flex",justifyContent:"space-between"}}>


      <div
        className="afterbanner"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="afterbanner_left" style={{ marginLeft: "4%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <a href="/">
                  {" "}
                  <img
                    src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg"
                    alt="home_icon"
                  />
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "gray",
                }}
              >
                <div> /</div>
                <div>
                  <a
                    style={{ textDecoration: "none", color: "gray" }}
                    href="/makeup"
                  >
                    <span>Makeup</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>Makeup</div>
            <div style={{ color: "gray" }}>-{data.length}</div>
          </div>
        </div>

        <div
          className="afterbanner_right"
          style={{ marginRight: "4%", display: "flex" }}
        >
          <div>
            <select onChange={handleSort}>
              <option>Sort by</option>
              <option value="1">Rating</option>
              <option value="2">Price - High to Low</option>
              <option value="3">Price - Low to High</option>
            </select>
          </div>
        </div>


</div>  
          
          <div id="prodData">
            
            {
              data.map((elem,i) => {
                return (
                  <div key={i}>
                  <Link to={{
                    pathname:`/makeup/${elem._id}`,
                  state:data}}
                  key={i}>
                        <div
                            id="mapDataElem"
                            className="link"
                            key={elem._id.$oid}
                        >
                            <img
                            id="prodDataImage"
                            src={elem.ImageUrl}
                            alt={elem.Title}/>

                            <p>
                            {elem.Title}
                            </p>

                            <p>
                            {elem.Currency}
                            {elem.Price}
                            </p>

                            <p>
                            <Rating
                            emptySymbol="far fa-star fa-0.5x"
                            fullSymbol="fa fa-star fa-0.5x"
                            initialRating={elem.Rating}
                            
                            readonly={true}
                          />
                             {elem.RatingTotal}
                            </p>

                            <div id="prodDataHover">
                            <div>
                                <img style={{margin:"auto",marginTop:"10%"}}
                                src="https://i.ibb.co/QpM4sbW/1077035.png"
                                alt="Wishlist"
                                />
                            </div>
                            
                            <button onClick={()=>handleaddCart(elem)}>ADD TO CART</button>
                            </div>
                        </div>
                        </Link>
                        </div>
                )
              })}
          </div>

      </div>

      <div id="prodData">
        {data.map((elem, i) => {
          return (
            <div key={i}>
              <Link
                to={{
                  pathname: `/makeup/${elem._id}`,
                  state: data,
                }}
                key={i}
              >
                <div id="mapDataElem" className="link" key={elem._id.$oid}>
                  <img
                    id="prodDataImage"
                    src={elem.ImageUrl}
                    alt={elem.Title}
                  />

                  <p>{elem.Title}</p>

                  <p>
                    {elem.Currency}
                    {elem.Price}
                  </p>

                  <p>
                    <img
                      id="mapDataStar"
                      src="https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?w=740&t=st=1655214227~exp=1655214827~hmac=02adf4c8e90961a6603d966c85d2c548b79d9f0c1f8593787d3a3f478999dd1f"
                      alt="Star"
                    />
                    {elem.Rating} {elem.RatingTotal}
                  </p>

                  <div id="prodDataHover">
                    <div>
                      <img
                        style={{ margin: "auto", marginTop: "10%" }}
                        src="https://i.ibb.co/QpM4sbW/1077035.png"
                        alt="Wishlist"
                      />
                    </div>

                    <button onClick={() => handleaddCart(elem)}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
