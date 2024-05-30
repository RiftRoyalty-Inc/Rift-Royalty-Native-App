import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

const ItemListScreen = () => {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filterOptions = [
    { name: "All", imageUri: require("../../../assets/ALL.png") },
    { name: "Assassin", imageUri: require("../../../assets/ASSASINS.png") },
    { name: "Tank", imageUri: require("../../../assets/TANK.png") },
    { name: "Support", imageUri: require("../../../assets/SUPPORT.png") },
    { name: "Mage", imageUri: require("../../../assets/MAGE.png") },
    { name: "Fighter", imageUri: require("../../../assets/FIGHTER.png") },
    { name: "Marksman", imageUri: require("../../../assets/MARKSMAN1.png") },
    { name: "Specialist", imageUri: require("../../../assets/SPECIALIST.png") },
  ];

  const itemData = [
    {
      id: "1",
      name: "Berserker's Greaves",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3006.png",
      type: "Marksman",
      price: 1100,
      sellPrice: 770,
      stats: "+35% attack speed",
      description: "Unique – Enhanced Movement: +45 movement speed.",
    },
    {
      id: "2",
      name: "Mercury's Treads",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3111.png",
      type: "Tank",
      price: 1100,
      sellPrice: 770,
      stats: "+25 magic resistance",
      description: "Unique – Enhanced Movement: +45 movement speed.",
    },
    {
      id: "3",
      name: "Infinity Edge",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3031.png",
      type: "Marksman",
      price: 3400,
      sellPrice: 2380,
      stats: "+70 attack damage, +20% critical strike chance",
      description:
        "Unique – Windfall: Critical strike bonus damage is increased by 35%.",
    },
    {
      id: "4",
      name: "Sunfire Aegis",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3068.png",
      type: "Fighter",
      price: 3200,
      sellPrice: 2240,
      stats: "+450 health, +30 armor, +30 magic resistance",
      description:
        "Unique – Immolate: Deals 25 (+1 per champion level) magic damage per second to nearby enemies.",
    },
    {
      id: "5",
      name: "Archangel's Staff",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3003.png",
      type: "Mage",
      price: 2600,
      sellPrice: 1820,
      stats: "+60 ability power, +450 mana",
      description:
        "Unique – Awe: Grants bonus ability power equal to 3% maximum mana.",
    },
    {
      id: "6",
      name: "Dead Man's Plate",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3742.png",
      type: "Tank",
      price: 2900,
      sellPrice: 2030,
      stats: "+40 armor, +400 health",
      description:
        "Unique – Dreadnought: Generates Momentum stacks while moving, up to 100, granting up to 60 bonus movement speed at 100 stacks. Momentum rapidly decays while under crowd control effects and decays slowly while slowed.",
    },
    {
      id: "7",
      name: "Zeal",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3086.png",
      type: "Marksman",
      price: 1050,
      sellPrice: 735,
      stats: "+15% attack speed, +20% critical strike chance",
      description: "",
    },
    {
      id: "8",
      name: "Tiamat",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3077.png",
      type: "Fighter",
      price: 1200,
      sellPrice: 840,
      stats: "+25 attack damage, +50% base health regeneration",
      description:
        "Unique – Cleave: Basic attacks deal 60% to 100% of total attack damage as bonus physical damage to enemies near the target on hit, decaying down to 60% near the edge.",
    },
    {
      id: "9",
      name: "Rod of Ages",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/6657.png",
      type: "Mage",
      price: 2600,
      sellPrice: 1820,
      stats: "+60 ability power, +300 health, +300 mana",
      description:
        "Unique – Eternity: Grants bonus health equal to 15% of mana spent and restores mana equal to 15% of damage taken from champions (halved for area of effect spells).",
    },
    {
      id: "10",
      name: "Guardian Angel",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3026.png",
      type: "Tank",
      price: 2800,
      sellPrice: 1960,
      stats: "+40 attack damage, +40 armor",
      description:
        "Unique – Resurrect: Upon taking lethal damage, restores the greater of 700 health or 30% of maximum health and 30% of maximum mana after 4 seconds of stasis (300 second cooldown).",
    },
    {
      id: "11",
      name: "Rylai's Crystal Scepter",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3116.png",
      type: "Mage",
      price: 2600,
      sellPrice: 1820,
      stats: "+90 ability power, +300 health",
      description:
        "Unique – Icy: Damaging abilities slow enemy champions for 1.5 seconds.",
    },
    {
      id: "12",
      name: "Essence Reaver",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3508.png",
      type: "Marksman",
      price: 2900,
      sellPrice: 2030,
      stats:
        "+55 attack damage, +20% critical strike chance, +20 ability haste",
      description:
        "Unique – Spellblade: After using an ability, your next basic attack within 10 seconds deals 100% base AD bonus physical damage (1.5 second cooldown).",
    },
    {
      id: "13",
      name: "Trinity Force",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3078.png",
      type: "Fighter",
      price: 3333,
      sellPrice: 2333,
      stats:
        "+25 attack damage, +40% attack speed, +20% cooldown reduction, +200 health, +5% movement speed",
      description:
        "Unique – Spellblade: After using an ability, your next basic attack within 10 seconds deals (200% base AD) bonus physical damage. (1.5 second cooldown).",
    },
    {
      id: "14",
      name: "Hextech Rocketbelt",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3152.png",
      type: "Mage",
      price: 3200,
      sellPrice: 2240,
      stats: "+80 ability power, +15 magic penetration",
      description:
        "Unique – Fire Bolt: Dash in target direction, unleashing an arc of rockets that deal 250 − 300 (based on level) (+ 15% AP) magic damage. Then, gain 75% bonus movement speed towards enemy champions for 2 seconds.",
    },
    {
      "id": "15",
      "name": "Rabadon's Deathcap",
      "imageUri": "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3089.png",
      "type": "Mage",
      "price": 3600,
      "sellPrice": 2520,
      "stats": "+120 ability power",
      "description": "Unique – Excessive Force: Increases ability power by 35%."
    },
    {
      id: "16",
      name: "Sorcerer's Shoes",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3020.png",
      type: "Mage",
      price: 1100,
      sellPrice: 770,
      stats: "+18 magic penetration",
      description: "Unique – Enhanced Movement: +45 movement speed.",
    },
    {
      id: "17",
      name: "Duskblade of Draktharr",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/6691.png",
      type: "Assassin",
      price: 3400,
      sellPrice: 2380,
      stats: "+55 attack damage, +18 lethality",
      description:
        "Unique – Nightstalker: Attacking a champion deals 55 (+ 25% bonus AD) physical damage, grants you 20% bonus movement speed and invisibility for 1.5 seconds. Attacking from the invisibility will break it, but will deal 150% damage. (21 − 12 second cooldown, based on lethality)",
    },
    {
      id: "18",
      name: "Rabadon's Deathcap",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3089.png",
      type: "Mage",
      price: 3600,
      sellPrice: 2520,
      stats: "+120 ability power",
      description: "Unique – Excessive Force: Increases ability power by 40%.",
    },
    {
      id: "19",
      name: "Blade of the Ruined King",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3153.png",
      type: "Marksman",
      price: 3300,
      sellPrice: 2310,
      stats: "+40 attack damage, +25% attack speed, +12% life steal",
      description:
        "Unique – Maim: Basic attacks deal 10% − 60% (based on target's current health) of the target's maximum health bonus physical damage (minimum 100 damage vs. monsters and minions).",
    },
    {
      id: "20",
      name: "Zhonya's Hourglass",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3157.png",
      type: "Mage",
      price: 2600,
      sellPrice: 1820,
      stats: "+65 ability power, +45 armor",
      description:
        "Unique – Stasis: Put yourself in Stasis for 2.5 seconds, rendering yourself untargetable and invulnerable but unable to take any actions (120 second cooldown).",
    },
  ];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const filteredItemData = itemData.filter(
    (item) => filter === "All" || item.type === filter
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Items ({filter})</Text>
      </View>
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
      <FlatList
        data={filteredItemData}
        numColumns={4}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleItemPress(item)} style={styles.item}>
            <Image source={{uri: item.imageUri}} style={styles.itemImage} />
          </Pressable>
        )}
      />
      <Modal visible={!!selectedItem} animationType="fade" transparent>
        <TouchableWithoutFeedback onPress={handleClosePopup}>
          <View style={styles.popupBackground}>
            <View style={styles.popupContainer}>
              <View style={styles.popupTopContainer}>
                <Image
                  source={{uri: selectedItem?.imageUri}}
                  style={styles.popupImage}
                />
                <View style={styles.itemInfoContainer}>
                  <Text style={styles.itemName}>{selectedItem?.name}</Text>
                  <Text style={styles.itemPrice}>
                    Price: {selectedItem?.price}
                  </Text>
                  <Text style={styles.itemSellPrice}>
                    Sell Price: {selectedItem?.sellPrice}
                  </Text>
                </View>
                <View style={styles.itemStatsContainer}>
                  <Text style={styles.itemStats}>{selectedItem?.stats}</Text>
                </View>
              </View>
              <View style={styles.popupBottomContainer}>
                <Text style={styles.itemDescription}>
                  {selectedItem?.description}
                </Text>
              </View>
              <Pressable style={styles.closeButton} onPress={handleClosePopup}>
                <Text style={styles.closeButtonText}>X</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C2E",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FAD597",
  },
  filterContainer: {
    maxHeight: 65,
    marginBottom: 20,
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginVertical: 10,
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
  item: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginHorizontal: 10,
    paddingHorizontal:20,
    paddingVertical:20,
    borderWidth: 3,
    borderColor: "#FAD597",
  },
  popupBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContainer: {
    backgroundColor: "#1C1C2E",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  popupTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  popupImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 20,
    borderWidth: 2,
    borderColor: "#FAD597",
  },
  itemInfoContainer: {
    flex: 1,
    marginRight: 20,
  },
  itemName: {
    color: "#FAD597",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemPrice: {
    color: "#FAD597",
    fontSize: 16,
  },
  itemSellPrice: {
    color: "#FAD597",
    fontSize: 16,
    opacity: 0.7,
  },
  itemStatsContainer: {
    flex: 1,
  },
  itemStatsTitle: {
    color: "#FAD597",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemStats: {
    color: "#FAD597",
    fontSize: 16,
  },
  popupBottomContainer: {
    marginTop: 20,
  },
  itemDescription: {
    color: "#FAD597",
    fontSize: 16,
  },
  closeButton: {
    width: 35,
    height: 35,
    backgroundColor: "#1C1C2E",
    position: "absolute",
    top: 10,
    right: 10,
    paddingLeft: 10,
    borderRadius: 90,
  },
  closeButtonText: {
    backgroundColor: "#1C1C2E",
    fontWeight: "bold",
    color: "#FAD597",
    fontSize: 22,
    borderRadius: 90,
  },
});

export default ItemListScreen;
