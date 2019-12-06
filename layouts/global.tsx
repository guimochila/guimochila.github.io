import React from 'react';
import { Global } from '@emotion/core';
import globalStyles from './global.styles';

const GlobalStyles: React.FC = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
