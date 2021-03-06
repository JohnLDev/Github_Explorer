import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
  hasError: boolean
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`
export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #a8a8b3;
    border: 2px solid #fff;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
        border-right: 0;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`
export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    background: #fff;
    border-radius: 5px 5px 0 0;
    width: 90%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    display: flex;
    align-items: center;
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      flex: 1;
      margin: 0 16px;
      strong {
        font-size: 20px;
        color: #303d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbc8d6;
    }
  }
`

export const RemoveButton = styled.button`
  background: #dcdcdc;
  border: 0;
  border-radius: 0 0 5px 5px;
  width: 90%;
  height: 30px;

  color: #363636;
  font-weight: bold;
  text-justify: center;

  display: block;
  text-decoration: none;
  transition: 0.2s;
  margin-bottom: 20px;

  &:hover {
    background: #d3d3d3;
  }
`
