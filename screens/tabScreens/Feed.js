import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { tweets } from "../../data/tweets";
import Tweet from "../../components/Tweets";

const Feed = () => {
  const navigation = useNavigation();

  const user = AsyncStorage.getItem("@user");
  const userInfo = JSON.parse(user);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={tweets.slice(0, 30)}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return <Tweet tweet={item} />;
        }}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              <View style={styles.card}>
                {userInfo?.picture && (
                  <Image
                    source={{ uri: userInfo?.picture }}
                    style={styles.image}
                  />
                )}
                <Text style={styles.text}>Email: {userInfo?.email}</Text>
                <Text style={styles.text}>
                  Verified: {userInfo?.verified_email ? "yes" : "no"}
                </Text>
                <Text style={styles.text}>Name: {userInfo?.name}</Text>
                {/* <Text style={styles.text}>{JSON.stringify(userInfo, null, 2)}</Text> */}
              </View>
            </Text>
          </View>
        )}
        ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
});
