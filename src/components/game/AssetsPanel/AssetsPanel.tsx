import { useContext } from 'react';

import { useAppSelector } from 'redux/hooks';

import { GameContext } from 'contexts';

import { Modal } from 'components/general/Modal';

import * as S from './AssetsPanel.styles';
import { Asset } from './components/Asset';

type AssetsPanelProps = {};

export function AssetsPanel(props: AssetsPanelProps): React.ReactElement {
  // const {} = props;

  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  if (!currentPlayer || !currentPlayer.assets) return <div />;

  const { isAssetsVisibleSet } = useContext(GameContext);

  const assetsComponents = currentPlayer?.assets?.map((item) => (
    <Asset {...item} />
  ));

  return (
    <Modal onClose={() => isAssetsVisibleSet(false)}>
      <S.Container>
        <S.Title scale="xl3" textTransform="uppercase" textAlign="center">
          Assets
        </S.Title>

        <S.Assets>{assetsComponents}</S.Assets>
      </S.Container>
    </Modal>
  );
}
