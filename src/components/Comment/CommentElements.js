import styled from 'styled-components';

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    padding: 5px;
    padding-bottom: 20px;
    border-bottom: 2px solid #000;
`

export const CommentBar = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Button = styled.button`
    border: none;
    cursor: pointer;
    margin: 3px 5px;
    padding: 3px 15px;
    color: white;
    background-color: #022763;

    &:hover{
        background-color: ${({type}) => (type==='edit' ? '#DE6F04' : type === 'delete' ? '#F51112' : 'rgb(59,255,185)')};
    }
`

export const Message = styled.p`
    width: 100%;
    text-align: center;
`

export const Info = styled.p`
    color: gray;
    span{
        color:black;
        font-weight: 700;
    }
`