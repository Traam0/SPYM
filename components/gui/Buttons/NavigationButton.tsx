import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type {
  IButtonProps,
  INavigateButtonProps,
} from "../../../lib/types/interfaces";
import { ButtonStyles } from "../../../styles/buttons.style";

export function NavigationButton({ title, to }: INavigateButtonProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={ButtonStyles.Primary}
      onPress={() => {
        navigation.navigate(to as never);
      }}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
