import React from 'react';
import axios from 'axios';
import {AiFillEdit,AiFillCloseSquare} from 'react-icons/ai';
import {
    CommentContainer,
    CommentBar,
    Message,
    Button,
    Info
    } from './CommentElements';

function Comment({comment,editingComment,deletingComment}) {
    const {name,message} = comment;

    const editComment = () =>{
        editingComment(comment);
        window.scrollTo(0,document.body.scrollHeight);
    }

    const deleteComment = ()=>{
        axios.delete(`http://localhost:5000/api/v1/comments/${comment.id}`)
          .then((response) => {
            deletingComment(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <CommentContainer>
            <CommentBar>
                <Button type='edit' onClick={editComment}>
                    <AiFillEdit />
                </Button>
                |
                <Button type='delete' onClick={deleteComment}>
                    <AiFillCloseSquare/>
                </Button>
            </CommentBar>
            <Message>
                {`"${message ? message : ' '}"`}
            </Message>
            <Info>Commented by <span>{name}</span></Info>
        </CommentContainer>
    )
}

export default Comment
