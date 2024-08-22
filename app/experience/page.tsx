export default function ExperiencePage() {
  const experiences = [
    {
      title: "Lecturer Research Assistant",
      company: "Telkom University",
      duration: "2022",
      description: "Looking for supporting data in making regional boundary detection devices."
    },
    {
      title: "Web Developer",
      company: "PT. Sumapala Integrasi Solusi (SIS)",
      duration: "2023",
      description: "Working on the development of the Bandung City Social Service website."
    },
    {
      title: "Open House NetOs",
      company: "Lab NOS",
      duration: "2023",
      description: "GAS and VLAN Workshop committee and VLAN workshop trainer."
    },
    {
      title: "Web Developer",
      company: "Freelance",
      duration: "2024",
      description: "Designing and building an abscess management website for an educational institution using the flask framework in python."
    }
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Experience</h1>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold">{exp.title}</h2>
            <p>{exp.company} - {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
