import { createContext, useMemo, useState } from 'react';

type GameProps = {
  children: React.ReactNode;
};

export type Game = {
  isAssetsVisible: boolean;
  isAssetsVisibleSet: (arg: boolean) => void;
};

const defaultState: Game = {
  isAssetsVisible: false,
  isAssetsVisibleSet: () => {},
};

export const GameContext = createContext(defaultState);

export const GameProvider: React.FunctionComponent<GameProps> = (
  props: GameProps
) => {
  const { children } = props;

  const [isAssetsVisible, isAssetsVisibleSet] = useState<boolean>(false);

  const state: Game = useMemo(
    () => ({
      isAssetsVisible,
      isAssetsVisibleSet,
    }),
    [isAssetsVisible]
  );

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};
