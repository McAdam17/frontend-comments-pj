import React,{useRef,useState} from 'react';
import axios from 'axios';
import validateEmail from '../../utils/validateEmail';
import {areEmpty} from '../../utils/checkForNotEmptyString';
import {
    CommenterContainer,
    CommenterContent,
    CommenterForm,
    CommenterInput,
    CommenterLabel,
    CommenterTextBox,
    InputsConainer,
    Button
    } from './ComenterElements';

function Commenter({comment,addingNewComment,updatingComment,editingComment}) {
    const name = useRef();
    const email = useRef();
    const website = useRef();
    const message = useRef();
    let editMode = false;

    if(comment.id){
        editMode=true;
    }

    if(editMode){
        name.current.value = comment.name ? comment.name : '';
        email.current.value = comment.email ? comment.email : '';
        website.current.value = comment.website ? comment.website : '';
        message.current.value = comment.message ? comment.message : '';
    }

    const commenting = (e) =>{
        e.preventDefault();
        const commentBody = {};
        commentBody.name = name.current.value;
        commentBody.email = email.current.value;
        commentBody.website = website.current.value;
        commentBody.message = message.current.value;

        if(areEmpty([commentBody.name,commentBody.email,commentBody.message])){
            return alert("You can't send empty fields");
        }

        if(!commentBody.name || !commentBody.email){
            return alert('Invalid request, you need a name and an email to do this action.');
        }

        if(!validateEmail(commentBody.email)){
            return alert('Invalid request, you need an valid email to do this action. We only allow letters, numbers and dots. And It must start with a letter.');
        }

        if(editMode){
            commentBody.id = comment.id;
            axios.put('http://localhost:5000/api/v1/comments', commentBody)
              .then((response) => {
                editingComment({});
                updatingComment(response.data);
                window.scrollTo(0,0);
              })
              .catch((error) => {
                console.log(error);
              });
        }else{
            axios.post('http://localhost:5000/api/v1/comments', commentBody)
              .then((response) => {
                addingNewComment(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
        }
        name.current.value = '';
        email.current.value = '';
        website.current.value = '';
        message.current.value = '';
        editMode = false;
    }
    return (
        <CommenterContainer>
            <CommenterContent>
                <CommenterForm>
                    <InputsConainer>
                        <CommenterLabel>Name:<span>*</span></CommenterLabel>
                        <CommenterInput type="text" ref={name}/>
                    </InputsConainer>
                    <InputsConainer>
                        <CommenterLabel>Email:<span>*</span></CommenterLabel>
                        <CommenterInput type="email" ref={email}/>
                    </InputsConainer>
                    <InputsConainer>
                        <CommenterLabel>Website:</CommenterLabel>
                        <CommenterInput type="text" ref={website}/>
                    </InputsConainer>
                    <InputsConainer>
                        <CommenterLabel>Comment:</CommenterLabel>
                        <CommenterTextBox ref={message}/>
                    </InputsConainer>
                    <Button onClick={commenting}>To Comment</Button>
                </CommenterForm>
            </CommenterContent>
        </CommenterContainer>
    )
}

export default Commenter
