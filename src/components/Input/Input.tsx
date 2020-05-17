import React, { useState, useEffect } from "react";
import classNames from "classnames";

import styles from "./style.module.scss";

interface Props {
  id?: string;
  name?: string;
  value: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<Props> = ({
  id,
  name,
  value,
  placeholder,
  onChange,
}) => {
  const [focus, setFocus] = useState(false);
  const [shrinkPlaceholder, setShrinkPlaceholder] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setShrinkPlaceholder(!!input || !!focus);
  }, [input, focus]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    onChange(e);

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
        id={id}
        name={name}
        className={styles.input}
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {placeholder && <span className={styles.placeholder}>{placeholder}</span>}
    </div>
  );
};

export default Input;
