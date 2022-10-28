import { Box } from 'components/Box';
import { FhirClient } from 'context/FihrClientContext';
import { fhirclient } from 'fhirclient/lib/types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'routes';
import { Connected } from 'templates/Connected';

export const HomePage: React.FC = () => {
  return (
    <FhirClient>
      <Connected />
    </FhirClient>
  );
};

{
  /* <Box p={5}>
      <Link to="/home">Home</Link>
      <Link to="/about">about</Link>

      <Router />
    </Box> */
}
