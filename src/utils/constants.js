export const weatherOptions = [
  {
    url: require("../images/day/sunny.svg").default,
    day: true,
    type: "Clear",
  },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "Clouds",
  },
  {
    url: require("../images/day/rain.svg").default,
    day: true,
    type: "Rain Drizzle",
  },
  { url: require("../images/day/snow.svg").default, day: true, type: "Snow" },
  {
    url: require("../images/day/storm.svg").default,
    day: true,
    type: "Storm Thunderstorm Tornado",
  },
  {
    url: require("../images/day/fog.svg").default,
    day: true,
    type: "Mist Fog Smoke Haze Dust",
  },
  {
    url: require("../images/night/moon.svg").default,
    day: false,
    type: "Clear",
  },
  {
    url: require("../images/night/cloudy.svg").default,
    day: false,
    type: "Clouds",
  },
  {
    url: require("../images/night/rain.svg").default,
    day: false,
    type: "Rain Drizzle",
  },
  {
    url: require("../images/night/snow.svg").default,
    day: false,
    type: "Snow",
  },
  {
    url: require("../images/night/storm.svg").default,
    day: false,
    type: "Storm Thunderstorm Tornado",
  },
  {
    url: require("../images/night/fog.svg").default,
    day: false,
    type: "Mist Fog Smoke Haze Dust",
  },
];

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const APIkey = "c6ef57b82cd4aff6a67f912e02400d95";

// export const latitude = 52.37;
// export const latitude = -51.79;
// export const latitude = 36.17;
// export const latitude = 35.67;
export const latitude = 27.95;

// export const longitude = 4.89;
// export const longitude = -59.52;
// export const longitude = -115.14;
// export const longitude = 139.65;
export const longitude = -82.45;
