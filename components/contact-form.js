import { useForm } from 'react-hook-form'
import {useState} from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button
} from '@chakra-ui/react'
import FormLayout from './layouts/form'
import { useLang } from '../lib/langContext'

const MESSAGE = {
  default: 'default',
  error: 'Something went wrong',
  sent: 'Message has been sent successfuly'
}

const ContactMe = () => {
  const [status, setStatus] = useState(MESSAGE.default)
  const [senderName, setSenderName] = useState()
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const { lang } = useLang()

  const onSubmit = data => {
    console.log(data);
    setSenderName(data.name)
    setStatus(MESSAGE.sent)
  }
  if (status === MESSAGE.default) return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormLayout errors={errors} label={lang ? 'name' : 'имя'} register={register} />
        <FormLayout errors={errors} label={lang ? 'email' : 'почта'} register={register} />
        <FormLayout errors={errors} label={lang ? 'message' : 'сообщение'} register={register} textarea />
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        {lang ? 'Send' : 'Отправить'}
      </Button>
    </form>
  )
  if (status === MESSAGE.sent) return (
    <>
    <h1>{lang ? 'Thank you' : 'Спасибо'} {senderName}!</h1>
    <h1>{lang ? MESSAGE.sent : 'Ваше сообщение успешно отправлено'}</h1>
    </>
  )
}

export default ContactMe
