import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addParticipant from '../redux/actions/mainActions';

import AppWrapper from '../components/AppWrapper/AppWrapper';

function Home() {
  const dispatch = useDispatch();
  const { participants } = useSelector(({ mainReducer }) => mainReducer);
  return (
    <AppWrapper title="Inscribe a tu equipo">
      <div className="prove-scss">Hola</div>
      <button
        type="button"
        onClick={() => {
          dispatch(addParticipant('mou'));
        }}
      >
        clickme
      </button>

      {participants?.map((participant) => (
        <span>{participant}</span>
      ))}
    </AppWrapper>
  );
}

Home.propTypes = {

};

export default Home;
