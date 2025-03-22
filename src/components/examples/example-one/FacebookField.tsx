import React from "react";
import FormGroup from "../../FormGroup";
import Label from "../../Label";
import ErrorMessage from "../../ErrorMessage";
import { useFormContext } from "react-hook-form";

const FacebookField = () => {
  const form = useFormContext();
  const errors = form.formState.errors as any;

  return (
    <FormGroup>
      <Label>Facebook</Label>
      {/* social.4 where 4 is key in object */}
      <input className="form-control" {...form.register("social.facebook")} />
      <ErrorMessage message={errors.social?.facebook?.message} />
    </FormGroup>
  );
};

export default FacebookField;
