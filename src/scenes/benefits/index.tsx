import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, reprehenderit.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, reprehenderit.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, reprehenderit.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      className="mx-auto min-h-full w-5/6 py-20"
      id="Benefits"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* BENEFITS HEADER  */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi
            culpa suscipit sit eius ipsam distinctio ex dolores ipsum harum? Non
            officiis eaque quia quae harum odio earum doloribus quis.
          </p>
        </motion.div>
        {/* BENEFITS MAIN SECTION  */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION SECTION  */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC AREA  */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
          {/* DESCRIPTION AREA  */}
          <div>
            {/* TITLE  */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION  */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                delectus beatae enim corporis libero dolorem pariatur nam
                dignissimos aspernatur molestias repudiandae, porro, amet ut
                debitis expedita iste reiciendis quaerat praesentium neque?
                Quaerat quisquam iure repudiandae aliquid placeat, aperiam
                aspernatur suscipit commodi, ad eaque nostrum voluptatibus
                architecto, saepe molestias quos quod!
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                debitis earum sequi nostrum? Veniam consectetur, et ipsam ipsa
                corrupti consequatur fugit quidem provident, cupiditate tempora,
                error animi quisquam facilis omnis.
              </p>
            </motion.div>
            {/* ACTION BUTTON  */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
