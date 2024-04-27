import React from "react";
import styles from "./style.module.css";

interface ToggleProps {
  toggle: boolean;
  handleToggleChange: () => void;
}

const Toggle: React.FC<ToggleProps> = ({toggle, handleToggleChange}) => {
  return (
    <button
      className={toggle ? styles.on : styles.off}
      onClick={handleToggleChange}
    >
      <span className={styles.pin} />
    </button>
  );
};

export default Toggle;
