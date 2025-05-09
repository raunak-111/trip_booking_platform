
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">About XYZ Travel</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="lead text-xl text-muted-foreground mb-8">
              At XYZ Travel, we're passionate about creating unforgettable travel experiences that transform the way you see the world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2010, XYZ Travel began with a simple mission: to help travelers discover the world's most beautiful destinations while providing exceptional service and value. What started as a small team of passionate travelers has grown into a trusted travel company serving thousands of adventurers each year.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  We believe travel should be accessible, sustainable, and transformative. Our mission is to create meaningful connections between travelers and destinations, supporting local communities while minimizing environmental impact. Every trip we plan is designed to enrich your life through authentic experiences.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Why Choose XYZ Travel?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-muted/30 p-6 rounded-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Expert Planning</h3>
                <p className="text-muted-foreground text-sm">Personalized itineraries created by experienced travel specialists</p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground text-sm">Hand-picked accommodations and experiences vetted for excellence</p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M6 19v-3"></path>
                    <path d="M10 19v-3"></path>
                    <path d="M14 19v-3"></path>
                    <path d="M18 19v-3"></path>
                    <path d="M8 11V9"></path>
                    <path d="M16 11V9"></path>
                    <path d="M12 11V9"></path>
                    <path d="M2 15h20"></path>
                    <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.8Z"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">Dedicated assistance throughout your journey for peace of mind</p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Tailored Experiences</h3>
                <p className="text-muted-foreground text-sm">Custom trips designed around your interests and preferences</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            
            <p className="mb-8">
              Our diverse team of travel experts brings together decades of experience and a shared passion for exploration. From seasoned guides to destination specialists, each member of our team is committed to creating exceptional travel experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4"></div>
                <h3 className="font-bold">Sarah Johnson</h3>
                <p className="text-muted-foreground">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4"></div>
                <h3 className="font-bold">Michael Chen</h3>
                <p className="text-muted-foreground">Head of Experiences</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4"></div>
                <h3 className="font-bold">Elena Rodriguez</h3>
                <p className="text-muted-foreground">Customer Experience Director</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h2>
            
            <p className="mb-4">
              We believe in responsible travel that preserves destinations for future generations. Our sustainability initiatives include:
            </p>
            
            <ul className="list-disc pl-5 mb-8 space-y-2">
              <li>Carbon offset programs for all our trips</li>
              <li>Partnerships with local, environmentally conscious businesses</li>
              <li>Waste reduction strategies across all operations</li>
              <li>Support for conservation efforts in the destinations we visit</li>
              <li>Educational resources for travelers on responsible tourism</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
