import { Award, Star, HeartHandshake, ShieldCheck } from "lucide-react";
import videoBg from "../assets/video2.png"; // Ensure correct file path

export default function About() {
  return (
    <section className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="px-6 md:px-20 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">We are a non-governmental organization</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Basti Ki Pathshala is a youth-led NGO dedicated to making quality education accessible to children in underserved communities. Through education, outreach, and compassion, we empower future generations.
        </p>
      </div>

      {/* Image/Video Section */}
      <div className="flex justify-center px-6 md:px-20">
        <img
          src={videoBg}
          alt="Team working"
          className="rounded-xl w-full max-w-5xl"
        />
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-yellow-100 mt-12 px-6 md:px-20 py-12 grid md:grid-cols-2 gap-8 text-left">
        <div>
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">OUR MISSION</h3>
          <h4 className="text-2xl font-bold mb-2">
            We make sure to provide inclusive care for children with special needs
          </h4>
          <p className="text-gray-700">
            We support and educate children in vulnerable communities to ensure they get
            opportunities for growth, education, and self-development.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">OUR VISION</h3>
          <h4 className="text-2xl font-bold mb-2">
            Provide more inclusive care to children around the world
          </h4>
          <p className="text-gray-700">
            We envision a world where all children, regardless of their background, have
            access to education, safety, and love to reach their full potential.
          </p>
        </div>
      </div>

      {/* Supporters Section with Icons */}
      <div className="py-12 px-6 md:px-20 text-center">
        <h3 className="text-xl font-semibold mb-6">OUR SUPPORTERS</h3>
        <div className="flex flex-wrap justify-center gap-8 text-yellow-700 text-4xl">
          <ShieldCheck />
          <HeartHandshake />
          <Award />
          <Star />
          <ShieldCheck />
          <HeartHandshake />
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-gray-100 py-12 px-6 md:px-20 text-center">
        <h3 className="text-2xl font-bold mb-8">Awards & Recognitions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              year: "2021",
              label: "Best NGO of the Year",
              icon: <Award size={32} className="mx-auto text-yellow-600" />,
            },
            {
              year: "2018",
              label: "Education Impact Award",
              icon: <Star size={32} className="mx-auto text-yellow-600" />,
            },
            {
              year: "2014",
              label: "Children Care Honor",
              icon: <HeartHandshake size={32} className="mx-auto text-yellow-600" />,
            },
            {
              year: "2020",
              label: "NGO of the Decade Award",
              icon: <ShieldCheck size={32} className="mx-auto text-yellow-600" />,
            },
          ].map((award, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              {award.icon}
              <p className="font-bold mt-2">{award.year}</p>
              <p className="text-sm text-gray-600">{award.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
