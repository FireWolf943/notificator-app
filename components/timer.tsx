import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ProgressBar, Text } from "react-native-paper";

type TimerProps = { initialTime: number; active: boolean };

export default function Timer({ initialTime, active }: TimerProps) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (!active) {
      return;
    }

    if (time >= 0) {
      // Set up the interval to decrease the time every second
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      // Clear the interval on component unmount or when the countdown finishes
      return () => {
        clearInterval(intervalId);
      };
    }

    // Reset the time when it reaches 0
    setTime(initialTime);
  }, [time, active]);

  // Format the time into minutes and seconds
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={{ width: "75%" }}>
      <Text variant="displayLarge" style={{ alignSelf: "center" }}>
        {formatTime(time)}
      </Text>
      <ProgressBar
        progress={Math.max(0, Math.min(1, time / Math.max(initialTime, 1)))}
        style={{ height: 5 }}
      />
    </View>
  );
}
