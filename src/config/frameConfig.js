import frame1 from "../assets/frames/frame1.png";
import frame2 from "../assets/frames/frame2.png";
import frame3 from "../assets/frames/frame3.png";
import frame4 from "../assets/frames/frame4.png";

export const frameConfigs = [
  {
    id: 1,
    name: "Triple",

    image: frame1,

    canvasWidth: 800,
    canvasHeight: 1500,

    slots: [
      {
        x: 84,
        y: 68,
        width: 660,
        height: 390,
      },

      {
        x: 84,
        y: 478,
        width: 660,
        height: 390,
      },

      {
        x: 78,
        y: 886,
        width: 660,
        height: 390,
      },
    ],
  },

  {
    id: 2,
    name: "Triple",
    image: frame2,

    canvasWidth: 1080,
    canvasHeight: 1920,

    slots: [
      {
        x: 292,
        y: 440,
        width: 560,
        height: 390,
      },

      {
        x: 292,
        y: 840,
        width: 560,
        height: 390,
      },

      {
        x: 292,
        y: 1240,
        width: 560,
        height: 390,
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
        x: 120,
        y: 98,
        width: 840,
        height: 500,
      },
      {
        x: 120,
        y: 600,
        width: 840,
        height: 500,
      },
      {
        x: 120,
        y: 1120,
        width: 840,
        height: 500,
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
        x: 96,
        y: 400,
        width: 418,
        height: 690,
      },
      {
        x: 98,
        y: 1120,
        width: 418,
        height: 640,
      },
      {
        x: 550,
        y: 258,
        width: 418,
        height: 620,
      },
      {
        x: 548,
        y: 860,
        width: 418,
        height: 626,
      },
    ],
  },
];
