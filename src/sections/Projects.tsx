import { motion } from "framer-motion";
import {
    FaArrowUpRightFromSquare,
    FaGithub,
} from "react-icons/fa6";

import Container from "../components/common/Container";

const projects = [
    {
        title: "Subscription Grocery Platform",
        description:
            "A scalable grocery delivery system with subscription workflows, recurring orders, wallet validation, and automated fulfillment pipelines.",

        stack: [
            "Flutter",
            "Django",
            "PostgreSQL",
            "REST API",
            "JWT",
        ],

        highlights: [
            "Recurring subscription architecture",
            "Automated cron-based renewals",
            "Wallet-based order validation",
            "Production-ready REST APIs",
        ],

        github: "#",
        live: "#",
    },

    {
        title: "Attendance Tracking System",
        description:
            "A mobile-first attendance management platform with clock-in/out tracking, offline-first workflows, and monthly attendance reporting.",

        stack: [
            "Flutter",
            "Provider",
            "SQLite",
            "Notifications",
        ],

        highlights: [
            "Offline-first architecture",
            "Attendance automation workflows",
            "State management optimization",
            "Realtime user interaction flows",
        ],

        github: "#",
        live: "#",
    },

    {
        title: "API Testing Platform",
        description:
            "A developer-focused API testing application inspired by Postman with request management, response inspection, and environment handling.",

        stack: [
            "Flutter",
            "HTTP",
            "JSON",
            "REST APIs",
        ],

        highlights: [
            "Custom API request builder",
            "Dynamic header management",
            "Structured response visualization",
            "Developer tooling workflows",
        ],

        github: "#",
        live: "#",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
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
                        Featured Systems
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Production-focused software systems engineered for real-world usage.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        We design and develop scalable mobile applications, backend
                        systems, and software platforms focused on reliability,
                        maintainability, and long-term growth.
                    </p>
                </motion.div>

                <div className="mt-20 space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5"
                        >
                            <div className="grid gap-10 p-8 lg:grid-cols-[1.5fr_1fr] lg:p-12">
                                <div>
                                    <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                                        Case Study
                                    </div>

                                    <h3 className="text-3xl font-bold tracking-tight text-white">
                                        {project.title}
                                    </h3>

                                    <p className="mt-6 max-w-2xl leading-8 text-gray-400">
                                        {project.description}
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-3">
                                        {project.stack.map((tech) => (
                                            <div
                                                key={tech}
                                                className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300"
                                            >
                                                {tech}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-10 flex flex-wrap gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/10"
                                        >
                                            <FaGithub />
                                            GitHub
                                        </a>

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-400"
                                        >
                                            <FaArrowUpRightFromSquare />
                                            Live Preview
                                        </a>
                                    </div>
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-[#111827]/70 p-8">
                                    <p className="text-sm font-medium uppercase tracking-wider text-indigo-400">
                                        Engineering Highlights
                                    </p>

                                    <div className="mt-8 space-y-5">
                                        {project.highlights.map((highlight) => (
                                            <div
                                                key={highlight}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="mt-2 h-2 w-2 rounded-full bg-indigo-400" />

                                                <p className="leading-7 text-gray-300">
                                                    {highlight}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}