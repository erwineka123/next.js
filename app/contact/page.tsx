import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg mb-4">Feel free to reach out to me through any of the following platforms:</p>
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2">
        <FaPhone className="text-blue-500" />
          <a href="https://wa.me/+6285608884812" className="text-blue-500 hover:underline">
            0856-0888-4812
          </a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaEnvelope className="text-blue-500" />
          <a href="mailto:ekaerwin09@gmail.com" className="text-blue-500 hover:underline">
            ekaerwin09@gmail.com
          </a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaGithub className="text-blue-500" />
          <a href="https://github.com/erwineka123" className="text-blue-500 hover:underline">
            github.com/erwineka123
          </a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaLinkedin className="text-blue-500" />
          <a href="https://www.linkedin.com/in/erwin-eka/" className="text-blue-500 hover:underline">
            linkedin.com/in/erwin-eka
          </a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaInstagram className="text-blue-500" />
          <a href="https://www.instagram.com/erwin.es_?igsh=MTVsc3I1MmszN2h2eA==" className="text-blue-500 hover:underline">
            instagram.com/erwin.es
          </a>
        </div>
      </div>
    </div>
  );
}
