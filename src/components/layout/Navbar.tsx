import Container from "../common/Container";
import { NAVIGATION_ITEMS } from "../../constants/navigation";
import { BRAND } from "../../constants/branding";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-white"
        >
          {BRAND.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}