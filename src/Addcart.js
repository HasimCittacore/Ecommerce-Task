import { useState } from "react";
import { Button } from "@material-ui/core";
import "./Addcart.css"

export default function AddCart({ cartCount, setCartCount,text }) {
  const [add, setAdd] = useState(false);

  return (
    <>
      <div>
        { text === "Add to cart" ?  <Button variant="outlined" size="small"
          type="button"
          className={
            add ? "btn btn-light btn-lg " : "btn btn-secondary btn-lg "
          }
          onClick={() => {
            setCartCount(add ? cartCount - 1 : cartCount + 1);
            setAdd(!add);
          }}
        >
            { add ? "Remove from " : " Add to " } Cart
        </Button> : <Button variant="outlined" size="small" type="button" className="btn btn-secondary btn-lg"> View Options </Button> }
      </div>
    </>
  );
}
