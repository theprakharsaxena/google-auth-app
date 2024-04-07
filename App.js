import { useEffect, useState } from "react";
import "react-native-gesture-handler";
import * as Google from "expo-auth-session/build/providers/Google";
import SignInScreen from "./screens/SignInScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";
import { View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "151339305053-ad3sb3vqq6j257jjvbcqeh5hurvdeeal.apps.googleusercontent.com",
    iosClientId:
      "151339305053-u2mebmrvtcfhkmau1k42rbacfboo4j6i.apps.googleusercontent.com",
    webClientId:
      "151339305053-ceg9dssh0saqmn01glcdgj8mgtetpqam.apps.googleusercontent.com",
  });

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type) {
        await getUerInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const getUerInfo = async (token) => {
    if (!token) return;
    try {
      const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const user = await res.json();
      setUserInfo(data);
      await AsyncStorage.setItem("@user", JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };

  return userInfo ? (
    <View>
      <Text>Hello</Text>
    </View>
  ) : (
    <SignInScreen promptAsync={promptAsync} />
  );
}

export default App;

// web 151339305053-ceg9dssh0saqmn01glcdgj8mgtetpqam.apps.googleusercontent.com
// android 151339305053-ad3sb3vqq6j257jjvbcqeh5hurvdeeal.apps.googleusercontent.com
// ios 151339305053-u2mebmrvtcfhkmau1k42rbacfboo4j6i.apps.googleusercontent.com
