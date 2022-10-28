import React, { useEffect } from 'react';
import { oauth2 as SMART } from 'fhirclient';
import { useLocation } from 'react-router-dom';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

const CLIENT_ID = '2cb01724-19f6-473c-a55f-e9ae9f5c1dfe'; //process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET =
  'eAcHTkW1PRSze08dBcXb5v3upJaeTzjMzpfxWj8eCt/XNSZNjbaey2XonH7qNIoEoqSeWtlJHyOYclHHp/fxzQ=='; //process.env.REACT_APP_CLIENT_SECRET;

export function LaunchingPage() {
  const queryParams = useQueryParams();

  const iss = queryParams.get('iss');
  const launch = queryParams.get('launch');

  useEffect(() => {
    if (!iss || !launch) {
      console.error(
        'Missing SMART EHR launch queryparams. This app should be run using SMART provider-launch sandbox.'
      );
      return;
    }

    let ignore = false;
    console.log('use effect authorize');
    if (!ignore) {
      SMART.authorize({
        //iss,
        target: '_top',
        redirectUri: '/home',
        clientId: CLIENT_ID,
        scope: 'launch openid fhirUser patient/read launch/patient',
        completeInTarget: true,
        clientSecret: CLIENT_SECRET,
      });
    }

    return () => {
      ignore = true;
    };
  }, []);

  return <p>Launching ...</p>;
}
