import React from "react";
import { PageContext } from "../../contexts/PageContext";
import contact from "../../styles/Contact.module.scss";
import Curve from "../../Layouts/Curve";

function Contact() {
  const { language } = React.useContext(PageContext) as any;
  const contactLang = language.contact;

  return (
    <Curve>
      <section className={contact.contactContainer}>
        <div className={contact.contact} id="contact">
          <div className={contact.contactSide}>
            <h2>{contactLang.title}</h2>
            {contactLang.contacts.map((contact: any, index: any) => {
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
    </Curve>
  );
}

export default Contact;
