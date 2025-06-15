export const techBadgeAnimation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
}

export const fadeUpAnimation = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
}

export const fadeLeftAnimation = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}
//right

export const fadeRightAnimation = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
}