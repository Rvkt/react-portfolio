import { motion } from "framer-motion";

import Container from "../components/common/Container";

const technologies = [
    "Flutter",
    "Dart",
    "React",
    "TypeScript",
    "Python",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "Firebase",
    "Redis",
    "Docker",
    "GitHub Actions",
    "REST APIs",
    "JWT Authentication",
    "Microservices",
    "MQTT",
];

export default function Technologies() {
    return (
        <section
            id="technologies"
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
                        Technology Stack
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Modern technologies for scalable software systems.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        We use production-proven technologies focused on performance,
                        maintainability, scalability, and rapid product delivery.
                    </p>
                </motion.div>

                <div className="mt-16 flex flex-wrap gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.04,
                            }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 grid gap-6 md:grid-cols-3"
                >
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                        <div className="text-4xl font-bold text-indigo-400">5+</div>

                        <p className="mt-3 text-gray-400">
                            Years building mobile applications and backend systems.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                        <div className="text-4xl font-bold text-indigo-400">10+</div>

                        <p className="mt-3 text-gray-400">
                            Production systems engineered across mobile and backend platforms.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                        <div className="text-4xl font-bold text-indigo-400">24/7</div>

                        <p className="mt-3 text-gray-400">
                            Focus on reliability, maintainability, and scalable architecture.
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}