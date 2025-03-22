import React from "react";
import Card from "../../Card";
import FormGroup from "../../FormGroup";

const ExampleTwo = () => {
  //   const [languages, setLanguages] = useState<{ name: string; value: string }[]>(
  //   []
  // );

  // useEffect(() => {
  //   setLanguages([
  //     { name: "English", value: "english" },
  //     { name: "French", value: "french" },
  //     { name: "Spanish", value: "spanish" },
  //   ]);
  // }, []);
  return (
    <Card>
      <h2 className="card-title">Form</h2>
      <form className="form"></form>
    </Card>
  );
};

export default ExampleTwo;
