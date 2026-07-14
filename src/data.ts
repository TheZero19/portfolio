import { AboutMeData, Project, Tool, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  image: `${process.env.PUBLIC_URL}/images/Profile.png`,
  cvUri: `${process.env.PUBLIC_URL}/files/CV_Sampurna_KC.pdf`,

  name: "Sampurna KC",
  role: "Unity Game Developer",
  introduction: "Hello, I am a Game Developer specializing in Unity and C# and have experience in developing games for various platforms. Despite my specialization in Unity, you can also find me engaged with Godot, Raylib and OpenGL.",
  description: "I have completed my Bachelor's degree in Computer Engineering from Kathmandu University, Nepal. The genres of video games that I love playing are FPS, soulslike and deep story-driven games. Apart from video games, I also enjoy music and chess.",
  links: {
    github: "https://github.com/TheZero19",
    itchIO: "https://ceronera.itch.io",
    linkedIn: "https://www.linkedin.com/in/sampurna-kc-21b217282/",
  }
};

export const games: Project[] = [
  {
    name: "Carrom",
    description: "Developed a Carrom game for my freelance work featuring the Nepali-style rules along with special types of shots which upon execution, grants special bonus scores to the player. The game also has on-device multiplayer mode where two players can play against each other on the same device.",
    genres: ["Mobile", "Multiplayer", "Board Game"],
    platforms: [Platform.Mobile],
    tools: [Tool.Unity, Tool.Firebase, Tool.CSharp, Tool.Rider],
    links: [
    ],
    media: [
      { source: "/images/games/Carrom/loading.png", type: MediaType.Image },
      { source: "/images/games/Carrom/mainmenu.png", type: MediaType.Image },
      { source: "/images/games/Carrom/Tutorial.png", type: MediaType.Image },
      { source: "/images/games/Carrom/settingsAtMainMenu.png", type: MediaType.Image },
      { source: "/images/games/Carrom/singlePlayer.png", type: MediaType.Image },
      { source: "/images/games/Carrom/multiplayerColorSelectionPhase.png", type: MediaType.Image },
      { source: "/images/games/Carrom/multiplayerUI.png", type: MediaType.Image },
      { source: "/images/games/Carrom/ingamesettings.png", type: MediaType.Image },
      { source: "/images/games/Carrom/scorepage.png", type: MediaType.Image },
    ],
  },
  {
    name: "VFX in Godot",
    description: "These are the visual effects produced in Godot game engine when I was trying to learn Godot Engine in my free time.",
    genres: ["VFX", "Godot", "Learning"],
    platforms: [Platform.Windows],
    tools: [Tool.Godot, Tool.CSharp, Tool.Rider],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/TheZero19/XeruGL" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/7rJcmt2Z0WI", type: MediaType.YouTube},
      { source: "https://www.youtube.com/embed/bVwCyaXi14k", type: MediaType.YouTube},
      { source: "https://www.youtube.com/embed/Tm7PXlG2Tmg", type: MediaType.YouTube},
      { source: "https://www.youtube.com/embed/LSGc8AtBQYM", type: MediaType.YouTube},
    ],
  },
  {
    name: "IOT Sensors",
    description: "A Golang application that ingests IoT sensor readings, caches state in Redis, and periodically synchronizes aggregated data to PostgreSQL. The service exposes HTTP endpoints to register sensors and submit temperature readings.", 
    genres: ["Golang", "IOT", "Learning"],
    platforms: [Platform.Web],
    tools: [Tool.Golang, Tool.Goland, Tool.Redis, Tool.PostgreSQL, Tool.Docker, Tool.Postman],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/TheZero19/IoTSensors" },
    ],
    media: [
      { source: "/images/games/iot/iot.png", type: MediaType.Image },
    ],
  },
  {
    name: "XeruGL",
    description: "This is a project that keeps track of my OpenGL learning journey. So far, there are a few cubes with textures attached to them and a camera that can be moved around the scene. The project is still in its early stages and I will be adding more features to it as I learn more about OpenGL.",
    genres: ["Graphics Programming", "OpenGL", "Learning Project"],
    platforms: [Platform.Windows],
    tools: [Tool.OpenGL, Tool.Cpp, Tool.Rider],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/TheZero19/XeruGL" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/7-dE8561r_Q", type: MediaType.YouTube },
    ],
  },
  {
    name: "All the internship's Unity projects",
    description: "These are the projects which I was given to work on during my internship at a game development company.",
    genres: ["RTS", "Unity", "Learning Projects"],
    platforms: [Platform.Windows, Platform.Mobile],
    tools: [Tool.Unity, Tool.CSharp, Tool.VisualStudio],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/TheZero19/XeruGL" },
      { source: LinkImageSource.Github, url: "https://github.com/TheZero19/XeruGL" },
      { source: LinkImageSource.Github, url: "https://github.com/TheZero19/XeruGL" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "Pong",
    description: "This is a simple Pong game made during my 7th semester of college as a part of mini project",
    genres: ["Pong", "Learning"],
    platforms: [Platform.Windows],
    tools: [Tool.Raylib, Tool.Cpp, Tool.VisualStudio],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/TheZero19/COMP342-graphics-miniProject" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/Utv2P7LpAF4", type: MediaType.YouTube },
    ],
  },
];