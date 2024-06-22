const variantButtons = {
  primary: {
    backgroundColor: "#2196f3",
    color: "#fff",
  },
  success: {
    backgroundColor: "#4caf50",
    color: "#000",
  },
  error: {
    backgroundColor: "#f44336",
    color: "#fff",
  },
  warning: {
    backgroundColor: "#ff9800",
    color: "#fff",
  },
  info: {
    backgroundColor: "#80d8ff",
    color: "#000",
  },
};

const sizes = {
  small: {
    padding: "0.5rem 1rem",
  },
  medium: {
    padding: "1rem 2rem",
  },
  large: {
    padding: "1.5rem 3rem",
  },
};

const Button = ({ type, text, variant = "primary", size = "medium" }) => {
  const userVariant = variantButtons[variant];
  const userSize = sizes[size];
  return (
    <button
      type={type}
      style={{
        fontSize: "1rem",
        borderRadius: "0.5rem",
        marginRight: "0.5rem",
        cursor: "pointer",
        letterSpacing: "2px",
        textTransform: "uppercase",
        ...userVariant,
        ...userSize,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
