import Logo from "assets/logo.png";

import { Button } from "components/general/Button";
import { Image } from "components/general/Image";

import * as S from "./Start.styles";

export function StartPage(): React.ReactElement {
  return (
    <S.Container>
      <S.ImageWrapper>
        <Image source={Logo} alt="monopoly logo" />
      </S.ImageWrapper>

      <Button asLink to="/config">
        Start
      </Button>
    </S.Container>
  );
}
