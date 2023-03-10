import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zr7d8kh",
        "template_m6krp3a",
        form.current,
        "q89ZcCUF1ZCYFxvu6"
      )
      .then(
        (result) => {
          alert("Thank you for the email! I will get back to you soon. :)");
          console.log(result.text);
        },
        (error) => {
          alert(
            "It seems like there was an error. You can email me directly at jvariara@gmail.com"
          );
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div
        className="py-[80px] w-full max-w-[1250px] m-auto px-4 xs:px-6"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-red-500 font-semibold text-3xl items-center">{`<>Contact Me</>`}</h6>
          <h1 className="text-3xl md:text-5xl my-4 font-bold text-white">
            Lets get to talking!
          </h1>
        </div>
        <form ref={form} id="contact__form" onSubmit={sendEmail}>
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input type="text" name="user_name" className="input"></input>
          </div>
          <div className="form__item">
            <label className="form__item--label">Email</label>
            <input type="email" name="user_email" className="input"></input>
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea
              type="message"
              name="message"
              className="input"
            ></textarea>
          </div>
          <button id="contact__submit" className="form__submit">
            Send it my way!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
