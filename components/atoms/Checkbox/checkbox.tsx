import React from "react";
import { Checkbox as SupbaseCheckboxComponent } from "@supabase/ui";

interface CheckboxProps extends React.ComponentProps<typeof SupbaseCheckboxComponent> {
  //Add additional prop definitions here
}

const Checkbox: React.FC<CheckboxProps> = ( props ) => {
  return <SupbaseCheckboxComponent {...props} />;
};

export default Checkbox;