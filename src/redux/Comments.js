import * as actionTypes from './actionTypes';

export const Comments = (state = {
    errMess: null,
    comments: []
}, action) => {
    switch(action.type) {
        case actionTypes.ADD_COMMENT:
            return {...state, comments: action.payload};
        default:
            return state;
    }
}