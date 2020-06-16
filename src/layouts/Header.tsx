import React from 'react';
import { useIntl, history } from 'umi';
import Button, { ButtonSize, ButtonType } from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import styles from './index.less';
import logo from './assets/logo@2x.png';

type Props = {
  isMobile: boolean;
  isTablet: boolean;
};

export default function(props: Props) {
  const { isMobile, isTablet } = props;
  if (isMobile) {
    return <div>mobile header</div>;
  }

  if (isTablet) {
    return <div>tablet header</div>;
  }

  return <PcHeader />;
}

function PcHeader() {
  const intl = useIntl();
  const dropdownMenus = [
    {
      label: intl.formatMessage({ id: 'index.dropdown.product' }),
      overlay: [
        {
          label: intl.formatMessage({
            id: 'index.dropdown.product.ivi_printer',
          }),
          value: 'IVI 3D Printer',
          onClick: () => {
            history.push('/printer');
          },
        },
      ],
    },
    {
      label: intl.formatMessage({ id: 'index.dropdown.software' }),
      onLabelClicked: () => {
        history.push('/software');
      },
    },
    {
      label: intl.formatMessage({ id: 'index.dropdown.supports' }),
      overlay: [
        {
          label: intl.formatMessage({ id: 'index.dropdown.supports.service' }),
          value: 'Service',
          onClick: () => {
            history.push('/service');
          },
        },
        {
          label: intl.formatMessage({
            id: 'index.dropdown.supports.downloads',
          }),
          value: 'Downloads',
          onClick: () => {
            history.push('/downloads');
          },
        },
        {
          label: intl.formatMessage({
            id: 'index.dropdown.supports.knowledge',
          }),
          value: 'Knowledge',
          onClick: () => {
            history.push('/knowledge');
          },
        },
        {
          label: intl.formatMessage({
            id: 'index.dropdown.supports.contact',
          }),
          value: 'Contact us',
          onClick: () => {
            history.push('/contact');
          },
        },
      ],
    },
    {
      label: intl.formatMessage({
        id: 'index.dropdown.community',
      }),
      onLabelClicked: () => {
        history.push('/community');
      },
    },
  ];
  return (
    <div className={styles.pc_wrapper}>
      <div className={styles.pc_wrapper_left}>
        <a className={styles.pc_wrapper_left_logo} href="/" title="ivi">
          <img src={logo} alt="ivi" width="38" height="38" />
        </a>
        <div className={styles.pc_wrapper_left_dropdown_wrapper}>
          {dropdownMenus.map(({ label, overlay, onLabelClicked }) => {
            return (
              <Dropdown
                key={label}
                label={label}
                onLabelClicked={onLabelClicked}
                overlay={overlay}
              />
            );
          })}
        </div>
      </div>

      <Button
        size={ButtonSize.Small}
        onClick={e => console.log(e)}
        type={ButtonType.Primary}
      >
        {intl.formatMessage({ id: 'store' })}
      </Button>
    </div>
  );
}
