import { useEffect, useRef, useState } from "react";
import Card from "../../Card";
import FormGroup from "../../FormGroup";
import Label from "../../Label";

/**
 * First Render
 * - Page is empty
 *
 * Second Render
 * - page is full
 *
 */

/** */

const ExampleTwo = () => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const [languages, setLanguages] = useState<any[]>([]);

  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const onSubmit = () => {
    const element = selectRef.current;

    if (!element) return;

    const value = element.value;

    console.log({ value });
  };

  useEffect(() => {
    setTimeout(() => {
      setLanguages([
        {
          name: "English",
          value: "english",
        },
        {
          name: "Arabic",
          value: "arabic",
        },
        {
          name: "French",
          value: "french",
        },
      ]);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!selectRef.current || languages.length === 0) return;

    selectRef.current.value = "english";
  }, [languages]);

  /**
   * We update language state
   * we update select value ([])
   *
   * react repaint the page
   * languages is full array
   * // We Must update select value here
   */

  return (
    <Card>
      <h2 className="card-title">Form</h2>
      <form className="form">
        <FormGroup>
          <Label>Languages</Label>
          <select
            ref={selectRef}
            className="form-control"
            // it means the field is  controlled
            value={"english"}
            onChange={(e) => setSelectedLanguage(e.target.value)}

            // defaultValue={"english"}
          >
            <option value="">--Select Language--</option>
            {languages.map((language) => {
              return (
                <option key={language.value} value={language.value}>
                  {language.name}
                </option>
              );
            })}
          </select>
        </FormGroup>

        <p>I Speak {selectedLanguage}</p>

        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </Card>
  );
};

export default ExampleTwo;
