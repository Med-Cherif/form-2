import Card from "../../Card";
import Label from "../../Label";
import FormGroup from "../../FormGroup";

const ExampleOne = () => {
  return (
    <Card>
      <h2 className="card-title">Form</h2>
      <form className="form">
        <FormGroup>
          <Label>Name</Label>
          <input className="form-control" id="name-input" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <input className="form-control" />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number 1</Label>
          <input className="form-control" />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number 2</Label>
          <input className="form-control" />
        </FormGroup>
        <FormGroup>
          <Label>Facebook</Label>
          <input className="form-control" />
        </FormGroup>
        <FormGroup>
          <Label>Twitter</Label>
          <input className="form-control" />
        </FormGroup>

        {/* <LanguagesField /> */}

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default ExampleOne;
