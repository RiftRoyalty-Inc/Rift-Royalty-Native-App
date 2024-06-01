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
      runes: {
        primary: {
          name: "Domination",
          slot1: {
            option: {
              name: "Electrocute",
            },
          },
          slot2: {
            option: {
              name: "Cheap Shot",
            },
          },
          slot3: {
            option: {
              name: "Zombie Ward",
            },
          },
          slot4: {
            option: {
              name: "Treasure Hunter",
            },
          },
        },
        secondary: {
          name: "Sorcery",
          slot2: {
            option: {
              name: "Manaflow Band",
            },
          },
          slot4: {
            option: {
              name: "Gathering Storm",
            },
          },
        },
        statsMod: {
          slot1: {
            option: {
              name: "Adaptive Force",
            },
          },
          slot2: {
            option: {
              name: "Adaptive Force",
            },
          },
          slot3: {
            option: {
              name: "Bonus Health",
            },
          },
        },
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
      runes: {
        primary: {
          name: "Resolve",
          slot1: {
            option: {
              name: "Guardian",
            },
          },
          slot2: {
            option: {
              name: "Font of Life",
            },
          },
          slot3: {
            option: {
              name: "Bone Plating",
            },
          },
          slot4: {
            option: {
              name: "Unflinching",
            },
          },
        },
        secondary: {
          name: "Domination",
          slot3: {
            option: {
              name: "Zombie Ward",
            },
          },
          slot4: {
            option: {
              name: "Ultimate Hunter",
            },
          },
        },
        statsMod: {
          slot1: {
            option: {
              name: "Ability Haste",
            },
          },
          slot2: {
            option: {
              name: "Movement Speed",
            },
          },
          slot3: {
            option: {
              name: "Tenacity",
            },
          },
        },
      },
    },
    {
      id: "pyke",
      name: "Pyke",
      function: "Assassin",
      region: "Bilgewater",
      role: "Support",
      description:
        "Pyke, the Bloodharbor Ripper, is a monstrous assassin who prowls the streets of Bilgewater. Once a feared harpooner from the slaughter docks of the port city, Pyke drowned after a terrible betrayal, only to emerge as something dark and deadly. Rising from the depths, he now stalks the dank alleys and backways of his former hometown, using his modified bone harpoon to catch unsuspecting enemies off-guard.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Pyke_0.jpg",
      abilities: [
        {
          id: "P",
          nombre: "Drowned",
          descripcion:
            "Pyke's health cannot be improved except through leveling up.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/passive/PykeP.png",
        },
        {
          id: "Q",
          nombre: "Bone Skewer",
          descripcion:
            "Pyke hurls his harpoon forward, impaling the first enemy struck and pulling them a fixed distance towards him. The move will refund cooldown and mana if successfully used to pull an enemy.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/PykeQ.png",
        },
        {
          id: "W",
          nombre: "Ghostwater Dive",
          descripcion:
            "Pyke dives into spectral waters, becoming invisible and gaining a significant increase in movement speed that decays over a few seconds.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/PykeW.png",
        },
        {
          id: "E",
          nombre: "Phantom Undertow",
          descripcion:
            "Pyke dashes, leaving behind a drowned phantom. After a delay, the phantom returns to Pyke, damaging and stunning enemy champions it passes through.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/PykeE.png",
        },
        {
          id: "R",
          nombre: "Death from Below",
          descripcion:
            "Pyke strikes in an X-shaped area, executing enemies below a certain threshold of health and granting additional gold to an assisting ally.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/PykeR.png",
        },
      ],
      skins: [
        {
          name: "default",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Pyke_0.jpg",
        },
        {
          name: "Sand Wraith Pyke",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Pyke_1.jpg",
        },
        {
          name: "Blood Moon Pyke",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Pyke_9.jpg",
        },
        {
          name: "Project: Pyke",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Pyke_16.jpg",
        },
      ],
      matchups: {
        strong: [
          {
            champion: "Sona",
            winRate: 54,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Sona_0.jpg",
          },
          {
            champion: "Janna",
            winRate: 53,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Janna_0.jpg",
          },
          {
            champion: "Nami",
            winRate: 52,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Nami_0.jpg",
          },
        ],
        weak: [
          {
            champion: "Nautilus",
            winRate: 48,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Nautilus_0.jpg",
          },
          {
            champion: "Blitzcrank",
            winRate: 47,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Blitzcrank_0.jpg",
          },
          {
            champion: "Leona",
            winRate: 45,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Leona_0.jpg",
          },
        ],
      },
    },
    {
      id: "yasuo",
      name: "Yasuo",
      function: "Fighter",
      region: "Ionia",
      role: "Mid",
      description:
        "Yasuo es un formidable espadachín de Ionia que puede manipular el viento a su voluntad. Una vez conocido como el honor de su pueblo, ahora es un fugitivo perseguido por el asesinato de su maestro. A pesar de su impetuoso temperamento, ha demostrado ser un aliado valioso en la batalla contra las fuerzas de la oscuridad que buscan invadir su tierra natal.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yasuo_27.jpg",
      abilities: [
        {
          id: "P",
          nombre: "Pasiva: Camino del Vagabundo",
          descripcion:
            "Después de dos segundos de moverse, Yasuo obtiene un escudo que bloquea daño de próximo golpe. El daño del escudo aumenta con la velocidad de movimiento.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/passive/Yasuo_P.png",
        },
        {
          id: "Q",
          nombre: "Golpe con Espada Descendente",
          descripcion:
            "Yasuo golpea frente a él con su espada, infligiendo daño físico. Golpear con el borde del ataque aumenta el daño.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/YasuoQ1.png",
        },
        {
          id: "W",
          nombre: "Viento Cortante",
          descripcion:
            "Yasuo crea un muro de viento que bloquea proyectiles entrantes durante varios segundos.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/YasuoW.png",
        },
        {
          id: "E",
          nombre: "Golpe con Espada Ascendente",
          descripcion:
            "Yasuo se desliza hacia un enemigo, lanzándolo al aire y permitiéndole atacarlo en el aire.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/YasuoE.png",
        },
        {
          id: "R",
          nombre: "Último Aliento",
          descripcion:
            "Yasuo salta a un enemigo, lanzándolo al aire y siguiéndolo con una serie de golpes de espada. Al aterrizar, Yasuo inflige daño adicional según el número de golpes de espada lanzados durante la habilidad.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/YasuoR.png",
        },
      ],
      skins: [
        {
          name: "Proyecto: Yasuo",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yasuo_0.jpg",
        },
        {
          name: "Alma de Dragón: Yasuo",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yasuo_1.jpg",
        },
        {
          name: "Yasuo de la Arena Sangrienta",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yasuo_2.jpg",
        },
      ],
      matchups: {
        strong: [
          {
            champion: "Fizz",
            winRate: 52,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Fizz_0.jpg",
          },
          {
            champion: "Zed",
            winRate: 51,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Zed_0.jpg",
          },
          {
            champion: "Katarina",
            winRate: 50,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Katarina_0.jpg",
          },
        ],
        weak: [
          {
            champion: "Malzahar",
            winRate: 48,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Malzahar_0.jpg",
          },
          {
            champion: "Annie",
            winRate: 46,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Annie_0.jpg",
          },
          {
            champion: "Akali",
            winRate: 45,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Akali_0.jpg",
          },
        ],
      },
    },
    {
      id: "vayne",
      name: "Vayne",
      function: "Marksman",
      region: "Demacia",
      role: "Bottom",
      description:
        "Vayne es una cazadora de monstruos oscura y solitaria. Solía ser una noble de Demacia, pero ahora se dedica a perseguir y abatir a los más peligrosos monstruos de Runaterra. Utiliza su destreza y su astucia para cazar a estas criaturas antes de que puedan infligir daño a los inocentes.",
      imageUri:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vayne_25.jpg",
      abilities: [
        {
          id: "P",
          nombre: "Pasiva: Destino de Plata",
          descripcion:
            "Los ataques básicos de Vayne le otorgan un porcentaje de daño adicional basado en la vida máxima del enemigo.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/passive/Vayne_P.png",
        },
        {
          id: "Q",
          nombre: "Tiroteo",
          descripcion:
            "Vayne dispara rápidamente a un objetivo, infligiendo daño físico adicional y aumentando temporalmente su velocidad de movimiento.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VayneQ.png",
        },
        {
          id: "W",
          nombre: "Tumble",
          descripcion:
            "Vayne se desliza hacia una dirección, evadiendo cualquier daño en el camino y potenciando su próximo ataque básico.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VayneW.png",
        },
        {
          id: "E",
          nombre: "Condena",
          descripcion:
            "Vayne dispara un proyectil que aturde al primer enemigo impactado contra una pared cercana.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VayneE.png",
        },
        {
          id: "R",
          nombre: "Última Hora",
          descripcion:
            "Vayne fortalece su resolución, aumentando su daño de ataque y otorgándole invisibilidad parcial durante un corto periodo de tiempo.",
          imagenUri:
            "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VayneR.png",
        },
      ],
      skins: [
        {
          name: "Vayne Victoriosa",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vayne_0.jpg",
        },
        {
          name: "Vindicator Vayne",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vayne_1.jpg",
        },
        {
          name: "Proyecto: Vayne",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vayne_2.jpg",
        },
      ],
      matchups: {
        strong: [
          {
            champion: "Draven",
            winRate: 53,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Draven_0.jpg",
          },
          {
            champion: "Ezreal",
            winRate: 52,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ezreal_0.jpg",
          },
          {
            champion: "Kai'Sa",
            winRate: 51,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Kaisa_0.jpg",
          },
        ],
        weak: [
          {
            champion: "Caitlyn",
            winRate: 48,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Caitlyn_0.jpg",
          },
          {
            champion: "Jinx",
            winRate: 47,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Jinx_0.jpg",
          },
          {
            champion: "Ashe",
            winRate: 46,
            icon: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ashe_0.jpg",
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
  //categories["1"].slots["slot2"].option1
  const runes = {
    categories: {
      Domination: {
        imageUri:
          "https://ddragon.canisback.com/img/perk-images/Styles/7200_Domination.png",
        slots: {
          slot1: {
            option1: {
              name: "Electrocute",
              activeImageUri:
                "../../../assets/runes/domination/active/electrocute.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/electrocute.png",
              isActive: false,
            },
            option2: {
              name: "Dark Harvest",
              activeImageUri:
                "../../../assets/runes/domination/active/darkHarvest.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/darkHarvest.png",
              isActive: false,
            },
            option3: {
              name: "Hail Of Blades",
              activeImageUri:
                "../../../assets/runes/domination/active/hailOfBlades.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/hailOfBlades.png",
              isActive: false,
            },
          },
          slot2: {
            option1: {
              name: "Cheap Shot",
              activeImageUri:
                "../../../assets/runes/domination/active/cheapShot.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/cheapShot.png",
              isActive: false,
            },
            option2: {
              name: "Sudden Impact",
              activeImageUri:
                "../../../assets/runes/domination/active/suddenImpact.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/suddenImpact.png",
              isActive: false,
            },
            option3: {
              name: "Taste Of Blood",
              activeImageUri:
                "../../../assets/runes/domination/active/tasteOfBlood.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/tasteOfBlood.png",
              isActive: false,
            },
          },
          slot3: {
            option1: {
              name: "Zombie Ward",
              activeImageUri:
                "../../../assets/runes/domination/active/zombyWard.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/zombyWard.png",
              isActive: false,
            },
            option2: {
              name: "Ghost Poro",
              activeImageUri:
                "../../../assets/runes/domination/active/ghostPoro.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/ghostPoro.png",
              isActive: false,
            },
            option3: {
              name: "Eyeball Collection",
              activeImageUri:
                "../../../assets/runes/domination/active/eyeBallCollection.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/eyeBallCollection.png",
              isActive: false,
            },
          },
          slot4: {
            option1: {
              name: "Treasure Hunter",
              activeImageUri:
                "../../../assets/runes/domination/active/treasureHunter.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/treasureHunter.png",
              isActive: false,
            },
            option2: {
              name: "Ultimate Hunter",
              activeImageUri:
                "../../../assets/runes/domination/active/ultimateHunter.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/ultimateHunter.png",
              isActive: false,
            },
            option3: {
              name: "Relentless Hunter",
              activeImageUri:
                "../../../assets/runes/domination/active/relentlessHunter.png",
              inactiveImageUri:
                "../../../assets/runes/domination/inactive/relentlessHunter.png",
              isActive: false,
            },
          },
        },
      },
      Sorcery: {
        imageUri:
          "https://ddragon.canisback.com/img/perk-images/Styles/7202_Sorcery.png",
        slots: {
          slot1: {
            option1: {
              name: "Summon Aery",
              activeImageUri:
                "../../../assets/runes/stats/active/summonAery.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/summonAery.png",
              isActive: false,
            },
            option2: {
              name: "Arcane Comet",
              activeImageUri:
                "../../../assets/runes/stats/active/arcaneComet.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/arcaneComet.png",
              isActive: false,
            },
            option3: {
              name: "Phase Rush",
              activeImageUri:
                "../../../assets/runes/stats/active/phaseRush.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/phaseRush.png",
              isActive: false,
            },
          },
          slot2: {
            option1: {
              name: "Nullifying Orb",
              activeImageUri:
                "../../../assets/runes/stats/active/nullifyingOrb.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/nullifyingOrb.png",
              isActive: false,
            },
            option2: {
              name: "Manaflow Band",
              activeImageUri:
                "../../../assets/runes/stats/active/manaflowBand.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/manaflowBand.png",
              isActive: false,
            },
            option3: {
              name: "Nimbus Cloak",
              activeImageUri:
                "../../../assets/runes/stats/active/nimbusCloak.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/nimbusCloak.png",
              isActive: false,
            },
          },
          slot3: {
            option1: {
              name: "Transcendence",
              activeImageUri:
                "../../../assets/runes/stats/active/transcendence.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/transcendence.png",
              isActive: false,
            },
            option2: {
              name: "Celerity",
              activeImageUri: "../../../assets/runes/stats/active/celerity.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/celerity.png",
              isActive: false,
            },
            option3: {
              name: "Absolute Focus",
              activeImageUri:
                "../../../assets/runes/stats/active/absoluteFocus.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/absoluteFocus.png",
              isActive: false,
            },
          },
          slot4: {
            option1: {
              name: "Scorch",
              activeImageUri: "../../../assets/runes/stats/active/scorch.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/scorch.png",
              isActive: false,
            },
            option2: {
              name: "Waterwalking",
              activeImageUri:
                "../../../assets/runes/stats/active/waterwalking.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/waterwalking.png",
              isActive: false,
            },
            option3: {
              name: "Gathering Storm",
              activeImageUri:
                "../../../assets/runes/stats/active/gatheringStorm.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/gatheringStorm.png",
              isActive: false,
            },
          },
        },
      },
      Resolve: {
        imageUri:
          "https://ddragon.canisback.com/img/perk-images/Styles/7204_Resolve.png",
        slots: {
          slot1: {
            option1: {
              name: "Grasp of the Undying",
              activeImageUri:
                "../../../assets/runes/stats/active/graspOfTheUndying.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/graspOfTheUndying.png",
              isActive: false,
            },
            option2: {
              name: "Aftershock",
              activeImageUri:
                "../../../assets/runes/stats/active/aftershock.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/aftershock.png",
              isActive: false,
            },
            option3: {
              name: "Guardian",
              activeImageUri: "../../../assets/runes/stats/active/guardian.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/guardian.png",
              isActive: false,
            },
          },
          slot2: {
            option1: {
              name: "Demolish",
              activeImageUri: "../../../assets/runes/stats/active/demolish.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/demolish.png",
              isActive: false,
            },
            option2: {
              name: "Font of Life",
              activeImageUri:
                "../../../assets/runes/stats/active/fontOfLife.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/fontOfLife.png",
              isActive: false,
            },
            option3: {
              name: "Shield Bash",
              activeImageUri:
                "../../../assets/runes/stats/active/shieldBash.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/shieldBash.png",
              isActive: false,
            },
          },
          slot3: {
            option1: {
              name: "Conditioning",
              activeImageUri:
                "../../../assets/runes/stats/active/conditioning.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/conditioning.png",
              isActive: false,
            },
            option2: {
              name: "Second Wind",
              activeImageUri:
                "../../../assets/runes/stats/active/secondWind.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/secondWind.png",
              isActive: false,
            },
            option3: {
              name: "Bone Plating",
              activeImageUri:
                "../../../assets/runes/stats/active/bonePlating.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/bonePlating.png",
              isActive: false,
            },
          },
          slot4: {
            option1: {
              name: "Overgrowth",
              activeImageUri:
                "../../../assets/runes/stats/active/overgrowth.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/overgrowth.png",
              isActive: false,
            },
            option2: {
              name: "Revitalize",
              activeImageUri:
                "../../../assets/runes/stats/active/revitalize.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/revitalize.png",
              isActive: false,
            },
            option3: {
              name: "Unflinching",
              activeImageUri:
                "../../../assets/runes/stats/active/unflinching.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/unflinching.png",
              isActive: false,
            },
          },
        },
      },
      Precision: {
        imageUri:
          "https://ddragon.canisback.com/img/perk-images/Styles/7201_Precision.png",
        slots: {
          slot1: {
            option1: {
              name: "Press the Attack",
              activeImageUri:
                "../../../assets/runes/stats/active/pressTheAttack.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/pressTheAttack.png",
              isActive: false,
            },
            option2: {
              name: "Conqueror",
              activeImageUri:
                "../../../assets/runes/stats/active/conqueror.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/conqueror.png",
              isActive: false,
            },
            option3: {
              name: "Fleet Footwork",
              activeImageUri:
                "../../../assets/runes/stats/active/fleetFootwork.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/fleetFootwork.png",
              isActive: false,
            },
          },
          slot2: {
            option1: {
              name: "Absorb Life",
              activeImageUri:
                "../../../assets/runes/stats/active/absorbLife.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/absorbLife.png",
              isActive: false,
            },
            option2: {
              name: "Triumph",
              activeImageUri: "../../../assets/runes/stats/active/triumph.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/triumph.png",
              isActive: false,
            },
            option3: {
              name: "Presence of Mind",
              activeImageUri:
                "../../../assets/runes/stats/active/presenceOfMind.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/presenceOfMind.png",
              isActive: false,
            },
          },
          slot3: {
            option1: {
              name: "Legend: Alacrity",
              activeImageUri: "../../../assets/runes/stats/active/alacrity.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/alacrity.png",
              isActive: false,
            },
            option2: {
              name: "Legend: Tenacity",
              activeImageUri: "../../../assets/runes/stats/active/tenacity.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/tenacity.png",
              isActive: false,
            },
            option3: {
              name: "Legend: Bloodline",
              activeImageUri:
                "../../../assets/runes/stats/active/bloodline.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/bloodline.png",
              isActive: false,
            },
          },
          slot4: {
            option1: {
              name: "Coup de Grace",
              activeImageUri:
                "../../../assets/runes/stats/active/coupDeGrace.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/coupDeGrace.png",
              isActive: false,
            },
            option2: {
              name: "Cut Down",
              activeImageUri: "../../../assets/runes/stats/active/cutDown.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/cutDown.png",
              isActive: false,
            },
            option3: {
              name: "Last Stand",
              activeImageUri:
                "../../../assets/runes/stats/active/lastStand.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/lastStand.png",
              isActive: false,
            },
          },
        },
      },
      inspiration: {
        imageUri:
          "https://ddragon.canisback.com/img/perk-images/Styles/7203_Whimsy.png",
        slots: {
          slot1: {
            option1: {
              name: "Glacial Augment",
              activeImageUri:
                "../../../assets/runes/stats/active/glacialAugment.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/glacialAugment.png",
              isActive: false,
            },
            option2: {
              name: "Unsealed Spellbook",
              activeImageUri:
                "../../../assets/runes/stats/active/unsealedSpellbook.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/unsealedSpellbook.png",
              isActive: false,
            },
            option3: {
              name: "First Strike",
              activeImageUri:
                "../../../assets/runes/stats/active/firstStrike.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/firstStrike.png",
              isActive: false,
            },
          },
          slot2: {
            option1: {
              name: "Hextech Flashtraption",
              activeImageUri:
                "../../../assets/runes/stats/active/hextechFlashtraption.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/hextechFlashtraption.png",
              isActive: false,
            },
            option2: {
              name: "Magical Footwear",
              activeImageUri:
                "../../../assets/runes/stats/active/magicalFootwear.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/magicalFootwear.png",
              isActive: false,
            },
            option3: {
              name: "Cash Back",
              activeImageUri: "../../../assets/runes/stats/active/cashBack.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/cashBack.png",
              isActive: false,
            },
          },
          slot3: {
            option1: {
              name: "Triple Tonic",
              activeImageUri:
                "../../../assets/runes/stats/active/tripleTonic.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/tripleTonic.png",
              isActive: false,
            },
            option2: {
              name: "Time Warp Tonic",
              activeImageUri:
                "../../../assets/runes/stats/active/timeWarpTonic.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/timeWarpTonic.png",
              isActive: false,
            },
            option3: {
              name: "Biscuit Delivery",
              activeImageUri:
                "../../../assets/runes/stats/active/biscuitDelivery.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/biscuitDelivery.png",
              isActive: false,
            },
          },
          slot4: {
            option1: {
              name: "Cosmic Insight",
              activeImageUri:
                "../../../assets/runes/stats/active/cosmicInsight.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/cosmicInsight.png",
              isActive: false,
            },
            option2: {
              name: "Approach Velocity",
              activeImageUri:
                "../../../assets/runes/stats/active/approachVelocity.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/approachVelocity.png",
              isActive: false,
            },
            option3: {
              name: "Jack of All Trades",
              activeImageUri:
                "../../../assets/runes/stats/active/jackOfAllTrades.png",
              inactiveImageUri:
                "../../../assets/runes/stats/inactive/jackOfAllTrades.png",
              isActive: false,
            },
          },
        },
      },
    },
    statsMod: {
      slot1: {
        option1: {
          name: "Adaptive Force",
          value: "5.4 AD/9 AP",
          activeImage: require("../../../assets/runes/stats/active/adaptiveForce.png"),
          inactiveImage: require("../../../assets/runes/stats/inactive/adaptiveForce.png"),
          isActive: false,
        },
        option2: {
          name: "Attack Speed",
          value: "10%",
          activeImage: require("../../../assets/runes/stats/active/attackSpeed.png"),
          inactiveImage: require("../../../assets/runes/stats/inactive/attackSpeed.png"),
          isActive: false,
        },
        option3: {
          name: "Ability Haste",
          value: "8",
          activeImage: require("../../../assets/runes/stats/active/cdrScaling.png"),
          inactiveImage: require("../../../assets/runes/stats/inactive/cdrScaling.png"),
          isActive: false,
        },
      },
      slot2: {
        option1: {
          name: "Adaptive Force",
          value: "5.4 AD/9 AP",
          activeImage: require("../../../assets/runes/stats/active/adaptiveForce.png"),
          inactiveImage: require("../../../assets/runes/stats/inactive/adaptiveForce.png"),
          isActive: false,
        },
        option2: {
          name: "Movement Speed",
          value: "2%",
          activeImage: require("../../../assets/runes/stats/active/movementSpeed.png"),
          inactiveImage: require("../../../assets/runes/stats/inactive/movementSpeed.png"),
          isActive: false,
        },
        option3: {
          name: "Bonus Health Scale",
          value: "10-180 (based in level)",
          activeImage: require("../../../assets/runes/stats/active/healthScaling.png"),
          inactiveImage: require("../../../assets/runes/stats/inactive/healthScaling.png"),
          isActive: false,
        },
      },
      slot3: {
        option1: {
          name: "Bonus Health",
          value: "65",
          activeImage: require("../../../assets/runes/stats/active/healthPlus.png"),
          inactiveImage: require("../../../assets/runes/stats/inactive/healthPlus.png"),
          isActive: false,
        },
        option2: {
          name: "Tenacity",
          value: "10%",
          activeImage: require("../../../assets/runes/stats/active/tenacity.png"),
          inactiveImage: require("../../../assets/runes/stats/inactive/tenacity.png"),
          isActive: false,
        },
        option3: {
          name: "Bonus Health Scale",
          value: "10-180 (based in level)",
          activeImage: require("../../../assets/runes/stats/active/healthScaling.png"),
          inactiveImage: require("../../../assets/runes/stats/inactive/healthScaling.png"),
          isActive: false,
        },
      },
    },
  };

  function marcarRunasActivas(championRunes, allRunes) {
    // Iterar sobre las categorías primarias del campeón
    for (const slot in championRunes.runes.primary) {
      if (slot === "name") continue;
      const championRuneName = championRunes.runes.primary[slot].option.name;
      const primaryCategory =
        allRunes.categories[championRunes.runes.primary.name];
      for (const option in primaryCategory.slots[slot]) {
        const runeOption = primaryCategory.slots[slot][option];
        if (runeOption.name === championRuneName) {
          runeOption.isActive = true;
          console.log(
          ); // Corrección aquí
          break;
        }
      }
    }

    // Iterar sobre las categorías secundarias del campeón
    for (const slot in championRunes.runes.secondary) {
      if (slot === "name") continue;
      const championRuneName =
        championRunes.runes.secondary[slot].option.name;
      const secondaryCategory =
        allRunes.categories[championRunes.runes.secondary.name];
      for (const option in secondaryCategory.slots[slot]) {
        const runeOption = secondaryCategory.slots[slot][option];
        if (runeOption.name === championRuneName) {
          runeOption.isActive = true;
          break;
        }
      }
    }


    // Iterar sobre los modificadores de estadísticas del campeón
    for (const slot in championRunes.runes.statsMod) {
      const championRuneName = championRunes.runes.statsMod[slot].option.name;
      for (const option in allRunes.statsMod[slot]) {
        const runeOption = allRunes.statsMod[slot][option];
        if (runeOption.name === championRuneName) {
          runeOption.isActive = true;
           break;
        }
      }
    }
  }

  // Llamamos a la función para marcar las runas activas
  marcarRunasActivas(selectedChamp, runes);

  const cargaRunas = {
    //domination
    activeElectrocute: require("../../../assets/runes/domination/active/electrocute.png"),
    inactiveElectrocute: require("../../../assets/runes/domination/inactive/electrocute.png"),
    activeDarkHarvest: require("../../../assets/runes/domination/active/darkHarvest.png"),
    inactiveDarkHarvest: require("../../../assets/runes/domination/inactive/darkHarvest.png"),
    activeHailOfBlades: require("../../../assets/runes/domination/active/hailOfBlades.png"),
    inactiveHailOfBlades: require("../../../assets/runes/domination/inactive/hailOfBlades.png"),
    activeCheapShot: require("../../../assets/runes/domination/active/cheapShot.png"),
    inactiveCheapShot: require("../../../assets/runes/domination/inactive/cheapShot.png"),
    activeSuddenImpact: require("../../../assets/runes/domination/active/suddenImpact.png"),
    inactiveSuddenImpact: require("../../../assets/runes/domination/inactive/suddenImpact.png"),
    activeTasteOfBlood: require("../../../assets/runes/domination/active/tasteOfBlood.png"),
    inactiveTasteOfBlood: require("../../../assets/runes/domination/inactive/tasteOfBlood.png"),
    activeZombyWard: require("../../../assets/runes/domination/active/zombyWard.png"),
    inactiveZombyWard: require("../../../assets/runes/domination/inactive/zombyWard.png"),
    activeGhostPoro: require("../../../assets/runes/domination/active/ghostPoro.png"),
    inactiveGhostPoro: require("../../../assets/runes/domination/inactive/ghostPoro.png"),
    activeEyeballCollection: require("../../../assets/runes/domination/active/eyeBallCollection.png"),
    inactiveEyeballCollection: require("../../../assets/runes/domination/inactive/eyeBallCollection.png"),
    activeTreasureHunter: require("../../../assets/runes/domination/active/treasureHunter.png"),
    inactiveTreasureHunter: require("../../../assets/runes/domination/inactive/treasureHunter.png"),
    activeUltimateHunter: require("../../../assets/runes/domination/active/ultimateHunter.png"),
    inactiveUltimateHunter: require("../../../assets/runes/domination/inactive/ultimateHunter.png"),
    activeRelentlessHunter: require("../../../assets/runes/domination/active/relentlessHunter.png"),
    inactiveRelentlessHunter: require("../../../assets/runes/domination/inactive/relentlessHunter.png"),
    //sorcery
    activeArcaneComet: require("../../../assets/runes/sorcery/active/arcaneComet.png"),
    inactiveArcaneComet: require("../../../assets/runes/sorcery/inactive/arcaneComet.png"),
    activeSummonAery: require("../../../assets/runes/sorcery/active/summonAery.png"),
    inactiveSummonAery: require("../../../assets/runes/sorcery/inactive/summonAery.png"),
    activePhaseRush: require("../../../assets/runes/sorcery/active/phaseRush.png"),
    inactivePhaseRush: require("../../../assets/runes/sorcery/inactive/phaseRush.png"),
    activeNullifyingOrb: require("../../../assets/runes/sorcery/active/nullifyingOrb.png"),
    inactiveNullifyingOrb: require("../../../assets/runes/sorcery/inactive/nullifyingOrb.png"),
    activeManaflowBand: require("../../../assets/runes/sorcery/active/manaFlowBand.png"),
    inactiveManaflowBand: require("../../../assets/runes/sorcery/inactive/manaFlowBand.png"),
    activeNimbusCloak: require("../../../assets/runes/sorcery/active/nimbusCloak.png"),
    inactiveNimbusCloak: require("../../../assets/runes/sorcery/inactive/nimbusCloak.png"),
    activeTranscendence: require("../../../assets/runes/sorcery/active/transcendence.png"),
    inactiveTranscendence: require("../../../assets/runes/sorcery/inactive/transcendence.png"),
    activeCelerity: require("../../../assets/runes/sorcery/active/celerity.png"),
    inactiveCelerity: require("../../../assets/runes/sorcery/inactive/celerity.png"),
    activeAbsoluteFocus: require("../../../assets/runes/sorcery/active/absoluteFocus.png"),
    inactiveAbsoluteFocus: require("../../../assets/runes/sorcery/inactive/absoluteFocus.png"),
    activeScorch: require("../../../assets/runes/sorcery/active/scorch.png"),
    inactiveScorch: require("../../../assets/runes/sorcery/inactive/scorch.png"),
    activeWaterwalking: require("../../../assets/runes/sorcery/active/waterWalking.png"),
    inactiveWaterwalking: require("../../../assets/runes/sorcery/inactive/waterWalking.png"),
    activeGatheringStorm: require("../../../assets/runes/sorcery/active/gatheringStorm.png"),
    inactiveGatheringStorm: require("../../../assets/runes/sorcery/inactive/gatheringStorm.png"),
    //resolve
    activeGraspOfTheUndying: require("../../../assets/runes/resolve/active/graspOfTheUndying.png"),
    inactiveGraspOfTheUndying: require("../../../assets/runes/resolve/inactive/graspOfTheUndying.png"),
    activeAftershock: require("../../../assets/runes/resolve/active/aftershock.png"),
    inactiveAftershock: require("../../../assets/runes/resolve/inactive/aftershock.png"),
    activeGuardian: require("../../../assets/runes/resolve/active/guardian.png"),
    inactiveGuardian: require("../../../assets/runes/resolve/inactive/guardian.png"),
    activeDemolish: require("../../../assets/runes/resolve/active/demolish.png"),
    inactiveDemolish: require("../../../assets/runes/resolve/inactive/demolish.png"),
    activeFontOfLife: require("../../../assets/runes/resolve/active/fontOfLife.png"),
    inactiveFontOfLife: require("../../../assets/runes/resolve/inactive/fontOfLife.png"),
    activeShieldBash: require("../../../assets/runes/resolve/active/shieldBash.png"),
    inactiveShieldBash: require("../../../assets/runes/resolve/inactive/shieldBash.png"),
    activeConditioning: require("../../../assets/runes/resolve/active/conditioning.png"),
    inactiveConditioning: require("../../../assets/runes/resolve/inactive/conditioning.png"),
    activeSecondWind: require("../../../assets/runes/resolve/active/secondWind.png"),
    inactiveSecondWind: require("../../../assets/runes/resolve/inactive/secondWind.png"),
    activeBonePlating: require("../../../assets/runes/resolve/active/bonePlating.png"),
    inactiveBonePlating: require("../../../assets/runes/resolve/inactive/bonePlating.png"),
    activeOvergrowth: require("../../../assets/runes/resolve/active/overgrowth.png"),
    inactiveOvergrowth: require("../../../assets/runes/resolve/inactive/overgrowth.png"),
    activeRevitalize: require("../../../assets/runes/resolve/active/revitalize.png"),
    inactiveRevitalize: require("../../../assets/runes/resolve/inactive/revitalize.png"),
    activeUnflinching: require("../../../assets/runes/resolve/active/unflinching.png"),
    inactiveUnflinching: require("../../../assets/runes/resolve/inactive/unflinching.png"),
    //precision
    activePressTheAttack: require("../../../assets/runes/precision/active/pressTheAttack.png"),
    inactivePressTheAttack: require("../../../assets/runes/precision/inactive/pressTheAttack.png"),
    activeConqueror: require("../../../assets/runes/precision/active/conqueror.png"),
    inactiveConqueror: require("../../../assets/runes/precision/inactive/conqueror.png"),
    activeFleetFootwork: require("../../../assets/runes/precision/active/fleetFootwork.png"),
    inactiveFleetFootwork: require("../../../assets/runes/precision/inactive/fleetFootwork.png"),
    activeAbsorbLife: require("../../../assets/runes/precision/active/absorbLife.png"),
    inactiveAbsorbLife: require("../../../assets/runes/precision/inactive/absorbLife.png"),
    activeTriumph: require("../../../assets/runes/precision/active/triumph.png"),
    inactiveTriumph: require("../../../assets/runes/precision/inactive/triumph.png"),
    activePresenceOfMind: require("../../../assets/runes/precision/active/presenceOfMind.png"),
    inactivePresenceOfMind: require("../../../assets/runes/precision/inactive/presenceOfMind.png"),
    activeLegendAlacrity: require("../../../assets/runes/precision/active/alacracity.png"),
    inactiveLegendAlacrity: require("../../../assets/runes/precision/inactive/alacracity.png"),
    activeLegendHaste: require("../../../assets/runes/precision/active/haste.png"),
    inactiveLegendHaste: require("../../../assets/runes/precision/inactive/haste.png"),
    activeLegendBloodline: require("../../../assets/runes/precision/active/bloodline.png"),
    inactiveLegendBloodline: require("../../../assets/runes/precision/inactive/bloodline.png"),
    activeCoupDeGrace: require("../../../assets/runes/precision/active/coupeDeGrace.png"),
    inactiveCoupDeGrace: require("../../../assets/runes/precision/inactive/coupeDeGrace.png"),
    activeCutDown: require("../../../assets/runes/precision/active/cutDown.png"),
    inactiveCutDown: require("../../../assets/runes/precision/inactive/cutDown.png"),
    activeLastStand: require("../../../assets/runes/precision/active/lastStand.png"),
    inactiveLastStand: require("../../../assets/runes/precision/inactive/lastStand.png"),
    //inspiration
    activeGlacialAugment: require("../../../assets/runes/inspiration/active/glacialAugment.png"),
    inactiveGlacialAugment: require("../../../assets/runes/inspiration/inactive/glacialAugment.png"),
    activeUnsealedSpellbook: require("../../../assets/runes/inspiration/active/unsealedSpellbook.png"),
    inactiveUnsealedSpellbook: require("../../../assets/runes/inspiration/inactive/unsealedSpellbook.png"),
    activeFirstStrike: require("../../../assets/runes/inspiration/active/firstStrike.png"),
    inactiveFirstStrike: require("../../../assets/runes/inspiration/inactive/firstStrike.png"),
    activeHextechFlashtraption: require("../../../assets/runes/inspiration/active/hextechFlashtraption.png"),
    inactiveHextechFlashtraption: require("../../../assets/runes/inspiration/inactive/hextechFlashtraption.png"),
    activeMagicalFootwear: require("../../../assets/runes/inspiration/active/magicalFootwear.png"),
    inactiveMagicalFootwear: require("../../../assets/runes/inspiration/inactive/magicalFootwear.png"),
    activeCashBack: require("../../../assets/runes/inspiration/active/cashBack.png"),
    inactiveCashBack: require("../../../assets/runes/inspiration/inactive/cashBack.png"),
    activeTripleTonic: require("../../../assets/runes/inspiration/active/tripleTonic.png"),
    inactiveTripleTonic: require("../../../assets/runes/inspiration/inactive/tripleTonic.png"),
    activeTimeWarpTonic: require("../../../assets/runes/inspiration/active/timeWarpTonic.png"),
    inactiveTimeWarpTonic: require("../../../assets/runes/inspiration/inactive/timeWarpTonic.png"),
    activeBiscuitDelivery: require("../../../assets/runes/inspiration/active/biscuitDelivery.png"),
    inactiveBiscuitDelivery: require("../../../assets/runes/inspiration/inactive/biscuitDelivery.png"),
    activeCosmicInsight: require("../../../assets/runes/inspiration/active/cosmicInsight.png"),
    inactiveCosmicInsight: require("../../../assets/runes/inspiration/inactive/cosmicInsight.png"),
    activeApproachVelocity: require("../../../assets/runes/inspiration/active/approachVelocity.png"),
    inactiveApproachVelocity: require("../../../assets/runes/inspiration/inactive/approachVelocity.png"),
    activeJackOfAllTrades: require("../../../assets/runes/inspiration/active/jackOfAllTrades.png"),
    inactiveJackOfAllTrades: require("../../../assets/runes/inspiration/inactive/jackOfAllTrades.png"),
    //statMods
    activeAdaptiveForce: require("../../../assets/runes/stats/active/adaptiveForce.png"),
    inactiveAdaptiveForce: require("../../../assets/runes/stats/inactive/adaptiveForce.png"),
    activeAttackSpeed: require("../../../assets/runes/stats/active/attackSpeed.png"),
    inactiveAttackSpeed: require("../../../assets/runes/stats/inactive/attackSpeed.png"),
    activeCooldownReduction: require("../../../assets/runes/stats/active/cdrScaling.png"),
    inactiveCooldownReduction: require("../../../assets/runes/stats/inactive/cdrScaling.png"),
    activeMovementSpeed: require("../../../assets/runes/stats/active/movementSpeed.png"),
    inactiveMovementSpeed: require("../../../assets/runes/stats/inactive/movementSpeed.png"),
    activeHealthScaling: require("../../../assets/runes/stats/active/healthScaling.png"),
    inactiveHealthScaling: require("../../../assets/runes/stats/inactive/healthScaling.png"),
    activeHealth: require("../../../assets/runes/stats/active/healthPlus.png"),
    inactiveHealth: require("../../../assets/runes/stats/inactive/healthPlus.png"),
    activeTenacity: require("../../../assets/runes/stats/active/tenacity.png"),
    inactiveTenacity: require("../../../assets/runes/stats/inactive/tenacity.png"),
    
  };

  const getRuneIconByName = (name, state) => {
    let selectedOption = "";
    switch (name) {
      //DOMINATION
      case "Electrocute":
        if (state) {
          return cargaRunas.activeElectrocute;
        } else {
          return cargaRunas.inactiveElectrocute;
        }
        break;
      case "Dark Harvest":
        if (state) {
          return cargaRunas.activeDarkHarvest;
        } else {
          return cargaRunas.inactiveDarkHarvest;
        }
        break;
      case "Hail Of Blades":
        if (state) {
          return cargaRunas.activeHailOfBlades;
        } else {
          return cargaRunas.inactiveHailOfBlades;
        }
        break;
      case "Cheap Shot":
        if (state) {
          return cargaRunas.activeCheapShot;
        } else {
          return cargaRunas.inactiveCheapShot;
        }
        break;
      case "Sudden Impact":
        if (state) {
          return cargaRunas.activeSuddenImpact;
        } else {
          return cargaRunas.inactiveSuddenImpact;
        }
        break;
      case "Taste Of Blood":
        if (state) {
          return cargaRunas.activeTasteOfBlood;
        } else {
          return cargaRunas.inactiveTasteOfBlood;
        }
        break;
      case "Zombie Ward":
        if (state) {
          return cargaRunas.activeZombyWard;
        } else {
          return cargaRunas.inactiveZombyWard;
        }
        break;
      case "Ghost Poro":
        if (state) {
          return cargaRunas.activeGhostPoro;
        } else {
          return cargaRunas.inactiveGhostPoro;
        }
        break;
      case "Eyeball Collection":
        if (state) {
          return cargaRunas.activeEyeballCollection;
        } else {
          return cargaRunas.inactiveEyeballCollection;
        }
        break;
      case "Treasure Hunter":
        if (state) {
          return cargaRunas.activeTreasureHunter;
        } else {
          return cargaRunas.inactiveTreasureHunter;
        }
        break;
      case "Ultimate Hunter":
        if (state) {
          return cargaRunas.activeUltimateHunter;
        } else {
          return cargaRunas.inactiveUltimateHunter;
        }
        break;
      case "Relentless Hunter":
        if (state) {
          return cargaRunas.activeRelentlessHunter;
        } else {
          return cargaRunas.inactiveRelentlessHunter;
        }
        break;

      //INSPIRATION
      case "Summon Aery":
        if (state) {
          return cargaRunas.activeSummonAery;
        } else {
          return cargaRunas.inactiveSummonAery;
        }
        break;
      case "Arcane Comet":
        if (state) {
          return cargaRunas.activeArcaneComet;
        } else {
          return cargaRunas.inactiveArcaneComet;
        }
        break;
      case "Phase Rush":
        if (state) {
          return cargaRunas.activePhaseRush;
        } else {
          return cargaRunas.inactivePhaseRush;
        }
        break;
      case "Nullifying Orb":
        if (state) {
          return cargaRunas.activeNullifyingOrb;
        } else {
          return cargaRunas.inactiveNullifyingOrb;
        }
        break;
      case "Manaflow Band":
        if (state) {
          return cargaRunas.activeManaflowBand;
        } else {
          return cargaRunas.inactiveManaflowBand;
        }
        break;
      case "Nimbus Cloak":
        if (state) {
          return cargaRunas.activeNimbusCloak;
        } else {
          return cargaRunas.inactiveNimbusCloak;
        }
        break;
      case "Transcendence":
        if (state) {
          return cargaRunas.activeTranscendence;
        } else {
          return cargaRunas.inactiveTranscendence;
        }
        break;  
      case "Celerity":
        if (state) {
          return cargaRunas.activeCelerity;
        } else {
          return cargaRunas.inactiveCelerity;
        }
        break;
      case "Absolute Focus":
        if (state) {
          return cargaRunas.activeAbsoluteFocus;
        } else {
          return cargaRunas.inactiveAbsoluteFocus;
        }
        break;
      case "Scorch":
        if (state) {
          return cargaRunas.activeScorch;
        } else {
          return cargaRunas.inactiveScorch;
        }
        break;
      case "Waterwalking":
        if (state) {
          return cargaRunas.activeWaterwalking;
        } else {
          return cargaRunas.inactiveWaterwalking;
        }
        break;
      case "Gathering Storm":
        if (state) {
          return cargaRunas.activeGatheringStorm;
        } else {
          return cargaRunas.inactiveGatheringStorm;
        }
        break;

        case "Grasp of the Undying":
        if (state) {
          return cargaRunas.activeGraspOfTheUndying;
        } else {
          return cargaRunas.inactiveGraspOfTheUndying;
        }
        break;
        case "Aftershock":
        if (state) {
          return cargaRunas.activeAftershock;
        } else {
          return cargaRunas.inactiveAftershock;
        }
        break;
        case "Guardian":
        if (state) {
          return cargaRunas.activeGuardian;
        } else {
          return cargaRunas.inactiveGuardian;
        }
        break;
        case "Demolish":
        if (state) {
          return cargaRunas.activeDemolish;
        } else {
          return cargaRunas.inactiveDemolish;
        }
        break;
        case "Font of Life":
        if (state) {
          return cargaRunas.activeFontOfLife;
        } else {
          return cargaRunas.inactiveFontOfLife;
        }
        break;
        case "Shield Bash":
        if (state) {
          return cargaRunas.activeShieldBash;
        } else {
          return cargaRunas.inactiveShieldBash;
        }
        break;
        case "Conditioning":
        if (state) {
          return cargaRunas.activeConditioning;
        } else {
          return cargaRunas.inactiveConditioning;
        }
        break;
        case "Second Wind":
        if (state) {
          return cargaRunas.activeSecondWind;
        } else {
          return cargaRunas.inactiveSecondWind;
        }
        break;
        case "Bone Plating":
        if (state) {
          return cargaRunas.activeBonePlating;
        } else {
          return cargaRunas.inactiveBonePlating;
        }
        break;
        case "Overgrowth":
        if (state) {
          return cargaRunas.activeOvergrowth;
        } else {
          return cargaRunas.inactiveOvergrowth;
        }
        break;
        case "Revitalize":
        if (state) {
          return cargaRunas.activeRevitalize;
        } else {
          return cargaRunas.inactiveRevitalize;
        }
        break;
        case "Unflinching":
        if (state) {
          return cargaRunas.activeUnflinching;
        } else {
          return cargaRunas.inactiveUnflinching;
        }
        break;



        //stats
        case "Adaptive Force":
        if (state) {
          console.log("Entro en AP/AP activo");
          return cargaRunas.activeAdaptiveForce;
        } else {
          console.log("Entro en AP/AP inactivo");
          return cargaRunas.inactiveAdaptiveForce;
        }
        break;
        case "Attack Speed":
        if (state) {
          return cargaRunas.activeAttackSpeed;
        } else {
          return cargaRunas.inactiveAttackSpeed;
        }
        break;
        case "Ability Haste":
        if (state) {
          return cargaRunas.activeCooldownReduction;
        } else {
          return cargaRunas.inactiveCooldownReduction;
        }
        break;
        case "Movement Speed":
        if (state) {
          return cargaRunas.activeMovementSpeed;
        } else {
          return cargaRunas.inactiveMovementSpeed;
        }
        break;
        case "Bonus Health Scale":
        if (state) {
          return cargaRunas.activeHealthScaling;
        } else {
          return cargaRunas.inactiveHealthScaling;
        }
        break;
        case "Bonus Health":
        if (state) {
          return cargaRunas.activeHealth;
        } else {
          return cargaRunas.inactiveHealth;
        }
        break;
        case "Tenacity":
        if (state) {
          return cargaRunas.activeTenacity;
        } else {
          return cargaRunas.inactiveTenacity;
        }
        break;
            
      default:
        return null;
    }
  };

  function renderPrimaryRunes(primaryName, allRunes) {
    // Verificar si el nombre de las runas primarias está definido y existe en el JSON general de runas
    if (primaryName && allRunes.categories[primaryName]) {
      const primaryCategory = allRunes.categories[primaryName];
      return (
        <View key={primaryName}>
          <View style={styles.runeInfo}>
            <Image
              source={{ uri: primaryCategory.imageUri }}
              style={styles.runeIcon}
            />
            <Text style={styles.runeName}>{primaryName}</Text>
          </View>
          <View style={styles.containerRunes}>
            {/* Renderizar las runas de la categoría primaria */}
            {Object.values(primaryCategory.slots).map((slot, index) => (
              <View key={index} style={styles.rowRunes}>
                {Object.values(slot).map((option) => (
                  <View key={option.name} style={styles.runeWrapper}>
                    <Image
                      source={getRuneIconByName(option.name, option.isActive)}
                      // Ajusta los argumentos según tu caso
                      style={styles.runeIcon}
                    />
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      );
    } else {
      console.log("NO ENCUENTRA RUNAS PRIAMRIAS");
      return null; // Si no se encuentra la categoría de runas primarias, retornar null
    }
  }

  function renderSecondaryRunes(secondaryName, allRunes) {
    // Verificar si el nombre de las runas secundarias está definido y existe en el JSON general de runas
    if (secondaryName && allRunes.categories[secondaryName]) {
      const secondaryCategory = allRunes.categories[secondaryName];
      return (
        <View key={secondaryName}>
          <View style={styles.runeInfo}>
            <Image
              source={{ uri: secondaryCategory.imageUri }}
              style={styles.runeIcon}
            />
            <Text style={styles.runeName}>{secondaryName}</Text>
          </View>
          <View style={styles.containerRunes}>
            {/* Renderizar las runas de la categoría secundaria, excluyendo el primer slot */}
            {Object.values(secondaryCategory.slots)
            .slice(1)
              .map((slot, index) => (
                <View key={index} style={styles.rowRunes}>
                  {Object.values(slot).map((option) => (
                    <View key={option.name} style={styles.runeWrapper}>
                      <Image
                        source={getRuneIconByName(option.name, option.isActive)}
                        // Ajusta los argumentos según tu caso
                        style={styles.runeIcon}
                      />
                    </View>
                  ))}
                </View>
              ))}
          </View>
        </View>
      );
    } else {
      console.log("NO ENCUENTRA RUNAS SECUNDARIAS");
      return null; // Si no se encuentra la categoría de runas secundarias, retornar null
    }
  }
  // Función para renderizar las statsMod
  const renderStatsMod = (statsMod) => {
    return (
      <View style={styles.containerRunes}>
        <View style={[styles.rowRunes, { flexDirection: 'row' }]}>
          {Object.keys(statsMod).map((slot) => {
            const slotData = statsMod[slot];
            return Object.values(slotData).map((option) => {
              return (
                <Image
                  key={option.name}
                  source={getRuneIconByName(option.name, true)}
                  style={{ ...styles.runeIcon, borderRadius: 50 }}
                />
              );
            });
          })}
        </View>
      </View>
    );
  };
  

  
  
  

  const renderInfoBlock = () => {
    if (selectedButton === "Runes") {
      console.log("Datos de runas:", selectedChamp.runes);
      return (
        <View style={styles.infoBlock}>
          <Text style={styles.infoHeaderText}>Runes</Text>
          {/* Renderizar solo las runas primarias del campeón */}
          {renderPrimaryRunes(selectedChamp.runes.primary.name, runes)}
          {/* Renderizar solo las runas secundarias del campeón */}
          {renderSecondaryRunes(selectedChamp.runes.secondary.name, runes)}
          {/*Renderizar las stats*/}
          {renderStatsMod(selectedChamp.runes.statsMod)}
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
  runeName: {
    marginTop: 5,
    color: "#333",
  },
});

export default ChampionCard;
