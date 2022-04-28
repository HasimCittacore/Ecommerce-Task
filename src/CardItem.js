import RateCart from "./RateCart";
// import { useState } from "react";
import AddCart from "./Addcart";

export default function CardItem({ cartCount, setCartCount }) {

  // Having a array of product datum to get displayed using map function
  const data = [
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Item",
      price1: "40.00",
      price2: "80.00",
      text: "View Options",
      strike: false,
      star: false,
      sale: false,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      price1: "20.00",
      price2: "18.00",
      text: "Add to cart",
      strike: true,
      star: true,
      sale: true,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      price1: "50.00",
      price2: "25.00",
      text: "Add to cart",
      strike: true,
      star: false,
      sale: true,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      price1: "0",
      price2: "40.00",
      text: "Add to cart",
      strike: false,
      star: true,
      sale: false,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      price1: "50.00",
      price2: "25.00",
      text: "Add to cart",
      strike: false,
      star: false,
      sale: true,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Item",
      price1: "120.00",
      price2: "280.00",
      text: "View Options",
      strike: false,
      star: false,
      sale: false,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      price1: "20.00",
      price2: "18.00",
      text: "Add to cart",
      strike: true,
      star: true,
      sale: true,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      price1: "0",
      price2: "40.00",
      text: "Add to cart",
      strike: false,
      star: true,
      sale: false,
    },
  ];

  //   const [add, setAdd] = useState(false);

  return (
    // using map function displaying the datum in the card format.
    // Used Bootstrap to manage the breakpoints as needed 
    <>
      {data.map((data, index) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
            <div className="card h-100">
              <img className="card-img-top" src={data.src} alt="..." />
              {data.sale ? saleBox() : ""}

              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{data.title}</h5>
                  {data.strike && (
                    <span className="text-muted text-decoration-line-through">
                      ${data.price1}
                    </span>
                  )}
                  {!data.strike && `$${data.price1}`} -$
                  {data.price2}
                </div>
                <RateCart key={index} stars={data.star} />
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <AddCart
                    text={data.text}
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

// Using Function to display the item getting sale in the top position using position-absolute
function saleBox() {
  return (
    <div
      className="badge bg-dark text-white position-absolute"
      style={{ top: "0.5rem", right: "0.5rem" }}
    >
      Sale
    </div>
  );
}
