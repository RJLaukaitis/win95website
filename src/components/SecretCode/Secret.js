import { useState, useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const useKonamiCode = (onSuccess) => {
  const [input, setInput] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setInput((prevInput) => {
        const newInput = [...prevInput, event.key].slice(-KONAMI_CODE.length);
        if (newInput.join('') === KONAMI_CODE.join('')) {
          onSuccess();
        }
        return newInput;
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onSuccess]);

  return null;
};

export default useKonamiCode;
