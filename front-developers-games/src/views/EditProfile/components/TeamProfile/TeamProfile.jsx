import React from 'react'
import PropTypes from 'prop-types'
import {useSelector, useDispatch} from 'react-redux'

function TeamProfile(){
    const dispatch = useDispatch();
    const {} = useSelector(({authReducer})=>authReducer)
    const {} = useSelector(({mainReducer})=>mainReducer)
    return (
        
    );
}


export default TeamProfile;