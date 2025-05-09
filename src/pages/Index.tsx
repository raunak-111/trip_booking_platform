
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SearchForm from "@/components/search/SearchForm";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Star, TrendingUp } from "lucide-react";
import { trips } from "@/data/trips";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const popularDestinations = trips.slice(0, 3);

  return (
    <Layout transparent={true}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80"
            alt="Beautiful landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-24">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Discover Your Dream <br /> 
              <span className="text-accent">Adventure</span> Today
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-200">
              Explore the world's most breathtaking destinations with unforgettable experiences
              tailored just for you.
            </p>
          </div>

          <div className="mt-8 animate-scale-in">
            <SearchForm className="max-w-5xl mx-auto" />
          </div>
        </div>
      </section>

      <FeaturedDestinations />

      {/* Popular Destinations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-display font-bold mb-2 text-gradient">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most-loved vacation spots with exceptional experiences and reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((destination) => (
              <Link 
                to={`/trips/${destination.id}`}
                key={destination.id}
                className="block group"
              >
                <div className="glass-card rounded-xl overflow-hidden shadow-lg hover-scale">
                  <div className="relative h-60">
                    <img
                      src={destination.thumbnailUrl}
                      alt={destination.destination}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/70 text-foreground dark:text-white rounded-full px-3 py-1 text-sm flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1 text-accent" />
                      Popular
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {destination.destination}
                    </h3>
                    <div className="flex items-center mb-3">
                      <MapPin className="w-4 h-4 text-muted-foreground mr-1" />
                      <span className="text-sm text-muted-foreground">
                        {destination.location}
                      </span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="mr-1">{destination.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({destination.ratingCount} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">
                        ${destination.price}
                        <span className="text-sm font-normal text-muted-foreground">
                          {" "}
                          / person
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {destination.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/search">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-display font-bold mb-2 text-gradient">Why Choose XYZ Travel</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to creating unforgettable experiences with attention to detail and personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 glass-card rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-5">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
              <p className="text-muted-foreground">
                We craft tailor-made experiences that match your unique
                preferences and travel style.
              </p>
            </div>

            <div className="text-center p-6 glass-card rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-5">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Best Price Guarantee</h3>
              <p className="text-muted-foreground">
                We promise the best rates and will match any lower price you find elsewhere.
              </p>
            </div>

            <div className="text-center p-6 glass-card rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-5">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our dedicated team is available around the clock to assist with any travel needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80"
            alt="Ocean waves"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join thousands of satisfied travelers exploring the world with XYZ Travel.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/search">Explore Destinations</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
