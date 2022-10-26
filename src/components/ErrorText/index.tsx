import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';

const FormHelperTextStyled = styled(FormHelperText)(() => ({
  marginLeft: '0 !important'
}));

const renderError = (input:any, errors: any) => {
  switch (errors?.[input?.name]?.type) {
    case 'required':
      return <FormHelperTextStyled error>{input?.validation?.requiredMsg}</FormHelperTextStyled>;
    case 'pattern':
      return <FormHelperTextStyled error>{input?.validation?.patternMsg}</FormHelperTextStyled>;
    case 'custom':
      return <FormHelperTextStyled error>{errors[input.name]?.customMsg}</FormHelperTextStyled>;
    case 'min':
      return <FormHelperTextStyled error>{input?.validation?.minMsg}</FormHelperTextStyled>;
    case 'max':
      return <FormHelperTextStyled error>{input?.validation?.maxMsg}</FormHelperTextStyled>;
    case 'maxLength':
      return <FormHelperTextStyled error>{input?.validation?.maxLenMsg}</FormHelperTextStyled>;
    case 'minLength':
      return <FormHelperTextStyled error>{input?.validation?.minLenMsg}</FormHelperTextStyled>;
    default:
      break;
  }
};

const ErrorText:any = (props: any) => {
  const { input, errors } = props;
  return (
    renderError(input, errors)
  );
};

export default ErrorText;
