import { FormGroup, Label, Input } from 'reactstrap';
import type { InputType } from 'reactstrap/types/lib/Input';
import type { FormFieldsType } from './types';
import type { ChangeHandlerType } from '../../types';
import type { AddressType, ContactType, CustomerNameType } from '../../../app/types';

type CurrentValuesType = string | AddressType | ContactType | CustomerNameType | undefined;

interface InputGroupsProps {
  formFields: FormFieldsType[];
  currentValues: CurrentValuesType;
  handleChange: ChangeHandlerType;
}

export const InputGroups = ({ formFields, currentValues, handleChange }: InputGroupsProps) => {
  console.log('NEED TO PASS CURRENT VALS', currentValues);
  return (
    <>
      {formFields.map(field => {
        let options;
        if (field.options) {
          options = field.options.map((option, i) => (
            <option key={`${field.name}-${option}-${i}`} value={option}>
              {option}
            </option>
          ));
        }
        return (
          <FormGroup key={field.name}>
            <Label for={field.name}>{field.displayName}</Label>
            <Input
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              type={field.type as InputType}
              required={field.required}
              onChange={e => handleChange(e, field.parentKey)}
            >
              {options}
            </Input>
          </FormGroup>
        );
      })}
    </>
  );
};
