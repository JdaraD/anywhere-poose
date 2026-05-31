import frame1 from "../assets/frames/frame1.png";
import frame2 from "../assets/frames/frame2.png";
import frame3 from "../assets/frames/frame3.png";
import frame4 from "../assets/frames/frame4.png";

export const frameConfigs = [
  {
    id: 1,
    name: "Party Night",

    image: frame1,

    canvasWidth: 800,
    canvasHeight: 1500,

    slots: [
      {
        x: 90,
        y: 160,
        width: 620,
        height: 270,
      },

      {
        x: 90,
        y: 500,
        width: 620,
        height: 270,
      },

      {
        x: 90,
        y: 840,
        width: 620,
        height: 270,
      },
    ],
  },

  {
    id: 2,
    name: "Double",
    image: frame2,

    canvasWidth: 1080,
    canvasHeight: 1920,

    slots: [
      {
        x: 100,
        y: 336,
        width: 940,
        height: 620,
      },

      {
        x: 100,
        y: 996,
        width: 940,
        height: 620,
      },
    ],
  },

  {
    id: 3,
    name: "Triple",
    image: frame3,

    canvasWidth: 1080,
    canvasHeight: 1920,

    slots: [
      {
        x: 150,
        y: 200,
        width: 780,
        height: 320,
      },

      {
        x: 150,
        y: 600,
        width: 780,
        height: 320,
      },

      {
        x: 150,
        y: 1000,
        width: 780,
        height: 320,
      },
    ],
  },

  {
    id: 4,
    name: "Four Strip",
    image: frame4,

    canvasWidth: 1080,
    canvasHeight: 1920,

    slots: [
      {
        x: 140,
        y: 180,
        width: 800,
        height: 260,
      },

      {
        x: 140,
        y: 500,
        width: 800,
        height: 260,
      },

      {
        x: 140,
        y: 820,
        width: 800,
        height: 260,
      },

      {
        x: 140,
        y: 1140,
        width: 800,
        height: 260,
      },
    ],
  },
];
