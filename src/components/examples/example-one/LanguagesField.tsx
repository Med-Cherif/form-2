import { useState } from "react";
import FormGroup from "../../FormGroup";
import Label from "../../Label";

import { useFieldArray, useFormContext } from "react-hook-form";

const LanguagesField = () => {
  const form = useFormContext();

  const [languages] = useState([
    {
      name: "Arabic",
      value: "arabic",
    },
    {
      name: "English",
      value: "english",
    },
    {
      name: "French",
      value: "french",
    },
  ]);

  const filterOptions = (languageValue: string) => {
    const selectedLanguages = form.watch("languages");
    return languages.filter((language) => {
      if (language.value === languageValue) return true;

      // if language is selected don't return it
      if (
        selectedLanguages
          .map((selectedLanguage: any) => selectedLanguage.name)
          .includes(language.value)
      ) {
        return false;
      }

      // return the value if the conditions are not met
      return true;
    });
  };

  const { fields, append, remove } = useFieldArray({
    name: "languages",
    control: form.control,
  });

  // add element to end of array
  // fieldsArray.append({})
  // // add element to start of array
  // fieldsArray.prepend({})
  // fieldsArray.fields
  // fieldsArray.insert(2, {}),

  // // mpve this index to second index
  // fieldsArray.move(1, 0)

  // fieldsArray.remove(0)

  // // it updates the entire array
  // fieldsArray.replace([])

  // // swaps
  // fieldsArray.swap(2, 3)

  // // we update this index
  // fieldsArray.update(0, {  })

  const isArrayEmpty = fields.length === 0;

  return (
    <FormGroup>
      <Label>Languages</Label>
      <button
        type="button"
        onClick={() => {
          append({
            name: "",
            level: "",
          });
        }}
      >
        Add Language
      </button>

      {isArrayEmpty ? (
        <p>No languages added</p>
      ) : (
        <>
          {/* The fields are not synchronized with the values, use watch instead  */}
          {fields.map((field, index) => {
            const name = form.watch(`languages.${index}.name`);
            const level = form.watch(`languages.${index}.level`);

            return (
              <div className="form-group-languages" key={field.id}>
                <div className="form-group-language">
                  <select
                    className="form-control"
                    {...form.register(`languages.${index}.name`)}
                  >
                    <option value="">--Choose Language--</option>
                    {filterOptions(name).map((language) => {
                      return (
                        <option key={language.value} value={language.value}>
                          {language.name}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    className="form-control"
                    {...form.register(`languages.${index}.level`)}
                  >
                    <option value="">--Choose your level--</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  <button onClick={() => remove(index)} type="button">
                    Delete
                  </button>
                </div>
                <p>
                  The language is {name} and Level is {level}
                </p>
              </div>
            );
          })}
        </>
      )}
    </FormGroup>
  );
};

export default LanguagesField;
