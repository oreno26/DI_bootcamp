import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  const [Products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/products/");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const searchForProduct = async () => {
    try {
      const res = await fetch(`/api/products/search?q=${searchText}`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const add = (e) => {
    e.preventDefault();
    fetch("/api/products/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  return (
    <div>
      <h1>iShop</h1>
      <div>
        search{" "}
        <input onChange={(e) => setSearchText(e.target.value)} name="search" />
        <button onClick={searchForProduct}>search</button>
      </div>
      <div>
        <h4>ADD iTem</h4>
        <form onSubmit={add}>
          name: <input type="text" onChange={(e) => setName(e.target.value)} />
          price:{" "}
          <input type="price" onChange={(e) => setPrice(e.target.value)} />
          <input type="submit" value="submit" />
        </form>
      </div>
      {Products.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "inline-block",
              margin: "20px",
              border: "5px black double",
              borderRadius: "45px", 
              width: "150px",
              padding: "15px",
              
            }}
          >
            <h2> {item.name} </h2>
            <h3>{item.price} </h3>
            <Link to={`/${item.id}`}>Show</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
