import { Fragment, useState } from "react";
import useIntersectionObserver from "js/hooks/useIntersectionObserver";
import SectionLine from "components/sectionLine/sectionLine";
import { Field, Input, TextArea } from "components/form/form";
import Button from "components/button/button";
import styles from "./contact.module.scss";

const Contact = () => {
  const [contactRef, { isIntersected }] = useIntersectionObserver();
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const reset = () => setForm({ message: "", email: "" });

  const send = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (res.error) {
        throw res;
      } else {
        alert("Email sent.");
        reset();
      }
    } catch (err) {
      alert("Oops. Something went wrong.");
    }
  };

  return (
    <section
      ref={contactRef}
      id="contact"
      className={`${isIntersected ? styles.contact___visible : ""} ${
        styles.contact
      }`}
    >
      <div className={`${styles.contact_container} grid`}>
        <SectionLine title="contact" />
        <form className={styles.contact_form} onSubmit={send}>
          <h3 className={styles.contact_form__heading}>Let's work together.</h3>
          <Field>
            <Input
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={form.email}
              required
            />
          </Field>
          <Field className={styles.contact_form__textarea}>
            <Fragment>
              <TextArea
                name="message"
                onChange={handleChange}
                value={form.message}
                required
              >
                {form.message}
              </TextArea>
              {!form.message && (
                <div className={styles.contact_form__textarea___placeholder}>
                  A <strong>brief</strong> and <strong>short</strong> message...
                </div>
              )}
            </Fragment>
          </Field>
          <div className={styles.contact_form__footer}>
            <Button onClick={reset} variant="link" type="button">
              Reset
            </Button>
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
