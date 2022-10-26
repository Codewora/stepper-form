import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  width: '100%',
  '.MuiInputBase-input': {
    color: `#00468D !important`,
  },
  '.MuiInputLabel-root': {
    color: `#00468D !important`
  },
  '.Mui-focused.MuiInputLabel-root': {
    borderColor: `#00468D !important`
  },
  '.Mui-focused.MuiOutlinedInput-notchedOutline': {
    borderColor: `#00468D !important`
  },
  '.Mui-focused.MuiFilledInput-underline': {
    backgroundColor: '#00468D1a',
  },
  '.Mui-focused .MuiInput-underline': {
    backgroundColor: '#00468D1a',
  },
  '.MuiFilledInput-underline': {
    backgroundColor: '#00468D1a',
    '&:hover': {
      backgroundColor: '#00468D1a',
    },
    '&:focus': {
      backgroundColor: '#00468D1a',
    },
    '&:before': {
      borderColor: `#00468D !important`
    },
    '&:after': {
      borderColor: `#00468D !important`,
    }

  },
  '.MuiInput-underline': {
    '&:before': {
      borderColor: `#00468D !important`
    },
    '&:after': {
      borderColor: `#00468D !important`,
    }

  },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: `#00468D !important`
  },
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: `#00468D !important`
    },
  },
  svg: {
    color: '#00468D'
  }
}));

export {
  TextFieldStyled
};
