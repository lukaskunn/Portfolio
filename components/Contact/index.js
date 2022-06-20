import React from "react";
import { LanguageContext } from "../contexts/Language";
import contact from "./Contact.module.scss";

function Contact() {
  const language = React.useContext(LanguageContext);
  const contactLang = language.language.contact;

  return (
    <section className={contact.contactContainer}>
      <div className={contact.contact} id="contact">
        <div className={contact.contactSide}>
          <h2>{contactLang.title}</h2>
          {contactLang.contacts.map((contact, index) => {
            return (
              <p key={index}>
                {contact.type}{" "}
                <a href={contact.urlLink} target="__blank">
                  {contact.linkText}
                </a>
              </p>
            );
          })}
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
