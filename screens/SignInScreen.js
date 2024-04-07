import { Image, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import icon from "../assets/sign-in.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function SignInScreen({ promptAsync }) {
  const value = AsyncStorage.getItem("@user");
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {/* <Ionicons name="logo-firebase" size={100} color="#FFA611" /> */}
      <Image source={icon} style={{ width: 200, height: 200 }} />
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>
        Sign In with{" "}
        <Text style={{ color: "#4285F4" }}>
          G<Text style={{ color: "#EA4336" }}>o</Text>
          <Text style={{ color: "#FBBC04" }}>o</Text>
          <Text style={{ color: "#4285F4" }}>g</Text>
          <Text style={{ color: "#34A853" }}>l</Text>
          <Text style={{ color: "#EA4336" }}>e</Text>
        </Text>
      </Text>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>
        {JSON.stringify(value, null, 2)}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#4285F4",
          width: "90%",
          padding: 10,
          borderRadius: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          marginTop: 80,
          marginBottom: 150,
        }}
        onPress={() => promptAsync()}
      >
        <AntDesign name="google" size={30} color="white" />
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 17 }}>
          Sign In with Google
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
