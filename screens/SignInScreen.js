import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import icon from "../assets/sign-in.jpg";
export default function SignInScreen({ promptAsync, request, userInfo }) {
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
      <View style={styles.card}>
        {userInfo?.picture && (
          <Image source={{ uri: userInfo?.picture }} style={styles.image} />
        )}
        <Text style={styles.text}>Email: {userInfo?.email}</Text>
        <Text style={styles.text}>
          Verified: {userInfo?.verified_email ? "yes" : "no"}
        </Text>
        <Text style={styles.text}>Name: {userInfo?.name}</Text>
        {/* <Text style={styles.text}>{JSON.stringify(userInfo, null, 2)}</Text> */}
      </View>
      {/* <Text style={{ fontSize: 32, fontWeight: "bold" }}>
        {JSON.stringify(userInfo, null, 2)}
      </Text> */}
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
        disabled={!request}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
