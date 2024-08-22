export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-200 text-gray-800 flex flex-col items-center justify-center p-8">
      <div className="max-w-5xl w-full bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4 text-center md:text-left">About Me</h1>
            <p className="text-lg mb-6">
            I am an active student with the Undergraduate Informatics Department at Telkom University. 
            I have experience organizing as a student committee at the university level in the fields of secretary and public relations.
            Has experience in the field of website development and has an interest in the field of network security.
            </p>
            <p className="text-lg mb-6">
            Have interest and determination to continue to develop your abilities and gain broader insight in the field of programming. 
            Can apply the knowledge they have well. Able to work effectively both as an individual and a team.
            </p>
            <p className="text-lg">
            Besides programming, I enjoy sharing my knowledge with others and constantly learning about new technologies. 
            Always open to learning and developing to provide good quality performance and uphold the value of integrity.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
