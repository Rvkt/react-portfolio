import { motion } from "framer-motion";

import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { BRAND } from "../constants/branding";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0F19] pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_45%)]" />

      <Container className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Engineering Studio
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Production-grade mobile and backend systems engineered for scale.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            {BRAND.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">
              View Projects
            </Button>

            <Button
              href="#contact"
              variant="secondary"
            >
              Book Consultation
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-4 font-mono text-sm text-gray-300">
              <p>
                <span className="text-indigo-400">stack</span>: Flutter,
                Django, PostgreSQL
              </p>

              <p>
                <span className="text-indigo-400">architecture</span>:
                scalable systems
              </p>

              <p>
                <span className="text-indigo-400">deployment</span>:
                CI/CD, GitHub Actions
              </p>

              <p>
                <span className="text-indigo-400">focus</span>: mobile,
                APIs, system design
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}