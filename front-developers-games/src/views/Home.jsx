import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addParticipant from '../redux/actions/mainActions';

function Home() {
  const dispatch = useDispatch();
  const { participants } = useSelector(({ mainReducer }) => mainReducer);
  return (
    <>
      <div>Hola</div>
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
    </>
  );
}

Home.propTypes = {

};

export default Home;
