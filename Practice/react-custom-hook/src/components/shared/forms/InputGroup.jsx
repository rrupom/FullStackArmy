import styled from "styled-components";
import Label from "../../UI/inputs/Label";
import TextInput from "../../UI/inputs/TextInput";

const Container = styled.div`
  width: 90%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: red;
`;

const InputGroup = ({
  label,
  name,
  value,
  type,
  placeholder,
  error,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        id={name}
        name={name}
        value={value}
        placeholder={placeholder ?? ""}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        error={error}
        type={type}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default InputGroup;
