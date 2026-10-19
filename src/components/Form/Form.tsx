import BSForm, { type FormProps } from 'react-bootstrap/Form';
import BSFormGroup, { type FormGroupProps } from 'react-bootstrap/FormGroup'
import BSFormLabel, { type FormLabelProps } from 'react-bootstrap/FormLabel'
import BSFormControl, { type FormControlProps } from 'react-bootstrap/FormControl'
import BSFormSelect, { type FormSelectProps } from 'react-bootstrap/FormSelect'
import BSFormCheck, { type FormCheckProps } from 'react-bootstrap/FormCheck'
import BSFormCheckInput, { type FormCheckInputProps } from 'react-bootstrap/FormCheckInput'
import BSFormCheckLabel, { type FormCheckLabelProps } from 'react-bootstrap/FormCheckLabel'
import BSFormRange, { type FormRangeProps } from 'react-bootstrap/FormRange'
import BSInputGroup, { type InputGroupProps } from 'react-bootstrap/InputGroup'
import BSFormText, { type FormTextProps } from 'react-bootstrap/FormText'
import BSFeedback, { type FeedbackProps } from 'react-bootstrap/Feedback'



export function Form({  children, ...props }: FormProps) {
    return (
        <BSForm  {...props}>
            {children}
        </BSForm>
    )
}

export function FormGroup({ children, ...props }: FormGroupProps) {
    return (
        <BSFormGroup {...props}>
            {children}
        </BSFormGroup>
    )
}

export function FormLabel({ children, ...props }: FormLabelProps) {
    return (
        <BSFormLabel {...props}>
            {children}
        </BSFormLabel>
    )
}


export function FormControl({ children, ...props }: FormControlProps) {
    return (
        <BSFormControl {...props}>
            {children}
        </BSFormControl>
    )
}


export function FormText({ children, ...props }: FormTextProps) {
    return (
        <BSFormText {...props}>
            {children}
        </BSFormText>
    )
}


export function FormSelect({ children, ...props }: FormSelectProps) {
    return (
        <BSFormSelect {...props}>
            {children}
        </BSFormSelect>
    )
}


export function FormCheck({ children, ...props }: FormCheckProps) {
    return (
        <BSFormCheck {...props}>
            {children}
        </BSFormCheck>
    )
}


export function FormCheckInput({ children, ...props }: FormCheckInputProps) {
    return (
        <BSFormCheckInput {...props}>{children}</BSFormCheckInput>
    )
}


export function FormCheckLabel({ children, ...props }: FormCheckLabelProps) {
    return (
        <BSFormCheckLabel {...props}>
            {children}
        </BSFormCheckLabel>
    )
}

export function FormRange({ children, ...props }: FormRangeProps) {
    return (
        <BSFormRange {...props}>
            {children}
        </BSFormRange>
    )
}

export function InputGroup({ children, ...props }: InputGroupProps) {
    return (
        <BSInputGroup {...props}>
            {children}
        </BSInputGroup>
    )
}

export function Feedback({ children, ...props }: FeedbackProps) {
    return (
        <BSFeedback {...props}>
            {children}
        </BSFeedback>
    )
}