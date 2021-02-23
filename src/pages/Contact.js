import React from "react";

export default function Contact() {
  function sendEmail(e) {

      e.preventDefault();
  }

  return (
    <div class='contact'>
      <h1>Ben Cummings</h1>
      <h3>bncmmngs@aol.com</h3>
      <h3>336-260-3160</h3>
    
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="name"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Message"
                name="name"
              />
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
              </div>
            </div>
            </form>
            </div>
         
        </div>
      </div>
    
  );
}
