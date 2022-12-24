import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { triggerAsyncId } from "async_hooks";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyle = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5 resize-none`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER  */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5 text-sm">
            Das wohl neu unbekannten euren irrt mich ach. Der froher mein irren
            es wirklichkeiten tränen fühlt in schwankende, steigen gesänge
            gedränge nach dunst und euch, äolsharfe an ihr die ich mich sang,
            ersten das steigt.
          </p>
        </motion.div>
        {/* FORM and IMAGE AREA  */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              action="https://formsubmit.co/9caf72b8efdd45740e62392a943ebd40"
              target="_blank"
              onSubmit={handleSubmit}
              method="POST"
            >
              <input
                className={inputStyle}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                  minLength: 3,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" &&
                    "Hello? This field can't be blank"}
                  {errors.name.type === "maxLength" &&
                    "wow! I can't handle more than 100 characters"}
                  {errors.name.type === "minLength" &&
                    "Oh no this needs some more characters minimum of 3 characters"}
                </p>
              )}
              <input
                className={inputStyle}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "Hello? this field can't be blank"}
                  {errors.email.type === "pattern" &&
                    "Okay! this needs to an email address"}
                </p>
              )}
              <textarea
                className={inputStyle}
                rows={5}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                  minLength: 3,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "Hello? This field can't be blank"}
                  {errors.message.type === "maxLength" &&
                    "wow! I can't handle more than 2000 characters"}
                  {errors.message.type === "minLength" &&
                    "you got this! needs some few more characters"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-primary-500 hover:text-white"
              >
                CONNECT
              </button>
            </form>
          </motion.div>
          {/* IMAGE  */}
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
