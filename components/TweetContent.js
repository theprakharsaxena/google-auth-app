import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const TweetActions = (retweets, comments, likes) => {
  const theme = useColorScheme();
  return (
    <View style={[styles.rowActions, styles.actionBar]}>
      <View style={styles.elemAction}>
        <EvilIcons
          style={styles.actionButton}
          name="comment"
          size={21}
          color={theme === "dark" ? "gray" : "#000"}
        />
        <Text style={styles.actionText}>{comments}</Text>
      </View>
      <View style={styles.elemAction}>
        <EvilIcons
          style={styles.actionButton}
          name="retweet"
          size={22}
          color={theme === "dark" ? "gray" : "#000"}
        />
        <Text style={styles.actionText}>{retweets}</Text>
      </View>
      <View style={styles.elemAction}>
        <EvilIcons
          style={styles.actionButton}
          name="heart"
          size={21}
          color={theme === "dark" ? "gray" : "#000"}
        />
        <Text style={styles.actionText}>{likes}</Text>
      </View>
      <EvilIcons
        style={styles.actionButton}
        name="share-apple"
        size={23}
        color={theme === "dark" ? "gray" : "#000"}
      />
    </View>
  );
};

const avatar = (author) => {
  const imageUrl = author.avatar.replace("_normal", "");
  return <Image style={styles.avatar} source={{ uri: imageUrl }} />;
};

const GrayText = ({ children, numberOfLines, style }) => {
  return (
    <Text style={[style, styles.gray]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default TweetContent = ({ tweet }) => {
  const theme = useColorScheme();
  return (
    <View style={styles.singleItem}>
      <View style={styles.row}>
        {avatar(tweet.author)}
        <View style={styles.tweetContentContainer}>
          <View style={styles.rowTop}>
            <Text
              numberOfLines={1}
              style={[
                styles.header,
                { color: theme === "dark" ? "#FFF" : "#000" },
              ]}
            >
              {tweet.author.name}
            </Text>
            <GrayText style={styles.author} numberOfLines={1}>
              @{tweet.author.screenName}
            </GrayText>
            <GrayText>.</GrayText>
            <GrayText>{tweet.favoriteCount % 2 === 0 ? "2h" : "5h"}</GrayText>
          </View>
          <Text
            style={[
              styles.description,
              { color: theme === "dark" ? "#FFF" : "#000" },
            ]}
          >
            {tweet.fullText}
          </Text>
          <View style={styles.rowActions}>
            {TweetActions(
              tweet.retweetCount,
              tweet.replyCount,
              tweet.favoriteCount
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  author: {
    flexShrink: 1,
  },
  actionBar: {
    marginTop: 8,
    justifyContent: "space-between",
    marginRight: 16,
  },
  actionButton: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  gray: {
    color: "#777",
    fontSize: 13,
    paddingRight: 2,
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 22,
    marginRight: 16,
    flexShrink: 0,
    marginTop: 4,
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 4,
    paddingRight: 4,
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#000",
  },
  singleItem: {
    paddingHorizontal: 16,
    minHeight: 44,
    flex: 1,
    padding: 16,
  },
  rowTop: {
    flexDirection: "row",
  },
  rowActions: {
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
  },
  elemAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  actionText: {
    fontSize: 12,
    color: "#444",
  },
  tweetContentContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
});
