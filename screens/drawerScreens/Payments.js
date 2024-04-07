import { Button, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Payments = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default Payments;

const styles = StyleSheet.create({});
