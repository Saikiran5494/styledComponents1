import styled from 'styled-components'

export const BgContainer = styled.div`
display : flex;
border: 1px solid red;
padding: 20px;

@media screen and (max-width: 768px){
  flex-direction: column;
}

`

export const Form = styled.form`
display: flex;
flex-direction: column;
margin: 10px;
width:50%;

@media screen and (max-width: 768px){
  width: 100%;
}
`

export const Heading = styled.h1`
  color : blue;
  font-family : bref-sherif;
  margin-bottom: 10px;
`

export const Label = styled.label`
font-size: 20px;
margin-bottom: 10px;
`

export const Input = styled.input`
border: 1px solid lightblue;
outline: none;
padding: 10px;
margin-bottom: 20px;
font-size: 15px;
`

export const Button = styled.button`
font-size: 20px;
padding: 10px;
background-color: blue;
color: white;
width:120px;
margin-top: 20px;
border: 0;
border-radius: 10px;
`
export const Select = styled.select`
font-size: 15px;
padding: 8px;
border: 1px solid lightblue;

`

export const Div = styled.div`
background-image : ${props => `url(${props.imageUrl})`};
background-size: cover;
height: 50vh;
margin: 10px;
width:50%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
color: white;
padding: 20px;

@media screen and (max-width: 768px){
  width: 100%;
}
`
export const Para = styled.p`
font-size : ${props => props.fontSize}px;

`
