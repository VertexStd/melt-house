import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-32">
      <span className="eyebrow text-caramel mb-6">404</span>
      <h1 className="font-display text-4xl sm:text-5xl text-espresso mb-6">
        This page has melted away.
      </h1>
      <p className="text-espresso/65 font-light max-w-md mb-10">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to something warm.
      </p>
      <Link
        to="/"
        className="inline-flex items-center rounded-full bg-espresso text-cream px-8 py-3.5 text-sm tracking-wide hover:bg-caramel hover:text-espresso transition-colors duration-300"
      >
        Back to Home
      </Link>
    </section>
  );
}
