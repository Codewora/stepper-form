import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ErrorText from '../../ErrorText';
import {TextFieldStyled } from '../../../styledComponents';

const DatePickerComponent = (props: any) => {
  const [date, setDate] = useState(null);
  const {
    register, errors, input, variant, setValue
  } = props;

  const handleChange = (newValue: any) => {
    setDate(newValue);
    setValue(input?.name, newValue);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          className='date-picker'
          disableHighlightToday={false}
          label={input?.validation?.isRequired ? `${input?.label}*` : input?.label}
          inputFormat='dd/MM/yyyy'
          value={date}
          renderInput={(params) => (
            <TextFieldStyled
            variant={variant}
            {...params}
            {...register(
              input?.name,
              {
                required: input?.validation?.isRequired,
              }
              )
            }
            error={errors.hasOwnProperty(input.name)}
            />
          )}
          onChange={handleChange}
        />
      </LocalizationProvider>
      <ErrorText input={input} errors={errors} />
    </>
  );
};

export default DatePickerComponent;
