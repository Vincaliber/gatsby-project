import styled from "styled-components"
const fontColor = "red";
const Button = styled.button `
  color: ${fontColor};
  font-size: ${props => (props.big ? "2em" : "1rem")};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default Button