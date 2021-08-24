import React from 'react';

function WorkShopCard({ workShop }) {
  return (
    <div className="workShop-container">
      <h4>{workShop.name}</h4>
    </div>
  );
}

export default WorkShopCard;
