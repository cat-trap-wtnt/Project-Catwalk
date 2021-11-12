import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import AddOutfit from './AddOutfit';
import axios from 'axios';
import Outfit from './Outfit';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const OutfitCard = ({ outfitList, productId, removeItem }) => {

  return (
    <div key={`outfitItem-${outfitList.product.created_at}`} className="outfit-card">
      <div className="outfit-card__body" key={outfitList.product.created_at}>
        <div className="outfit-card-IMGcontainer">
          <div className="cancel-placeholder__top-right">
            <CancelRoundedIcon sx={{ fontSize: 40 }} onClick={() => removeItem(outfitList.product.id)} />
          </div>
          <div className="outfit-card__image">
            <img alt={outfitList.product.name} src={outfitList.photos} className="outfit-card__image" />
          </div>
        </div>
        <div>
          <p className="product-card__category">{outfitList.product.category}</p>
          <p className="product-card__name">{outfitList.product.name}</p>
          <p className="product-card__price">${outfitList.product.default_price}</p>
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;

      // <div className="product-card__body">
      //   <div className="product-card-IMGcontainer">
      //     <div className="star-placeholder__top-right">
      //       <ComparisonModal
      //         features={product.features}
      //         mainFeatures={product.mainFeatures}
      //         productObj={product.mainProduct}
      //         relatedProductsObj={product.products}
      //       />
      //     </div>
      //     <StylePhotos
      //       key={relatedId}
      //       styleId={id}
      //     />
      //   </div>
      //   <p className="product-card__category">{category}</p>
      //   <p className="product-card__name">{name}</p>
      //   <p className="product-card__price">{defaultPrice}</p>
      //   <StarRating
      //     ratingResults={product.ratings}
      //   />
      // </div>


  // return (
  //   <div className="add-outfit-card">
  //     <div className="outfit-card__body">
  //       <h2>Add to Outfit</h2>
  //       {/* <img className="outfit__overlay__plusIcon" alt="" /> */}
  //       <div className="outfit-card-IMGcontainer">
  //         <h3 className="plusIcon-placeholder__center"><FaPlusCircle size={70} /></h3>
  //         <button type="button" onClick={addComponent}>click to add</button>
  //         {outFits}
  //         <img className="outfit__image" alt="" />
  //       </div>
  //     </div>
  //   </div>
  // );