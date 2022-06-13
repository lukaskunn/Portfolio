import React from "react";

import contact from "./Contact.module.scss";

function Contact() {
  return (
    <section className={contact.contactContainer}>
      <div className={contact.contact} id="contact">
        <div className={contact.contactSide}>
          <h2>{`[Contact]`}</h2>
          <p>
            {`[email]:`}{" "}
            <a
              href="mailto:lucasisoliveira098@gmail.com?subject = Contact"
              target="__blank"
            >
              lucassioliveira098@gmail.com
            </a>
          </p>
          <p>
            {`[LinkedIn]: `}{" "}
            <a
              href="https://linkedin.com/in/lucas-oliveira-997810198/"
              target="__blank"
            >
              Lucas Oliveira
            </a>
          </p>
          <p>
            {`[GitHub]: `}
            <a href="https://github.com/lukaskunn" target="__blank">
              {" "}
              lukaskunn
            </a>
          </p>
        </div>
        <img
          src="https://64.media.tumblr.com/1acd142680aeae7379ad1871d50ab113/tumblr_pxbg52Fhlm1xggw0so1_500.gifv"
          alt=""
        />
      </div>
    </section>
  );
}

export default Contact;
