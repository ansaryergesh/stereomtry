import * as actionTypes from './actionTypes';

export const Comments = (state = {
    errMess: null,
    texts: []
}, action) => {
    switch(action.type) {
        case actionTypes.ADD_COMMENT:
            var comment = action.payload;
            return {...state, texts: state.concat(comment)};
        case actionTypes.ADD_COMMENTS:
            return{...state, isLoading: false, errMess: null, texts: action.payload};
        case actionTypes.COMMENTS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, texts: []};
        default:
            return state;
    }
}