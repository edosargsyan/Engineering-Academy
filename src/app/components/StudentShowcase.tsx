import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import { useTranslation } from "react-i18next"; 

export function StudentShowcase() {
  const { t } = useTranslation();

  const projects = [
    {
      id: "robot",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      height: "300px",
      tags: ["ROS", "Computer Vision", "Embedded"],
    },
    {
      id: "iot",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      height: "250px",
      tags: ["STM32", "PCB Design", "Cloud"],
    },
    {
      id: "dashboard",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      height: "280px",
      tags: ["React", "TensorFlow", "AWS"],
    },
    {
      id: "drone",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      height: "320px",
      tags: ["RTOS", "Sensors", "Control Systems"],
    },
    {
      id: "monitor",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      height: "260px",
      tags: ["Node.js", "IoT", "Real-time"],
    },
    {
      id: "fpga",
      image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      height: "290px",
      tags: ["FPGA", "Verilog", "Digital Design"],
    },
    {
      id: "arm",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      height: "310px",
      tags: ["CAD", "Motion Control", "Python"],
    },
    {
      id: "hub",
      image: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      height: "270px",
      tags: ["Circuit Design", "ESP32", "Mobile"],
    },
    {
      id: "chat",
      image: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      height: "295px",
      tags: ["GPT-4", "Vector DB", "LangChain"],
    },
  ];

  return (
    <section id="work" className="py-32 px-6 border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            {t('showcase_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('showcase_subtitle')}
          </p>
        </motion.div>

        <Masonry columnsCount={3} gutter="20px">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                background: project.image,
                height: project.height,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-xs uppercase tracking-wider opacity-80 mb-2">
                  {t(`proj_${project.id}_cat`)} {/* Перевод категории */}
                </div>
                <div className="text-xl font-semibold mb-3">
                  {t(`proj_${project.id}_title`)} {/* Перевод названия проекта */}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}