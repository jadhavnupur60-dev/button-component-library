
import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
}) {
  const buttonClass =
    variant === "secondary"
      ? styles.secondary
      : styles.primary;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
