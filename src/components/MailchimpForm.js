import MailchimpSubscribe from 'react-mailchimp-subscribe';
import React from 'react';
import { Newsletter } from './Newsletter';




export const MailchimpForm = () => {

    // const postUrl = `https://gmail.us19.list-manage.com?u=36eacb6535e7e51463a61c9bd$id=8c8f0856e3`;
    const postUrl = `${process.env.React_APP_MAILCHIMP_URL}?u=${process.env.React_APP_MAILCHIMP_U}$id=${process.env.React_APP_MAILCHIMP_ID}`;
    
    // console.log(postUrl);
    console.log("URL:", process.env.REACT_APP_MAILCHIMP_URL);
    console.log("U:", process.env.REACT_APP_MAILCHIMP_U);
    console.log("ID:", process.env.REACT_APP_MAILCHIMP_ID);


  return (
    <>
        <MailchimpSubscribe 
            url={postUrl} 
            render={({subscribe, status, message}) => {
                <Newsletter
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}/>
            }}/>
    </>
  )
}


