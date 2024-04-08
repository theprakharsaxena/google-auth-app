import { useEffect, useState } from "react";
import "react-native-gesture-handler";
import * as Google from "expo-auth-session/build/providers/Google";
import SignInScreen from "./screens/SignInScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";
import Navigation from "./Navigation";

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

  useEffect(() => {
    async function handleSignInWithGoogle() {
      const user = getLocalUser();
      if (!user) {
        if (response?.type) {
          await getUerInfo(response.authentication.accessToken);
        }
      } else {
        setUserInfo(JSON.parse(user));
      }
    }

    handleSignInWithGoogle();
  }, [response]);

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUerInfo = async (token) => {
    if (!token) return;
    try {
      const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const user = await res.json();
      setUserInfo(user);
      await AsyncStorage.setItem("@user", JSON.stringify(user));
    } catch (err) {
      console.log(err);
    }
  };

  return userInfo ? (
    <Navigation />
  ) : (
    <SignInScreen
      promptAsync={promptAsync}
      request={request}
      userInfo={userInfo}
    />
  );
}

export default App;

// web 151339305053-ceg9dssh0saqmn01glcdgj8mgtetpqam.apps.googleusercontent.com
// android 151339305053-ad3sb3vqq6j257jjvbcqeh5hurvdeeal.apps.googleusercontent.com
// ios 151339305053-u2mebmrvtcfhkmau1k42rbacfboo4j6i.apps.googleusercontent.com
