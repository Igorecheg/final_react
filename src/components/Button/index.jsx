import "./index.css";

export function Button(props) {
  const { type = "button", size = "md", variant = "primary", disabled = false, children, onClick } = props;

  const className = `button--${size} butt--${variant}`;
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}