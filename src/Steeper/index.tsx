import { useState } from 'react';
import { Stepper } from '../components';
import { useForm } from 'react-hook-form';
import Container from '@mui/material/Container';
import { FormFields } from '../components/formFields';
import { formDetails } from './formDetails';
import { ButtonStyled } from '../styledComponents';
import Grid from '@mui/material/Grid';
import { IAlignment } from '../interface';

const StepperForm = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [currentForm, setCurrentForm] = useState(formDetails[activeStep]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const stepChangeHandler = (step: String) => {
    try {

      if (step === 'INCREMENT' && activeStep < formDetails?.length - 1) {
        setCurrentForm(formDetails[activeStep + 1])
        setActiveStep(activeStep + 1);
        return
      }
      
    } catch (e) {
      console.log('Error', e);
    }
  }

  const steps = [
    {
      name: 'User Information',
      icon: 1 
    },
    {
      name: 'Account',
      icon: 2
    },
    {
      name: 'Details',
      icon: 3
    },
  ]

  const onSubmit = (values: any) => {
    if (currentForm.buttonDetails.type === 'submit') {
      console.log(values);
    }
    stepChangeHandler('INCREMENT');
  }

  const formFieldGenerator = (item:any, register:any, error:any, setValue: any) => {

    const FormComponent = FormFields[item.identifier]
    const {xs,sm,lg,md,xl}: IAlignment = currentForm?.alignment
    return (
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} 
      key={item?.name}>
      <FormComponent
        register={register}
        errors={errors}
          input={item}
          setValue={setValue}
        variant={currentForm?.variant}
      />
      </Grid>
    );
  }

  return (
    <Container style={{marginTop: '40px',padding: '40px', boxShadow: '#00000033 0px 2px 8px'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
          <Stepper steps={steps} activeStep={ activeStep }/>
          {
            currentForm?.input?.map((item: any) => (
              formFieldGenerator(item, register, errors, setValue)
            ))
          }
          </Grid>
        <ButtonStyled variant="contained" type='submit' style={{margin: '20px 0'}}>{currentForm?.buttonDetails?.name}</ButtonStyled>
      </form>
      </Container>
  )
}

export default StepperForm;