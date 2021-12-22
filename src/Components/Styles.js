import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalBox = styled(motion.div)`
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  padding: 2rem;
  position: relative;
  z-index: 2;
  margin-top: 5rem;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const ModalContent = styled(motion.div)``;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  width: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const ToggleButton = styled(motion.button)`
  font-size: 15px;
  color: #fff;
  padding: 0.5rem 0.8rem;
  margin-top: 3rem;
  background: #3bb75e;
  border: none;
  border-radius: 4px;
  text-transform: capitalize;
  cursor: pointer;
`;
