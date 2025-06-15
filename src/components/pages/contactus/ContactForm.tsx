import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, contactType } from "@validations/contactSchema";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { Container, Button, Input, Textarea } from "@components/ui";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@utils/animations";
import { fadeLeftAnimation, fadeRightAnimation } from "@utils/animations";
import { contactUsData } from "@data";

const ContactForm = () => {
  const { form } = contactUsData;

  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<contactType>({
    mode: "onBlur",
    resolver: zodResolver(contactSchema),
  });

  const submitForm: SubmitHandler<contactType> = (data) => {
    console.log(data);
  };

  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");

    if (isDirty && !invalid && enteredEmail !== value) {
      // checking
      checkEmailAvailability(value);
    }

    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  return (
    <>
      <Container
        className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 md:my-16"
        as="section"
      >
        <motion.div {...fadeLeftAnimation} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold capitalize mb-6">{form.title} </h2>
          <p className="mb-7">{form.content}</p>

          <motion.form {...fadeUpAnimation} onSubmit={handleSubmit(submitForm)}>
            <div className="grid grid-cols-2 gap-8">
              <Input
                placeholder="Name"
                name="name"
                register={register}
                error={errors.name?.message}
              />

              <Input
                placeholder="Email Address"
                name="email"
                register={register}
                onBlur={emailOnBlurHandler}
                error={
                  errors.email?.message
                    ? errors.email?.message
                    : emailAvailabilityStatus === "notAvailable"
                    ? "This email is already in use."
                    : emailAvailabilityStatus === "failed"
                    ? "Error from the server."
                    : ""
                }
                status={
                  emailAvailabilityStatus === "checking"
                    ? "We're currently checking the availability of this email address. Please wait a moment."
                    : ""
                }
                success={
                  emailAvailabilityStatus === "available"
                    ? "This email is available for use."
                    : ""
                }
                disabled={emailAvailabilityStatus === "checking" ? true : false}
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Input
                placeholder="Phone Number"
                name="phone"
                register={register}
                error={errors.phone?.message}
              />

              <Input
                placeholder="Subject"
                name="subject"
                register={register}
                error={errors.subject?.message}
              />
            </div>
            <Textarea
              placeholder="Message"
              name="message"
              register={register}
              error={errors.message?.message}
            />

            <Button variant="dark">Send Message</Button>
          </motion.form>
        </motion.div>

        <motion.div {...fadeRightAnimation} transition={{ duration: 0.6 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
            width="100%"
            height={500}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Humanity First Indonesia Office Map"
            aria-label="Office location on Google Maps"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </Container>
    </>
  );
};

export default ContactForm;
