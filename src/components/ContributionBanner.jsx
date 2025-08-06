import bgImage from "../assets/kids.png";

export default function ContributionBanner() {
  return (
    <section
      className="rounded-xl overflow-hidden my-12 mx-4 md:mx-16 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-black bg-opacity-60 px-6 py-16 md:py-20 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          You can contribute to provide a place for children with special needs!
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#volunteer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md"
          >
            Join as a volunteer
          </a>
          <a
            href="#donate"
            className="bg-white hover:bg-gray-100 text-black font-medium px-6 py-2 rounded-md"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}
