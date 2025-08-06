import Carousel from "./Carousel";
import { PlayCircle, Users, HeartPulse, GraduationCap, Stethoscope } from "lucide-react";
import videoThumbnail from "../assets/video.png"; // Replace with actual image
import childImage from "../assets/child.png"; // Replace with actual image
import DonationSection from "./DonationSection";
import ContributionBanner from "./ContributionBanner";
export default function Home() {
  return (
    <>
      {/* Carousel Section */}
      <Carousel />

      {/* Intro Section */}
      <br />
      <section className="bg-blue-100 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Basti Ki Pathshala Foundation
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Empowering Education & Community Development
          </p>
        </div>
      </section>

      {/* Know About Us Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-600 mb-2">KNOW ABOUT US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              We provide a place for children with special needs
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.
            </p>
            <p className="text-gray-600 mb-6">
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition">
              Learn more
            </button>
          </div>

          {/* Right Video Image */}
          <div className="relative w-full h-64 md:h-[300px] rounded overflow-hidden shadow">
            <img src={videoThumbnail} alt="video" className="w-full h-full object-cover rounded-lg" />
            <PlayCircle className="absolute inset-0 m-auto text-white w-16 h-16 bg-black bg-opacity-50 rounded-full p-2" />
          </div>
        </div>

        {/* Supporters */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">OUR SUPPORTERS</p>
          <div className="flex justify-center gap-6 flex-wrap">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-gray-400 text-sm">logoipsum™</div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-yellow-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-600 mb-2">WHAT WE DO</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Some services we provide for our children
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>

            <div className="space-y-6">
              <ServiceItem icon={<Users />} title="Family support" />
              <ServiceItem icon={<HeartPulse />} title="Health benefits" />
              <ServiceItem icon={<GraduationCap />} title="Scholarships" />
              <ServiceItem icon={<Stethoscope />} title="Therapy" />
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-lg overflow-hidden shadow">
            <img src={childImage} alt="child" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
            {/* Donation Section */}
      <DonationSection />

      {/* Contribution Banner */}
      <ContributionBanner />

    </>
  );
}

function ServiceItem({ icon, title }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-yellow-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.
        </p>
      </div>
           
    </div>
  );
}
