import emailjs from 'emailjs-com'

export const sendMessage = (data) => {
  return emailjs.sendForm(process.env.serviceId, process.env.templateId, data, process.env.userId)
}

