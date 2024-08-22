export default function ExperienceLayout({
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
  