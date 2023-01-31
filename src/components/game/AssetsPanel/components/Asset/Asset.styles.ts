import styled from 'styled-components';

import { ColorName } from 'types/general.type';

import { pickColor } from 'themes/helpers/pickColor';

import { Headline } from 'components/general/Headline';

export type StyledContainerProps = {
  color: ColorName;
};

const Container = styled.div<StyledContainerProps>`
  width: 20rem;
  min-height: 28rem;
  padding: 2rem;

  background-color: ${({ color }) => pickColor(color)};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const Name = styled(Headline)``;

const Values = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 3rem 0;
`;

const Value = styled.div``;

const RentList = styled.ul`
  list-style: none;
`;

const RentListItem = styled.li``;

export { Container, Name, Values, Value, RentList, RentListItem };
