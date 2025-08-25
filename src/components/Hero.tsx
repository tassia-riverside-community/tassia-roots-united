import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community-action.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Tassia Riverside Community
          <span className="block text-2xl md:text-4xl font-normal mt-2 text-green-300">
            (TRC)
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
          Youth united for a cleaner, greener & empowered Tassia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => window.open('https://chat.whatsapp.com/Kb9XlJIi1yLGoD12EJ0GxE?mode=ems_copy_t', '_blank')}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Join Us
          </Button>
          <Button 
            size="lg"
            onClick={() => scrollToSection('#donate')}
            className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 text-lg font-semibold"
          >
            Donate
          </Button>
        </div>
        
        {/* Quick Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-2">🌱</div>
            <h3 className="text-lg font-semibold mb-1">Clean Environment</h3>
            <p className="text-gray-300 text-sm">Garbage collection & recycling initiatives</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">💡</div>
            <h3 className="text-lg font-semibold mb-1">Empowered Youth</h3>
            <p className="text-gray-300 text-sm">Skills training & creative talent promotion</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="text-lg font-semibold mb-1">Stronger Community</h3>
            <p className="text-gray-300 text-sm">Resource mobilization & partnerships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;