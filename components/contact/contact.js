import { Fragment } from "react";
import SectionLine from "components/sectionLine/sectionLine";
import { Field, Input, TextArea } from "components/form/form";
import Button from "components/button/button";
import styles from "./contact.module.scss";

const Contact = () => (
  <section id="#contact" className={styles.contact}>
    <div className={`${styles.contact_container} grid`}>
      <SectionLine title="contact" />
      <form className={styles.contact_form}>
        <h3 className={styles.contact_form__heading}>Let's work together</h3>
        <Field>
          <Input placeholder="Email" />
        </Field>
        <Field className={styles.contact_form__textarea}>
          <Fragment>
            <TextArea />
            <div className={styles.contact_form__textarea___placeholder}>
              A <strong>brief</strong> and <strong>short</strong> message...
            </div>
          </Fragment>
        </Field>
        <div className={styles.contact_form__footer}>
          <Button variant="link">Reset</Button>
          <Button
            onClick={() =>
              alert("Oops, this is not yet working. Try again maybe tomorrow?")
            }
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;
