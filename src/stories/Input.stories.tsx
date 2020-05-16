import React from "react";

import Input from "../components/Input";

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

export const Default = () => <Input />;
