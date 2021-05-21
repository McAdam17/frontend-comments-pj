import styled from 'styled-components';

export const CommenterContainer = styled.div`

`

export const CommenterContent = styled.div`
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

export const CommenterForm = styled.form`
    padding: 10px;
    display: flex;
    flex-direction: column;
`
export const InputsConainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CommenterLabel = styled.label`
    span{
        color:red;
    }
`

export const CommenterInput = styled.input`
    margin-bottom: 10px;
`

export const CommenterTextBox = styled.textarea`
    resize: none;
    height: 200px;
`

export const Button = styled.button`
    margin: 5px 0;
    width: max-content;
    align-self: flex-end;
    border: none;
    background-color: #022763;
    color:white;
    cursor: pointer;
    margin-top: 10px;
    padding: 5px;
    border-radius: 3px;

    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: rgb(59,255,185);
        color: black;
    }

    @media screen and (max-width: 480px){
        width: 100%;
    }
`
