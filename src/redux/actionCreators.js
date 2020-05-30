import * as actionTypes from './actionTypes';
// import baseUrl from '../shared/baseUrl';
export const addComment = (comments) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comments
});


export const addTheme = (themes) => ({
    type: actionTypes.ADD_THEME,
    payload: themes
})
export const postComment = (feedback) => (dispatch) => {
    const newComment = Object.assign({date: new Date().toISOString()}, feedback)


    return fetch('/web/create.php',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response =>{
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error =>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {alert(error.message)})
}


export const fetchComments = () => (dispatch) => {
    return fetch('/web/getComment.php',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response =>{
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error =>{
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(texts => dispatch(addComment(texts)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

export const fetchThemes = () => (dispatch) => {
    return fetch('/ar/getTheories.php',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response =>{
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error =>{
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(themes => dispatch(addTheme(themes)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type: actionTypes.COMMENTS_FAILED,
    payload: errmess
});
