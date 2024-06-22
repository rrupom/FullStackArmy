import styled from "styled-components";

const fontSizes = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.2rem",
};

const BaseButton = styled.button`
  border: none;
  border-radius: 0.15rem;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
`;

const PrimaryButton = styled(BaseButton)`
  background-color: red;
  color: white;
`;

const App = () => {
  return (
    <div>
      <h1>Styled Component</h1>
      <BaseButton dark size="sm">
        I am small button
      </BaseButton>
      <BaseButton size="md">I am medium button</BaseButton>
      <BaseButton size="lg">I am large button</BaseButton>
      <BaseButton>No size button</BaseButton>
      <PrimaryButton>Primary Button</PrimaryButton>
    </div>
  );
};

export default App;
