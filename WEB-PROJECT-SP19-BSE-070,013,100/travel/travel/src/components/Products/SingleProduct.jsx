import React from "react";
import axios from "axios";

import productsService from "../../services/ProductsService";
import { Button, Grid } from "@mui/material";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import userService from "../../services/UserService";

 

const SingleProduct = (props) => {
  const navigate = useNavigate();

  const { product, onDelete } = props;
  // console.log(props);

  return (
    <Grid item xs={3}>
      <h2>
        {product.Name}{" "}
        {userService.isAdmin() && (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                 
                navigate("/products/update/" + product._id);
              }}
            >
              Edit
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                axios
                  .delete("https://localhost:4000/api/products/" + product._id)
                  .then((res) => {
                    console.log(res.data);
                    //   setSending(false);
                    navigate("/products");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )}
      </h2>
      <p>{product.Price}</p>
      <hr />
    </Grid>
  );
};

export default SingleProduct;
