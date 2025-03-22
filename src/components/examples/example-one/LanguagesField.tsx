import FormGroup from "../../FormGroup";
import Label from "../../Label";

const LanguagesField = () => {
  return (
    <FormGroup>
      <Label>Languages</Label>
      <button>Add Language</button>
      <div className="form-group-languages">
        <div className="form-group-language">
          <input id="name" name="name" className="form-control" />
          <select id="name" name="name" className="form-control">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>
    </FormGroup>
  );
};

export default LanguagesField;
