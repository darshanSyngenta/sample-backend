import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Radio } from 'antd';
import i18n from 'i18next';
import moment from 'moment';
import React, { Component } from 'react';

const langs = [
  { key: 'en', label: 'English', shortLabel: 'EN', momentLang: 'en' },
  { key: 'ru', label: 'Russian ', shortLabel: 'RU', momentLang: 'ru' },
];

function isLangCodeValid(key: string) {
  const A = langs.filter((v) => {
    return v.key === key;
  });
  return A.length === 1;
}

interface ILanguageDropdownProps {
  type: string;
}

export class LanguageDropdown extends Component<ILanguageDropdownProps, { selected: string }> {
  constructor(props: ILanguageDropdownProps) {
    super(props);
    let sl = localStorage.getItem('i18nextLng') || 'en';
    if (isLangCodeValid(sl) === false) {
      sl = 'en';
    }
    this.state = {
      selected: sl,
    };
    this.onClick = this.onClick.bind(this);
    // TODO - we need to use class properties.
  }

  public getSelectedLangCode() {
    const s = langs.filter((v) => {
      return v.key === this.state.selected;
    });
    if (s.length !== 0) {
      return s[0].key;
    } else {
      return undefined;
    }
  }
  public getSelectedLangMomentCode(key: any) {
    const s = langs.filter((v) => {
      return v.key === key;
    });
    if (s.length !== 0) {
      return s[0].momentLang;
    } else {
      return undefined;
    }
  }

  public getSelectedLangLabel() {
    const s = langs.filter((v) => {
      return v.key === this.state.selected;
    });
    if (s.length !== 0) {
      return s[0].label;
    } else {
      return undefined;
    }
  }
  public onClick(event: any) {
    let key;
    if (this.props.type === 'DROPDOWN') {
      key = event.key;
    } else {
      key = event.target.value;
    }
    this.setState({
      selected: key,
    });

    i18n.changeLanguage(key).then();
    moment.locale(this.getSelectedLangMomentCode(key));
  }

  public renderMultiLanguageOptions() {
    const { type } = this.props;
    const menu = (
      <Menu onClick={this.onClick}>
        {langs.map((v) => {
          return <Menu.Item key={v.key}>{v.label}</Menu.Item>;
        })}
      </Menu>
    );
    switch (type) {
      case 'DROPDOWN':
        return (
          <div className="render-btn">
            <Dropdown overlay={menu}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                style={{ color: '#8E9293' }}
                className="syngenta-ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {this.getSelectedLangLabel()} <DownOutlined />
              </a>
            </Dropdown>
          </div>
        );
        // eslint-disable-next-line no-unreachable
        break;
      case 'FLAT':
        return (
          <Radio.Group onChange={this.onClick} defaultValue={this.getSelectedLangCode()}>
            {langs.map((v, i) => {
              return (
                <Radio.Button key={i} value={v.key}>
                  {v.shortLabel}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        );
      default:
        break;
    }
  }
  public render() {
    return <div>{this.renderMultiLanguageOptions()}</div>;
  }
}
