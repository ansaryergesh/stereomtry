import React from 'react';

const CommentList = props => {
    return (
        <div className="row">
          {props.comments.map(text => (
            <div key={text.id} className="comment-block">
                 <div className='avatar'>
                                <img className='imgAvatar' src='https://img.favpng.com/17/3/18/computer-icons-user-profile-male-png-favpng-ZmC9dDrp9x27KFnnge0jKWKBs.jpg' />
                            </div>
                  <div className='comment-body'>
                      <p>{text.text}</p>
                      <p className='infoUser'><span className='fa fa-calendar date'></span><span>{text.email}</span></p>
                  </div>
            </div>
          ))}
        </div>
    );
  };
  
  export default CommentList;

