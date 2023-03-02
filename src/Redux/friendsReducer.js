let initialState = {
  friends: [
    {
      id: 1,
      name: "Katya",
      description: "Kolyaa Kolyaaaa Nikolaay...",
      imgRef: `avatar`,
    },
    {
      id: 2,
      name: "Evgesha programmer",
      description: "Evgesha is the best software engineer",
      imgRef: "avaEvgesha",
    },
    {
      id: 3,
      name: "Nikitosha",
      description: "Nikitosha loves Engesha",
      imgRef: "avaNikita",
    },
    {
      id: 4,
      name: "Nikolay",
      description: "A na more beliy pesok. Duet tepliy veter v lico..",
      imgRef: "spikeAva",
    },
    {
      id: 5,
      name: "Andres Sanchez",
      description: "A pochemu on a ne ya??",
      imgRef: "avaDima",
    },
    {
      id: 6,
      name: "No Name",
      description: "I'm Anonymous. Ha-ha-ha",
      imgRef: "avaAnonymous",
    },
  ],
};

let friendsReducer = (state = initialState, action) => {
  return state;
};

export default friendsReducer;
