import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'redux/hooks';

import { Board } from 'components/game/Board';

export function GamePage(): React.ReactElement {
  const navigate = useNavigate();
  const { players } = useAppSelector((state) => state.game);

  useEffect(() => {
    if (players.length === 0) {
      navigate('/config');
    }
  });
  return <Board />;
}
