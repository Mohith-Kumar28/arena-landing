import Button from "./Button";

export default function Background() {
  return (
    <section className="py-24 px-8 md:px-24 lg:px-32 bg-background-secondary border-t border-white/5">
      <div className="max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bebas mb-6 text-text-main">BACKGROUND</h2>
        <p className="text-gray-400 font-manrope text-lg leading-relaxed max-w-2xl mb-12">
          We approach sports analytics with a next-generational product developed in an academically certified methodology, strategic alliances with main actors and an agile operation process. This was acquired by pooling expertise in performance analysis, artificial intelligence & financial technology.
        </p>
        
        <div className="pt-8">
          <Button>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
