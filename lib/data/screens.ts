import { NavigationScreen, HomeScreen, SettingsScreen } from "../../screens/";
import { AppScreens } from "../types";

export const appScreens: AppScreens = {
  default: "Navigation",
  screens: [
    { name: "Navigation", component: NavigationScreen },
    { name: "Home", component: HomeScreen },
    { name: "Settings", component: SettingsScreen },
  ],
};
