import React, { useEffect, useState } from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import './style.less';

interface IPhoneInputBoxProps {
  error: boolean;
  value: any;
  onChange: any;
  autoFocus: boolean;
}

export const PhoneInputBox: React.FC<IPhoneInputBoxProps> = (props) => {
  let containerClass = 'react-tel-input ';
  if (props.error) {
    containerClass = containerClass.concat('react-tel-input-error');
  }

  const [defaultCountry, setDefaultCountry] = useState('ru');
  const [value, setValue] = useState({
    value: props.value || '',
    country: '',
    touched: false,
  });
  const [touched] = useState(false);

  useEffect(() => {
    if (!value.touched && value.country !== defaultCountry) {
      setValue({ ...value, country: defaultCountry });
    }
    setCountryCode();
  });
  const changeHandler = (value: string, country: any) => {
    setValue({ value, country: country.countryCode, touched: true });
  };
  const changeCountryCode = (countryCode: string) => {
    setDefaultCountry(countryCode);
  };
  const setCountryCode = async () => {
    if (!touched) {
      try {
        changeCountryCode('');
      } catch (ignored) {
        // ignored
      }
    }
  };

  return (
    <ReactPhoneInput
      {...props}
      value={props.value || value.value}
      country={value.country}
      inputExtraProps={{
        name: 'phone',
        required: true,
        enableSearch: true,
      }}
      onChange={props.onChange || changeHandler}
      inputProps={{
        autoFocus: props.autoFocus,
        tabIndex: 1,
      }}
      containerClass={containerClass}
    />
  );
};
