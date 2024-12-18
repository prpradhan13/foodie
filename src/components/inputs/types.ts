import { TextInputProps } from "react-native";

export type TextFieldProps = {
    placeholder?: string;
    value?: string;
    onChangeText?: (value: string) => void;
    keyboardType?: TextInputProps["keyboardType"];
    secureTextEntry?: boolean;
    placeholderTextColor?: string;
};