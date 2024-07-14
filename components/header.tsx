import { Appbar } from "react-native-paper";

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.Action icon={"menu"} onPress={() => {}} />
      <Appbar.Content title="Notificator" />
    </Appbar.Header>
  );
}
