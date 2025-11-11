import Link from "next/link";
import AnimatedPage from '@/components/animated-page';

export default function NotFound() {
  return (
    <AnimatedPage>
    <main>
      {/* Full-screen branded 404 replacement */}
      <div className="fixed inset-0 z-[100]">
        {/* Background: deep black with subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 30%, rgba(255,193,7,0.09), rgba(0,0,0,0) 60%), #000",
          }}
        />

        {/* Grid accent */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Content */}
        <div className="relative z-[110] flex min-h-screen items-center justify-center px-6 text-center">
          <div className="max-w-2xl space-y-6">
            <div className="text-primary/90 tracking-[0.35em] uppercase text-xs">YelloTickell</div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary drop-shadow-[0_0_24px_rgba(255,193,7,0.25)]">
              Coming Soon
            </h1>
            <p className="text-base md:text-lg text-neutral-300">
              We are crafting something new. Check back shortly.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-[0.2em] hover:opacity-90 transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    </AnimatedPage>
  );
}
