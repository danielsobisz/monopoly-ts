import { IconBaseProps } from 'react-icons';
import { AiFillWarning } from 'react-icons/ai';
import { BsEnvelope, BsEnvelopeOpen, BsGrid3X3Gap } from 'react-icons/bs';
import { FaHome, FaRegHandPointRight, FaRegMoneyBillAlt, FaRegUser } from 'react-icons/fa';
import * as FI from 'react-icons/fi';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';

const allIcons = {
  ...FI,
  RiEyeCloseLine,
  RiEyeLine,
  AiFillWarning,
  BsGrid3X3Gap,
  BsEnvelope,
  BsEnvelopeOpen,
  FaRegMoneyBillAlt,
  FaRegUser,
  FaRegHandPointRight,
  FaHome,
};

export type IconName = keyof typeof allIcons;

type IconProps = {
  name: IconName;
  className?: string;
} & IconBaseProps;

export function Icon(props: IconProps): React.ReactElement {
  const { name, className, ...rest } = { ...props };

  const Tag = allIcons[name];

  return className ? (
    <span className={className}>
      <Tag {...rest} />
    </span>
  ) : (
    <Tag {...rest} />
  );
}
