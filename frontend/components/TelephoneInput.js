import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import countries from 'i18n-iso-countries';

const options = Object.entries(countries.getNames('en', { select: 'official' })).map(([code, name]) => ({
  value: code.toLowerCase(),
  label: name,
}));

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: 10,
    borderColor: '#ced4da',
    minHeight: 'calc(1.5em + 0.75rem + 2px)',
    boxShadow: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#495057',
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    backgroundColor: isFocused ? '#e9ecef' : 'transparent',
    color: isFocused ? '#495057' : '#adb5bd',
    cursor: 'pointer',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 4,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const TelephoneInput = () => {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState({value: 'de'});

  const handleOnChange = (phone, country) => {
    setPhone(phone);
    setCountry(country);
  };

  return (
        <PhoneInput
          className='form-control'
          country={country?.value}
          value={phone}
          onChange={handleOnChange}
          inputStyle={{ border:'none', marginLeft:'20px', padding: '0.75rem 1.5rem', height: '100%', width: 'auto' }}
          disableCountryCode={false}
          countryCodeEditable={false}
          autoFormat={true}
          placeholder="Enter phone number"
        />
  );
};

export default TelephoneInput;
