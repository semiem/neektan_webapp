import poster1 from "../assets/images/blaze/MoveThatCone/Poster.png";
import video1 from "../assets/images/blaze/MoveThatCone/Video1.png";
import slide11 from "../assets/images/blaze/MoveThatCone/Slide1.png";
import slide12 from "../assets/images/blaze/MoveThatCone/Slide2.png";
import poster2 from "../assets/images/blaze/StepOverPressUps/Poster.png";
import video2 from "../assets/images/blaze/StepOverPressUps/Video1.png";
import slide21 from "../assets/images/blaze/StepOverPressUps/Slide1.png";
import slide22 from "../assets/images/blaze/StepOverPressUps/Slide2.png";
import poster3 from "../assets/images/blaze/BlazePodKickthroughs/Poster.png";
import video3 from "../assets/images/blaze/BlazePodKickthroughs/Video1.png";
import slide31 from "../assets/images/blaze/BlazePodKickthroughs/Slide1.png";
import slide32 from "../assets/images/blaze/BlazePodKickthroughs/Slide2.png";

const result = [
  {
    id: 1,
    title: "BasketBall",
    activities: [
      {
        id: 101,
        title: "Move That Cone",
        description:
          "Set-up - Place 3 Pods in a triangle.\nDistances - 2m between the Pods.\nStarting position - stand with ball in hands and cone on the floor next to the\nhome base Pod.\nStructure - Dribble the basketball at all times. When a surrounding Pod\nlights up, pick up the cone and move it next to the lit Pod,then return it\nand place it next to the home base Pod. Wait for the next Pod to light up\nand repeat till the drill ends.",
        poster: poster1,
        slides: [video1, slide11, slide12],
        accessories: ["Cone"],
        activityGoals: ["Ball Skills", "Decition Marking", "Reaction Time"],
        setup: {
          podPerStation: 4,
          colors: 2,
          duration: "1:00 Min.",
        },
        rules: [
          {
            title: "Corner Pods",
            lightOut: {
              type: "Timeout",
              time: "2 sec.",
            },
            lightDelay: {
              type: "Fixed ",
              time: "0.5 sec.",
            },
          },
          {
            title: "Home Base Pod",
            lightOut: {
              type: "Hit",
              time: null,
            },
            lightDelay: {
              type: "None",
              time: null,
            },
          },
        ],
      },
      {
        id: 102,
        title: "PenetrateOrShoot",
        description:
          "Set-up - PlaceI surrounding Pod on the free throw line and one surrounding Pod on each short\ncorner area. Plomtho home base Pod at thotop oftho D on a cone.\nStarting Position - Players stands with the ball next to the home base Pod with their back to the\nbasket.\nStructure - When the activity begins the player turns and dribbles straight to the lit Pod.\nIf Ist color, pulls up and shoots.\nIf 2nd color, penetrates to the basket for a layup.\nThe player then collects the ball and heads back to the home base Pod, taps the Pod and turns to\nrepeat the drilL",
        poster: poster1,
        slides: [video1, slide11, slide12],
        accessories: ["Cone"],
        activityGoals: ["Agility", "Ball Skills", "Decition Marking"],
        setup: {
          podPerStation: 4,
          colors: 2,
          duration: "1:00 min.",
        },
        rules: [
          {
            title: "Corner Pods",
            lightOut: {
              type: "Timeout",
              time: "2 sec.",
            },
            lightDelay: {
              type: "Fixed",
              time: "0.5 sec.",
            },
          },
          {
            title: "Home Base Pod",
            lightOut: {
              type: "Hit",
              time: null,
            },
            lightDelay: {
              type: "None",
              time: null,
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Fitness",
    activities: [
      {
        id: 201,
        title: "Step Over Press Ups",
        description:
          "Set-up Place one Pod on a step and a Pod either side of the step on the ground.\nDistances - each ground Pod 50cm away, either side of the step.\nStarting position - in a press up position with two hands on the step facing the Pods.\nStructure - When the Pods light up move without dropping your knees to the lit Pod, perform a press up and tap out the Pod. look up for the next Pod to light up and repeat.",
        poster: poster2,
        slides: [video2, slide21, slide22],
        accessories: ["Step"],
        activityGoals: ["Core", "Power", "Strengh"],
        setup: {
          podPerStation: 3,
          playerPerStation: 1,
          colors: 1,
        },
        rules: [
          {
            title: "Acivity Rules",
            lightOut: {
              type: "Hit",
              time: "1 Sec.",
            },
            lightDelay: {
              type: "None",
              time: null,
            },
            duration: "30 Sec.",
          },
        ],
      },
      {
        id: 202,
        title: "Resistance Band Catch",
        description:
          "Set-up - Tie resistance band to ladder/rig/tree and place the Pods on the floor in an arrow shape ahead.\nDistances - Place the center Pod 3m away from the resistance band, 2m between each Pod.\nStarting Position - Stand with resistance band wrapped around sternum, facing the Pods.\nStructure - When a Pod lights up, run powerfully towards the Pod and tap out with the hand. carefully return to starting position and look for the next Pod to light up. Repeat until the activity ends.",
        poster: poster2,
        slides: [video2, slide21, slide22],
        accessories: ["Ladder", "Pole", "Resistance Band", "Rig", "Tree"],
        activityGoals: ["Power", "Reaction Time", "Stamina"],
        setup: {
          podPerStation: 3,
          playerPerStation: 1,
          colors: 1,
        },
        rules: [
          {
            title: "Acivity Rules",
            lightOut: {
              type: "Hit",
              time: null,
            },
            lightDelay: {
              type: "Fixed",
              time: "1 Sec.",
            },
            duration: "30 Sec.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Bodyweight Sports",
    activities: [
      {
        id: 303,
        title: "BlazePod Kickthroughs",
        description:
          "Set-up - Place 6 Pods on the floor in two rows of 3.\nDistances - 1-2m between the rows and 50 cm between the Pods in the same row. (distances will vary due to difficulty levels.\nStarting position - Player ready on all 4's with only hands and feet touching the floor (a crawl position), in between the two rows of Pods.\nStructure - The player must only touch the ground with their hands and feet throughout the whole drill. When a Pod lights up, turn your body, kick the leg furthest away from the Pod that lit up, under the body and tap out the Pod only using the heel of the foot. Return to starting position and repeat.\nMake sure to keep the core strong and engaged throughout... and breathe!",
        poster: poster3,
        slides: [video3, slide31, slide32],
        accessories: null,
        activityGoals: ["Coordination", "Core", "Strengh"],
        setup: {
          podPerStation: 6,
          playerPerStation: 1,
          colors: 1,
        },
        rules: [
          {
            title: "Acivity Rules",
            lightOut: {
              type: "Hit",
              time: null,
            },
            lightDelay: {
              type: "None",
              time: null,
            },
            duration: "30 Sec.",
          },
        ],
      },
    ],
  },
];

export const getAllData = () => {
  return result;
};

export const getDataById = (sportId) => {
  const Datas = result.find((da) => da.id === sportId);
  return Datas;
};
