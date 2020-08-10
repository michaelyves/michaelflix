/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    background: var(--background);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 6px 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
    opacity: .5;
    border: 1px solid var(--primary);
    color: var(--primary);

    }
`;

export default Button;
