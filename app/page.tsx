export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-12 max-w-3xl">
        <img
          src="/images/profile1.jpg"
          alt="Profile"
          className="w-56 h-56 rounded-full object-cover mb-8 shadow-md"
        />
        <h1 className="text-4xl font-bold mb-2">ERWIN EKA SYAHPUTRA</h1>
        <p className="text-lg text-gray-600 mb-4">Web Developer | Machine Learning Engineer | Software Engineer</p>
        <p className="text-center max-w-xl">
        Welcome to my portfolio! I am a passionate programmer and enjoy creating innovative web applications and network security innovations. Explore my projects, skills, and experience, and feel free to contact me if you have questions or collaboration opportunities.
        </p>
      </div>
    </div>
  );
}
