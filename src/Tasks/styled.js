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
    border-bottom: 1px solid #dddddd;
    padding: 10px;

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
    background-color: white;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    transition: 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(120, 85%, 39%);

        &:hover {
            background-color: hsl(120, 85%, 55%);
        }
    `};

    ${({ remove }) => remove && css`
        background-color: hsl(0, 85%, 39%);

        &:hover {
            background-color: hsl(0, 85%, 55%);
        }
    `};
`;