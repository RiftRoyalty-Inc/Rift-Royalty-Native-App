import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_37.jpg",
        }}
        style={[styles.backgroundImage, { height: 300 }]}
      >
        <View style={styles.overlay}>
          <Image
            source={{
              uri: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Jhin_37.jpg",
            }}
            style={styles.profilePicture}
          />
          <Text style={styles.username}>Alexoliete2315</Text>
          <Text style={styles.userId}>#1673</Text>
          <View style={styles.regionTag}>
            <Text style={styles.regionText}>EUW</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const matchData = [
  {
    type: "Ranked Solo",
    lpChange: "+89 LP",
    timeAgo: "4 minutes ago",
    duration: "32m 4s",
    champion: {
      name: "Pyke",
      icon: "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/Pyke.png", // Replace with the correct URL
      summonerSpells: [
        "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/spell/SummonerFlash.png",
        "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/spell/SummonerDot.png",
      ],
      runes: [
        "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
        "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/NimbusCloak/NimbusCloak.png",
      ],
    },
    stats: {
      kda: "25/4/15",
      kdaRatio: "10.0 KDA",
      cs: "46 CS",
      csPerMin: "2.6 CS/Min",
    },
    items: [
      "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3153.png",
      "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3074.png",
      "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3748.png",
      "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3111.png",
      "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3026.png",
      "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3364.png",
    ],
    tags: ["Pentakill", "Controller", "EarlyGank"],
  },
  // Add more matches as needed
];

const MatchCard = ({ match }) => {
  return (
    <View style={styles.matchContainer}>
      <View style={styles.matchHeader}>
        <Text style={styles.matchType}>
          {match.type} {match.lpChange}
        </Text>
        <Text style={styles.matchTime}>{match.timeAgo}</Text>
        <Text style={styles.matchDuration}>{match.duration}</Text>
      </View>
      <View style={styles.matchBody}>
        <Image
          source={{ uri: match.champion.icon }}
          style={[styles.championIcon, { width: 64, height: 64 }]}
        />
        <View style={styles.matchDetails}>
          <View style={styles.champMatch}>
            <Text style={[styles.championName, { fontSize: 18 }]}>
              {match.champion.name}
            </Text>
            <View style={styles.summonerSpells}>
              {match.champion.summonerSpells.map((spell, index) => (
                <Image
                  key={index}
                  source={{ uri: spell }}
                  style={styles.spellIcon}
                />
              ))}
            </View>
            <View style={styles.runes}>
              {match.champion.runes.map((rune, index) => (
                <Image
                  key={index}
                  source={{ uri: rune }}
                  style={styles.runeIcon}
                />
              ))}
            </View>
          </View>
          <View style={styles.statsBlock}>
            <Text style={styles.stats}>
              <Text style={{ fontWeight: "bold" }}>{match.stats.kda} </Text>(
              {match.stats.kdaRatio})
            </Text>
            <Text style={styles.stats}>
              <Text style={{ fontWeight: "bold" }}>{match.stats.cs} </Text>(
              {match.stats.csPerMin})
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.itemsContainer}>
        {match.items.map((item, index) => (
          <Image key={index} source={{ uri: item }} style={styles.itemIcon} />
        ))}
      </View>
      <View style={styles.tagsContainer}>
        {match.tags.map((tag, index) => (
          <Text key={index} style={[styles.tag, styles[`tag${tag}`]]}>
            {tag}
          </Text>
        ))}
      </View>
    </View>
  );
};

const MatchList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Matches</Text>
        {matchData.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
    </View>
  );
};

const data = {
  ranked: [
    {
      type: "Ranked Solo/Duo",
      tier: "Gold II",
      lp: "54 LP",
      winRate: "62.3% W/R",
      record: "15W - 8L",
      icon: "https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Season_2023_-_Gold.png/", // replace with the actual URL
    },
    {
      type: "Ranked 5v5",
      tier: "Unranked",
      lp: "0 LP",
      winRate: "70.3% W/R",
      record: "7W - 2L",
      icon: "https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Season_2023_-_Gold.png/", // replace with the actual URL
    },
  ],
  champions: [
    {
      name: "Twisted Fate",
      kda: "2.18 KDA",
      stats: "1.7 / 7.3 / 14.3",
      winRate: "67%",
      games: "27 Games",
      icon: "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/TwistedFate.png", // replace with the actual URL
    },
    // Add more champions here if needed
  ],
  friends: [
    {
      name: "Hide On Bush",
      winRate: "65.0% Win Rate",
      icon: "https://ddragon.leagueoflegends.com/cdn/14.9.1/img/profileicon/0.png", // replace with the actual URL
    },
    {
      name: "IMHERSUPPORTMAIN",
      winRate: "52.1% Win Rate",
      icon: "https://ddragon.leagueoflegends.com/cdn/14.9.1/img/profileicon/0.png", // replace with the actual URL
    },
    {
      name: "LuvFlakkedCheeks",
      winRate: "47.3% Win Rate",
      icon: "https://ddragon.leagueoflegends.com/cdn/14.9.1/img/profileicon/0.png", // replace with the actual URL
    },
  ],
};

const ProfileStats = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        {data.ranked.map((rank, index) => (
          <View key={index} style={styles.rankContainer}>
            <Image source={{ uri: rank.icon }} style={styles.rankIcon} />
            <View style={styles.statsProfile}>
              <View style={styles.elo}>
                <Text style={styles.rankType}>{rank.type}</Text>
                <Text style={styles.rankTier}>{rank.tier}</Text>
                <Text style={styles.rankDetails}>{rank.lp}</Text>
              </View>
              <View style={styles.winrate}>
                <Text style={styles.winrateDetails}>{rank.winRate}</Text>
                <Text style={styles.winrateDetails}>{rank.record}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Most Played Champions</Text>
        {data.champions.map((champion, index) => (
          <View key={index} style={styles.championContainer}>
            <Image
              source={{ uri: champion.icon }}
              style={styles.championIcon}
            />
            <View style={styles.champStats}>
              <View style={styles.champInfo}>
                <Text style={styles.championName}>{champion.name}</Text>
                <Text style={styles.championKda}>{champion.kda}</Text>
              </View>
              <View style={styles.championStats}>
                <Text style={styles.championInfo}>{champion.stats}</Text>
                <Text style={styles.championInfo}>
                  {champion.winRate} - {champion.games}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Most Friends Played With</Text>
        <View style={styles.friendsMostPlayed}>
          <FlatList
            data={data.friends}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.friendContainer}>
                <Image source={{ uri: item.icon }} style={styles.friendIcon} />
                <Text style={styles.friendName}>{item.name}</Text>
                <Text style={styles.friendWinRate}>{item.winRate}</Text>
              </View>
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard />
      {/* Agregamos la sección de estadísticas de perfil */}
      <ProfileStats />
      {/* Agregamos la sección de partidas */}
      <View style={styles.section}>
        <MatchList />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C2E",
    paddingBottom: 20,
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)", // To add a dark overlay
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  username: {
    marginTop: 10,
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  userId: {
    fontSize: 18,
    color: "#fff",
  },
  regionTag: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#4B4B4B",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  regionText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  rankContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 25,
    backgroundColor: "#2A2A40",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  rankIcon: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  statsProfile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 5,
  },
  elo: {
    flexDirection: "column",
    gap: 5,
  },
  winrate: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  rankType: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  winrateDetails: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  rankTier: {
    fontSize: 14,
    color: "#FFD700",
    fontWeight: "bold",
  },
  rankDetails: {
    fontSize: 12,
    color: "#fff",
  },
  championContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: "#2A2A40",
    borderRadius: 8,
  },
  championIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  champStats: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 5,
  },
  champInfo: {
    flexDirection: "column",
    alignItems: "left",
    gap: 5,
    marginLeft: 10,
  },
  championName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  championKda: {
    fontSize: 14,
    color: "#fff",
  },
  championStats: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    marginRight: 15,
  },
  championInfo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  friendsMostPlayed: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  friendContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  friendIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  friendName: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  friendWinRate: {
    fontSize: 12,
    color: "#fff",
  },
  matchContainer: {
    backgroundColor: "#2A2A40",
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 5,
  },
  matchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  matchType: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00FF00",
  },
  matchTime: {
    fontSize: 14,
    color: "#fff",
  },
  matchDuration: {
    fontSize: 14,
    color: "#fff",
    marginRight: 5,
  },
  matchBody: {
    flexDirection: "row",
    alignItems: "center",
  },
  championIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  matchDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  champMatch: {
    flexDirection: "column",
    alignItems: "left",
    marginHorizontal: 10,
  },
  summonerSpells: {
    flexDirection: "row",
    marginVertical: 5,
  },
  spellIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  runes: {
    flexDirection: "row",
    marginBottom: 5,
  },
  runeIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  statsBlock: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10,
    gap: 5,
    marginBottom: 10,
  },
  stats: {
    fontSize: 14,
    color: "#fff",
  },
  itemsContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  itemIcon: {
    width: 32,
    height: 32,
    marginRight: 5,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
    borderRadius: 5,
  },
  tagPentakill: {
    backgroundColor: "#FF0000", // Cambiar color si lo deseas
  },
  tagController: {
    backgroundColor: "#00FF00", // Cambiar color si lo deseas
  },
  tagEarlyGank: {
    backgroundColor: "#fff", // Cambiar color si lo deseas
  },
});

export default ProfileScreen;
