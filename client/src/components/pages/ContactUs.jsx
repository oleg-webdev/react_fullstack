import React from 'react';

export const ContactUs = () => {

  return (
    <div className="ContactUs-scope container regular-page-scope">
      <h3>Contact Us</h3>

      <br/>
      <form method="post" action="/form/contact-us">

        <div className="form-group row">
          <label htmlFor="user-email"
                 className="col-sm-2 col-form-label col-form-label-lg">Email</label>
          <div className="col-sm-10">
            <input type="email"
                   className="form-control form-control-lg"
                   id="user-email"
                   name="userEmail"
                   placeholder="Enter your Email."/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="user-message"
                 className="col-sm-2 col-form-label col-form-label-lg">Message</label>
          <div className="col-sm-10">
            <textarea className="form-control form-control-lg"
                      id="user-message"
                      rows={5}
                      name="userMessage"
                      placeholder="Your Message."></textarea>
          </div>
        </div>

        <div className="form-group row text-right">
          <div className="col-12">
            <button type="submit" className={'button-gradient'}>
              <span>Send Message!</span>
            </button>
          </div>
        </div>

      </form>
    </div>
  );

}
