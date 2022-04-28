import { useState } from "react";
import { Button } from "@material-ui/core";


export default function AddCart({ cartCount, setCartCount, text }) {
  const [add, setAdd] = useState(false);

  return (
    <>
      <div>

         {/* Used conditional rendering to display the button as required */}
         {/* If the text is "Add to Cart" display {Add to and Remove from} 
         Cart button ,else display View Options button without any functionalities  */}

        {text === "Add to cart" ? (
          <Button
            variant="outlined"
            size="small"
            type="button"
            className={
              add ? "btn btn-secondary btn-lg " : "btn btn-secondary btn-lg "
            }
//  onclick the button the cart gets added to 1 and in another click it will get removed and also negating the add state value
// if adding show remove from cart else show add from cart. 

            onClick={() => {
              setCartCount(add ? cartCount - 1 : cartCount + 1);
              setAdd(!add);
            }}
          >
            {add ? "Remove from " : " Add to "} Cart
          </Button>
        ) : (
          <Button
            variant="outlined"
            size="small"
            type="button"
            className="btn btn-secondary btn-lg"
          >
            
            View Options
          </Button>
        )}
      </div>
    </>
  );
}
