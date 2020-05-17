import React, { useState } from "react";

interface WithInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const withInputProps = <T extends WithInputProps = WithInputProps>(
  WrappedComponent: React.ComponentType<T>
) => {
  const CompWithInputProps = (
    props: Omit<T, keyof WithInputProps> & Partial<WithInputProps>
  ) => {
    const { value, ...rest } = props;
    const [input, setInput] = useState(value || "");

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      setInput(e.target.value);
    };

    return (
      <WrappedComponent
        value={input}
        onChange={handleInputChange}
        {...(rest as T)}
      />
    );
  };

  return CompWithInputProps;
};

export default withInputProps;
