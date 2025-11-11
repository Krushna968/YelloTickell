import AnimatedPage from '@/components/animated-page';

export const metadata = {
  title: 'Corporate Social Responsibility | YelloTickell Pvt Ltd',
  description:
    '1:1 embedded CSR page from the source site.',
};

export default function CSRPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      <h1 className="sr-only">Corporate Social Responsibility</h1>
      <div className="w-full h-screen">
        <iframe
          src="/api/proxy/csr"
          className="w-full h-full border-0"
title="Corporate Social Responsibility | YelloTickell Pvt Ltd"
        />
      </div>
    </main>
    </AnimatedPage>
  );
}
