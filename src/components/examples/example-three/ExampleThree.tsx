import React, { useEffect, useState } from "react";
import Card from "../../Card";
import FormGroup from "../../FormGroup";
import Label from "../../Label";
import { Controller, useForm } from "react-hook-form";
import ErrorMessage from "../../ErrorMessage";
import Input from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";

import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  selectedLanguage: yup.string().required(),
});

const ExampleThree = () => {
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      //   selectedLanguage: "english",
    },
  });

  const [languages, setLanguages] = useState<any[]>([]);

  console.log({
    values: form.watch(),
  });

  useEffect(() => {
    setTimeout(() => {
      setLanguages([
        {
          label: "English",
          value: "english",
        },
        {
          label: "Arabic",
          value: "arabic",
        },
        {
          label: "French",
          value: "french",
        },
      ]);
    }, 2000);
  }, []);

  // form.register() uses uncontrolled field concept
  // Controller uses controlled field concept

  return (
    <Card>
      <h2 className="card-title">Form</h2>
      <form
        className="form"
        onSubmit={form.handleSubmit((values) => {
          console.log({ values });
        })}
      >
        <Controller
          name="name"
          control={form.control}
          render={(props) => {
            const { field, fieldState } = props;

            const error = fieldState.error?.message;

            return (
              <Input
                value={field.value}
                onChange={(value) => {
                  field.onChange(value);
                }}
                label="Name"
                name={field.name}
                errorMessage={error}
                isInvalid={error ? true : false}
              />
            );
          }}
        />

        <Controller
          name="selectedLanguage"
          control={form.control}
          render={(props) => {
            const { field, fieldState } = props;

            // Select accepts object but field.value is string so i need to convert the value to object

            // english => { label: 'english', value: 'english' }

            const selectedLanguage =
              languages.find((language) => language.value === field.value) ||
              null;

            // console.log({ selectedLanguage, fieldValue: field.value });

            return (
              <FormGroup>
                <Label>Languages</Label>
                <Select
                  // i converted this to object
                  value={selectedLanguage}
                  onChange={(value: any) => {
                    // console.log({ value });
                    /**
                     * { label: '', value: '' }
                     */

                    // I converted this to string
                    field.onChange(value.value);
                  }}
                  options={languages}
                />
                <ErrorMessage message={fieldState.error?.message} />
              </FormGroup>
            );
          }}
        />

        <button>Submit</button>
      </form>
    </Card>
  );
};

export default ExampleThree;
