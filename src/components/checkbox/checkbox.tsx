import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useThemeContext } from "@/context/ThemeContext";
import { Icon } from "@ui-kitten/components";

type Status = "default" | "success" | "danger";

type Props = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  status?: Status;
};

export default function Checkbox({
  label,
  checked,
  onChange,
  status = "default",
}: Props) {
  const { getDefaultColors } = useThemeContext();
  const { colors } = getDefaultColors();

  const borderColorMap: Record<Status, string> = {
    default: colors.grayDark,
    success: colors.success,
    danger: colors.danger,
  };

  const fillColor = checked ? colors.primary : "transparent";

  return (
    <Pressable
      style={styles.container}
      onPress={() => onChange(!checked)}
      hitSlop={10}
    >
      <View
        style={[
          styles.box,
          {
            backgroundColor: fillColor,
            borderColor: borderColorMap[status],
          },
        ]}
      >
        {checked && (
          <Icon name="checkmark-outline" fill={colors.textButton} style={styles.icon} />
        )}
      </View>
      {label && <Text style={[styles.label, { color: colors.text, width: "100%" }]}>{label}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 16,
    height: 16,
  },
  label: {
    fontSize: 16,
  },
});
