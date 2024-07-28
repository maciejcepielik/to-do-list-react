import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: white;
    display: grid;
    grid-template-columns: minmax(200px, 1fr) auto;
    grid-gap: 20px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const FormButton = styled.button`
    color: white;
    background-color: teal;
    padding: 10px;
    border: none;
    justify-self: end;
    cursor: pointer;
    transition: 0.5s;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        grid-row-start: 2;
        width: 100%;
        margin: 5px 0px;
    }

    &:hover {
        background-color: rgb(0, 177, 177);
        transform: scale(1.1);
    }

    &:active {
        background-color: rgb(0, 165, 165);
    }
`;

export const FormField = styled.input`
    border: 1px solid #dddddd;
    height: 38px;
    width: 100%;
    display: inline-block;
    padding: 5px;
`;
