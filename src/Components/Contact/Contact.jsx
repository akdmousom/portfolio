import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5ebs8vc', 'template_9kkvwta', form.current, 'RHhCmEJhhbI1ZBnjM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>

 <div  className=''>
<div className="hero object-cover">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl text-center mt-8 font-bold">Hire Me</h1>
      <p className="py-6 flex  justify-center items-center gap-2"><MdOutlineAlternateEmail /> Email: contact.mousom@gmail.com</p>
      <p className="py-6 flex justify-center items-center gap-2"><FaWhatsapp />WhatsApp: +8801617050510</p>
    </div>
    <div className="card shadow-2xl bg-base-100">
      <form ref={form} onSubmit={sendEmail} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="Email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="message" />
        </div>
        <div className="form-control mt-6">
          <button type='submit' value="Send" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>

 </div>

  );
};