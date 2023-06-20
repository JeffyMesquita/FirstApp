import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextProps,
  TouchableOpacityProps,
} from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  variant?: "primary" | "secondary";
  // onPress: () => void;
}

export function Button({ title, variant = "primary", style, ...rest }: ButtonProps) {
  const variantStyle =
    variant === "primary" ? styles.wrapperPrimary : styles.wrapperSecondary;
  const textColor = variant === "primary" ? "#fff" : "#1D013F";

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.wrapperCommon, variantStyle, style]}
      {...rest}
    >
      <Text style={[styles.title, { color: textColor }]}>
        {title ? title : "Some title"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapperCommon: {
    height: 50,
    width: 300,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperPrimary: {
    backgroundColor: "#1D013F",
  },
  wrapperSecondary: {
    borderColor: "#1D013F",
    borderWidth: 2,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#fff" },
});
