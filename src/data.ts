import { AboutMeData, Project, Tool, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  image: `${process.env.PUBLIC_URL}/images/Profile.png`,
  cvUri: `${process.env.PUBLIC_URL}/files/CV_Sampurna_KC.pdf`,

  name: "Sampurna KC",
  role: "Unity Game Developer",
  introduction: "I am a game developer specializing in Unity and C# with experience in developing games for various platforms. Despite my specialization in Unity, you can also find me working with Godot, Raylib, OpenGL and C++.",
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
      { source: "https://www.youtube.com/embed/sTd9mWPqVhg", type: MediaType.YouTube },
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
    description: "These are the visual effects produced in Godot game engine when I was trying to learn Godot Engine in my free time. I created a handful of Environment VFXs and Screen VFXs but only a few of them turned out okay-ish. I will be adding a lot more VFXs in the future as I learn more about Godot Engine.",
    genres: ["VFX", "Godot", "Learning"],
    platforms: [Platform.Windows],
    tools: [Tool.Godot, Tool.CSharp, Tool.Rider],
    links: [
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
      { source: "/images/games/iot/iot.PNG", type: MediaType.Image },
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
    name: "A Collection of Simple Unity projects",
    description: "These are the some of the Unity projects which I was assigned to during my internship at Avana Games Studio. I created a few mechanics like Player's Mechanics, RTS camera behaviour, Troop deployment system, etc. I also learnt to use Blender for simple 3D modelling and animation during my internship period.",
    genres: ["RTS", "Adventure", "Mechanics", "Unity", "Learning"],
    platforms: [Platform.Windows, Platform.Mobile],
    tools: [Tool.Unity, Tool.CSharp, Tool.VisualStudio],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/TheZero19/Avana_Archers-I" },
      { source: LinkImageSource.Github, url: "https://github.com/TheZero19/Avana_CompanyOfHeroesClone" },
      { source: LinkImageSource.Github, url: "https://github.com/TheZero19/Avana_Bowling" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/x7WTYvBQtSc", type: MediaType.YouTube },
      { source: "https://www.youtube.com/embed/B3rfLp9cEMA", type: MediaType.YouTube },
      { source: "https://www.youtube.com/embed/ujDZij1h1yM", type: MediaType.YouTube },
    ],
  },
  {
    name: "Pong",
    description: "This is a simple Pong game made during my 7th semester of college as a part of mini project. Despite the simplicity, I had a very hard time implementing a lot of things, setting up the environment, etc. So, I love to showcase this project.",
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