import { StatusBar, View } from "react-native";
import TweetContent from "../../components/TweetContent";
import { useRoute } from "@react-navigation/native";

const TweetDetailScreen = () => {
  const {
    params: { tweet },
  } = useRoute();
  return (
    <View testID="TweetDetailScreen">
      <StatusBar barStyle={"light-content"} />
      <TweetContent tweet={tweet} />
    </View>
  );
};

export default TweetDetailScreen;
