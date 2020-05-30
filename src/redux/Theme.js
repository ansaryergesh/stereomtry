import * as actionTypes from './actionTypes';

export const Theme = (state = {
    errMess: null,
    themes: []
}, action) => {
    switch(action.type) {
        case actionTypes.ADD_THEME:
            return {...state, themes: state.themes.concat(action.payload)};
        default:
            return state;
    }
}