import { motion } from "framer-motion";

import Container from "../components/common/Container";

const services = [
    {
        title: "Mobile App Development",
        description:
            "Cross-platform mobile applications built with Flutter for Android, iOS, and modern business workflows.",
    },
    {
        title: "Backend Systems",
        description:
            "Scalable backend architectures using Django, FastAPI, PostgreSQL, REST APIs, authentication, and async processing.",
    },
    {
        title: "System Design",
        description:
            "Production-grade software architecture focused on scalability, maintainability, security, and performance.",
    },
    {
        title: "API Engineering",
        description:
            "Robust API ecosystems with JWT authentication, role-based access control, caching, and optimized database access.",
    },
    {
        title: "Performance Optimization",
        description:
            "Application performance tuning for Flutter apps, backend APIs, rendering pipelines, and database-heavy systems.",
    },
    {
        title: "Cloud & Deployment",
        description:
            "CI/CD pipelines, GitHub Actions, production deployments, monitoring, and scalable hosting infrastructure.",
    },
];

export default function Services() {
    return (
        <section
            id="services"
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
                        Services
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Engineering scalable systems for modern businesses.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        We build production-grade mobile applications, backend systems,
                        scalable APIs, and software architectures designed for long-term
                        maintainability and growth.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.07]"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                                <div className="h-3 w-3 rounded-full bg-indigo-400" />
                            </div>

                            <h3 className="text-xl font-semibold text-white">
                                {service.title}
                            </h3>

                            <p className="mt-4 leading-7 text-gray-400">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}