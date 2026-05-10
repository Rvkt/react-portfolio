import { motion } from "framer-motion";

import Container from "../components/common/Container";

const processSteps = [
    {
        step: "01",
        title: "Discovery & Planning",
        description:
            "We analyze business requirements, technical constraints, scalability goals, and product workflows before development begins.",
    },
    {
        step: "02",
        title: "System Architecture",
        description:
            "Production-grade architectures are designed with scalability, maintainability, security, and long-term growth in mind.",
    },
    {
        step: "03",
        title: "Development & Integration",
        description:
            "We build mobile applications, backend systems, APIs, and infrastructure using modern engineering practices and clean architecture.",
    },
    {
        step: "04",
        title: "Testing & Optimization",
        description:
            "Applications are tested for reliability, performance, responsiveness, scalability, and production readiness.",
    },
    {
        step: "05",
        title: "Deployment & Delivery",
        description:
            "CI/CD workflows, production deployment, monitoring, and delivery pipelines are configured for reliable software operations.",
    },
    {
        step: "06",
        title: "Maintenance & Scaling",
        description:
            "We support long-term product evolution, feature scaling, system optimization, and infrastructure improvements.",
    },
];

export default function Process() {
    return (
        <section
            id="process"
            className="border-t border-white/5 bg-[#0B0F19] py-24"
        >
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <div className="mb-4 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                        Engineering Process
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Building reliable systems with a structured engineering workflow.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        We follow a production-focused development process designed
                        around scalability, maintainability, performance, and long-term
                        software reliability.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {processSteps.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.07]"
                        >
                            <div className="absolute right-6 top-6 text-5xl font-bold text-white/5">
                                {item.step}
                            </div>

                            <div className="relative z-10">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-lg font-semibold text-indigo-400">
                                    {item.step}
                                </div>

                                <h3 className="text-2xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}