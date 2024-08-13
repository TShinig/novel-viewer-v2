import styled from "styled-components";

export const CardWrapper = styled.section`
    background-color: rgba(47, 44, 51, 0.5);
    width: 32rem;
    height: auto;
    margin: 2rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`

export const Image = styled.img`
    max-width: 10rem;
    max-height: 100%;
    border-radius: 1rem;
`

export const Content = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 2rem;
`

export const Title = styled.h1`
    background-color: transparent;
    color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 0.5rem;
    font-size: 1rem;
`

export const Volume = styled.p`
    background-color: transparent;
    color: #ccc;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 0.5rem;
`

export const Button = styled.button`
    width: 6rem;
    height: 4rem;
    border-radius: 1rem;
    border-style: none;
    background-color: #333;
    cursor: pointer;
    color: #fff;
    align-items: center;
    justify-content: center;
    transition: ease 0.4s all 0.2s;
`

export const Modal = styled.dialog`
    width: 100vw;
    height: 100vh;
    border: none;
    position: fixed;
    top: 0;
`

export const Menu = styled.menu`
    width: 100%;
    height: auto;
    padding: 4rem 1rem;
    position: fixed;
`