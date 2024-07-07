// config.ts

interface AppConfig {
  title: string;
  description: string;
  tags: string[];
  youtube: string;
  github: {
    owner: string;
    repo: string;
  };
}

const config: AppConfig = {
  title: "ESP32 Car Project",
  description: "Description of your project.",
  tags: ["Next.js", "TypeScript", "React", "Web Development"],
  youtube: "https://api.example.com", // Example API URL
  github: {
    owner: "AbdulrahmanNahhas",
    repo: "esp32_car_project",
  }
};

export default config;