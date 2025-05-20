import React, { forwardRef } from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { useThemeContext } from "@/context/ThemeContext";

type Status = "default" | "success" | "danger";

type Props = TextInputProps & {
  status?: Status;
};

// Usar forwardRef para permitir uso de `ref` externo
const Input = forwardRef<TextInput, Props>(({ style, status = "default", ...rest }, ref) => {
  const { getDefaultColors } = useThemeContext();
  const { colors } = getDefaultColors();
  
  const backgroundColor = colors.inputBackground;
  const placeholderColor = colors.placeholderColor;

  const borderColorMap: Record<Status, string> = {
    default: "transparent",
    success: colors.success,
    danger: colors.danger,
  };

  return (
    <TextInput
      ref={ref}
      {...rest}
      placeholderTextColor={placeholderColor}
      style={[
        styles.input,
        {
          backgroundColor,
          color: colors.text,
          borderColor: borderColorMap[status],
        },
        style,
      ]}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 45,
    paddingHorizontal: 16,
    borderRadius: 25,
    fontSize: 16,
    borderWidth: 1,
  },
});

// Opcional: definir nome para debugging
Input.displayName = "Input";

export default Input;
