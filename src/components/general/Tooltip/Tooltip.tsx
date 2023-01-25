import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

type TooltipProps = {
  content: string;
  children: React.ReactNode;
  place?: 'top' | 'right' | 'left' | 'bottom';
};

export function Tooltip(props: TooltipProps): React.ReactElement {
  const { content, children, place = 'top' } = props;

  return (
    <>
      <ReactTooltip
        place={place}
        style={{
          fontSize: 16,
          textTransform: 'none',
        }}
        anchorId={content}
      />

      <p id={content} data-tooltip-content={content}>
        {children}
      </p>
    </>
  );
}
