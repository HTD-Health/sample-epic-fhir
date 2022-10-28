import React, { useState, useEffect, useContext } from "react";
import { oauth2 as SMART } from "fhirclient";
import Client from "fhirclient/lib/Client";

interface IProps {
  children: React.ReactNode;
}

interface IClientContext {
  client: Client | null;
  setClient: (client: Client) => void;
}

const clientContext: IClientContext = {
  client: null,
  setClient: (client: Client) => {
    clientContext.client = client;
  },
};

export const FhirClientContext = React.createContext(clientContext);

export const FhirClient: React.FC<IProps> = ({ children }) => {
  const [client, setClient] = useState<Client | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log("smart ready");
    let ignore = false;
    if (!ignore) {
      SMART.ready().then(
        (smartRes) => {
          // const data = fetch(
          //   "https://fhir.epic.com/interconnect-fhir-oauth/api/epic/2019/Security/Open/PublicKeys/530005/OIDC"
          // ).then((res) => {
          //   res.json().then((data) => {
          //     debugger;
          //     console.log(data);
          //     const token = smartRes.state.tokenResponse?.access_token ?? "n/a";
          //     jwt.verify(token, data);
          //   });
          // });
          console.log(smartRes);
          setClient(smartRes);
        },
        (err) => setError(err)
      );
    }

    return () => {
      ignore = true;
    };
  }, []);

  if (error) return <pre>{error.stack}</pre>;
  if (client)
    return (
      <FhirClientContext.Provider value={{ client, setClient }}>
        {children}
      </FhirClientContext.Provider>
    );

  return <p>Authorizing... </p>;
};
