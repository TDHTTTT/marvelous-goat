import React from 'react';
import _ from 'lodash';
import MailchimpSubscribe from "react-mailchimp-subscribe"

import {markdownify} from '../utils';

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div
      style={{
        background: "transparent",
        "padding-top": "0.3em",
      }}
    >
      {status === "sending" && <div style={{ color: "#fff" }}>Subscribing...</div>}
      {status === "error" && (
        <div
          style={{ color: "#fff" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#fff" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "0.88889em", padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your Email"
      />
      <br />
      <button style={{ 
        fontSize: "1em", 
        background: "#9051c4",
        "-ms-flex-align": "center",
        "align-items": "center",
        "border": "2px solid #9051c4",
        "border-radius": "3px",
        "box-sizing": "border-box",
        "color": "#fff",
        "cursor": "pointer",
        "display": "-ms-inline-flexbox",
        "font-weight": "bold",
        "-ms-flex-pack": "center",
        "justify-content": "center",
        "line-height": "1.5",
        "padding": "0.25em 0.94em",
        "text-decoration": "none",
        "-webkit-transition": "opacity .15s ease-in-out",
        "transition": "opacity .15s ease-in-out" }} onClick={submit}>
        Subscribe
      </button>
    </div>
  );
};

export default class FooterFormMailchimp extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        const url =
      "https://digerini.us1.list-manage.com/subscribe/post?u=41c6e23a80aa787dad99b02a5&id=024001d82c";
        return (
          <section className="cell widget widget-form">
            {_.get(section, 'title', null) && (
            <h2 className="widget-title">{_.get(section, 'title', null)}</h2>
            )}
            {markdownify(_.get(section, 'content', null))}
            <div className="form-row">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
            </div>
          </section>
        );
    }
}

