import Rating from "@material-ui/lab/Rating";

// here receiving the props "stars" to give the rating for the products.Using conditional rendering to show the rating
// and not show the ratings.
export default function RateCart({ stars }) {
  return (
    <>
      {stars ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Rating defaultValue={2} name={stars} size="small" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
