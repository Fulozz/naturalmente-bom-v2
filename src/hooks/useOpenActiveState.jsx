import { useState } from 'react';

function useOpenActiveState() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleActive = () => setIsActive(!isActive);

  // Optionally, define additional helper functions for more complex state handling logic

  return { isOpen, isActive, toggleOpen, toggleActive, setIsOpen };
}

export default useOpenActiveState;