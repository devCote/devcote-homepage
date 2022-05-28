import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  useColorMode
} from '@chakra-ui/react'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FormLayout = ({errors, label, register, ...rest}) => {

  const {colorMode} = useColorMode()

  return (
      <FormControl isInvalid={label in errors} mb={2}>
        <FormLabel htmlFor={label}>{capitalizeFirstLetter(label)}</FormLabel>
        {rest.textarea 
        ?
        <Textarea
          id={label}
          borderColor='gray.600'
          placeholder={label}
          {...register(label, {
            required: 'This is required',
          })}
        />
        :
        <Input
          id={label}
          placeholder={label}
          borderColor='gray.600'
          {...register(label, {
            required: 'This is required',
          })}
        />
    }
        <FormErrorMessage>
          {label in errors && errors[label].message}
        </FormErrorMessage>
      </FormControl>
  )
}

export default FormLayout
