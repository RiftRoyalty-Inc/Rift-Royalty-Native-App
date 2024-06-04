import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import ChampionList from "../screens/ChampionList";
import routes from "../utils/constants/routes";
import Login from "../screens/auth/Login";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import ItemList from "../screens/items/ItemList";
import { Feather } from '@expo/vector-icons';
import MainHeader from "../components/MainHeader";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <MainHeader/>, 
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === routes.HOME_TAB) {
            return <AntDesign name="home" size={size} color={color} />;
          } else if (route.name === routes.CHAMPION_LIST_TAB) {
            icon = require("../../assets/bottomTab/champions.png");
          } else if (route.name === routes.ITEM_LIST) {
            icon = require("../../assets/bottomTab/items.png");
          } else if (route.name === routes.PROFILE) {
            return <Feather name="user" size={size} color={color}/>;
          }

          return <Image source={icon} style={{ width: size, height: size, tintColor: color }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "grey",
      }}
    >
      <Tab.Screen name={routes.HOME_TAB} component={Home} />
      <Tab.Screen name={routes.CHAMPION_LIST_TAB} component={ChampionList} />
      <Tab.Screen name={routes.ITEM_LIST} component={ItemList} />
      <Tab.Screen name={routes.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
