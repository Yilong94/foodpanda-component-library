import React, { useState, useEffect } from "react";
import classNames from "classnames";

import styles from "./style.module.scss";

const Input = () => {
  const [input, setInput] = useState("");
  const [focus, setFocus] = useState(false);
  const [shrinkPlaceholder, setShrinkPlaceholder] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setShrinkPlaceholder(!!input || !!focus);
  }, [input, focus]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInput(e.target.value);
    if (error) {
      setError(false);
    }
  };

  const handleInputFocus = () => {
    setFocus(true);
  };

  const handleInputBlur = () => {
    setFocus(false);

    // Validate on blur
    if (!input || !/^\d{6}$/.test(input)) {
      setError(true);
    }
  };

  return (
    <div
      className={classNames({
        [styles.inputContainer]: true,
        [styles.focus]: focus,
        [styles.shrink]: shrinkPlaceholder,
        [styles.error]: error
      })}
    >
      <input
        className={styles.input}
        value={input}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <span className={styles.placeholder}>
        Enter your street or postal code
      </span>
    </div>
  );
};

export default Input;
