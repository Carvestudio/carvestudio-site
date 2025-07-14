import BackgroundSlider from "./components/BackgroundSlider";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <BackgroundSlider />

      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
        <img
          src="/logotext.png"
          alt="Carve-logotext"
          className="mb-8 max-w-xs"
        />
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
          Our website is coming soon.
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl">
          For business enquiries please email{" "}
          <a href="mailto:carvestudioo@gmail.com" className="underline">
            carvestudio10@gmail.com
          </a>{" "}
          or call{" "}
          <a href="tel:+233202115651" className="underline">
            +233 20 211 5651
          </a>
        </p>
      </div>
    </div>
  );
}
