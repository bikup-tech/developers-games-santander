import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Action-Creators
import { loadChallengeDetail } from '../../redux/actions/mainActions';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';

function ChallengeDetail() {
  const dispatch = useDispatch();
  const { challengeDetail, toLoadChallengeDetail } = useSelector(({ mainReducer }) => mainReducer);

  useEffect(() => {
    if (!challengeDetail) {
      dispatch(loadChallengeDetail(toLoadChallengeDetail));
    }
  }, [toLoadChallengeDetail]);

  useEffect(() => {
    console.log(challengeDetail);
  }, [challengeDetail]);

  return (
    <AppWrapper title="Challenge">
      works
    </AppWrapper>
  );
}

export default ChallengeDetail;
