import React from 'react';
import { Card } from 'components/Card';
import { Typography } from 'components/Typography';
import styled from 'styled-components';

export interface IProps {
  value: string;
  list?: string[];
}

const ItemList = styled(Typography)`
  position: relative;
  padding-left: 10px;
  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: red;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }
`;

export const CardList: React.FC<IProps> = ({ value, list }) => {
  return (
    <>
      {list ? (
        <Card>
          <Typography variant="h3" color="primary">
            {value}
          </Typography>
          {list?.map((item) => (
            <ItemList variant="body2" color="primary">
              {item}
            </ItemList>
          ))}
        </Card>
      ) : (
        <Card>
          <Typography variant="body" color="primary">
            {value}
          </Typography>
        </Card>
      )}
    </>
  );
};
