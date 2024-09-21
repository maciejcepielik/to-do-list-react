import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: ${({ theme }) => theme.color.white};
    display: grid;
    grid-template-columns: minmax(200px, 1fr) auto;
    grid-gap: 20px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const FormButton = styled.button`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.teal};
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
        background-color: ${({ theme }) => theme.color.bondiBlue};
        transform: scale(1.1);
    }

    &:active {
        background-color: ${({ theme }) => theme.color.persianGreen};
    }
`;

export const FormField = styled.input`
    border: 1px solid ${({ theme }) => theme.color.alto};
    height: 38px;
    width: 100%;
    display: inline-block;
    padding: 5px;
`;
