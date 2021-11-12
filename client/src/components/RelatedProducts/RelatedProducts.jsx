/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import ProductLineList from './RelatedProduct_Components/ProductLineList';
import OutFitList from './Outfit_Components/OutFitList';

const RelatedProducts = ({ productId, IDchanger }) => (
  <div className="related-products__container">
    <div className="related-products__inner__container">
      Related Products
      <ProductLineList productId={productId} IDchanger={IDchanger} />
    </div>
    <div className="outfit__inner__container">
      Your Outfit
      <OutFitList productId={productId} />
    </div>
  </div>
);


export default RelatedProducts;
