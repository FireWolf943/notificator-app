import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ProgressBar, Text } from "react-native-paper";

type TimerProps = { initialTime: number };

export default function Timer({ initialTime }: TimerProps) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      // Set up the interval to decrease the time every second
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      // Clear the interval on component unmount or when the countdown finishes
      return () => clearInterval(intervalId);
    }
  }, [time]);

  // Format the time into minutes and seconds
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={{ width: "75%", alignItems: "center" }}>
      <Text variant="displayLarge">{formatTime(time)}</Text>
      <ProgressBar
        progress={time / initialTime}
        style={{ width: "100%", height: 10 }}
      ></ProgressBar>
    </View>
  );
}
