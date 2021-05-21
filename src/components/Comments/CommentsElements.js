import styled from 'styled-components';

export const CommentsContainer = styled.div`
    
`

export const CommentContent = styled.div`
    width: 50%;
    margin: 10px auto;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 5px 6px 13px -1px rgba(0,0,0,0.7);

    @media screen and (max-width: 768px){
        width: 70%;
    }

    @media screen and (max-width: 480px){
        width: 95%;
    }
`