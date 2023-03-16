import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClient } from "pexels";

const APIkey = "a1CttLIkhjzGmLXaU7eIu2TgMAL0cxiffANDopyvyO8XJg4Um07qX2HW";
const client = createClient(APIkey);
// client.photos.search({ query, per_page: 30 }).then(photos => console.log(photos));
const Page = (props) => {
  const [photos, setPhotos] = useState([]);
  let query = props.theme;
  const params = useParams();
  !params.q ? (query = props.theme) : (query = params.q);

  useEffect(() => {
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=30`;
    const gallery = fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: APIkey,
      },
    })
      .then((res) => res.json())
      .then((data) => setPhotos(data.photos))
      .catch((err) => console.error(err));
  }, [query]);

  //   const params = useParams();
  //   const changeImg = (params) => {
  //     const url = `https://api.pexels.com/v1/search?query=${params.q}&per_page=30`;
  //     const gallery = fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: APIkey,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setPhotos(data.photos))
  //       .catch((err) => console.error(err));
  //   };

  return (
    <>
      <div style={{ display: "inline-block" }}>
        <Link to={"/mountain"}> MOUNTAIN </Link>
        <Link to={"/beach"}> BEACH </Link>
        <Link to={"/bird"}> BIRD </Link>
        <Link to={"/food"}>FOOD </Link>
      </div>
      <div>
        <div style={{ backgroundColor: "black" }}>
          {photos.map((elem) => {
            return (
              <img
                src={elem.src.small}
                alt={elem.alt}
                style={{ margin: "5px", border: "2px solid red" }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Page;
