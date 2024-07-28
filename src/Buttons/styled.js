import styled from "styled-components";

export const ButtonsArrangement = styled.div`
    margin: auto 10px;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-direction: column;
        flex-wrap: wrap;
    }
`;

export const ButtonsButton = styled.button`
    background-color: transparent;
    border: none;
    color: teal;
    margin-left: 10px;
    cursor: pointer;
    transition: 0.5s;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        margin: 0 auto 20px;
    }

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        cursor: not-allowed;
        color: rgb(179, 179, 179);
    }
`;