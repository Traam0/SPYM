export type AppRoute = {
  name: string;
  component: (props) => JSX.Element;
};

export type AppScreens = {
  default: string;
  screens: AppRoute[];
};
