import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/Hero";
import CommunitySection from "@/components/CommunitySection";
import ApplicationForm from "@/components/ApplicationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [applicationForm, setApplicationForm] = useState({
    isOpen: false,
    programTitle: ""
  });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openApplicationForm = (programTitle: string) => {
    setApplicationForm({
      isOpen: true,
      programTitle
    });
  };

  const closeApplicationForm = () => {
    setApplicationForm({
      isOpen: false,
      programTitle: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About TRC</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary">Who We Are</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Tassia Riverside Community (TRC) is a youth-led, community-based organization in Tassia, Embakasi – Nairobi. We are dedicated to environmental conservation, youth empowerment, and community development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A united, empowered, and environmentally responsible community where every youth and resident can thrive.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To mobilize, empower, and inspire youth and residents of Tassia through clean-up drives, tree planting, skills empowerment, and sustainable development programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We focus on three key areas to create lasting positive change in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-strong transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">🌱</div>
                <CardTitle className="text-primary">Environment & Clean-Up</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Garbage collection in plots & streets</li>
                  <li>• Recycling initiatives</li>
                  <li>• Tree planting & beautification drives</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-strong transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">💡</div>
                <CardTitle className="text-primary">Youth Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Skills training workshops</li>
                  <li>• Business stalls & incubation hubs</li>
                  <li>• Arts, music & creative talent promotion</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-strong transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">🤝</div>
                <CardTitle className="text-primary">Community Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Resource mobilization & partnerships</li>
                  <li>• Safety & health awareness campaigns</li>
                  <li>• Support for vulnerable families</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <CommunitySection />

      {/* News & Updates Section */}
      <section id="news-updates" className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              News & Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our latest activities, upcoming events, and community success stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-strong transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-accent to-primary"></div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Clean-Up Event</Badge>
                <CardTitle className="text-xl">Community Clean-Up Drive - January 2025</CardTitle>
                <CardDescription>
                  Join us this Saturday for our monthly community clean-up in Tassia. Together we'll make our neighborhood cleaner and greener.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">📅 January 25, 2025 • 8:00 AM</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-strong transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-secondary to-accent"></div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Success Story</Badge>
                <CardTitle className="text-xl">50 Trees Planted in December</CardTitle>
                <CardDescription>
                  Our youth team successfully planted 50 indigenous trees along the riverside, contributing to a greener Tassia community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">📅 December 2024</p>
                <Button variant="outline" className="w-full">
                  Read Story
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-strong transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-primary to-secondary"></div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Training Program</Badge>
                <CardTitle className="text-xl">Youth Skills Development Workshop</CardTitle>
                <CardDescription>
                  Free entrepreneurship and digital skills training for Tassia youth. Registration now open for February cohort.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">📅 February 2025 • Applications Open</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => openApplicationForm("Youth Skills Development Workshop")}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              View All Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Involved</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our movement and be part of positive change in Tassia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft text-center">
              <CardHeader>
                <CardTitle className="text-primary">Become a Member</CardTitle>
                <CardDescription>
                  Join our movement and be part of positive change in Tassia. Membership is open to all youth and community members ready to serve and grow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => window.open('https://chat.whatsapp.com/Kb9XlJIi1yLGoD12EJ0GxE?mode=ems_copy_t', '_blank')}
                >
                  Join WhatsApp Group
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft text-center">
              <CardHeader>
                <CardTitle className="text-primary">Volunteer</CardTitle>
                <CardDescription>
                  Offer your time, skills, or mentorship to help drive our initiatives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Volunteer With Us
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft text-center">
              <CardHeader>
                <CardTitle className="text-primary">Partner with Us</CardTitle>
                <CardDescription>
                  We welcome collaboration with organizations, schools, businesses, and well-wishers to expand impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Partner With TRC
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Support TRC – Build a Better Tassia</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Your donations help us make a real difference in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Your donations help us:</h3>
              <ul className="space-y-2 text-muted-foreground text-left">
                <li>• Buy tools & garbage collection materials</li>
                <li>• Plant more trees & maintain green spaces</li>
                <li>• Support youth skills training & talent growth</li>
                <li>• Fund community stalls & small businesses</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Ways to Give:</h3>
              <div className="space-y-3">
                <Badge variant="secondary" className="w-full py-2 text-sm">
                  M-Pesa Paybill (Local contributions)
                </Badge>
                <Badge variant="secondary" className="w-full py-2 text-sm">
                  Bank Transfer
                </Badge>
                <Badge variant="secondary" className="w-full py-2 text-sm">
                  PayPal / Credit Card (International)
                </Badge>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg font-semibold"
          >
            Donate Now
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Get in touch with us to learn more or get involved.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-muted-foreground">Tassia, Embakasi – Nairobi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <span className="text-muted-foreground">Phone: Coming Soon</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <span className="text-muted-foreground">Email: Coming Soon</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📲</span>
                  <span className="text-muted-foreground">WhatsApp: Coming Soon</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay connected with our latest updates and activities on social media.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Badge variant="secondary" className="justify-center py-2">Facebook</Badge>
                  <Badge variant="secondary" className="justify-center py-2">Instagram</Badge>
                  <Badge variant="secondary" className="justify-center py-2">TikTok</Badge>
                  <Badge variant="secondary" className="justify-center py-2">Twitter/X</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TRC</h3>
              <p className="text-primary-foreground/80">
                Tassia Riverside Community - Youth united for a cleaner, greener & empowered Tassia.
              </p>
            </div>
            
            <div className="md:text-center">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About TRC
                </button>
                <button 
                  onClick={() => scrollToSection('#programs')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Programs
                </button>
                <button 
                  onClick={() => scrollToSection('#get-involved')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Join
                </button>
                <button 
                  onClick={() => scrollToSection('#donate')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Donate
                </button>
              </div>
            </div>
            
            <div className="md:text-right">
              <h4 className="font-semibold mb-4">Our Mission</h4>
              <p className="text-primary-foreground/80 italic">
                "Cleaner. Stronger. Empowered Tassia."
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/80">
              © 2025 Tassia Riverside Community (TRC). All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Gallery Section with Community Photos */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Community</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the faces and places that make Tassia Riverside Community special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-shadow duration-300">
              <img 
                src="/lovable-uploads/025f7344-abc0-4523-81fe-3b8d14462429.png" 
                alt="TRC community members in Tassia" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-shadow duration-300">
              <img 
                src="/lovable-uploads/675eb095-51c9-4aaa-8747-a81144c2c24f.png" 
                alt="Community area in Tassia" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-shadow duration-300">
              <img 
                src="/lovable-uploads/2d4c09e1-aa8e-41cc-8dce-355759e7ab98.png" 
                alt="Youth gathering in Tassia community" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-shadow duration-300">
              <img 
                src="/lovable-uploads/1392a18b-6802-4f17-ba9d-04803e149d6a.png" 
                alt="Community members by the riverside" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ApplicationForm 
        isOpen={applicationForm.isOpen}
        onClose={closeApplicationForm}
        programTitle={applicationForm.programTitle}
      />
    </div>
  );
};

export default Index;