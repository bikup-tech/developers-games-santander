import React from 'react';

// TODO: html siguiendo el modelo
function WorkShopCard({ workShop }) {
  return (
    <div className="workShop-container">
      <h4>{workShop.name}</h4>
    </div>
  );
}

export default WorkShopCard;
