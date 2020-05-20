import * as actionTypes from './actionTypes';
import { baseUrl} from '../shared/baseUrl';

export const addComment = (comments) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comments
});

export const postComment = (feedback) => (dispatch) => {
    const newComment = {feedback}

    return fetch('/web/addComment.php',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
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
        .catch(error => {console.log('Something went wrong', error.message)})

}


export const fetchComments = () => (dispatch) => {
    return fetch('/web/getComment.php')
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

export const commentsFailed = (errmess) => ({
    type: actionTypes.COMMENTS_FAILED,
    payload: errmess
});
