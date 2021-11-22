import { ChangeEventHandler, FocusEventHandler, VFC } from "react";
import { styled } from "stitches.config";
import Text from "components/Text";

export interface TextFieldProps {
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  label?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  error?: false | string;
  type?: string;
}

const Root = styled("div", {
  display: "inline-block",

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
});

const Label = styled("label", {
  display: "block",
  fontWeight: "$bold",
  marginBottom: "$space$1",
});

const Input = styled("input", {
  caretColor: "$mainBlue",
  height: "42px",
  padding: "0 $space$2",
  border: "1px solid $blueGrey100",
  borderBottom: "1px solid transparent",
  boxShadow: "$colors$darkBlue 0px 8px 0px 0px",
  outline: "0",
  width: "100%",
  marginBottom: "8px",

  "&:disabled": {
    border: "0",
  },

  variants: {
    error: {
      true: {
        boxShadow: "$colors$error 0px 8px 0px 0px",
      },
    },
  },
});

const TextField: VFC<TextFieldProps> = ({
  disabled,
  error,
  fullWidth,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  value,
  type = "text",
  ...rest
}) => {
  return (
    <Root fullWidth={fullWidth}>
      {label && (
        <Label as="label" htmlFor={name}>
          {label}
        </Label>
      )}
      <Input
        disabled={disabled}
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
        error={!!error}
        {...rest}
      />
      {error && (
        <Text color="error" variant="body2" css={{ paddingTop: "$space$1" }}>
          {error}
        </Text>
      )}
    </Root>
  );
};

export default TextField;
