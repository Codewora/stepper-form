import { INDENTIFIER, REGEX } from '../constants';
import { IFORMTYPE } from '../interface';

export const formDetails: IFORMTYPE[] = [
  {
    variant: 'outlined',
    input: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        validation: {
          isRequired: true,
          requiredMsg: 'Please enter first name.',
          pattern: REGEX.ALPHABETS,
          patternMsg: 'Please enter valid first name.',
          maxLength: 10,
          maxLenMsg: 'First name should not be more than 50 characters.',
        },
      },
      {
        name: 'middleName',
        label: 'Middle Name',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        validation: {
          pattern: REGEX.ALPHABETS,
          patternMsg: 'Please enter valid middle name.',
          maxLength: 10,
          maxLenMsg: 'Middle name should not be more than 50 characters.',
        },
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        validation: {
          isRequired: true,
          requiredMsg: 'Please enter last name.',
          pattern: REGEX.ALPHABETS,
          patternMsg: 'Please enter valid last name.',
          maxLength: 10,
          maxLenMsg: 'Last name should not be more than 50 characters.',
        },
      },
      {
        name: 'dob',
        label: 'DOB',
        type: 'date',
        identifier: INDENTIFIER.DATEPICKER,
      },
      {
        name: 'pincode',
        label: 'Pincode',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        validation: {
          isRequired: true,
          requiredMsg: 'Please enter pincode.',
          pattern: REGEX.NUMBER,
          patternMsg: 'Please enter valid pincode.',
          maxLength: 6,
          maxLenMsg: 'Pincode should not be more than 6 digits.',
        },
      },
      {
        name: 'city',
        label: 'City',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        validation: {
          isRequired: true,
          requiredMsg: 'Please enter city.',
          pattern: REGEX.ALPHABETS,
          patternMsg: 'Please enter valid city.',
          maxLength: 50,
          maxLenMsg: 'City should not be more than 50 characters.',
        },
      },
      {
        name: 'district',
        label: 'District',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        validation: {
          isRequired: true,
          requiredMsg: 'Please enter district.',
          pattern: REGEX.ALPHABETS,
          patternMsg: 'Please enter valid district.',
          maxLength: 50,
          maxLenMsg: 'District should not be more than 50 characters.',
        },
      },
      {
        name: 'state',
        label: 'State',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        validation: {
          isRequired: true,
          requiredMsg: 'Please enter state.',
          pattern: REGEX.ALPHABETS,
          patternMsg: 'Please enter valid state.',
          maxLength: 50,
          maxLenMsg: 'State should not be more than 50 characters.',
        },
      },
    ],
    alignment: {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6
    },
    buttonDetails: {
      name: 'Next'
    }
  },
  {
    variant: 'outlined',
    input: [
      {
        name: 'ifsc',
        label: 'IFSC',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        validation: {
          isRequired: true,
          requiredMsg: 'Please enter ifsc number.',
          pattern: REGEX.ALPHANUMERIC,
          patternMsg: 'Please enter valid ifsc number.',
          maxLength: 11,
          maxLenMsg: 'Ffsc number should not be more than 11 characters.',
        },
      },
      {
        name: 'accountNumber',
        label: 'Account Number',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        validation: {
          isRequired: true,
          requiredMsg: 'Please enter account number.',
          pattern: REGEX.ALPHANUMERIC,
          patternMsg: 'Please enter valid account number.',
          maxLength: 20,
          maxLenMsg: 'Account number should not be more than 20 digits.',
        },
      },
      {
        name: 'branchName',
        label: 'Branch Name',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        validation: {
          isRequired: true,
          requiredMsg: 'Please enter branch name.',
          pattern: REGEX.ALPHABETS,
          patternMsg: 'Please enter valid branch name.',
          maxLength: 50,
          maxLenMsg: 'Branch name should not be more than 50 characters.',
        },
      },
      {
        name: 'bankName',
        label: 'Bank Name',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        validation: {
          isRequired: true,
          requiredMsg: 'Please enter bank name.',
          pattern: REGEX.ALPHABETS,
          patternMsg: 'Please enter valid bank name.',
          maxLength: 50,
          maxLenMsg: 'Bank name should not be more than 50 characters.',
        },
      },
    ],
    alignment: {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6
    },
    buttonDetails: {
      name: 'Next',
    }
  },
  {
    variant: 'standard',
    input: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
      {
        name: 'middleName',
        label: 'Middle Name',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
      {
        name: 'dob',
        label: 'DOB',
        type: 'date',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
      {
        name: 'pincode',
        label: 'Pincode',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
      {
        name: 'city',
        label: 'City',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
      {
        name: 'district',
        label: 'District',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
      {
        name: 'state',
        label: 'State',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
      {
        name: 'ifsc',
        label: 'IFSC',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
      {
        name: 'accountNumber',
        label: 'Account Number',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
      {
        name: 'branchName',
        label: 'Branch Name',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
      {
        name: 'bankName',
        label: 'Bank Name',
        type: 'text',
        identifier: INDENTIFIER.INPUTTEXT,
        readOnly: true,
      },
    ],
    alignment: {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6
    },
    buttonDetails: {
      name: 'Submit',
      type: 'submit'
    }
  }
];