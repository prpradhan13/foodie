import { Text, TextInput, View } from "react-native";
import React from "react";
import { TextFieldProps } from "@/src/components/inputs/types";

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  placeholderTextColor = "grey",
}) => {
  return (
    <TextInput
      className="bg-transparent w-[300px] tracking-wide text-textSecondary"
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextField;
