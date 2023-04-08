import React from "react";
import styled from "styled-components";
import Button from "./Button";
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { media } from "../../style/media";

const EmailInput = styled.input`
  width: 250px;
  font-family: Graphik-300;
  font-size: 1rem;
  border: none;
  border-radius: 2rem 0 0 2rem;
  position: relative;
  padding-left: 0.7rem;
  :focus {
    outline: none;
  }
`;

const FooterForm = styled.form`
  display: flex;
  flex-direction: row;
  border: 0.5px solid;
  border-color: ${props => props.colour || '#721ED8'};
  width: fit-content;
  padding: 0.12rem;
  border-radius: 2rem;
  background-color: white;
  
  @media ${media.tablet} {
    display: ${props => props.responsive || 'flex'};
  }

`;

const StyledButton = styled.button`
  background-color: ${props => props.colour || '#721ED8'};
  font-size: 0.8rem;
  padding: .7rem 2rem;
  color: white;
  text-decoration: none;
  border-radius: 2rem;
  font-family: Graphik-500;
  cursor: pointer;
  border: none;
`;

const EmailForm = (props) => {
  const {colour, responsive} = props
  return (
    <>

      <FooterForm
        action=""
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_self"
        colour={colour}
        responsive={responsive}
      >
        <EmailInput type="email" placeholder="Enter your email"></EmailInput>
        <StyledButton colour={colour}>Start Free Trial</StyledButton>
      </FooterForm>
    </>
  );
};

export default EmailForm;





      {/* <div id="mc_embed_signup">
        <form
          action="https://gmail.us21.list-manage.com/subscribe/post?u=fefb32f5716c1b7250dc422db&amp;id=c7cbc559cf&amp;f_id=0045a6e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_self"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div class="indicates-required">
              <span class="asterisk">*</span> indicates required
            </div>
          </div>
        </form>
      </div> */}

      // const EmailForm = () => (
//   <MailchimpSubscribe
//     url={"https://gmail.us21.list-manage.com/subscribe/post?u=fefb32f5716c1b7250dc422db&amp;id=c7cbc559cf&amp;f_id=0045a6e1f0"}
//     render={({ subscribe, status, message }) => (
//       <div>
//         <CustomForm onSubmitted={formData => subscribe(formData)} />
//         {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//         {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
//         {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//       </div>
//     )}
//   />
// )

