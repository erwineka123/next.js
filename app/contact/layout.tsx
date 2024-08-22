export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="min-h-screen">
        {children}
      </section>
    );
  }
  