import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import Container from "../components/common/Container";
import { BRAND } from "../constants/branding";

export default function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-white/5 bg-[#0B0F19] py-24"
        >
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-16"
                >
                    <div className="mb-4 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                        Contact
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Let’s build scalable software systems together.
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                        We help startups and businesses design, build, and scale
                        production-grade mobile applications, backend systems,
                        APIs, and modern software platforms.
                    </p>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        <div className="rounded-3xl border border-white/10 bg-[#111827]/70 p-8">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                                    <FaEnvelope size={20} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Email
                                    </p>

                                    <a
                                        href={`mailto:${BRAND.email}`}
                                        className="text-lg font-medium text-white transition-colors hover:text-indigo-400"
                                    >
                                        {BRAND.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-[#111827]/70 p-8">
                            <p className="text-sm text-gray-500">
                                Connect
                            </p>

                            <div className="mt-5 flex items-center gap-4">
                                <a
                                    href={BRAND.social.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
                                >
                                    <FaGithub size={20} />
                                </a>

                                <a
                                    href={BRAND.social.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-8">
                        <h3 className="text-xl font-semibold text-white">
                            Looking for a technical partner?
                        </h3>

                        <p className="mt-4 leading-7 text-gray-300">
                            Whether you need a scalable backend system, a modern
                            mobile application, or production-grade software
                            architecture, we can help transform ideas into reliable,
                            high-performance systems.
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}