import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import { Detail } from "../detail/Detail";

export const DetailContainer = () => {
  const [product, setProduct] = useState({});
  const { detailId } = useParams();
  console.log(detailId, "useparam 333");

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, "items", `${detailId}`);
    getDoc(queryProduct).then((resp) =>
      setProduct({ id: resp.id, ...resp.data() })
    );
  }, [detailId]);
  console.log(product);

  return (
    <div>
      <Detail product={product} />
    </div>
  );
};
