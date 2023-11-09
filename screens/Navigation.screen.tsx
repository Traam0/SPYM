import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { ButtonStyles } from "../styles/buttons.style";
import { useNavigation } from "@react-navigation/native";
import { NavigationButton } from "../components/gui/Buttons";

const NavigationScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
});

export default function NavigationScreen({ navigation, route }) {
  const navigator = useNavigation() as any;
  return (
    <View style={NavigationScreenStyles.screenContainer}>
      <NavigationButton title="Homee" to="Home" />
      <NavigationButton title="Settings" to="Settings" />
    </View>
  );
}
