import React from 'react';
import emailjs from 'emailjs-com';
import {
    Form,
    Input,
    Text,
    Title,
    Button
} from './style.js'

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ctnmz6j', 'template_q1t9gar', e.target, 'user_GARtT7jZfTVAlfBo4aBen')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  }


  return (
    <>
        <Form  onSubmit={sendEmail}>
            <Title>Contact Form</Title>
            <Input type="text" name="name" placeholder="Name" required/>
            <Input type="email" name="email"  placeholder="E-mail" required/>
            <Input type="text" name="subject" placeholder="Subject" required/>
            <Text name="message" placeholder="Message" required/>
            <Button type="submit" placeholder="Send" >Send Message</Button>
        </Form>
    </>
  );
}