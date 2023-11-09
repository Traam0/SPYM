import { StyleSheet } from "react-native";
import { Appearance } from "react-native";
import AppTheme from "../lib/config/apptheme.config.json";

export const ButtonStyles = StyleSheet.create({
  Primary: {
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor:
      Appearance.getColorScheme() === "light"
        ? AppTheme.primary
        : AppTheme.dark.primary,
  },
});
