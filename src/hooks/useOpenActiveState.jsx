import { useState, useEffect } from 'react';

function useOpenActiveState() {
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);



  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleActive = () => setIsActive(!isActive);
  console.log(isOpen)
  return { isOpen, isActive, toggleOpen, toggleActive };
}

export default useOpenActiveState;
