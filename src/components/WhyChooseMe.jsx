import { motion } from "framer-motion";
import {
  FaCode,
  FaBolt,
  FaSearchengin,
  FaWordpress,
  FaComments,
  FaLayerGroup,
  FaStar,
} from "react-icons/fa";
import { whyChooseMe } from "../data/content";

const ICONS = {
  FaCode,
  FaBolt,
  FaSearchengin,
  FaWordpress,
  FaComments,
  FaLayerGroup,
};

export default function WhyChooseMe() {
  return (
    <section className="relative section-py">
      <div className="container-px w-full max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="section-label justify-center">
            <span className="h-px w-8 bg-accent/60" />
            Why Choose Me
            <span className="h-px w-8 bg-accent/60" />
          </div>

          <h2 className="heading-lg">
            Built different.{" "}
            <span className="text-accent-gradient">Built to last.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {whyChooseMe.map((item, i) => {
            const Icon = ICONS[item.icon] || FaStar;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                variants={{
                  hover: { y: -10, scale: 1.025 },
                }}
                transition={{
                  duration: 0.45,
                  delay: (i % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 transition-all duration-500 hover:border-white/20 hover:shadow-[0_25px_60px_rgba(0,0,0,.45)]"
              >
                {/* Soft Background Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
                </div>

                {/* Floating Glow */}
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                {/* Card Number */}
                <div className="absolute top-5 right-5 font-mono text-xs tracking-widest text-white/20 transition-colors duration-500 group-hover:text-accent/60">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* ================= TOP LEFT CORNER ================= */}
                <div className="pointer-events-none absolute top-0 left-0 h-24 w-24">
                  <div className="absolute top-5 left-5 h-px w-16 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="absolute top-5 left-5 h-16 w-px origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100" />
                </div>

                {/* ================= BOTTOM RIGHT CORNER ================= */}
                <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24">
                  <div className="absolute bottom-5 right-5 h-px w-16 origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="absolute bottom-5 right-5 h-16 w-px origin-bottom scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100" />
                </div>

                {/* Icon — animates from the CARD's hover, not its own */}
                <motion.div
                  initial="rest"
                  variants={{
                    rest: { rotate: 0, scale: 1 },
                    hover: { rotate: 8, scale: 1.15 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10"
                >
                  <Icon size={22} className="text-accent" />
                  <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                </motion.div>

                {/* Title — same, inherits hover state from the card */}
                <motion.h3
                  initial="rest"
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 4 },
                  }}
                  className="font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-accent"
                >
                  {item.title}
                </motion.h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-white/60 transition-colors duration-500 group-hover:text-white/90">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent via-accent/40 to-transparent transition-all duration-700 group-hover:w-full" />

                {/* Floating Particles */}
                <div className="absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-all duration-700 group-hover:translate-y-2 group-hover:opacity-100" />
                <div className="absolute right-10 bottom-10 h-1 w-1 rounded-full bg-accent opacity-0 transition-all duration-1000 group-hover:-translate-y-3 group-hover:opacity-100" />
                <div className="absolute right-20 top-16 h-1 w-1 rounded-full bg-accent opacity-0 transition-all duration-1000 group-hover:translate-x-2 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}