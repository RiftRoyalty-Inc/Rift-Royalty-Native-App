import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    ImageBackground,
    FlatList,
    RefreshControl,
} from "react-native";
import Environment from "../../utils/constants/Environment";
import colors from "../../utils/constants/colors";
import LogoutBtn from "../../components/profile/LogoutBtn";

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

// const matchData = [
//     {
//         "type": "Ranked Solo",
//         "timeAgo": "4 minutes ago",
//         "duration": "32m 4s",
//         "champion": {
//             "name": "Pyke",
//             "icon": "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/Pyke.png",
//             "summonerSpells": [
//                 "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/spell/SummonerFlash.png",
//                 "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/spell/SummonerDot.png"
//             ],
//             "runes": [
//                 "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
//                 "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/NimbusCloak/NimbusCloak.png"
//             ]
//         },
//         "stats": {
//             "kda": "25/4/15",
//             "kdaRatio": "10.0 KDA",
//             "cs": "46 CS",
//             "csPerMin": "2.6 CS/Min"
//         },
//         "items": [
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3153.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3074.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3748.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3111.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3026.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3364.png"
//         ],
//         "tags": ["Pentakill", "Controller", "EarlyGank"]
//     },
//     {
//         "type": "Ranked Flex",
//         "timeAgo": "1 hour ago",
//         "duration": "28m 53s",
//         "champion": {
//             "name": "Ahri",
//             "icon": "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/Ahri.png",
//             "summonerSpells": [
//                 "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/spell/SummonerFlash.png",
//                 "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/spell/SummonerHeal.png"
//             ],
//             "runes": [
//                 "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Aery/Aery.png",
//                 "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png"
//             ]
//         },
//         "stats": {
//             "kda": "7/5/12",
//             "kdaRatio": "3.8 KDA",
//             "cs": "158 CS",
//             "csPerMin": "5.5 CS/Min"
//         },
//         "items": [
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3165.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3020.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3157.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3285.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3089.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3151.png"
//         ],
//         "tags": ["Roam", "Burst", "MidgamePower"]
//     },
//     {
//         "type": "Normal Draft",
//         "timeAgo": "2 hours ago",
//         "duration": "34m 12s",
//         "champion": {
//             "name": "Garen",
//             "icon": "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/Garen.png",
//             "summonerSpells": [
//                 "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/spell/SummonerFlash.png",
//                 "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/spell/SummonerIgnite.png"
//             ],
//             "runes": [
//                 "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png",
//                 "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png"
//             ]
//         },
//         "stats": {
//             "kda": "8/3/9",
//             "kdaRatio": "5.7 KDA",
//             "cs": "214 CS",
//             "csPerMin": "6.3 CS/Min"
//         },
//         "items": [
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/6630.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3068.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3075.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3742.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/1038.png",
//             "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/3065.png"
//         ],
//         "tags": ["Tanky", "Splitpush", "LateGame"],
//         "result" : "Victory"
//     }
//     // Add more matches as needed
// ];

const getLpChangeStyle = (result) => {
    if (result !== 'Victory') {
        return styles.lpChangeNegative;
    } else {
        return styles.lpChangePositive;
    }
};

/* 
const getLpChangeStyle = (lpChange) => {
    // Convertir el cambio de LP a un número entero
    const lpChangeValue = parseInt(lpChange);

    // Determinar el estilo basado en el cambio de LP
    if (lpChangeValue < 0) {
        return styles.lpChangeNegative;
    } else {
        return styles.lpChangePositive;
    }
};
*/

const MatchCard = ({ match }) => {
    const lpChangeStyle = getLpChangeStyle(match.result);
    return (
        <View style={styles.matchContainer}>
            <View style={styles.matchHeader}>
                <Text style={[styles.matchType, lpChangeStyle]}>
                    {match.type}
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
                    console.log(`tag${tag}`),
                    <Text key={index} style={[styles.tag, styles[`tag${tag}`]]}>
                        {tag}
                    </Text>
                ))}
            </View>
        </View>
    );
};

const MatchList = ({ matchData }) => {
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
        {
            "name": "Lee Sin",
            "kda": "3.50 KDA",
            "stats": "5.5 / 5.7 / 9.8",
            "winRate": "53%",
            "games": "45 Games",
            "icon": "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/LeeSin.png"
        },
        {
            "name": "Lux",
            "kda": "4.20 KDA",
            "stats": "6.2 / 4.1 / 12.8",
            "winRate": "55%",
            "games": "38 Games",
            "icon": "https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/Lux.png"
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
    const [matchData, setMatchData] = useState([]);
    const [gameName, setGameName] = useState("Alexoliete2315");
    const [tagLine, setTagLine] = useState("1673");
    const [region, setRegion] = useState("euw1");
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        const getMatches = async () => {
            try {
                // /summoners/getmatches?gameName=Alexoliete2315&tagLine=1673&region=euw1
                const URL = `${Environment.RR_API}/summoners/getmatches?gameName=${gameName}&tagLine=${tagLine}&region=${region}`;
                const response = await fetch(URL, {}).then(response => response.json()).catch(error => console.log(error));
                setMatchData(response);
                console.log(URL)
            } catch (e) {
                console.log(e)
            }
        }
        getMatches();
    }, [refreshing]);
    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} style={styles.container}>
            <ProfileCard />
            <LogoutBtn/>
            {/* Agregamos la sección de estadísticas de perfil */}
            <ProfileStats />
            {/* Agregamos la sección de partidas */}
            <View style={styles.section}>
                <MatchList matchData={matchData} />
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
        marginVertical: 5,
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
    lpChangePositive: {
        color: '#00FF00',
    },
    lpChangeNegative: {
        color: 'red',
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
    tagVictory: {
        color: "#00FF00",
    },
    "tagYou Surrendered :(": {
        color: "#FFFFFF",
        backgroundColor: "#FF0000",
    },
    "tagQuadra Kill!": {
        color: "#FFFFFF",
        backgroundColor: "#FFAA00",
    },
    "tagPENTAKILL!": {
        backgroundColor: "#4B0082", /* Color índigo oscuro */
        color: "#fff",
    },
    "tagKilling Spree": {
        backgroundColor: "#FFD700",
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
    tagRoam: {
        backgroundColor: "#FFA500", /* Color naranja */
    },
    tagBurst: {
        backgroundColor: "#FFD700", /* Color dorado */
    },
    tagMidgamePower: {
        backgroundColor: "#4B0082", /* Color índigo oscuro */
        color: "#fff",
    },
    tagTanky: {
        backgroundColor: "#4682B4", /* Azul acero */
    },
    tagSplitpush: {
        backgroundColor: "#32CD32", /* Verde lima */
    },
    tagLateGame: {
        backgroundColor: "#8B008B", /* Violeta oscuro */
    }

});

export default ProfileScreen;
