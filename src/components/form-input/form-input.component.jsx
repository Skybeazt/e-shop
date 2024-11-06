import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

const FormInput = function ({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
