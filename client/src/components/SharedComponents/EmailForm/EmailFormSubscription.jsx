import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import EmailForm from "./EmailForm";

const url = 'https://gmail.us21.list-manage.com/subscribe/post?u=fefb32f5716c1b7250dc422db&amp;id=c7cbc559cf&amp;f_id=0045a6e1f0'

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
