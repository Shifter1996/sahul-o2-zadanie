import {
  FieldError as AriaFieldError,
  FieldErrorProps as AriaFieldErrorProps,
  Input as AriaInput,
  InputProps as AriaInputProps,
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
  Text,
} from "react-aria-components";
import { cn } from "../utils";
 
const Label = ({ className, ...props }: AriaLabelProps) => (
  <AriaLabel 
    className={cn("text-base font-medium text-content-neutral-xx-high align-bottom leading-[22px] tracking-[.01em]", className)} 
    {...props} 
  />
)

const Input = ({ className, ...props }: AriaInputProps) => {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          "flex h-12 w-full rounded-xl border border-surface-x-high bg-surface-x-low px-4 py-3.5 text-base placeholder:text-content-neutral-low hover:border-content-neutral-xx-high caret-surface-brand",
          /* Disabled */
          "data-[disabled]:bg-content-state-default-hover data-[disabled]:hover:border-surface-x-high",
          /* Focused */
          "data-[focused]:border-[3px]",
          /* Invalid */
          "data-[invalid]:bg-surface-danger-variant data-[invalid]:border-surface-danger",
          /* Resets */
          "focus-visible: outline-none",
          className
        )
      )}
      {...props}
    />
  )
}


const FieldError = (props: AriaFieldErrorProps) => {
  return (
    <AriaFieldError 
      className={cn("text-sm font-[550] text-content-neutral-danger leading-[17px] tracking-[.01em]", props.className)} 
      {...props}  
    />
  )
};
 
interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  placeholder?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
}
 
function TextField({
  label,
  description,
  isRequired,
  errorMessage,
  className,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField {...props} className={composeRenderProps(className, (className) => cn("group flex flex-col gap-2", className))}>
      <div>
        <div className="flex flex-row items-baseline gap-2">
          {label && <Label>{label}</Label>}
          {!isRequired && (
            <span className="text-sm font-[550] text-content-neutral-low leading-[17px] tracking-[.01em]" slot="optional">Optional</span>)
          }
        </div>
        {description && (
          <Text className="text-sm font-normal text-content-neutral-medium leading-[19px] tracking-none" slot="description">
            {description}
          </Text>
        )}      
      </div>
      <Input />
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  )
}
 
export { TextField }
