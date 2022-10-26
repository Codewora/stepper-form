
import ErrorText from '../../ErrorText';
import {TextFieldStyled } from '../../../styledComponents';

const TextInput = (props: any) => {
  const {
    register, errors, input, variant
  } = props;

  return (
    <>
      <TextFieldStyled
        id={`${input?.id}-basic`}
        label={input?.validation?.isRequired ? `${input?.label}*` : input?.label}
        variant={variant}
        disabled={input?.disabled}
        multiline={input?.multiline}
        inputProps={{
          readOnly: input?.readOnly,
        }}
        {...register(
          input?.name,
          {
            required: input?.validation?.isRequired,
            pattern: (input?.validation?.pattern)
              ? new RegExp(input?.validation?.pattern) : undefined,
            min: (input?.validation?.min)
              ? input?.validation?.min : undefined,
            max: (input?.validation?.max)
              ? input?.validation?.max : undefined,
            maxLength: (input?.validation?.maxLength)
              ? input?.validation?.maxLength : undefined,
            minLength: (input?.validation?.minLength)
              ? input?.validation?.minLength : undefined,
          }
        )
        }

        error={errors.hasOwnProperty(input.name)}
      />
      <ErrorText input={input} errors={errors} />
    </>
  );
};

export default TextInput;
