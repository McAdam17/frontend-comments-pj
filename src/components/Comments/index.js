import React,{useState,useEffect} from 'react';
import Comment from '../Comment';
import axios from 'axios';
import {
    CommentsContainer,
    CommentContent
    } from './CommentsElements';

function Comments({editingComment,newComment,deletingComment,deletedComment,updatedComment}) {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/comments')
        .then((comments)=>{
            setData(comments.data);
        })
        .catch(err=>{
            console.log(err);
        });
    },[newComment,deletedComment,updatedComment])

    return (
        <CommentsContainer>
            <CommentContent>
                {
                    data.map((comment)=>{
                        return <Comment key={comment.id} comment={comment} editingComment={editingComment} deletingComment={deletingComment}/>
                    })
                }
            </CommentContent>
        </CommentsContainer>
    )
}

export default Comments
