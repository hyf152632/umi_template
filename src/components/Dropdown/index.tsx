import React, { ReactNode, useState, useEffect } from 'react';
import { useClickAway } from '@umijs/hooks';
import styles from './index.less';

const defaultProps = {
  type: 'default',
  disabled: false,
  visible: false,
};

type overlayItem = {
  label: string;
  value: any;
  onClick: (str: string) => void;
};

type overlayItems = Array<overlayItem>;

type Props = {
  disabled?: boolean;
  overlay?: ReactNode | overlayItems;
  children?: ReactNode;
  label?: string;
  onLabelClicked?: () => void;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  type?: 'default' | 'button';
} & typeof defaultProps;

const Dropdown = (props: Props) => {
  const {
    visible,
    overlay,
    children,
    disabled,
    onVisibleChange,
    label,
    onLabelClicked,
  } = props;
  const [isVisible, setIsVisible] = useState(visible);
  const ref = useClickAway(() => {
    setIsVisible(false);
    onVisibleChange && onVisibleChange(false);
  });

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <div className={styles.wrapper} ref={ref}>
      <div
        className={`${styles.label_row} ${!overlay &&
          styles.label_row_align_center}`}
        onClick={() => {
          if (disabled) {
            return;
          }
          if (label) {
            onLabelClicked && onLabelClicked();
          }
          setIsVisible(prev => {
            onVisibleChange && onVisibleChange(!prev);
            return !prev;
          });
        }}
      >
        {children && <span>{children}</span>}
        {label && <span>{label}</span>}
        {overlay && (
          <a
            className={`iconfont iconArrow ${
              styles.label_row_arrow
            } ${isVisible && styles.label_row_arrow_actived} ${disabled &&
              styles.label_row_arrow_disabled}`}
            onClick={e => {
              if (disabled) {
                return;
              }
              e.stopPropagation();
              setIsVisible(prev => {
                onVisibleChange && onVisibleChange(!prev);
                return !prev;
              });
            }}
          ></a>
        )}
      </div>
      {isVisible && overlay && !isArrayWithLabelAndValue(overlay) && (
        <div className={styles.popover_wrapper}>{overlay}</div>
      )}
      {isVisible && overlay && isArrayWithLabelAndValue(overlay) && (
        <div className={styles.popover_wrapper}>
          {(overlay as overlayItems).map(({ label, value, onClick }) => {
            return (
              <div
                className={styles.popover_item}
                key={label}
                onClick={() => onClick(value)}
              >
                {label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

function isArrayWithLabelAndValue(arr: any): boolean {
  return (
    Array.isArray(arr) && arr.every(item => 'label' in item && 'value' in item)
  );
}

Dropdown.defaultProps = defaultProps;

export default Dropdown;
