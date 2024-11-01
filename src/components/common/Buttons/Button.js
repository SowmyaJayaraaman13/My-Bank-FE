import { Button as NextUIButton } from "@nextui-org/react";
import React from "react";

function Button({ text = "", props = {}, additionalClass, children }) {
  return (
    <NextUIButton
      fullWidth
      color="primary"
      size="lg"
      radius="sm"
      type="submit"
      {...props}
      // className="text-white text-xl font-bold"
    >
      {children}
    </NextUIButton>
  );
}

export default Button;
