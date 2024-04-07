import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import TweetContent from "./TweetContent";

export default Tweet = ({ tweet }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate("TweetDetailScreen", { tweet });
      }}
    >
      <TweetContent tweet={tweet} />
    </Pressable>
  );
};
