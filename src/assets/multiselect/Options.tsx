import { components } from "react-select";
import { h, JSX } from "preact";

export default function Option(props) {
  console.log({ props });
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        <label>{props.displayValue}</label>
      </components.Option>
    </div>
  );
}
