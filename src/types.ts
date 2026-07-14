export enum LinkImageSource {
  Github = "/images/logos/github.png",
  ItchIo = "/images/logos/itch.io.png",
}

export enum Platform {
  Windows = "Windows",
  Mac = "Mac",
  Linux = "Linux",
  iOS = "iOS",
  Android = "Android",
  Mobile = "Mobile",
  Web = "Web",
}

export enum Tool {
  None = "None",
  Unity = "Unity",
  Unreal = "Unreal",
  Godot = "Godot",
  Raylib = "Raylib",
  Cpp = "C++",
  CSharp = "C#",
  Golang = "Golang",
  Rider = "Rider",
  Goland = "Goland",
  Redis = "Redis",
  Docker = "Docker",
  PostgreSQL = "PostgreSQL",
  Postman = "Postman",
  VisualStudio = "Visual Studio",
  Firebase = "Firebase",
  OpenGL = "OpenGL",
}

export enum MediaType {
  Image = "image",
  YouTube = "youtube",
}

export interface MediaItem {
  source: string;
  type: MediaType;
}

export interface AboutMeData {
  name: string;
  role: string;
  description: string;
  introduction: string;
  image: string;
  cvUri: string;
  links: {
    github: string;
    itchIO: string;
    linkedIn: string;
  };
}

export interface Project {
  name: string;
  description: string;
  genres: string[];
  source?: { name: string; url: string };
  links: { source: LinkImageSource; url: string }[];
  media: MediaItem[];
  platforms: Platform[];
  tools: Tool[];
}