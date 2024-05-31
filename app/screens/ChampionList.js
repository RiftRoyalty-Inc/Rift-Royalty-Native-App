import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChampionCard } from "./champion/ChampionCard";

const ChampionListScreen = () => {
  const [filter, setFilter] = useState("All");
  const navigation = useNavigation();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleChampionPress = (champId) => {
    navigation.navigate("ChampionCard", { champId });
  };

  const filterOptions = [
    { name: "All", imageUri: require("../../assets/ALL.png") },
    { name: "Assassin", imageUri: require("../../assets/ASSASINS.png") },
    { name: "Tank", imageUri: require("../../assets/TANK.png") },
    { name: "Support", imageUri: require("../../assets/SUPPORT.png") },
    { name: "Mage", imageUri: require("../../assets/MAGE.png") },
    { name: "Fighter", imageUri: require("../../assets/FIGHTER.png") },
    { name: "Marksman", imageUri: require("../../assets/MARKSMAN1.png") },
    { name: "Specialist", imageUri: require("../../assets/SPECIALIST.png") },
  ];

  const championData = [
    {
      id: "jhin",
      name: "Jhin",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Jhin_37.jpg",
      type: "Assassin",
    },
    {
      id: "rakan",
      name: "Rakan",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Rakan_1.jpg",
      type: "Tank",
    },
    {
      id: "thresh",
      name: "Thresh",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Thresh_5.jpg",
      type: "Mage",
    },
    {
      id: "pyke",
      name: "Pyke",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Pyke_1.jpg",
      type: "Support",
    },
    {
      id: "yasuo",
      name: "Yasuo",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yasuo_2.jpg",
      type: "Fighter",
    },
    {
      id: "vayne",
      name: "Vayne",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vayne_10.jpg",
      type: "Marksman",
    },
    {
      id: "leona",
      name: "Leona",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Leona_21.jpg",
      type: "Tank",
    },
    {
      id: "jinx",
      name: "Jinx",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Jinx_3.jpg",
      type: "Marksman",
    },
    {
      id: "darius",
      name: "Darius",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Darius_15.jpg",
      type: "Fighter",
    },
    {
      id: "lux",
      name: "Lux",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Lux_15.jpg",
      type: "Mage",
    },
    {
      id: "leesin",
      name: "LeeSin",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/LeeSin_1.jpg",
      type: "Fighter",
    },
    {
      id: "ashe",
      name: "Ashe",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ashe_6.jpg",
      type: "Marksman",
    },
    {
      id: "13",
      name: "Blitzcrank",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Blitzcrank_1.jpg",
      type: "Support",
    },
    {
      id: "14",
      name: "Syndra",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Syndra_4.jpg",
      type: "Mage",
    },
    {
      id: "15",
      name: "Tristana",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Tristana_12.jpg",
      type: "Marksman",
    },
    {
      id: "16",
      name: "Katarina",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Katarina_4.jpg",
      type: "Assassin",
    },
    {
      id: "17",
      name: "Soraka",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Soraka_2.jpg",
      type: "Support",
    },
    {
      id: "18",
      name: "Vladimir",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vladimir_21.jpg",
      type: "Mage",
    },
    {
      id: "19",
      name: "Garen",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Garen_1.jpg",
      type: "Fighter",
    },
    {
      id: "20",
      name: "Ezreal",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ezreal_1.jpg",
      type: "Marksman",
    },
  ];

  const filteredChampionData = championData.filter(
    (champion) => filter === "All" || champion.type === filter
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Champions ({filter})</Text>
      <FlatList
        horizontal
        data={filterOptions}
        keyExtractor={(item) => item.name}
        style={styles.filterContainer}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.filterButton,
              filter === item.name && styles.activeFilterButton,
              pressed && { opacity: 0.5 },
            ]}
            onPress={() => handleFilterChange(item.name)}
          >
            <Image source={item.imageUri} style={styles.filterButtonImage} />
          </Pressable>
        )}
      />

      <ScrollView style={styles.championListContainer}>
        <View style={styles.rowBlock}>
          {filteredChampionData.map((champion) => (
            <Pressable
              key={champion.id}
              onPress={() => handleChampionPress(champion.id)}
              style={styles.championCard}
            >
              <Image
                source={{ uri: champion.imageUri }}
                style={styles.championImage}
              />
              <Text style={styles.championName}>{champion.name}</Text>
              <Text style={styles.champDesc}>{champion.type}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C2E",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FAD597",
    marginBottom: 20,
  },
  filterContainer: {
    maxHeight: 65,
    marginBottom: 10,
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
  },
  filterButtonImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  activeFilterButton: {
    backgroundColor: "#FAD597",
    borderColor: "#D3D3D3",
  },
  championListContainer: {
    flex: 1,
  },
  rowBlock: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  championCard: {
    width: "50%",
    padding: 10,
    position: "relative",
  },
  championImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#FAD597",
  },
  championName: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#FAD597",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  champDesc: {
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#FAD597",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ChampionListScreen;
