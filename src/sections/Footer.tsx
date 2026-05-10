import Container from "../components/common/Container";
import { BRAND } from "../constants/branding";

const footerLinks = [
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "Technologies",
        href: "#technologies",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0B0F19] py-10">
            <Container>
                <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight text-white">
                            {BRAND.name}
                        </h3>

                        <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
                            Production-grade mobile applications, backend systems,
                            scalable APIs, and modern software architectures engineered
                            for performance and long-term maintainability.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-6 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Built with React</span>
                        <span>•</span>
                        <span>Vite</span>
                        <span>•</span>
                        <span>TypeScript</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}