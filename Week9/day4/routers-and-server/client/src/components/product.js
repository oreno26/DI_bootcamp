import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Product = (props) => {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const params = useParams();

  useEffect(() => {
    fetch(`api/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  const remove = () => {
    fetch(`api/products/${params.id}`, {
      method: "DELETE",
    });
    alert("noooo im gone!");
  };

  const edit = (e) => {
    e.preventDefault();
    fetch(`api/products/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    })
      .then((res) => res.json())
      .then((data) => setProduct (data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>product page!</h1>
      <div>
        form to update product
        <form onSubmit={edit}>
          name: <input type="text" onChange={(e) => setName(e.target.value)} />
          price:{" "}
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
          <input type="submit" value="submit" />
        </form>
      </div>
      <div>
        to delete
        <button onClick={remove} value="delete">
          <Link to={`/`}>Remove Me :O</Link>
        </button>
      </div>
      {product.map((item) => {
        return (
          <div key={item.id}>
            <h2> {item.name} </h2>
            <h3>{item.price} </h3>
            <Link to={`/`}>Show all</Link>
          </div>
        );
      })}
    </>
  );
};

export default Product;
