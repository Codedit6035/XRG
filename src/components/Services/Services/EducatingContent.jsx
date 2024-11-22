import React from 'react';
import { motion } from 'framer-motion';
import Adivising from "../../../assets/lecturing.jpg";

const EducatingContent = () => {
  return (
    <div className="my-10 flex justify-center gap-20 items-stretch ">
      {/* Image */}
      <motion.div
        className="flex-1"
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <img src={Adivising} alt="Educating" className=" w-full h-screen sm:pb-14" />
      </motion.div>

      {/* Text */}
      <motion.div
        className="flex-1 font-raleway space-y-14 text-base text-primary h-fit  "
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl bg-shade1 text-white w-fit pb-1 px-2">Lecturing</h1>
        <p className="text-primary ">
          Shaping the next generation of leaders with a vision and sense of urgency for change.
        </p>
        <div className="space-y-7">
          <ul className="list-disc space-y-3 ">
            <li><span className="font-semibold">Collaborating with Academic Program Directors– </span>partnering with engineering and business schools to design innovative, impactful curricula focused on Business & Society.</li>
            <li><span className="font-semibold">Developing and Delivering Courses on Business & Society– </span>across academic and executive education levels</li>
            <li><span className="font-semibold">Supervising Theses at All Academic Levels– </span>guiding bachelor’s, master’s, and doctoral students in developing research aligned with sustainable business practices.</li>
            <li><span className="font-semibold">Renewing or Enhancing Existing Curricula– </span>updating and refining Business & Society courses to keep pace with evolving sustainability needs.</li>
            <li><span className="font-semibold">Coaching New Business Leaders– </span>mentoring and coaching entrepreneurs to become responsible leaders equipped to navigate and shape a more sustainable future.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default EducatingContent;
