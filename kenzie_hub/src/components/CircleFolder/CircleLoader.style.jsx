import styled from "styled-components";
import { motion } from "framer-motion";

// import styles from "../../styles/_export.module.scss";

export const CircleBox = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  margin: auto;
`;

const spinTransition = {
  repeat: Infinity,
  duration: 1,
  ease: "linear",
};

export const Circle = styled(motion.span).attrs({
  animate: { rotate: 360 },
  transition: spinTransition,
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 5rem;
  height: 5rem;
  border: solid 0.5rem var(--grey_3);
  border-top: solid 0.5rem var(--color_primary);
  border-radius: 50%;
`;
