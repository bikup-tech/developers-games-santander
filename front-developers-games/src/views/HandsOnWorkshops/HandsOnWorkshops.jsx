import React from 'react';

import './HandsOnWorkshops.scss';

// constants
import workshops from '../../constants/workshops';

// components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import WorkShopCard from './components/WorkShopCard';

function HandsOnWorkshops() {
  return (
    <AppWrapper title="Hands-on Workshops">
      <div className="terms">
        <h3 className="terms__subtitle">Attend our Hands-on workshops and train your skills before the competition starts.</h3>
        {
            workshops.map((workShop) => (
              <WorkShopCard
                workShop={workShop}
                key={workShop.name}
              />
            ))
        }
      </div>
    </AppWrapper>
  );
}

export default HandsOnWorkshops;
