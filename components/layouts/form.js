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

const FormLayout = ({label, ...rest}) => {

  const {colorMode} = useColorMode()

  return (
      <FormControl isRequired={rest.isRequired} mb={2}>
        <FormLabel htmlFor={label}>{capitalizeFirstLetter(label)}</FormLabel>
        {rest.textarea 
        ?
        <Textarea
          max={800}
          id={label}
          borderColor='gray.600'
          placeholder={label}
          name={label}
        />
        :
        <Input 
          max={50}
          id={label}
          placeholder={label}
          borderColor='gray.600'
          name={label}
        />
    }
        <FormErrorMessage>
          ERROR
        </FormErrorMessage>
      </FormControl>
  )
}

export default FormLayout
