import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api";
import Loader from "../components/Loader";

const ProductDetailed = () => {
  const { id } = useParams();
  const [detailed, setDetailed] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setDetailed(res));
  }, [id]);

  if (!detailed) return <Loader/>

  return (
    <div>
      <h1>{detailed.title}</h1>
      <p>{detailed.price}</p>
      <img src={detailed.images[0]} alt="rasm" />
    </div>
  );
};

export default ProductDetailed;