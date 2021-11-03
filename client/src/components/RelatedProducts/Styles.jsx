import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Styles = ({ styleId }) => {
  const [style, setStyle] = useState([]);
  let imgUrl;
  let name;

  useEffect(() => {
    if (styleId) {
      axios.get(`products/${styleId}/styles`)
        .then((results) => {
          setStyle(results.data.results);
        })
        .catch((err) => console.error(err));
    }
  }, [styleId]);

  if (style[0]) {
    const photosArr = style[0].photos;
    name = style[0].name;
    imgUrl = photosArr[0].thumbnail_url;
  }

  return (
    <div>
      <img src={imgUrl} alt={name} />
    </div>
  );
};

export default Styles;