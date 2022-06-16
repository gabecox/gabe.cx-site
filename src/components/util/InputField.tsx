import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HTMLChakraProps,
  Input,
  Textarea,
} from "@chakra-ui/react";

type InputFieldProps = InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> & {
  name: string;
  label: string;
  textarea?: boolean;
  isrequired?: boolean
};

export const InputField: React.FC<InputFieldProps & HTMLChakraProps<any>> = ({
  label,
  textarea,
  isrequired = false,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  const FieldType = textarea ? Textarea : Input;
  return (
    <FormControl isInvalid={!!error} isRequired={isrequired}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <FieldType {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
