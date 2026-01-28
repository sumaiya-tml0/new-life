import { Flex, Masonry, Typography } from "antd";
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
  const { Title, Text } = Typography;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 md:px-12 py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-[#222] mb-10">
        Our Production <span className="text-[#0b6b31]">Process</span>
      </h2>

      <Flex gap={48} align="stretch" wrap="wrap">
        {/* LEFT SIDE – IMAGES */}
        <Flex vertical gap={16} style={{ flex: 1, minWidth: 320 }}>
          <Title level={1} style={{ fontWeight: 300, margin: 0 }}>
            First in quality. First in healing.
          </Title>

          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ flex: 1 }}
          >
            <Masonry
              columns={2}
              gutter={16}
              items={imageList.map((img, index) => ({
                key: `item-${index}`,
                data: img,
                height: heights[index],
              }))}
              itemRender={({ data, height= 80 }) => (
                <motion.img
                  variants={imageItemVariants}
                  src={data}
                  alt="production"
                  style={{
                    width: "100%",
                    height: `${height * 3}px`,
                    objectFit: "cover",
                    borderRadius: 10,
                    display: "block",
                  }}
                />
              )}
            />
          </motion.div>
        </Flex>

        {/* RIGHT SIDE – TEXT */}
        <motion.div
          style={{ flex: 1, minWidth: 320, display: "flex" }}
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Flex vertical gap={16} justify="center">
            {process.map((p, index) => (
              <motion.div key={index} variants={textItemVariants}>
                <Flex gap={10} align="start">
                  <MdOutlineGrass
                    size={18}
                    style={{ marginTop: 4, color: "#0b6b31" }}
                  />
                  <Text>{p}</Text>
                </Flex>
              </motion.div>
            ))}
          </Flex>
        </motion.div>
      </Flex>
    </section>
  );
};

export default ProductionProcess;
