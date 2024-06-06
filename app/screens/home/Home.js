import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    Pressable,
    Image,
    ImageBackground,
    ActivityIndicator,
    ScrollView,
    RefreshControl
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getTop5Players } from '../../utils/scripts/home/Home';
import Environment from '../../utils/constants/Environment';
import { FlatList } from 'react-native-gesture-handler';
import fonts from '../../utils/constants/fonts';
import { SearchBar } from '@rneui/themed';
import AntDesign from '@expo/vector-icons/AntDesign';
import { BackgroundImage } from '@rneui/base';
import colors from '../../utils/constants/colors';
import LinkAccountPopup from '../../components/home/LinkAccountPopup';
import { useNavigation } from '@react-navigation/native';
import routes from '../../utils/constants/routes';

const sleep = ms => new Promise(r => setTimeout(r, ms));
const Home = () => {
    const [news, setNews] = React.useState([
        {
            id: 1,
            titulo: 'Smolder, The Fiery Fledling Releases Next Week',
            cuerpo: '{$img:https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg}',
            fecha: '04/02/2024',
            parche: '14.2',
            fondo: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg'
        },
        {
            id: 2,
            titulo: 'Patch Notes of Version 14.9',
            cuerpo: '{$img:https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg}',
            fecha: '06/05/2024',
            parche: '14.9',
            fondo: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltcae83a0aa30a801d/662c40f9c9de4670e8d4ace6/043024_LoL_Patch_14_9_Notes_Banner.jpg?'
        }
    ]);
    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const championWinratestats = require('../../utils/json/MatchesChampionsPerRole.json');
    const [region, setRegion] = React.useState('KR');
    const [regionSearch, setRegionSearch] = React.useState('EUW');
    const [searching, isSearching] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [foundChampions, setFoundChampions] = React.useState(null);
    const [championList, setChampionList] = React.useState(null);
    const [summonerList, setSummonerList] = React.useState(null);
    const [displayLinkAccount, setDisplayLinkAccount] = useState(false);
    const navigation = useNavigation();
    const [foundSummoners, setFoundSummoners] = React.useState(null);
    useEffect(() => {
        async function fetchData() {
            if (search != null && search != undefined && search.length > 0) {
                isSearching(true);
                const URL = `${Environment.RR_API}/searches/champions_summoners?search=${search}&region=${regionSearch}`;
                console.log("URL: " + URL);
                const response =
                    await fetch(URL, {})
                        .then(response => response.json())
                        .then(data => {
                            // console.log(data);
                            data.champions != null ? setFoundChampions(data.champions) : setFoundChampions(null);
                            data.summoners != null ? setFoundSummoners(data.summoners) : setFoundSummoners(null);
                        })
                        .catch(error => console.log(error));
            } else {
                // console.log('resetting. . .');
                isSearching(false);
                setFoundChampions(null);
                setFoundSummoners(null);
            }
        }
        fetchData();
    }, [search]);

    const renderImagenSegunTier = (item) => {
        let imagenSource = null;
        switch (item) {
            case "IRON":
                imagenSource = { uri: 'https://ddragon.leagueoflegends.com/cdn/14.11.1/img/tft-regalia/TFT_Regalia_Iron.png' };
                break;
            case "BRONZE":
                imagenSource = { uri: 'https://ddragon.leagueoflegends.com/cdn/14.11.1/img/tft-regalia/TFT_Regalia_Bronze.png' };
                break;
            case "SILVER":
                imagenSource = { uri: 'https://ddragon.leagueoflegends.com/cdn/14.11.1/img/tft-regalia/TFT_Regalia_Silver.png' };
                break;
            case "GOLD":
                imagenSource = { uri: 'https://ddragon.leagueoflegends.com/cdn/14.11.1/img/tft-regalia/TFT_Regalia_Gold.png' };
                break;
            case "PLATINUM":
                imagenSource = { uri: 'https://ddragon.leagueoflegends.com/cdn/14.11.1/img/tft-regalia/TFT_Regalia_Platinum.png' };
                break;
            case "EMERALD":
                imagenSource = { uri: 'https://ddragon.leagueoflegends.com/cdn/14.11.1/img/tft-regalia/TFT_Regalia_Emerald.png' };
                break;
            case "DIAMOND":
                imagenSource = { uri: 'https://ddragon.leagueoflegends.com/cdn/14.11.1/img/tft-regalia/TFT_Regalia_Diamond.png' };
                break;
            case "MASTER":
                imagenSource = { uri: 'https://ddragon.leagueoflegends.com/cdn/14.11.1/img/tft-regalia/TFT_Regalia_Master.png' };
                break;
            case "GRANDMASTER":
                imagenSource = { uri: 'https://ddragon.leagueoflegends.com/cdn/14.11.1/img/tft-regalia/TFT_Regalia_Grandmaster.png' };
                break;
            case "CHALLENGER":
                imagenSource = { uri: 'https://ddragon.leagueoflegends.com/cdn/14.11.1/img/tft-regalia/TFT_Regalia_Challenger.png' };
                break;
            default:
                // Aquí puedes manejar otros casos si es necesario
                break;
        }
        if (imagenSource) {
            return <Image source={imagenSource} style={{ width: 34, height: 34 }} />;
        } else {
            return <Text style={{ color: colors.text, fontFamily: fonts.K2D_R, fontSize: 16 }}>UR</Text>
        }
    };

    const handleChampPress = (item) => () => {
        const slug = item.champion.slug;
        const s = { champId: slug };
        console.log(s); // This prints: {"champId": "jhin"}
        navigation.navigate("ChampionCard", s);
    };


    useEffect(() => {
        // console.log(foundChampions);
        setChampionList(
            <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <Text style={{ color: colors.text, fontSize: 16, fontFamily: fonts.K2D_B, marginBottom: 10 }}>Champions</Text>
                <FlatList
                    scrollEnabled={false}
                    data={foundChampions}
                    contentContainerStyle={{ gap: 10 }}
                    renderItem={({ item }) => (
                        <Pressable onPress={handleChampPress(item)}>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, backgroundColor: colors.tertiaryPurple, padding: 10, borderRadius: 7, alignItems: 'center', borderWidth: 1, borderColor: colors.contrast }}>
                                <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${Capitalize(item.champion.slug)}.png` }} style={{ width: 34, height: 34, borderRadius: 99, borderWidth: 1, borderColor: colors.contrast }} />
                                <Text style={{ color: colors.text, fontFamily: fonts.K2D_R, fontSize: 16 }}>{Capitalize(item.champion.name)}</Text>
                            </View>
                        </Pressable>
                    )}
                />
            </View>
        );
    }, [foundChampions])


    const handleSummonerPress = (item) => () => {
        const s = { gameName: item.gameName, tagLine: item.tagLine, region: item.region, profileIconId: item.icon };
        console.log(s);
        navigation.navigate(routes.PROFILE_SEARCH, s);
    };

    useEffect(() => {
        setSummonerList(
            <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <Text style={{ color: colors.text, fontSize: 16, fontFamily: fonts.K2D_B, marginBottom: 10 }}>Summoners</Text>
                <FlatList
                    scrollEnabled={false}
                    data={foundSummoners}
                    contentContainerStyle={{ gap: 10 }}
                    renderItem={({ item }) => (
                        <Pressable onPress={handleSummonerPress(item)}>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, backgroundColor: colors.tertiaryPurple, padding: 10, borderRadius: 7, alignItems: 'center', borderWidth: 1, borderColor: colors.contrast }}>
                                <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/profileicon/${item.icon}.png` }} style={{ width: 34, height: 34, borderRadius: 99, borderWidth: 1, borderColor: colors.contrast }} />
                                <Text style={{ color: colors.text, fontFamily: fonts.K2D_R, fontSize: 16 }}>{item.gameName}</Text>
                                {renderImagenSegunTier(item.queue.tier)}
                                <Text style={{ color: colors.text, fontFamily: fonts.K2D_R, fontSize: 16 }}>{item.queue.division}</Text>
                            </View>
                        </Pressable>
                    )}
                />
            </View>
        );
    }, [foundSummoners])

    const resultadoSummoners = () => {
        <View>
            <View>
                <Text>Summoners</Text>
            </View>
            <View>
                {/* Flatlist */}
                <FlatList
                    scrollEnabled={false}
                    data={foundSummoners}
                    renderItem={({ item }) => (
                        <View>
                            <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/profileicon/${item.profileIconId}.png` }} style={{ width: 22, height: 22 }} />
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    }
    const [topUsers, setTopUsers] = React.useState(null);
    const [roles, setRoles] = React.useState([
        { role: 'top', key: '1' },
        { role: 'jungle', key: '2' },
        { role: 'mid', key: '3' },
        { role: 'adc', key: '4' },
        { role: 'support', key: '5' }
    ]);

    /**
     * Asynchronously handles the top users for a given region.
     *
     * @param {string} region - The region to get the top players for.
     * @return {Promise<Object>} A promise that resolves to the response object containing the top players.
     */
    async function handleTopUsers(region) {
        const response = await fetch(`${Environment.RR_API}/summoners/top-players-world?region=${region}`, {}).then(response => response.json()).catch(error => console.log(error));
        return response;
    }

    const parseText = (text) => {
        const parts = text.split(/({\$(?:img|p|t[1-4])}|{\$\/(?:img|p|t[1-4])})/);
        const elements = [];

        parts.forEach((part, index) => {
            if (part.startsWith("{$img:")) {
                const imageUrl = part.substring(6, part.length - 1); // Remove "{$img:" and "}"
                elements.push(<Image key={index} source={{ uri: imageUrl }} />);
            } else if (part.startsWith("{$p}")) {
                const textContent = part.substring(4, part.length - 5); // Remove "{$p}" and "{$/p}"
                elements.push(<Text key={index}>{textContent}</Text>);
            } else if (part.startsWith("{$t")) {
                const fontSize = 32 - (parseInt(part[2]) - 1) * 8; // Calculate font size based on "tX" where X is 1 to 4
                const textContent = part.substring(4, part.length - 5); // Remove "{$tX}" and "{$/tX}"
                elements.push(<Text key={index} style={{ fontSize }}>{textContent}</Text>);
            } else if (part === "{$/img}" || part === "{$/p}" || part === "{$/t1}" || part === "{$/t2}" || part === "{$/t3}" || part === "{$/t4}") {
                // Do nothing, handled the closing tags
            } else {
                elements.push(<Text key={index}>{part}</Text>);
            }
        });

        return elements;
    }

    const MAX_LENGTH = 9; // Replace with your desired max length

    const TruncatedText = ({ text }) => {
        const truncatedText = text.length > MAX_LENGTH ? `${text.substring(0, MAX_LENGTH)}...` : text;
        return <Text style={{ color: 'white' }}>{truncatedText}</Text>;
    };
    // Hara que cada vez que cambie la region, se actualice la lista de jugadores
    useEffect(() => {
        handleTopUsers(region).then(users => { setTopUsers(users); });
    }, [region]);

    // useEffect(() => {
    //     handleNews().then(news => { setNews(news); });
    // },[]);

    /**
     * Retrieves and displays the top users based on the provided data.
     *
     * @return {JSX.Element} The JSX element representing the top users list.
     */

    function SearchItems() {
        if (search != null && search != undefined && search.length > 0) {
            isSearching(true);
        } else {
            isSearching(false);
        }
    }

    function CloseSearchItems() {
        isSearching(false);
    }

    function handleLinkAccount() {
        setDisplayLinkAccount(true);
    }

    const LinkAccountBtn = () => {
        return (
            <View style={styles.linkAccountContainer}>
                <Pressable style={styles.linkAccountBtn} onPress={handleLinkAccount}>
                    <Text style={[styles.text, styles.bold]}>Link League Account</Text>
                </Pressable>
            </View>
        );
    }

    const closeButton = () => {
        return (
            <View style={styles.closeButtonContainer}>
                <Pressable onPress={() => { setDisplayLinkAccount(false) }} style={styles.closeButton}>
                    <AntDesign name="closecircleo" size={24} color={colors.contrast} />
                </Pressable>
            </View>
        );
    }

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
    const formattedText = parseText(`{$img:https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg}`);

    const getTopUsers = () => {
        if (topUsers !== null && topUsers !== undefined) {
            return (
                <FlatList
                    scrollEnabled={false}
                    data={topUsers}
                    contentContainerStyle={{ gap: 10 }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, gap: 10, backgroundColor: colors.bgLightPurple, paddingVertical: 5 }}>
                            <Text style={{ flex: 1, color: 'white', textAlign: 'center' }}>{item.id}</Text>
                            <View style={{ flex: 6, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 7 }}>
                                <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/profileicon/${item.profileIconId}.png` }} style={{ width: 36, height: 36, borderRadius: 99, borderColor: colors.contrast, borderWidth: 1 }} />
                                <TruncatedText text={`${item.gameName}#${item.tagLine}`} />
                            </View>
                            <Text style={{ flex: 3, textAlign: 'center', color: 'white' }}>{`${item.wins}/${item.losses}`}</Text>
                            <Text style={{ flex: 3, textAlign: 'center', color: 'white' }}>{item.leaguePoints}</Text>
                        </View>
                    )}
                />
            );
        } else {
            return (
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', minWidth: '100%', backgroundColor: '#252046', flex: 1, borderBottomLeftRadius: 7, borderBottomRightRadius: 7, padding: 10 }}>
                    <View style={{ flex: 1, color: colors.text }}><Text style={{ color: '#E3E3E3', textAlign: 'center' }}>0</Text></View>
                    <View style={{ flex: 6, color: colors.text, marginLeft: 5 }}><Text style={{ color: colors.text }}>N/A</Text></View>
                    <View style={{ flex: 3, color: colors.text }}><Text style={{ color: colors.text, textAlign: 'center' }}>N/A</Text></View>
                    <View style={{ flex: 3, }}><Text style={{ color: colors.text, textAlign: 'center' }}>N/A</Text></View>
                </View>
            );
        }
    }

    return (
        <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            style={{
                backgroundColor: '#1A1635',
                minWidth: '100%',
                minHeight: '100%',
                padding: 20,
            }}
            keyboardDismissMode='on-drag'>
            <View style={{
                minWidth: '100%',
                alignItems: 'center'
            }}>
                <Image
                    src='https://rift-royalty-file-storage.s3.amazonaws.com/RR_LOGO_FULL_NOBLUE.png'
                    style={{ width: 140, height: 140, borderRadius: 70 }} />
                <View style={{
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flex: 1,
                    paddingVertical: 7,
                    paddingHorizontal: 7,
                    borderWidth: 1,
                    borderColor: '#FCEFC6',
                    borderRadius: 7,
                    height: 53
                }}>

                    <AntDesign name="search1" size={32} color="#D3D3D3" />
                    {/* Searchbar */}
                    <TextInput
                        placeholder='Hide On Bush / Ahri...'
                        numberOfLines={1}
                        placeholderTextColor={'#D3D3D3'}
                        style={{ flex: 1, color: '#D3D3D3' }}
                        onChangeText={(text) => { setSearch(text); }}
                        onFocus={() => { SearchItems(); }}
                    // onBlur={() => { CloseSearchItems(); }}
                    />
                    <Pressable style={{
                        borderColor: '#FFEFAE',
                        borderRadius: 3,
                        width: 70,
                        borderWidth: 1,
                        backgroundColor: '#595081',
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>EUW</Text>
                    </Pressable>
                </View>
                <View style={[{ position: 'absolute', backgroundColor: '#252046', right: 0, left: 0, top: 190, zIndex: 999, borderWidth: 1, borderColor: colors.contrast, borderBottomLeftRadius: 7, borderBottomRightRadius: 7 }, { display: searching == true ? 'flex' : 'none' }]}>
                    <View>
                        {
                            (foundSummoners == null || foundSummoners == undefined) ? <ActivityIndicator size="large" color="#D0D0D0" /> : summonerList
                        }
                        {
                            (foundChampions == null || foundSummoners == undefined) ? <ActivityIndicator size="large" color="#D0D0D0" /> : championList
                        }
                        <Pressable style={styles.closeSearchTab} onPress={() => { isSearching(false) }}>
                            {/* <AntDesign name="closecircleo" size={24} color={colors.contrast} /> */}
                            <Text style={styles.closeSearchText}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            {LinkAccountBtn()}

            {/** FORM */}
            <View style={{ marginBottom: 15 }}>
                <Text style={{ fontFamily: fonts.AOBOSHI_R, fontSize: 22, color: 'white' }}>Top Players In The Region</Text>
            </View>
            {/* VIEW OF TOP 5 - 1633 - USERS */}
            {/* WTF pasa */}

            <View
                style={{
                    display: 'flex',
                    minWidth: '100%',
                    borderWidth: 1,
                    borderColor: '#FCEFC6',
                    borderRadius: 7
                }}>
                <View style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', minWidth: '100%', backgroundColor: '#595081', borderTopLeftRadius: 7, borderTopRightRadius: 7, paddingHorizontal: 8, gap: 10, paddingVertical: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/icons/trophy.png')} style={{ width: 22, height: 22 }} />
                    </View>
                    <Text style={{ color: 'white', flex: 6, fontFamily: fonts.K2D_B }}>Summoner's Name</Text>
                    <Text style={{ color: 'white', flex: 3, textAlign: 'center', fontFamily: fonts.K2D_B }}>Win/Lose</Text>
                    <Text style={{ color: 'white', flex: 3, textAlign: 'center', fontFamily: fonts.K2D_B }}>LP</Text>
                </View>
                {/* ELEMENTO OF TOP USERS */}
                {getTopUsers()}
            </View>

            <Text style={{ fontFamily: fonts.AOBOSHI_R, fontSize: 19, color: 'white', marginVertical: 15 }}>CHAMPIONS <Text style={{ fontFamily: fonts.AOBOSHI_B, color: '#FCEFC6' }}>DOMINATING</Text> THE <Text style={{ fontFamily: fonts.AOBOSHI_B, color: '#FCEFC6' }}>LEADERBOARDS</Text></Text>
            <View>
                <FlatList
                    scrollEnabled={false}
                    data={roles}
                    keyExtractor={(item) => item.key}
                    contentContainerStyle={{ gap: 20 }}
                    renderItem={({ item }) => (
                        <View style={{ borderWidth: 1, borderColor: '#FCEFC6', borderRadius: 7 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#595081', borderWidth: 1, borderTopLeftRadius: 7, borderTopRightRadius: 7, padding: 7, borderBottomColor: '#FCEFC6' }}>
                                <Text style={{ fontSize: 16, textTransform: 'capitalize', textDecorationStyle: 'solid', textDecorationLine: 'underline', color: '#FCEFC6', fontFamily: fonts.K2D_B, }}>Highest Win Rate {item.role}</Text>
                            </View>
                            <View>
                                <FlatList
                                    scrollEnabled={false}
                                    horizontal
                                    style={{ flex: 1 }}
                                    contentContainerStyle={{ minWidth: '100%', alignItems: 'center', justifyContent: 'space-around' }}
                                    data={championWinratestats[0][item.role]}
                                    renderItem={({ item }) => (
                                        <ImageBackground source={{ uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg` }} style={{ width: 102, height: 153 }}>
                                            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Image
                                                    source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.9.1/img/champion/${item.id}.png` }}
                                                    style={{ width: 52, height: 52, borderRadius: 52 / 2, borderWidth: 1, borderColor: 'cyan' }}
                                                />
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={{ color: '#E2E5FF', fontSize: 16, fontFamily: fonts.AOBOSHI_R }}>{item.name}</Text>
                                                    <Text style={[((item.wins / (item.wins + item.losses)) * 100).toFixed(2) >= 50 ? ((item.wins / (item.wins + item.losses)) * 100).toFixed(2) >= 70 ? { color: 'orange' } : { color: 'cyan' } : { color: 'red' }, { fontFamily: fonts.AOBOSHI_R }]}>{((item.wins / (item.wins + item.losses)) * 100).toFixed(2)}%</Text>
                                                    <Text style={{ color: '#E2E5FF', fontFamily: fonts.AOBOSHI_R }}>Win Rate</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    )}
                                />
                            </View>
                        </View>
                    )}
                />
            </View>

            {/* NEWS */}
            <Text style={{ fontFamily: fonts.AOBOSHI_R, fontSize: 22, color: colors.text, marginVertical: 15 }}>LATEST <Text style={{ fontFamily: fonts.AOBOSHI_B, color: '#FCEFC6' }}>NEWS</Text></Text>
            <View style={{}}>
                <FlatList
                    style={{ marginBottom: 40 }}
                    scrollEnabled={false}
                    keyExtractor={(item) => item.id}
                    data={news}
                    contentContainerStyle={{ gap: 15 }}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: colors.lightPurple, minHeight: 224, borderRadius: 7, borderColor: colors.contrast, borderWidth: 1 }}>
                            <ImageBackground source={{ uri: item.fondo }} style={{ minHeight: 162 }} imageStyle={{ borderRadius: 7 }}>
                                <View style={{ position: 'absolute', bottom: 0, right: 0, display: 'flex', flexDirection: 'row', gap: 10, marginBottom: 7, marginRight: 10 }}>
                                    <Text style={{
                                        backgroundColor: colors.lightPurple,
                                        borderColor: colors.contrast,
                                        borderWidth: 1,
                                        paddingHorizontal: 10,
                                        paddingVertical: 1,
                                        borderRadius: 3,
                                        color: 'white',
                                        fontFamily: fonts.K2D_B,
                                        fontSize: 12,
                                    }}>Patch {item.parche}</Text>
                                    <Text style={{
                                        backgroundColor: colors.lightPurple,
                                        borderColor: colors.contrast,
                                        borderWidth: 1,
                                        paddingHorizontal: 10,
                                        paddingVertical: 1,
                                        borderRadius: 3,
                                        color: 'white',
                                        fontFamily: fonts.K2D_B,
                                        fontSize: 12,
                                    }}>{item.fecha}</Text>
                                </View>
                            </ImageBackground>
                            <View style={{ minHeight: 63, paddingHorizontal: 15, paddingVertical: 5, borderTopWidth: 1, borderTopColor: colors.contrast }}>
                                <Text style={{ color: 'white', fontSize: 16, fontFamily: fonts.K2D_B }}>{item.titulo}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
            <View style={displayLinkAccount ? styles.linkAccountPopupContainer : { display: 'none' }}>
                {closeButton()}
                <LinkAccountPopup displayLinkAccount={displayLinkAccount} setDisplayLinkAccount={setDisplayLinkAccount} />
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    linkAccountPopupContainer: {
        minWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 247,
        position: 'absolute',
        top: 200,
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 10,
        right: 23,
        zIndex: 1
    },
    linkAccountPopup: {
        backgroundColor: colors.bgPurple,
        minHeight: 247,
        minWidth: 340,
        borderRadius: 7,
        borderColor: colors.contrast,
        borderWidth: 1,
        paddingHorizontal: 22
    },
    linkAccountContainer: {
        minWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
    },
    linkAccountBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.fillContrast,
        padding: 10,
        borderRadius: 7,
        minWidth: '70%',
    },
    linkAccountText: {
        color: 'white',
        fontFamily: fonts.K2D_B,
    },
    closeSearchTab: {
        backgroundColor: colors.lightPurple,
        padding: 5,
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
    },
    closeSearchText:{
        fontFamily: fonts.K2D_B,
        color: 'white',
        fontSize:16,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: fonts.K2D_R,
        color: 'white',
    },
    bold: {
        fontFamily: fonts.K2D_B
    }
})