
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { Icon } from "@ui-kitten/components";
import { useThemeContext } from "@/context/ThemeContext";
import { RoutesParamList } from "@/navigation/AppNavigaton";

type Props = PressableProps & {
  iconName: string;
  status?: "primary" | "danger" | "success" | "warning" | "basic";
};

type NavigationProp = NativeStackNavigationProp<RoutesParamList>;

export default function FAB({ iconName, status = "primary", ...rest}: Props) {
  const navigation = useNavigation<NavigationProp>();
  const { getDefaultColors } = useThemeContext();
  const { colors } = getDefaultColors();

  const backgroundMap: Record<string, string> = {
    primary: colors.primary,
    danger: colors.danger,
    success: colors.success,
    warning: colors.warning,
    basic: colors.grayLight,
  };

  const fill = colors.textButton;

  return (
    <Pressable {...rest}
      style={[
        styles.buttonFAB,
        {
          backgroundColor: backgroundMap[status],
        },
      ]}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Icon name={iconName} fill={fill} style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonFAB: {
    position: "absolute",
    zIndex: 10,
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 32,
    height: 32,
  },
});