import React from "react";

import Input from "../components/Input";
import withInputProps from "../hoc/withInputProps";
import { isRequired, isPostalCode } from "../utils/validate";

export default {
  component: Input,
  title: "Input",
  decorators: [
    (story: any) => (
      <div className="decorator">
        <div className="main">
          <div style={{ width: "70%", height: "100%" }}>{story()}</div>
        </div>
      </div>
    )
  ]
};

const InputWithInputProps = withInputProps(Input);

export const Default = () => <InputWithInputProps />;
export const WithInitialValue = () => <InputWithInputProps value="760359" />;
export const WithPlaceholder = () => (
  <InputWithInputProps placeholder="Enter your street or postal code" />
);
export const WithInitialValueAndPlaceholder = () => (
  <InputWithInputProps
    value="760359"
    placeholder="Enter your street or postal code"
  />
);
export const WithInvalidValue = () => (
  <InputWithInputProps value="invalid" validate={[isRequired, isPostalCode]} />
);
