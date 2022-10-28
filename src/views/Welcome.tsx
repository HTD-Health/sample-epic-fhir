import React, { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import { Flex } from 'components/Flex';
import { fhirclient } from 'fhirclient/lib/types';
import { ComboHeader } from 'components/ComboHeader';
import { Tabs } from 'components/Tabs';
import { InfoCard } from 'components/InfoCard';
import { Button } from 'components/Button';
import styled from 'styled-components';
import { TextField } from 'components/TextField';
import { useNavigate } from 'react-router-dom';

interface IProps {
  patient: fhirclient.FHIR.Patient | null;
}

const WrapperInfo = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 380px;
  margin: 0 auto;
  margin-top: 88px;
`;

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const WelcomePage: React.FC<IProps> = ({ patient }) => {
  const [step, setStep] = useState(0);
  const [emailValue, setEmailValue] = useState<string>('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const navigate = useNavigate();

  const handleNextStep = () => {
    setStep((prevState) => prevState + 1);
    if (step === 2) navigate('/dashboard');
  };

  const handleError = () => {
    if (emailRegex.test(emailValue)) {
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
  };

  const handleBlur = () => {
    setEmailTouched(true);
  };

  const generateCardInfoByStep = () => {
    switch (step) {
      case 0:
        return (
          <InfoCard
            variant="info"
            title="This patient is not using the Test app"
            desc="To preview the data invite this person to Test"
          />
        );
      case 1:
        return (
          <InfoCard
            variant="info"
            desc="To invite a patient to Test, enter the patient's email address"
          />
        );
      case 2:
        return (
          <InfoCard
            variant="success"
            title="Success!"
            desc="This patient received an invitation to the Test Application"
          />
        );
    }
  };

  useEffect(() => {
    if (step === 1) handleError();
  }, [emailValue, step]);

  return (
    <Box m={12}>
      <Flex>
        <Box mr={14}>
          <ComboHeader
            variant="name"
            label={patient?.name[0].text || 'unknow name'}
          />
        </Box>
        <ComboHeader variant="birth" label={patient?.birthDate} />
      </Flex>

      <Box mt={12}>
        <Tabs disabled />
      </Box>

      <WrapperInfo>
        {generateCardInfoByStep()}
        {step === 1 && (
          <TextField
            onChange={(event) => setEmailValue(event.currentTarget.value)}
            onBlur={handleBlur}
            label="Email"
            error={invalidEmail && emailTouched ? 'Invalid email address' : ''}
          />
        )}

        <Box mt={8}>
          <Button
            onClick={handleNextStep}
            variant="primary"
            disabled={invalidEmail}
            label={step === 2 ? 'Go to dashboard' : 'Invite Patient to Test'}
          />
        </Box>
      </WrapperInfo>
    </Box>
  );
};
