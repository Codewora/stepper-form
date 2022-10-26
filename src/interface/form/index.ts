interface IINPUTTYPE {
  name: string,
  label: string,
  type: string,
  identifier: string,
  readOnly?: boolean,
  validation?: {
    isRequired?: boolean,
    requiredMsg?: string,
    pattern?: RegExp,
    patternMsg?: string,
    maxLength?: number,
    maxLenMsg?: string
  }
}

interface IAlignment {
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number
}

interface IButtonDetails {
  name: string,
  type?: string
}

interface IFORMTYPE {
  variant: string,
  input: IINPUTTYPE[],
  alignment: IAlignment,
  buttonDetails: IButtonDetails
}

export type {
  IFORMTYPE,
  IAlignment
}