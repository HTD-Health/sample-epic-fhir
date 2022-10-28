import React, { FC, useContext, useEffect, useState } from 'react';
import { FhirClientContext } from 'context/FihrClientContext';
import { fhirclient } from 'fhirclient/lib/types';
import { WelcomePage } from 'views/Welcome';

export const Connected = () => {
  const [patient, setPatient] = useState<fhirclient.FHIR.Patient | null>(null);
  const ctx = useContext(FhirClientContext);

  useEffect(() => {
    if (ctx.client !== null) {
      ctx.client?.patient.read().then((pat) => {
        if (!patient) {
          setPatient(pat);
        }
      });
    }
  }, [ctx, patient]);

  if (ctx.client) {
    return <WelcomePage patient={patient} />;
  }
  return <p>No FHIR client connected</p>;
};
