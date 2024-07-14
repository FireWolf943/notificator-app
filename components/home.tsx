import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Switch, Text } from "react-native-paper";
import Timer from "./timer";

type homeProps = {};

export default function Home(props: homeProps) {
  const [isSafetyDisabled, setIsSafetyDisabled] = useState(false);

  return (
    <View style={styles.container}>
      <Timer initialTime={30} />
      <Text variant="titleLarge">
        Benachrichtigungen für heute deaktivieren:
      </Text>

      <View style={styles.switchContainer}>
        <Text variant="bodyLarge" style={styles.switchLabel}>
          Sicherung deaktivieren
        </Text>
        <Switch
          value={isSafetyDisabled}
          onValueChange={() => {
            setIsSafetyDisabled(!isSafetyDisabled);
          }}
        ></Switch>
      </View>

      <Button
        mode="contained"
        disabled={!isSafetyDisabled}
        onPress={() => {
          console.log("Test");
        }}
      >
        Deaktivieren
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  switchLabel: {
    marginRight: 10,
  },
});
