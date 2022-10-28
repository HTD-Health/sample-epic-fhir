import React, { useState } from 'react';

interface IProps {
  component: React.ReactNode;
}

export const Tab: React.FC<IProps> = ({ component }) => {
  const [isVisible, setIsVisible] = useState(false);

  return <>{isVisible && component}</>;
};
