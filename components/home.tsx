import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, FAB, Switch, Text } from "react-native-paper";
import Timer from "./timer";

type homeProps = {};

export default function Home(props: homeProps) {
  const [isNotificatorActive, setIsNotificatorActive] = useState(true);
  const [isSafetyDisabled, setIsSafetyDisabled] = useState(false);

  return (
    <View style={styles.container}>
      <Timer initialTime={30} active={isNotificatorActive} />
      <View>
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
            setIsNotificatorActive(false);
          }}
        >
          Deaktivieren
        </Button>
      </View>
      <FAB
        icon={"restart"}
        style={styles.restartFAB}
        onPress={() => setIsNotificatorActive(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  switchLabel: {
    marginRight: 10,
  },
  restartFAB: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
