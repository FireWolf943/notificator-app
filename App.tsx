import { DefaultTheme, PaperProvider } from "react-native-paper";
import Header from "./components/header";
import Home from "./components/home";
import { View } from "react-native";

export default function App() {
  let theme = DefaultTheme;
  theme.dark = true;

  return (
    <PaperProvider theme={theme}>
      <View style={{ backgroundColor: theme.colors?.surface, height: "100%" }}>
        <Header />
        <Home />
      </View>
    </PaperProvider>
  );
}
