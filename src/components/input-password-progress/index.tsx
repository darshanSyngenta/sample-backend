import { Progress, Tooltip } from 'antd';
import { iff } from 'core/iff';
import { getPasswordErrorMessage, getPasswordText, getStrength } from 'core/passwordValidation';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { InputPassword } from '../input-password';
import { Label } from '../label';

export const PasswordContainerStyled = styled.div`
  margin: 2em 0 auto;
  height: 75px;
`;

const ProgressBarStyle = styled(Progress)`
  .syngenta-ant-progress-inner {
    vertical-align: super;
    height: 5px;
    border-radius: 10px;
  }
`;

interface IInputPasswordProgress {
  onChange: (value: string, progress: number) => void;
  label: string;
  value: string;
  placeholder: string;
  containerStyle?: object;
}

const InputPasswordProgress: React.FC<IInputPasswordProgress> = (props) => {
  const { t } = useTranslation();
  const o = getPasswordErrorMessage();
  const [passwordText, setPasswordText] = useState(
    `${o.minLength}\n${o.upper}\n${o.lower}\n${o.number}`
  );
  const [progress, setProgress] = useState(0);
  const [strength, setStrength] = useState<string | undefined>('');
  const [color, setColor] = useState('#696F88');

  const strengthMap: { [id: number]: { color: string; progress: number; label?: string } } = {
    0: {
      color: '#696F88',
      progress: 0,
    },
    1: {
      color: '#696F88',
      progress: 25,
      label: t('Weak'),
    },
    2: {
      color: '#696F88',
      progress: 50,
      label: t('Medium'),
    },
    3: {
      color: '#73DC78',
      progress: 75,
      label: t('Strong'),
    },
    4: {
      color: '#73DC78',
      progress: 100,
      label: t('Very Strong'),
    },
  };
  const setProgressAndStrength = (e?: any) => {
    let pass;
    if (e) {
      pass = e.target.value;
    } else {
      pass = props.value;
    }
    if (pass) {
      pass = pass.replace(/ /g, '');
    } else {
      pass = '';
    }
    const res = getStrength(pass);
    let p;
    if (res.criteria.minLength) {
      p = strengthMap[res.score];
    } else {
      if (res.criteria.isEmpty) {
        p = strengthMap[0];
      } else {
        p = strengthMap[1];
      }
    }
    setProgress(p.progress);
    setStrength(p.label);
    setColor(p.color);
    props.onChange(pass, p.progress);
    setPasswordText(getPasswordText(res.criteria));
  };

  useEffect(() => {
    setProgressAndStrength();
  }, []);

  return (
    <div>
      <PasswordContainerStyled>
        <Label
          style={{ float: 'left', margin: '0px 0px 5px 0px', color: '#707374', fontWeight: 'normal' }}
        >
          {iff(
            props.label !== undefined,
            iff(props.label === 'Password', t('Password')),
            t('New Password')
          )}
        </Label>
        <Label style={{ float: 'right', color }}>{strength}</Label>
        <Tooltip
          overlayStyle={{
            whiteSpace: 'pre',
          }}
          title={passwordText}
          placement="right"
          trigger="click"
        >
          <InputPassword
            {...props}
            id="progresspassword"
            name="progresspassword"
            type="password"
            className="signin-pwd-form"
            onChange={setProgressAndStrength}
            placeholder={iff(
              props.placeholder !== undefined,
              props.placeholder,
              t("Enter a password")
            )}
          />
        </Tooltip>
        <ProgressBarStyle percent={progress} showInfo={false} strokeColor={color} />
      </PasswordContainerStyled>
    </div>
  );
};

export { InputPasswordProgress };
