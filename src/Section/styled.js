import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: #eeeeee;
    margin: 10px;
`;

export const SectionTitle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dddddd;
    background-color: white;
    font-weight: bold;
    font-size: large;
    padding-right: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const SectionTitleName = styled.div`
    padding: 15px;
    background-color: white;
    font-weight: bold;
    font-size: large;
    border: none;
`;

export const SectionCheckList = styled.div`
    border: 1px solid #dddddd;
    padding: 20px;
    background-color: white;
`;