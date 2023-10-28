import styled from "styled-components";

export const HomeBodyContainer = styled.div`
    min-height: 100vh;
`
export const HomeHeading = styled.h1`
    color: Black;
    text-align: center;
    font-family: 'Poppins';
`
export const HomeFormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    background-color: green;
    margin: auto;
    max-width: 700px;

    @media (max-width: 540px) {
        flex-direction: column;
        margin: 10px;
    }
`
export const HomeFormInput = styled.input`
    padding: 10px 15px;
    margin: 20px;
    margin-right: 10px;

    @media (max-width: 540px) {
        margin: 20px;
        margin-bottom: 10px; 
    }

    @media (min-width: 541px) {
        width: 500px;
    }
`
export const HomeFormSubmitButton = styled.button`
    padding: 10px 15px;
    margin: 20px;
    margin-left: 10px;
    
    @media (max-width: 540px) {
        margin: 20px;
        margin-top: 10px; 
    }

    @media (min-width) {
        width: 150px;
    }
`

export const HomeErrorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 700px;

    @media (max-width: 540px) {
        flex-direction: column;
        margin: 10px;
    }
`

export const HomeErrorMessage = styled.p`
    color: Red;
`