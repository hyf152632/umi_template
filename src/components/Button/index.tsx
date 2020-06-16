import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './index.less';

export enum ButtonSize {
  Default,
  Small,
  Large,
}

export enum ButtonType {
  Default,
  Primary,
  Dashed,
  Text,
  Link,
}

const defaultProps = {
  type: ButtonType.Default,
  size: ButtonSize.Default,
  disabled: false,
};

type Props = {
  type?: ButtonType;
  size?: ButtonSize;
  onClick: (event: React.MouseEvent) => void;
  children: ReactNode;
  disabled?: boolean;
} & typeof defaultProps;

const Button = (props: Props) => {
  const { type, size, children, onClick, disabled } = props;
  return (
    <button
      className={classNames({
        [styles.wrapper]: true,
        [styles.disabled]: disabled,
        [styles.default_wrapper]: type === ButtonType.Default && !disabled,
        [styles.default_wrapper_disabled]:
          type === ButtonType.Default && disabled,
        [styles.primary_wrapper]: type === ButtonType.Primary && !disabled,
        [styles.primary_wrapper_disabled]:
          type === ButtonType.Primary && disabled,
        [styles.link_wrapper]: type === ButtonType.Link && !disabled,
        [styles.link_wrapper_disabled]: type === ButtonType.Link && disabled,
        [styles.large]: size === ButtonSize.Large,
        [styles.small]: size === ButtonSize.Small,
      })}
      onClick={e => {
        if (disabled) {
          return;
        }
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
