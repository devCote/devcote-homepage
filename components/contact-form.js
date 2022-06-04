import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button
} from '@chakra-ui/react'
import FormLayout from './layouts/form'
import { useLang } from '../lib/langContext'
import { sendMessage } from '../services/send-mail'

const MESSAGE_STATUS = {
  default: 'default',
  isSending: 'Sending... This might take some time.',
  error: 'Something went wrong',
  sent: 'Message has been sent successfuly'
}

const ContactMe = () => {
  const [status, setStatus] = useState(MESSAGE_STATUS.default)
  const [senderName, setSenderName] = useState()
  const { lang } = useLang()

  const handleSubmit = e => {
    e.preventDefault();
    setSenderName(e.target.name.value)
    setStatus(MESSAGE_STATUS.isSending)

    //send email using emailjs
    sendMessage(e.target).then(_res => {
      setStatus(MESSAGE_STATUS.sent)
    }, _err => {
      setStatus(MESSAGE_STATUS.error)
    })

  }

  switch (status) {
    case MESSAGE_STATUS.default:
      return (
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormLayout label={lang ? 'name' : 'имя'} isRequired />
          <FormLayout label={lang ? 'email' : 'почта'} />
          <FormLayout label={lang ? 'message' : 'сообщение'} textarea isRequired />
          <Button mt={4} colorScheme='teal' type='submit'>
            {lang ? 'Send' : 'Отправить'}
          </Button>
        </form>
      )
    case MESSAGE_STATUS.sent:
      return (
        <>
          <h1>{lang ? 'Thank you' : 'Спасибо'} {senderName}!</h1>
          <h1>{lang ? status : 'Ваше сообщение успешно отправлено'}</h1>
        </>
      )
    case MESSAGE_STATUS.isSending:
      return <h1>{status}</h1>
    case MESSAGE_STATUS.error:
      return <h1>{status}</h1>
  }
}

export default ContactMe
