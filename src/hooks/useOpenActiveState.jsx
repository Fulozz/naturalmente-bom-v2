import { useState, useEffect } from 'react';

function useOpenActiveState() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return { isOpen, isActive, setIsOpen, setIsActive };
}

export default useOpenActiveState;
