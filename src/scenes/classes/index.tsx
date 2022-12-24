import { SelectedPage, ClassType } from "@/shared/types";
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.png";
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "O ich ergötzt dir feuchten mir's vögel träume um von der, sehr nacht wo mein zürntest was der im, sanken ich du und bäume von. Ja muß gesellschaft deine wangen und du so von, denkst.",
    Image: Image1,
  },
  {
    name: "Yoga Classes",
    description:
      "O ich ergötzt dir feuchten mir's vögel träume um von der, sehr nacht wo mein zürntest was der im, sanken ich du und bäume von. Ja muß gesellschaft deine wangen und du so von, denkst.",
    Image: Image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "O ich ergötzt dir feuchten mir's vögel träume um von der, sehr nacht wo mein zürntest was der im, sanken ich du und bäume von. Ja muß gesellschaft deine wangen und du so von, denkst.",
    Image: Image3,
  },
  {
    name: "Adventure Classes",

    Image: Image4,
  },
  {
    name: "Fitness Classes",
    description:
      "O ich ergötzt dir feuchten mir's vögel träume um von der, sehr nacht wo mein zürntest was der im, sanken ich du und bäume von. Ja muß gesellschaft deine wangen und du so von, denkst.",
    Image: Image5,
  },
  {
    name: "Pilates Classes",
    description:
      "O ich ergötzt dir feuchten mir's vögel träume um von der, sehr nacht wo mein zürntest was der im, sanken ich du und bäume von. Ja muß gesellschaft deine wangen und du so von, denkst.",
    Image: Image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Ha a nem nagyon kivül ti és, mint magától kellene nem végett
              emberek menekülsz hull ríjjátok. Kelljen körül elől kíntól a,
              terhetek szenvednem fáj legutolsó és körül míg, még kerüljetek
              nagyon elvonta kert a. Boldog megremeg bikák de öszetörjetek
              enyhíthet,.
            </p>
          </div>
        </motion.div>
        {/* change to slide js later */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                Image={item.Image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
