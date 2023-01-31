import { Asset as AssetType } from 'types/game.type';
import { ColorName } from 'types/general.type';

import { Headline } from 'components/general/Headline';

import * as S from './Asset.styles';

type AssetProps = AssetType;

export function Asset(props: AssetProps): React.ReactElement {
  const { name, price, level, group } = props;

  return (
    <S.Container color={group as ColorName}>
      <S.Name color="white" textTransform="uppercase" textAlign="center">
        {name}
      </S.Name>

      <S.Values>
        <S.Value>
          <Headline scale="xs" color="white" textTransform="uppercase">
            value
          </Headline>

          <Headline scale="base" color="white" textTransform="uppercase">
            {price}
          </Headline>
        </S.Value>

        <S.Value>
          <Headline scale="xs" color="white" textTransform="uppercase">
            Level
          </Headline>

          <Headline scale="base" color="white" textTransform="uppercase">
            {level}
          </Headline>
        </S.Value>
      </S.Values>

      <Headline scale="xs" color="white" textTransform="uppercase">
        Rent
      </Headline>

      <S.RentList>
        <S.RentListItem>
          <Headline scale="s" color="white" textTransform="uppercase">
            Level 1 - 50$
          </Headline>
        </S.RentListItem>
        <S.RentListItem>
          <Headline scale="s" color="white" textTransform="uppercase">
            Level 1 - 50$
          </Headline>
        </S.RentListItem>
        <S.RentListItem>
          <Headline scale="s" color="white" textTransform="uppercase">
            Level 1 - 50$
          </Headline>
        </S.RentListItem>
      </S.RentList>
    </S.Container>
  );
}
