import type { GestureResponderEvent } from "react-native";

export interface IButtonProps {
  title: string;
  pressAction: (e?: GestureResponderEvent) => void;
}

export interface INavigateButtonProps {
  title: string;
  to: string;
}
