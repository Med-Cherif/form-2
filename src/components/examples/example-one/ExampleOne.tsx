import Card from "../../Card";
import Label from "../../Label";
import FormGroup from "../../FormGroup";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import ErrorMessage from "../../ErrorMessage";
import SocialFields from "./SocialFields";
import LanguagesField from "./LanguagesField";

const schema = yup.object({
  name: yup.string().required().min(3).max(30),
  email: yup.string().required().email(),
  languages: yup.array(
    yup.object({
      name: yup.string().required(),
      level: yup.string().required(),
    })
  ),
  // phones: yup.array(yup.string().required()).required().min(1),
  // social: yup.object({
  //   facebook: yup.string().required(),
  //   twitter: yup.string().required(),
  // }),
});

const ExampleOne = () => {
  const form = useForm<any>({
    resolver: yupResolver(schema),

    defaultValues: {
      name: "",
      email: "",
      languages: [],
      // phones: [] as string[],
      // social: {
      //   facebook: "",
      //   twitter: "",
      // },
    },
  });

  // console.log({ values });

  // console.log({
  //   errors: form.formState.errors,
  // });

  const onSubmit = (values: any) => {
    console.log({ submitValues: values });
  };

  const onError = (errors: any) => {
    console.log({ submitErrors: errors });
  };

  const errors = form.formState.errors as any;

  return (
    <FormProvider {...form}>
      <Card>
        <h2 className="card-title">Form</h2>
        <form className="form" onSubmit={form.handleSubmit(onSubmit, onError)}>
          <FormGroup>
            <Label>Name</Label>
            <input
              className="form-control"
              id="name-input"
              {...form.register("name")}
            />
            <ErrorMessage message={errors.name?.message} />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <input className="form-control" {...form.register("email")} />
            <ErrorMessage message={errors.email?.message} />
          </FormGroup>
          {/* <FormGroup>
            <Label>Phone Number 1</Label>
            <input className="form-control" {...form.register("phones.0")} />
            <ErrorMessage message={errors.phones?.[0]?.message} />
          </FormGroup>
          <FormGroup>
            phones.1 where 1 is index of array
            <Label>Phone Number 2</Label>
            <input className="form-control" {...form.register("phones.1")} />
            <ErrorMessage message={errors.phones?.[1]?.message} />
          </FormGroup> */}

          {/* <SocialFields /> */}

          <LanguagesField />

          <button type="submit">Submit</button>
        </form>
      </Card>
    </FormProvider>
  );
};

export default ExampleOne;
