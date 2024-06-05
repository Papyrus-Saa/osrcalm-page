import styled from "styled-components"

const Div = styled.div`
width: 70%;
background-color: ${props => props.theme.colors.primaryColor};
color: ${props => props.theme.colors.textColor};
border-radius: ${props => props.theme.borders.bradius};
`

const Testing = () => {
  return (
    <Div>Testing</Div>
  )
}

export default Testing
