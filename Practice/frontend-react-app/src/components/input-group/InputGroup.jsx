const InputGroup = ({ text, inputType, fieldFor }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginBottom: "1rem",
      }}
    >
      <label
        style={{
          fontFamily: "Arial",
          fontSize: "1rem",
          color: "#424242",
          fontWeight: "bold",
        }}
        htmlFor={fieldFor}
      >
        {text}
      </label>
      <input
        type={inputType}
        id={fieldFor}
        style={{
          padding: "0.5rem 1rem",
          outline: "none",
          border: "1px solid #ddd",
          fontFamily: "Arial",
          fontSize: "0.9rem",
          borderRadius: "0.15rem",
          color: "#666",
        }}
      />
    </div>
  );
};

export default InputGroup;
