import Rating from "@material-ui/lab/Rating";


export default function RateCart({ stars }) {
  return (
    <>
       { stars ? 
       <div style={{display:"flex", justifyContent:"center" , alignItems:"center"}}>
         <Rating defaultValue={2} name={stars} size="small" />
         </div>
          : 
         <>
          {/* <Rating defaultValue={1} name={stars} /> */}
        </>
       }
    </>
  );
}
