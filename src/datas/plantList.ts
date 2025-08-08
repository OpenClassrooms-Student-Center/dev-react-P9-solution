import type { Plant } from "../types";
import monstera from "../assets/monstera.jpg";
import lyrata from "../assets/lyrata.jpg";
import pothos from "../assets/pothos.jpg";
import succulent from "../assets/succulent.jpg";
import olivier from "../assets/olivier.jpg";
import basil from "../assets/basil.jpg";
import mint from "../assets/mint.jpg";
import calathea from "../assets/calathea.jpg";
import cactus from "../assets/cactus.jpg";
import dracaena from "../assets/dracanea.webp";
import sedum from "../assets/sedum.webp";
import lavande from "../assets/lavande.webp";
import romarin from "../assets/romarin.webp";
import thym from "../assets/thym.webp";
import orchidee from "../assets/orchidee.webp";
import ficusElastica from "../assets/ficusElastica.webp";
import philodendron from "../assets/philodendron.jpg";
import aloeVera from "../assets/aloeVera.jpeg";
import echeveria from "../assets/echeveria.jpeg";
import crassula from "../assets/crassula.jpg";

export const plantList: Plant[] = [
  {
    name: "monstera",
    category: "classique",
    id: "1ed",
    light: 2,
    water: 3,
    cover: monstera,
    price: 15,
    description:
      "Le Monstera deliciosa, également connu sous le nom de 'plante à trous', est une plante d'intérieur emblématique originaire des forêts tropicales d'Amérique centrale. Ses feuilles caractéristiques se découpent naturellement en formant des trous et des fentes élégantes. Cette plante grimpante peut atteindre plusieurs mètres de hauteur et apporte une touche exotique à votre intérieur. Elle purifie l'air et s'adapte bien aux conditions d'intérieur moyennes.",
  },
  {
    name: "ficus lyrata",
    category: "classique",
    id: "2ab",
    light: 3,
    water: 1,
    cover: lyrata,
    price: 16,
    description:
      "Le Ficus lyrata, ou figuier lyre, est apprécié pour ses grandes feuilles en forme de violon d'un vert profond et brillant. Originaire d'Afrique de l'Ouest, cette plante majestueuse peut devenir un véritable arbre d'intérieur. Elle apporte une ambiance tropicale et moderne à votre espace. Ses feuilles larges et coriaces en font un excellent purificateur d'air naturel.",
  },

  {
    name: "pothos argenté",
    category: "classique",
    id: "3sd",
    light: 1,
    water: 2,
    cover: pothos,
    price: 9,
    description:
      "Le Pothos argenté, ou Epipremnum aureum, est une plante grimpante très populaire grâce à sa facilité d'entretien et ses feuilles panachées de vert et d'argent. Originaire des îles Salomon, cette plante peut pousser dans des conditions de faible luminosité et s'adapte parfaitement aux débutants. Ses longues tiges retombantes en font un excellent choix pour les suspensions ou les étagères.",
  },
  {
    name: "calathea",
    category: "classique",
    id: "4kk",
    light: 2,
    water: 3,
    cover: calathea,
    price: 20,
    description:
      "La Calathea est une plante tropicale originaire d'Amérique du Sud, réputée pour ses feuilles décoratives aux motifs complexes et ses mouvements nyctinastiques (ses feuilles se replient la nuit). Ses feuilles ovales présentent des motifs géométriques élégants et des couleurs variées selon les espèces. Cette plante apporte une touche d'exotisme et de sophistication à votre intérieur.",
  },
  {
    name: "olivier",
    category: "extérieur",
    id: "5pl",
    light: 3,
    water: 1,
    cover: olivier,
    price: 25,
    description:
      "L'olivier (Olea europaea) est un arbre méditerranéen emblématique, symbole de paix et de longévité. Avec son tronc noueux caractéristique et ses feuilles persistantes gris-vert, il apporte une ambiance méditerranéenne à votre jardin ou terrasse. Rustique et résistant à la sécheresse, il peut vivre plusieurs centaines d'années et produit des olives comestibles après quelques années.",
  },

  {
    name: "cactus",
    category: "plante grasse",
    id: "8fp",
    light: 2,
    water: 1,
    cover: cactus,
    price: 6,
    description:
      "Les cactus sont des plantes succulentes originaires des régions désertiques d'Amérique. Leur forme caractéristique avec des tiges charnues et des épines les rend uniques. Parfaits pour les débutants, ils nécessitent très peu d'entretien et d'arrosage. Leurs fleurs colorées, qui apparaissent généralement au printemps, offrent un spectacle magnifique et éphémère.",
  },
  {
    name: "basilique",
    category: "extérieur",
    id: "7ie",
    light: 2,
    water: 3,
    cover: basil,
    price: 5,
    description:
      "La basilic (Ocimum basilicum) est une herbe aromatique annuelle originaire d'Asie du Sud-Est. Ses feuilles vertes et parfumées sont très utilisées en cuisine méditerranéenne et asiatique. Cette plante facile à cultiver préfère les endroits ensoleillés et un sol bien drainé. Elle repousse naturellement les moustiques et attire les pollinisateurs au jardin.",
  },
  {
    name: "succulente",
    category: "plante grasse",
    id: "9vn",
    light: 2,
    water: 1,
    cover: succulent,
    price: 8,
    description:
      "Les succulentes sont un groupe diversifié de plantes qui stockent l'eau dans leurs feuilles, tiges ou racines charnues. Originaires de régions arides du monde entier, elles se déclinent en milliers d'espèces aux formes et couleurs variées. Parfaites pour les débutants, elles nécessitent peu d'entretien et peuvent survivre dans des conditions difficiles.",
  },

  {
    name: "menthe",
    category: "extérieur",
    id: "6uo",
    light: 2,
    water: 2,
    cover: mint,
    price: 4,
    description:
      "La menthe (Mentha) est une plante herbacée vivace très aromatique, originaire d'Europe et d'Asie. Ses feuilles vertes et dentées dégagent un parfum rafraîchissant caractéristique. Très facile à cultiver, elle peut devenir envahissante grâce à ses rhizomes. Elle est utilisée en cuisine, en infusion et en aromathérapie pour ses propriétés digestives et rafraîchissantes.",
  },
  {
    name: "orchidée",
    category: "classique",
    id: "10xy",
    light: 2,
    water: 2,
    cover: orchidee,
    price: 35,
    description:
      "Les orchidées sont des plantes épiphytes fascinantes qui poussent naturellement sur les arbres des forêts tropicales. Leurs fleurs spectaculaires et durables en font des plantes d'intérieur très appréciées. L'orchidée Phalaenopsis, la plus courante, produit des fleurs en grappes qui peuvent durer plusieurs mois. Elle nécessite une humidité ambiante et un arrosage modéré.",
  },
  {
    name: "aloe vera",
    category: "plante grasse",
    id: "11ab",
    light: 2,
    water: 1,
    cover: aloeVera,
    price: 12,
    description:
      "L'Aloe vera est une plante succulente originaire d'Arabie saoudite, réputée pour ses propriétés médicinales depuis l'Antiquité. Ses feuilles charnues contiennent un gel aux vertus apaisantes et cicatrisantes. Cette plante facile d'entretien préfère les endroits ensoleillés et nécessite peu d'arrosage. Elle est parfaite pour les débutants et peut vivre de nombreuses années.",
  },
  {
    name: "lavande",
    category: "extérieur",
    id: "12cd",
    light: 3,
    water: 1,
    cover: lavande,
    price: 7,
    description:
      "La lavande (Lavandula) est un arbrisseau méditerranéen apprécié pour ses fleurs violettes parfumées et ses propriétés apaisantes. Ses tiges ligneuses portent des feuilles gris-vert et des épis floraux très aromatiques. Cette plante rustique et résistante à la sécheresse attire les abeilles et les papillons. Elle est utilisée en parfumerie, aromathérapie et cuisine.",
  },
  {
    name: "ficus elastica",
    category: "classique",
    id: "13ef",
    light: 2,
    water: 2,
    cover: ficusElastica,
    price: 18,
    description:
      "Le Ficus elastica, ou caoutchouc, est une plante d'intérieur majestueuse originaire d'Asie du Sud-Est. Ses grandes feuilles ovales, coriaces et brillantes peuvent atteindre 30 cm de long. Cette plante purificatrice d'air s'adapte bien aux conditions d'intérieur et peut devenir un véritable arbre d'intérieur. Elle était autrefois cultivée pour la production de caoutchouc naturel.",
  },
  {
    name: "echeveria",
    category: "plante grasse",
    id: "14gh",
    light: 3,
    water: 1,
    cover: echeveria,
    price: 10,
    description:
      "L'Echeveria est un genre de plantes succulentes originaires du Mexique et d'Amérique centrale. Ces plantes forment des rosettes compactes de feuilles charnues, souvent avec des couleurs variées allant du vert au rouge en passant par le violet. Parfaites pour les jardins de rocaille ou les compositions en pot, elles nécessitent beaucoup de lumière et très peu d'eau.",
  },
  {
    name: "romarin",
    category: "extérieur",
    id: "15ij",
    light: 3,
    water: 1,
    cover: romarin,
    price: 6,
    description:
      "Le romarin (Rosmarinus officinalis) est un arbrisseau méditerranéen persistant, apprécié pour ses feuilles aromatiques en forme d'aiguilles. Ses fleurs bleu-violet apparaissent au printemps et attirent les pollinisateurs. Cette plante rustique et résistante à la sécheresse est très utilisée en cuisine méditerranéenne et en aromathérapie pour ses propriétés stimulantes.",
  },
  {
    name: "philodendron",
    category: "classique",
    id: "16kl",
    light: 1,
    water: 3,
    cover: philodendron,
    price: 22,
    description:
      "Le Philodendron est un genre de plantes tropicales originaires d'Amérique du Sud, très appréciées pour leurs feuilles décoratives et leur facilité d'entretien. Ces plantes grimpantes ou retombantes s'adaptent parfaitement aux conditions d'intérieur avec une faible luminosité. Leurs feuilles en forme de cœur ou découpées apportent une touche d'exotisme à votre intérieur.",
  },
  {
    name: "crassula",
    category: "plante grasse",
    id: "17mn",
    light: 2,
    water: 1,
    cover: crassula,
    price: 9,
    description:
      "La Crassula, également connue sous le nom d'arbre de jade, est une plante succulente originaire d'Afrique du Sud. Ses feuilles charnues et ovales sont disposées en paires opposées sur des tiges ligneuses. Cette plante facile d'entretien peut vivre de nombreuses années et même devenir un petit arbre. Elle est considérée comme une plante porte-bonheur dans certaines cultures.",
  },
  {
    name: "thym",
    category: "extérieur",
    id: "18op",
    light: 3,
    water: 1,
    cover: thym,
    price: 5,
    description:
      "Le thym (Thymus) est un petit arbrisseau méditerranéen persistant, très apprécié en cuisine pour ses feuilles aromatiques. Ses petites feuilles vert-gris et ses fleurs roses ou blanches en font une plante ornementale et utile. Cette plante rustique et résistante à la sécheresse est parfaite pour les jardins de rocaille et les bordures. Elle attire les abeilles et les papillons.",
  },
  {
    name: "dracaena",
    category: "classique",
    id: "19qr",
    light: 2,
    water: 2,
    cover: dracaena,
    price: 14,
    description:
      "Le Dracaena est un genre de plantes d'intérieur originaires d'Afrique et d'Asie, appréciées pour leurs feuilles élégantes et leur facilité d'entretien. Ces plantes purificatrices d'air se déclinent en nombreuses variétés aux feuilles panachées ou unies. Leur croissance lente et leur adaptabilité aux conditions d'intérieur en font des plantes idéales pour les bureaux et les appartements.",
  },
  {
    name: "sedum",
    category: "plante grasse",
    id: "20st",
    light: 3,
    water: 1,
    cover: sedum,
    price: 7,
    description:
      "Le Sedum, ou orpin, est un genre de plantes succulentes très diversifié, originaires principalement de l'hémisphère nord. Ces plantes robustes se déclinent en variétés rampantes ou dressées, avec des feuilles charnues et des fleurs en forme d'étoile. Parfaites pour les toits végétalisés et les jardins de rocaille, elles sont très résistantes à la sécheresse et au froid.",
  },
];
