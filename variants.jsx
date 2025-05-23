export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        delay: delay,
        type: "tween",
        duration: 1.5,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show:{
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          type: "tween",
          duration: 1.4,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
    },
   /*  visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
      },
    }, */
  };
};
