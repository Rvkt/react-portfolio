export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
      <div className="max-w-3xl">
        <p className="mb-4 text-indigo-400">
          Mobile & Backend Engineer
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Building scalable mobile and backend systems.
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Flutter, Django, REST APIs, scalable architectures,
          production deployments, and performance-focused engineering.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-indigo-500 px-6 py-3 font-medium"
          >
            View Projects
          </a>

          <a
            href="https://github.com/rvkt"
            target="_blank"
            className="rounded-xl border border-gray-700 px-6 py-3"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}