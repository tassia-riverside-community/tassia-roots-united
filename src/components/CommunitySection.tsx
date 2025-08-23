import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  const communityImageUrl = "/lovable-uploads/a2269ab2-7de8-4bbf-b8c6-724cc80b2295.png";

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with blended community image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${communityImageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/20"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Community
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are a vibrant group of young people from Tassia, united by our passion for environmental conservation and community development. Together, we're making a real difference in our neighborhood.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Every week, we come together to clean our streets, plant trees, and support each other through skills training and mentorship programs. Join our WhatsApp group to be part of this amazing movement!
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://chat.whatsapp.com/Kb9XlJIi1yLGoD12EJ0GxE?mode=ems_copy_t', '_blank')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold"
            >
              Join Our WhatsApp Group
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={communityImageUrl} 
                alt="TRC Community Members - Young people from Tassia working together for environmental conservation and community development"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-strong">
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm">Active Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;