import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
  Dimensions,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "@rneui/base";

const window = Dimensions.get("window");
const windowHeight = window.height;
const windowWidth = window.width;

const ChampionCard = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Runes");

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  const roles = [
    { name: "Top", imageUri: require("../../../assets/bottom.png") },
    { name: "Jungler", imageUri: require("../../../assets/bottom.png") },
    { name: "Mid", imageUri: require("../../../assets/bottom.png") },
    { name: "Bottom", imageUri: require("../../../assets/bottom.png") },
    { name: "Support", imageUri: require("../../../assets/bottom.png") },
  ];
  const regions = [
    { name: "Ionia", imageUri: require("../../../assets/jonia.png") }, //este esta bien de prueba},
    { name: "Demacia", imageUri: "https://example.com/demacia.jpg" },
    { name: "Noxus", imageUri: "https://example.com/noxus.jpg" },
    { name: "Freljord", imageUri: "https://example.com/freljord.jpg" },
    { name: "Piltover", imageUri: "https://example.com/piltover.jpg" },
    { name: "Bilgewater", imageUri: "https://example.com/bilgewater.jpg" },
    { name: "Shadow Isles", imageUri: "https://example.com/shadow-isles.jpg" },
  ];
  const functions = [
    { name: "All", imageUri: require("../../../assets/ALL.png") },
    { name: "Assassin", imageUri: require("../../../assets/ASSASINS.png") },
    { name: "Tank", imageUri: require("../../../assets/TANK.png") },
    { name: "Support", imageUri: require("../../../assets/SUPPORT.png") },
    { name: "Mage", imageUri: require("../../../assets/MAGE.png") },
    { name: "Fighter", imageUri: require("../../../assets/FIGHTER.png") },
    { name: "Marksman", imageUri: require("../../../assets/marksman.png") }, //ES EL UNICO QUE ES CORRECTO
    { name: "Specialist", imageUri: require("../../../assets/SPECIALIST.png") },
  ];
  const items = [
    // botas de velocidad
    {
      id: 1001,
      name: "Botas de Velocidad",
      description: "Aumenta levemente la velocidad de movimiento.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1001.png",
    },
    // cristal de rubi
    {
      id: 1004,
      name: "Cristal de Rubí",
      description: "Proporciona un poco de salud adicional.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1004.png",
    },
    // espada larga
    {
      id: 1011,
      name: "Espada Larga",
      description: "Aumenta el daño de ataque.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1011.png",
    },
    //capa de negatron
    {
      id: 1026,
      name: "Capa de Negatron",
      description: "Proporciona resistencia mágica.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1026.png",
    },
    //varita amplificadora
    {
      id: 1052,
      name: "Varita Amplificadora",
      description: "Aumenta el poder de habilidad.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1052.png",
    },
    //poción
    {
      id: 1054,
      name: "Poción Roja",
      description: "Restaura salud.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1054.png",
    },
    //poción
    {
      id: 1055,
      name: "Poción Azul",
      description: "Restaura maná.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1055.png",
    },
    //botas del errante
    {
      id: 1029,
      name: "Botas del Errante",
      description: "Aumenta la velocidad de movimiento.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1029.png",
    },
    //botas de mercurio
    {
      id: 1033,
      name: "Botas de Mercurio",
      description: "Proporciona resistencia a control de masas.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1033.png",
    },
    //cuchilla oscura
    {
      id: 1053,
      name: "Cuchilla Oscura",
      description: "Aumenta el daño de ataque y velocidad de ataque.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1053.png",
    },
    //heraldo
    {
      id: 1056,
      name: "Heraldo de Zeke",
      description: "Proporciona estadísticas adicionales a un aliado cercano.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1056.png",
    },
    //espada de doran
    {
      id: 1082,
      name: "Espada de Doran",
      description: "Proporciona estadísticas adicionales.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1082.png",
    },
    //cetro abisal
    {
      id: 3001,
      name: "Cetro Abisal",
      description:
        "Aumenta el poder de habilidad y proporciona resistencia mágica.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3001.png",
    },
    //sombrero de rabadon
    {
      id: 3020,
      name: "Sombrero de Rabadon",
      description: "Aumenta considerablemente el poder de habilidad.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3020.png",
    },
  ];

  const championsData = [
    {
      id: "jhin",
      name: "Jhin",
      function: "Marksman",
      region: "Ionia",
      role: "Bottom",
      description:
        "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin creates works of artistic brutality, horrifying victims and onlookers. He gains a cruel pleasure from putting on his gruesome theater, making him the ideal choice to send the most powerful of messages: terror.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Jhin_37.jpg",
      abilities: [
        {
          id: "P",
          nombre: "Danza de la Muerte (Pasiva)",
          descripcion:
            "Cada ataque básico de Jhin es un crítico que inflige daño adicional basado en el porcentaje de vida restante del objetivo.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/passive/Jhin_P.png",
        },
        {
          id: "Q",
          nombre: "Granada Mortal",
          descripcion:
            "Jhin lanza una granada que rebota entre los objetivos, infligiendo daño físico con cada rebote. La granada explota al impactar a un cuarto objetivo.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/JhinQ.png",
        },
        {
          id: "W",
          nombre: "Flores Mortales",
          descripcion:
            "Jhin coloca una trampa de flores mortales que se activa al ser pisada por un enemigo, infligiendo daño y ralentizando a los enemigos cercanos.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/JhinW.png",
        },
        {
          id: "E",
          nombre: "Baile Mortal",
          descripcion:
            "Jhin lanza un abanico de cuchillas que daña y revela a los enemigos alcanzados. Si una trampa de flores mortales está dentro del área, esta explotará.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/JhinE.png",
        },
        {
          id: "R",
          nombre: "Curtain Call",
          descripcion:
            "Jhin desenfunda su arma y dispara a los campeones enemigos, infligiendo daño físico. Puede disparar hasta cuatro veces, con el cuarto disparo siendo un disparo crítico y con un rango extendido.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/JhinR.png",
        },
      ],
      skins: [
        {
          name: "High Noon Jhin",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg",
        },
        {
          name: "Blood Moon Jhin",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_1.jpg",
        },
        {
          name: "Project: Jhin",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_2.jpg",
        },
      ],
      matchups: {
        strong: [
          {
            champion: "Ahri",
            winRate: 54,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_0.jpg",
          },
          {
            champion: "Zed",
            winRate: 52,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Zed_0.jpg",
          },
          {
            champion: "Orianna",
            winRate: 51,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Orianna_0.jpg",
          },
        ],
        weak: [
          {
            champion: "Yasuo",
            winRate: 48,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Yasuo_0.jpg",
          },
          {
            champion: "Katarina",
            winRate: 46,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Katarina_0.jpg",
          },
          {
            champion: "Fizz",
            winRate: 45,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Fizz_0.jpg",
          },
        ],
      },
    },
    {
      id: "rakan",
      name: "Rakan",
      function: "Support",
      region: "Ionia",
      role: "Support",
      description:
        "Rakan es un encantador y encantador guerrero vastaya, que se ha convertido en un mito entre su pueblo. Junto a su compañera y protectora, Xayah, busca su lugar en un mundo en el que los vastaya son cada vez más escasos.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Rakan_17.jpg",
      abilities: [
        {
          id: "P",
          nombre: "Baile de la Pluma (Pasiva)",
          descripcion:
            "Al tocar a un campeón aliado, Rakan recibe un escudo. Si Rakan toca a un campeón aliado que sea su compañera de equipo, ambos reciben un escudo.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/passive/Rakan_P.png",
        },
        {
          id: "Q",
          nombre: "Pluma Curativa",
          descripcion:
            "Rakan lanza una pluma que cura a sus aliados que estén cerca.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/RakanQ.png",
        },
        {
          id: "W",
          nombre: "Entrañable",
          descripcion:
            "Rakan salta hacia un campeón enemigo, lo encanta y se mueve detrás de ellos.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/RakanW.png",
        },
        {
          id: "E",
          nombre: "Ráfaga Relampagueante",
          descripcion:
            "Rakan desata una ráfaga relampagueante que daña a los enemigos alcanzados y lo cura a él y a sus aliados cercanos.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/RakanE.png",
        },
        {
          id: "R",
          nombre: "Tormenta de Plumas",
          descripcion:
            "Rakan crea una tormenta de plumas alrededor de él que ralentiza a los enemigos y lo deja listo para lanzarse hacia adelante.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/RakanR.png",
        },
      ],
      skins: [
        {
          name: "Danza del Maestro",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Rakan_0.jpg",
        },
        {
          name: "Rakan Guardián Estelar",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Rakan_1.jpg",
        },
        {
          name: "Rakan Espíritu del Bosque",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Rakan_2.jpg",
        },
      ],
      matchups: {
        strong: [
          {
            champion: "Yasuo",
            winRate: 54,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Yasuo_0.jpg",
          },
          {
            champion: "Akali",
            winRate: 52,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Akali_0.jpg",
          },
          {
            champion: "Pyke",
            winRate: 51,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Pyke_0.jpg",
          },
        ],
        weak: [
          {
            champion: "Lucian",
            winRate: 48,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Lucian_0.jpg",
          },
          {
            champion: "Vayne",
            winRate: 46,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Vayne_0.jpg",
          },
          {
            champion: "Ezreal",
            winRate: 45,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ezreal_0.jpg",
          },
        ],
      },
    },
    {
      id: "thresh",
      name: "Thresh",
      function: "Support",
      region: "Shadow Isles",
      role: "Bottom",
      description:
        "Thresh es un espectro insidioso y eterno que atrapa las almas de los vivos. Un espectro que prefiere jugar con su presa antes de devorarla, Thresh está rodeado por un aura de terror y desesperación. Aunque una vez fue un humilde guardián de las Islas de la Sombra, se volvió contra aquellos a quienes había jurado proteger, transformándose en un ser monstruoso cuya existencia es una tortura eterna.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Thresh_16.jpg",
      abilities: [
        {
          id: "P",
          nombre: "Colección de Almas (Pasiva)",
          descripcion:
            "Thresh puede recolectar almas de los enemigos que mueren cerca de él, otorgándole armadura y poder de habilidad adicional.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/passive/Thresh_Passive.png",
        },
        {
          id: "Q",
          nombre: "Enganche de la Muerte",
          descripcion:
            "Thresh lanza su guadaña, enganchando al primer enemigo que golpea y lo atrae hacia él.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/ThreshQ.png",
        },
        {
          id: "W",
          nombre: "Caja",
          descripcion:
            "Thresh crea una prisión de paredes de espíritus que ralentiza y daña a los enemigos que la atraviesan.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/ThreshW.png",
        },
        {
          id: "E",
          nombre: "Látigo Devastador",
          descripcion:
            "Thresh azota su cadena, dañando y empujando a los enemigos en una dirección específica.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/ThreshE.png",
        },
        {
          id: "R",
          nombre: "La Caja del Demonio",
          descripcion:
            "Thresh invoca una prisión de muros de espíritus a su alrededor, dañando y ralentizando a los enemigos atrapados dentro.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/ThreshRPenta.png",
        },
      ],
      skins: [
        {
          name: "Thresh Clásico",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Thresh_0.jpg",
        },
        {
          name: "Thresh Espantapájaros",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Thresh_1.jpg",
        },
        {
          name: "Thresh Espíritu Oscuro",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Thresh_2.jpg",
        },
      ],
      matchups: {
        strong: [
          {
            champion: "Zed",
            winRate: 54,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Zed_0.jpg",
          },
          {
            champion: "Diana",
            winRate: 52,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Diana_0.jpg",
          },
          {
            champion: "Yone",
            winRate: 51,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Yone_0.jpg",
          },
        ],
        weak: [
          {
            champion: "Malphite",
            winRate: 48,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Malphite_0.jpg",
          },
          {
            champion: "Kassadin",
            winRate: 46,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Kassadin_0.jpg",
          },
          {
            champion: "Akali",
            winRate: 45,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Akali_0.jpg",
          },
        ],
      },
    },
  ];
  const route = useRoute();
  const { champId } = route.params;
  const selectedChamp = championsData.find((champ) => champ.id === champId);
  console.log("champ: " + champId);

  const abilitiesToMax = selectedChamp.abilities.filter(
    (ability) => ability.id === "Q" || ability.id === "W" || ability.id === "E"
  );
  const abilitiesMaxPerLevel = {
    name: selectedChamp.name,
    abilities: selectedChamp.abilities.filter(
      (ability) =>
        ability.id === "Q" ||
        ability.id === "W" ||
        ability.id === "E" ||
        ability.id === "R"
    ),
  };

  function renderizarItems(items) {
    const uniqueItems = [];
    const renderedItems = [];

    items.forEach((item) => {
      if (!uniqueItems.some((uniqueItem) => uniqueItem.id === item.id)) {
        uniqueItems.push(item);
        if (uniqueItems.length <= 3) {
          renderedItems.push(
            <Image
              key={item.id}
              source={{ uri: item.imageUri }}
              style={styles.starterItem}
            />
          );
        }
      }
    });

    return renderedItems;
  }

  const [skinIndex, setSkinIndex] = useState(0);
  const skins = selectedChamp.skins;

  function findRole(champion) {
    return roles.find((role) => role.name === champion.role);
  }
  function findRegion(champion) {
    return regions.find((region) => region.name === champion.region);
  }
  function findFunction(champion) {
    return functions.find((funcion) => funcion.name === champion.function);
  }

  // Funciones para manejar el cambio de skin
  const handleLeftPress = () => {
    setSkinIndex((prevIndex) =>
      prevIndex === 0 ? skins.length - 1 : prevIndex - 1
    );
  };

  const handleRightPress = () => {
    setSkinIndex((prevIndex) =>
      prevIndex === skins.length - 1 ? 0 : prevIndex + 1
    );
  };

  //FALTA POR COMPLETAR
  const runes = {
    general: {
      statsMod: {
        attackSpeed: {
          value: 0.1,
          imageUri: "https://example.com/attackSpeed.png",
        },
        cooldownReduction: {
          value: 0,
          imageUri: "https://example.com/cooldownReduction.png",
        },
        health: {
          value: 0,
          imageUri: "https://example.com/health.png",
        },
        mana: {
          value: 0,
          imageUri: "https://example.com/mana.png",
        },
        movementSpeed: {
          value: 0,
          imageUri: "https://example.com/movementSpeed.png",
        },
        // Agrega más modificadores de estadísticas generales según sea necesario
      },
    },
    categories: [
      {
        name: "Domination",
        imageUri:
          "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/perk-images/Styles/7200_Domination.png",
        primary: [
          {
            name: "Electrocute",
            activeImageUri:
              "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
            inactiveImageUri: require("../../../assets/runes/inactiveElectrocute.png"),
            isActive: true,
          },
          {
            name: "Dark Harvest",
            activeImageUri: require("../../../assets/runes/activeDarkHarvest.png"),
            inactiveImageUri: require("../../../assets/runes/inactiveDarkHarvest.png"),
            isActive: false,
          },
          // Agrega más objetos de runas principales según sea necesario
        ],
        secondary: [
          {
            name: "Cheap Shot",
            activeImageUri: require("../../../assets/runes/activeCheapShot.png"),
            inactiveImageUri: require("../../../assets/runes/inactiveCheapShot.png"),
            isActive: false,
          },
          // Agrega más objetos de runas secundarias según sea necesario
        ],
      },
      // Agrega más categorías de runas según sea necesario
    ],
  };

  const primaryRunesData = [
    {
      name: "Electrocute",
      activeImageUri: require("../../../assets/runes/activeElectrocute.png"),
      inactiveImageUri: require("../../../assets/runes/inactiveElectrocute.png"),
      isActive: true,
    },
    {
      name: "Dark Harvest",
      activeImageUri: require("../../../assets/runes/activeDarkHarvest.png"),
      inactiveImageUri: require("../../../assets/runes/inactiveDarkHarvest.png"),
      isActive: false,
    },
    // Agrega más objetos de runas principales según sea necesario
  ];
  const secondaryRunesData = [
    {
      name: "Cheap Shot",
      activeImageUri: require("../../../assets/runes/activeCheapShot.png"),
      inactiveImageUri: require("../../../assets/runes/inactiveCheapShot.png"),
      isActive: false,
    },
    // Agrega más objetos de runas secundarias según sea necesario
  ];
  // Simulación de las runas activas recibidas de la API o base de datos
  const [activePrimaryRune, setActivePrimaryRune] = useState(null);
  const [activeSecondaryRune, setActiveSecondaryRune] = useState(null);

  useEffect(() => {
    // Lógica simulada para establecer las runas activas inicialmente
    // Por ejemplo, seleccionamos la primera runa de cada tipo como activa al cargar la pantalla
    setActivePrimaryRune(primaryRunesData[0]);
    setActiveSecondaryRune(secondaryRunesData[0]);
  }, []);
  const renderRune = ({ item }) => {
    const isActive = item === activePrimaryRune || item === activeSecondaryRune;
    return (
      <View
        style={[styles.runeContainer, item.isActive ? styles.activeRune : null]}
      >
        <Image
          source={item.isActive ? item.activeImageUri : item.inactiveImageUri}
          style={styles.runeIcon}
        />
        <Text style={styles.runeName}>{item.name}</Text>
      </View>
    );
  };
  const renderInfoBlock = () => {
    if (selectedButton === "Runes") {
      return (
        <View style={styles.infoBlock}>
          <Text style={styles.infoHeaderText}>Runes</Text>
          <View style={styles.runeInfo}>
            <Image
              source={require("../../../assets/domination.png")}
              style={styles.runeIcon}
            />
            <Text style={styles.runeName}>Domination</Text>
          </View>
          <View style={styles.containerRunes}>
            <View style={styles.rowRunes}>
              <FlatList
                data={primaryRunesData}
                renderItem={({ item }) => renderRune({ item })}
                keyExtractor={(item) => item.name}
                horizontal
              />
            </View>
            <View style={styles.rowRunes}>
              <FlatList
                data={secondaryRunesData}
                renderItem={({ item }) => renderRune({ item })}
                keyExtractor={(item) => item.name}
                horizontal
              />
            </View>
          </View>
        </View>
      );
    } else if (selectedButton === "Build") {
      return (
        <View style={styles.infoBlock}>
          <Text style={styles.infoHeaderText}>Build</Text>
          <View style={styles.buildBlock}>
            <Text style={styles.buildHeaderText}>Starter Items</Text>
            <View style={styles.ItemsContainer}>{renderizarItems(items)}</View>
          </View>

          <View style={styles.buildBlock}>
            <Text style={styles.buildHeaderText}>Core Items</Text>
            <View style={styles.ItemsContainer}>{renderizarItems(items)}</View>
          </View>

          <View style={styles.buildBlock}>
            <Text style={styles.buildHeaderText}>4th Item</Text>
            <View style={styles.ItemsContainer}>{renderizarItems(items)}</View>
          </View>

          <View style={styles.buildBlock}>
            <Text style={styles.buildHeaderText}>5th Item</Text>
            <View style={styles.ItemsContainer}>{renderizarItems(items)}</View>
          </View>

          <View style={styles.buildBlock}>
            <Text style={styles.buildHeaderText}>Boots</Text>
            <View style={styles.ItemsContainer}>{renderizarItems(items)}</View>
          </View>
        </View>
      );
    }
  };

  // Estilos de los botones "Runes" y "Build"
  const buttonBorderStyle = {
    borderBottomWidth: 3,
    borderColor: "#fff",
  };

  // Estilos de los botones "Runes" y "Build" cuando están seleccionados
  const selectedButtonBorderStyle = {
    borderBottomWidth: 0, // Elimina el borde inferior cuando el botón está seleccionado
  };

  // Estilos de los botones "Runes" y "Build" cuando están pulsados
  const pressedButtonBorderStyle = {
    borderBottomWidth: 0, // Elimina el borde inferior cuando el botón está pulsado
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={[styles.container, { height: windowHeight * 0.6 }]}>
          <ImageBackground
            source={{ uri: skins[skinIndex].image }}
            style={styles.backgroundImage}
          >
            <View style={styles.overlaySkins}>
              <Pressable style={styles.iconButton} onPress={handleLeftPress}>
                <View style={styles.arrowContainer}>
                  <Image
                    source={require("../../../assets/arrow-removebg-preview.png")}
                    style={styles.arrowLeft}
                  />
                </View>
                <Image
                  source={{
                    uri: skins[
                      skinIndex === 0 ? skins.length - 1 : skinIndex - 1
                    ].image,
                  }}
                  style={styles.iconChange}
                />
              </Pressable>
              <View style={styles.profileContainer}>
                <Image
                  source={{ uri: skins[skinIndex].image }}
                  style={styles.profilePicture}
                />
              </View>
              <Pressable style={styles.iconButton} onPress={handleRightPress}>
                <View style={styles.arrowContainer}>
                  <Image
                    source={require("../../../assets/arrow-removebg-preview.png")}
                    style={styles.arrowRight}
                  />
                </View>
                <Image
                  source={{ uri: skins[(skinIndex + 1) % skins.length].image }}
                  style={styles.iconChange}
                />
              </Pressable>
            </View>
            {/* Overlay con detalles del campeón */}
            <View style={styles.overlayData}>
              <View style={styles.dataContainer}>
                <Image
                  source={findRole(selectedChamp)?.imageUri}
                  style={[styles.iconData, { borderRadius: 0 }]}
                />
                <Text style={styles.dataText}>{selectedChamp.role}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Image
                  source={findRegion(selectedChamp)?.imageUri}
                  style={styles.iconData}
                />
                <Text style={styles.dataText}>{selectedChamp.region}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Image
                  source={findFunction(selectedChamp)?.imageUri}
                  style={styles.iconData}
                />
                <Text style={styles.dataText}>{selectedChamp.function}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* Bloque de descripción del campeón */}
        <View style={styles.descBlock}>
          <Text
            numberOfLines={showFullText ? undefined : 3}
            style={styles.descText}
          >
            {selectedChamp.description}
          </Text>
          <Pressable style={styles.descButton} onPress={toggleText}>
            <Text style={styles.buttonText}>
              {showFullText ? "LESS READ" : "FULL READ"}
            </Text>
          </Pressable>
        </View>
        <View style={styles.containerInfo}>
          <Pressable
            style={[
              styles.button,
              selectedButton === "Runes" ? styles.selectedButton : null,
              selectedButton === "Runes"
                ? selectedButtonBorderStyle
                : buttonBorderStyle,
              { marginLeft: 20, borderTopLeftRadius: 5 },
            ]}
            onPress={() => handleButtonPress("Runes")}
          >
            <Text style={styles.buttonText}>Runes</Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              selectedButton === "Build" ? styles.selectedButton : null,
              selectedButton === "Build"
                ? selectedButtonBorderStyle
                : buttonBorderStyle,
              { marginRight: 20, borderTopRightRadius: 5 },
            ]}
            onPress={() => handleButtonPress("Build")}
          >
            <Text style={styles.buttonText}>Build</Text>
          </Pressable>
        </View>
        {renderInfoBlock()}
        {/* SKILLS BLOCK */}
        <View style={styles.skillsBlock}>
          {/* SKILLS PRIOTRITY */}
          <View
            style={{
              ...styles.buildBlock,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderWidth: 0,
            }}
          >
            <Text style={styles.buildHeaderText}>Skill Priority</Text>
            <View style={styles.ItemsContainer}>
              {abilitiesToMax.map((habilidad, index) => (
                <React.Fragment key={habilidad.id}>
                  <View style={styles.skillOrderContainer}>
                    <Image
                      source={{ uri: habilidad.imagenUri }}
                      style={styles.skillOrder}
                    />
                    <Text style={styles.skillText}>{habilidad.id}</Text>
                  </View>
                  {index < abilitiesToMax.length - 1 && (
                    <Image
                      source={require("../../../assets/arrow-removebg-preview.png")}
                      style={styles.arrow}
                    />
                  )}
                </React.Fragment>
              ))}
            </View>
          </View>
          {/* SKILL ORDER PER LVL */}
          <View style={styles.secondBlock}>
            <Text style={styles.secondBlockHeader}>Skill Order Per Level</Text>
            <View style={styles.skillPerLevelContainer}>
              <View style={styles.skillContainer}>
                <Image
                  source={{ uri: abilitiesMaxPerLevel.abilities[0].imagenUri }}
                  style={styles.skillIcon}
                />
                <Text style={styles.skillName}>
                  {abilitiesMaxPerLevel.abilities[0].nombre}
                </Text>
                <View style={styles.skillLevels}>
                  {Array.from(
                    {
                      length:
                        abilitiesMaxPerLevel.abilities[0].id === "R" ? 3 : 5,
                    },
                    (_, nivelIndex) =>
                      nivelIndex +
                      (abilitiesMaxPerLevel.abilities[0].id === "R" ? 7 : 1)
                  ).map((nivel, nivelIndex) => (
                    <View style={styles.skillLevel} key={nivelIndex}>
                      <Text style={styles.skillLevelText}>{nivel}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.skillContainer}>
                <Image
                  source={{ uri: abilitiesMaxPerLevel.abilities[1].imagenUri }}
                  style={styles.skillIcon}
                />
                <Text style={styles.skillName}>
                  {abilitiesMaxPerLevel.abilities[1].nombre}
                </Text>
                <View style={styles.skillLevels}>
                  {Array.from(
                    {
                      length:
                        abilitiesMaxPerLevel.abilities[1].id === "R" ? 3 : 5,
                    },
                    (_, nivelIndex) =>
                      nivelIndex +
                      (abilitiesMaxPerLevel.abilities[1].id === "R" ? 7 : 1)
                  ).map((nivel, nivelIndex) => (
                    <View style={styles.skillLevel} key={nivelIndex}>
                      <Text style={styles.skillLevelText}>{nivel}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.skillContainer}>
                <Image
                  source={{ uri: abilitiesMaxPerLevel.abilities[2].imagenUri }}
                  style={styles.skillIcon}
                />
                <Text style={styles.skillName}>
                  {abilitiesMaxPerLevel.abilities[2].nombre}
                </Text>
                <View style={styles.skillLevels}>
                  {Array.from(
                    {
                      length:
                        abilitiesMaxPerLevel.abilities[2].id === "R" ? 3 : 5,
                    },
                    (_, nivelIndex) =>
                      nivelIndex +
                      (abilitiesMaxPerLevel.abilities[2].id === "R" ? 7 : 1)
                  ).map((nivel, nivelIndex) => (
                    <View style={styles.skillLevel} key={nivelIndex}>
                      <Text style={styles.skillLevelText}>{nivel}</Text>
                    </View>
                  ))}
                </View>
              </View>
              {abilitiesMaxPerLevel.abilities.length === 4 && (
                <View style={styles.skillContainer}>
                  <Image
                    source={{
                      uri: abilitiesMaxPerLevel.abilities[3].imagenUri,
                    }}
                    style={styles.skillIcon}
                  />
                  <Text style={styles.skillName}>
                    {abilitiesMaxPerLevel.abilities[3].nombre}
                  </Text>
                  <View style={styles.skillLevels}>
                    {Array.from(
                      { length: 3 },
                      (_, nivelIndex) => nivelIndex + 1
                    ).map((nivel, nivelIndex) => (
                      <View style={styles.skillLevel} key={nivelIndex}>
                        <Text style={styles.skillLevelText}>{nivel}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
        {/* MATCHUPS */}
        <View style={styles.strongMatchupsBlock}>
          <Text style={[styles.matchupsHeaderText, { color: "#00FF0C" }]}>
            Strong against
          </Text>
          {/* Primer conjunto de campeones */}
          <View style={styles.championsContainer}>
            {selectedChamp.matchups.strong.map((matchup, index) => (
              <View style={styles.championItem} key={index}>
                <Image
                  source={{ uri: matchup.icon }}
                  style={styles.championIconStrong}
                />
                <Text style={styles.championName}>{matchup.champion}</Text>
                <Text style={styles.winrate}>Winrate: {matchup.winRate}%</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.weakMatchupsBlock}>
          <Text style={[styles.matchupsHeaderText, { color: "#FF0000" }]}>
            Weak against
          </Text>
          {/* Primer conjunto de campeones */}
          <View style={styles.championsContainer}>
            {selectedChamp.matchups.weak.map((matchup, index) => (
              <View style={styles.championItem} key={index}>
                <Image
                  source={{ uri: matchup.icon }}
                  style={styles.championIconWeak}
                />
                <Text style={styles.championName}>{matchup.champion}</Text>
                <Text style={styles.winrate}>Winrate: {matchup.winRate}%</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#1C1C2E",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "20%",
  },
  overlaySkins: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  overlayData: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicture: {
    width: 150,
    height: 80,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "white",
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  arrowContainer: {
    position: "absolute",
    zIndex: 1,
  },
  arrowLeft: {
    width: 50,
    height: 50,
  },
  arrowRight: {
    width: 50,
    height: 50,
    transform: [{ rotate: "180deg" }],
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  iconChange: {
    width: 60,
    height: 80,
    borderRadius: 15,
    marginTop: 5,
  },
  dataContainer: {
    marginTop: 15,
    height: 100,
    width: 80,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  dataText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  iconData: {
    width: 80,
    height: 80,
    borderRadius: 50,
    objectFit: "cover",
  },
  descBlock: {
    padding: 20,
  },
  descText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  descButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FAD597",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#252046",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#595081",
  },
  infoBlock: {
    backgroundColor: "#595081",
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FAD597",
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Color de la sombra
    textShadowOffset: { width: 2, height: 2 }, // Offset de la sombra
    textShadowRadius: 2, // Radio de la sombra
    borderBottomWidth: 1,
    borderColor: "#fff",
    paddingBottom: 5, // Ajusta el espacio entre el texto y el borde inferior
  },
  runeInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  runeIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    marginRight: 15,
  },
  runeName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buildBlock: {
    backgroundColor: "#252046",
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2, // Añadir el ancho del borde
  },
  buildHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FAD597",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#fff",
    paddingBottom: 5, // Ajusta el espacio entre el texto y el borde inferior
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Color de la sombra
    textShadowOffset: { width: 2, height: 2 }, // Offset de la sombra
    textShadowRadius: 2, // Radio de la sombra
  },
  skillOrderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  skillOrder: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginBottom: 10,
  },
  ItemsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  starterItem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  arrow: {
    width: 30,
    height: 30,
    transform: [{ rotate: "180deg" }],
  },
  secondBlock: {
    backgroundColor: "#252046",
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  secondBlockHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FAD597",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#fff",
    paddingBottom: 5,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  itemContainer: {
    alignItems: "center",
  },
  skillText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  skillContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  skillIcon: {
    width: 40, // Ajustamos el tamaño del ícono de habilidad
    height: 40, // Ajustamos el tamaño del ícono de habilidad
    marginRight: 10,
  },
  skillName: {
    width: 110,
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  skillLevels: {
    flexDirection: "row",
    alignItems: "center",
  },
  skillLevel: {
    width: 25, // Ajustamos el tamaño de los cuadrados de nivel de habilidad
    height: 25, // Ajustamos el tamaño de los cuadrados de nivel de habilidad
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  skillLevelText: {
    color: "#252046",
    fontWeight: "bold",
  },
  skillPerLevelContainer: {
    flexDirection: "column",
  },
  strongMatchupsBlock: {
    backgroundColor: "#252046",
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  weakMatchupsBlock: {
    backgroundColor: "#252046",
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  matchupsHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FAD597",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#fff",
    paddingBottom: 5,
  },
  championsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  championItem: {
    alignItems: "center",
    flex: 1,
  },
  championIconStrong: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#00FF0C",
  },
  championIconWeak: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#FF0000",
  },
  championName: {
    marginTop: 5,
    color: "#FFF",
    fontWeight: "bold",
  },
  winrate: {
    marginTop: 2,
    color: "#FFF",
  },
  containerRunes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  rowRunes: {
    flexDirection: "row",
    marginBottom: 20,
  },
  runeContainer: {
    alignItems: "center",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "transparent",
    padding: 5,
    borderRadius: 5,
  },
  activeRune: {
    borderColor: "blue",
  },
  runeIcon: {
    width: 50,
    height: 50,
  },
  runeName: {
    marginTop: 5,
    color: "#333",
  },
});

export default ChampionCard;
