import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import EmailForm from "./EmailForm";

const url = 'https://cleancut.us1.list-manage.com/subscribe/post?u=c2f88fc14878154bd56e3c9e1&amp;id=b1fe8b47f5'

const EmailFormSubscription = ({responsive, colour}) => {
  return (

    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => {
        return (
          <EmailForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
            responsive={responsive}
            colour={colour}
          />
        );
      }}
    />
  );
};

export default EmailFormSubscription;
