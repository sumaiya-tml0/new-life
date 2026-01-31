import { Masonry, Typography } from "antd";
import { MdOutlineGrass } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import {
  imageContainerVariants,
  imageItemVariants,
  textContainerVariants,
  textItemVariants,
} from "../../shared/MotionVarients";
import img from "../../assets/home/medicine_process.jpg";
import img1 from "../../assets/home/medicine_process2.jpg";
import img2 from "../../assets/home/about4.jpg";
import { useRef } from "react";

const imageList = [img1, img, img2];

const heights: number[] = [140, 55, 80];

const process = [
  "Always uncompromising in quality and purity.",
  "Our commitment to quality never stops.",
  "Seamlessly synchronized and automated production ensuring pharmaceutical-grade precision.",
  "Utilizing state-of-the-art instrumentation to ensure accuracy & reliability in all our processes.",
  "Every sample undergoes comprehensive testing to meet our strict standards.",
  "well-organized & well-equipped Industry powered by devoted workforce of skilled professionals behind every product.",
  "laboratories operated directly under the supervision of Prof. Dr. Nilufar Nahar, Ex Chairperson at the department of chemistry, university of Dhaka and ISP super collaborator regarding ANRAP, NITUB & ANFEC, who Published 146 papers in peer reviewed international and national journals as well as Presented results in 150 papers in conferences/seminars/symposia. ",
];

const ProductionProcess = () => {
  const { Text } = Typography;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-[#222] mb-6 md:mb-10">
        Our Production <span className="text-[#0b6b31]">Process</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-12">
        {/* LEFT SIDE – IMAGES */}
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#222] m-0">
            First in quality. First in healing.
          </h3>

          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1"
          >
            <Masonry
              columns={2}
              gutter={12}
              items={imageList.map((img, index) => ({
                key: `item-${index}`,
                data: img,
                height: heights[index],
              }))}
              itemRender={({ data, height = 80 }) => (
                <motion.img
                  variants={imageItemVariants}
                  src={data}
                  alt="production"
                  style={{
                    width: "100%",
                    height: `${height * 2.5}px`,
                    objectFit: "cover",
                    borderRadius: 10,
                    display: "block",
                  }}
                />
              )}
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE – TEXT */}
        <motion.div
          className="flex flex-1"
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col gap-3 md:gap-4 justify-center">
            {process.map((p, index) => (
              <motion.div key={index} variants={textItemVariants}>
                <div className="flex gap-2 md:gap-3 items-start">
                  <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    <MdOutlineGrass className="text-[#0b6b31] text-base md:text-lg" />
                  </span>
                  <Text className="text-sm md:text-base">{p}</Text>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionProcess;
