import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './style.css';

interface PhoneInputProps {
  country: object;
  onChange: (value: any, country: string) => void;
  autoFocus: boolean;
  error?: string;
  value?: any;
  placeholder?: string;
}
export const PhoneInputBox: React.FC<PhoneInputProps> = (props) => {
  let containerClass = 'react-tel-input ';
  if (props.error) {
    containerClass = containerClass.concat('react-tel-input-error');
  }
  let value = props.value;
  if (props.value === undefined || props.value === null) {
    value = '';
  }
  return (
    <ReactPhoneInput
      {...props}
      value={value}
      // placeholder="Insert phone number"
      inputExtraProps={{
        name: 'phone',
        required: true,
        enableSearch: true,
      }}
      inputProps={{
        autoFocus: props.autoFocus,
        tabIndex: 1,
        placeholder: props.placeholder,
      }}
      containerClass={containerClass}
    />
  );
};

// PhoneInputBox.propTypes = {
//   error: PropTypes.bool,
//   value: PropTypes.any,
//   autoFocus: PropTypes.bool,
// };
