

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center p-10 lg:p-20 bg-[url('./assets/bg2.webp')] bg-no-repeat bg-center bg-cover shadow-[11px_5px_20px_0px_gray] rounded-[12px]">
        <div className="max-w-lg mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-indigo-600 mb-4">
            Empowering Women's Health
          </h1>
          <p className="text-lg text-gray-700 mb-6 font-semibold md:pr-5">
            Join us in creating a world where women have access to vital
            healthcare and education for a better future.
          </p>
          <a
            href="#"
            className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
        <div className="lg:w-1/2 md:w-[50%] w-[70%]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-AMoZBQD7tXrRhSS_1mB5j-oPrFILYJtsA&s"
            alt="Women's Health"
            className="rounded-lg shadow-lg mix-blend-luminosity w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
