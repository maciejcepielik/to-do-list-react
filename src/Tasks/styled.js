import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    padding: 10px 0;

    ${({ hidden }) => hidden && css`
        display: none;
    `};
`;

export const Task = styled.span`
    padding: 0 5px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `};
`;

export const TasksButton = styled.button`
    background-color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
    transition: 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.malachite};

        &:hover {
            filter: brightness(120%);
        }
    `};

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.milanoRed};

        &:hover {
            filter: brightness(130%);
        }
    `};
`;