
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trips } from "@/data/trips";

const FeaturedDestinations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const featuredTrips = trips.slice(0, 5);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % featuredTrips.length);
  }, [featuredTrips.length]);

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? featuredTrips.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-2 text-gradient">Featured Destinations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of extraordinary destinations for
            your next unforgettable adventure.
          </p>
        </div>

        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative aspect-[16/9]">
            {featuredTrips.map((trip, idx) => (
              <div
                key={trip.id}
                className={`absolute inset-0 transform transition-transform duration-500 ease-in-out ${
                  idx === activeIndex
                    ? "translate-x-0 opacity-100"
                    : idx < activeIndex
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
              >
                <img
                  src={trip.thumbnailUrl}
                  alt={trip.destination}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {trip.destination}
                  </h3>
                  <p className="text-sm md:text-base opacity-90 mb-3">
                    {trip.location}
                  </p>
                  <div className="flex items-center mb-4">
                    <Star className="fill-yellow-500 stroke-yellow-500 h-4 w-4 mr-1" />
                    <span className="text-sm">
                      {trip.rating} ({trip.ratingCount} reviews)
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <p className="text-lg md:text-xl font-bold">
                      ${trip.price}{" "}
                      <span className="text-sm font-normal opacity-90">
                        / person
                      </span>
                    </p>
                    <div className="h-4 w-[1px] bg-white/30 hidden sm:block"></div>
                    <p className="text-sm opacity-90">{trip.duration}</p>
                    <Link to={`/trips/${trip.id}`}>
                      <Button className="mt-2 sm:mt-0 bg-primary hover:bg-primary/90">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 transition-all"
            aria-label="Previous destination"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 transition-all"
            aria-label="Next destination"
          >
            <ArrowRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {featuredTrips.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeIndex ? "w-8 bg-white" : "w-3 bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
