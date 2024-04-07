import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "./screens/tabScreens/Feed";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settings";
import Payments from "./screens/drawerScreens/Payments";
import TweetDetailScreen from "./screens/homeStack/TweetDetailScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import profileImage from "./assets/profile-image.png";

const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{}}>
      <Drawer.Screen
        name="Feed"
        component={HomeStackGroup}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Payments" component={Payments} />
      <Drawer.Screen name="Payments1" component={Payments} />
      <Drawer.Screen name="Payments2" component={Payments} />
      <Drawer.Screen name="Payments3" component={Payments} />
    </Drawer.Navigator>
  );
}

function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="TabsGroup" component={TabsGroup} />
      <HomeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailScreen}
        options={{
          presentation: "modal",
          headerTitle: "Tweet Details",
          headerShown: true,
        }}
      />
    </HomeStack.Navigator>
  );
}

function TabsGroup({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "@prakharsaxena") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="@prakharsaxena"
        component={TopTabsGroup}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image source={profileImage} style={styles.profile} />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 20,
          textTransform: "capitalize",
          // fontFamily: "Poppins-Regular",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#1DA1F2",
          height: 3,
          borderRadius: 3,
        },
      }}
    >
      <TopTabs.Screen
        name="main"
        component={Feed}
        options={{
          tabBarLabel: "Feed",
        }}
      />
      <TopTabs.Screen name="🤗" component={Payments} />
      <TopTabs.Screen name="🧐" component={Payments} />
    </TopTabs.Navigator>
  );
}

function Navigation() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <DrawerGroup />
    </NavigationContainer>
  );
}

export default Navigation;

const styles = StyleSheet.create({
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    marginLeft: 15,
  },
});
