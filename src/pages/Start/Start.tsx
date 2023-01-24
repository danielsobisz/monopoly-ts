import Logo from 'assets/logo.png';

import { Image } from 'components/general/Image';

import * as S from './Start.styles';

export function StartPage(): React.ReactElement {
  return (
    <>
      <S.ImageWrapper>
        <Image source={Logo} alt="monopoly logo" />
      </S.ImageWrapper>

      <S.Container>
        <S.StartButton scale="lg" asLink to="/config">
          Start
        </S.StartButton>
      </S.Container>
    </>
  );
}
