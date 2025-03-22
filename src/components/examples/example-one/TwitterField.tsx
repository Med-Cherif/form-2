import FormGroup from "../../FormGroup";
import Label from "../../Label";
import ErrorMessage from "../../ErrorMessage";
import { useFormContext } from "react-hook-form";

const TwitterField = () => {
  const form = useFormContext();

  const errors = form.formState.errors as any;

  return (
    <FormGroup>
      <Label>Twitter</Label>
      <input className="form-control" {...form.register("social.twitter")} />
      <ErrorMessage message={errors.social?.twitter?.message} />
    </FormGroup>
  );
};

export default TwitterField;
