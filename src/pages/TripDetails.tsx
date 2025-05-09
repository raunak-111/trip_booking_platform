
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Star, Clock, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { trips } from "@/data/trips";
import BookingForm from "@/components/booking/BookingForm";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TripDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [trip, setTrip] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API fetch
    setTimeout(() => {
      const foundTrip = trips.find(t => t.id === Number(id));
      setTrip(foundTrip);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-72 bg-muted rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-36 bg-muted rounded"></div>
              <div className="h-36 bg-muted rounded"></div>
              <div className="h-36 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!trip) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Trip not found</h2>
          <p className="mb-4">The trip you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="space-y-6 py-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold">{trip.destination}</h1>
            <div className="flex items-center mt-2 text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{trip.location}</span>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {trip.images.map((image: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[16/9] relative overflow-hidden rounded-xl">
                      <img
                        src={image}
                        alt={`${trip.destination} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Trip Details & Booking */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                    <Clock className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="font-medium">{trip.duration}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                    <Star className="h-6 w-6 text-yellow-500 mb-2" />
                    <span className="text-sm text-muted-foreground">Rating</span>
                    <span className="font-medium">{trip.rating} ({trip.ratingCount})</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Best Time</span>
                    <span className="font-medium">Year-round</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="font-medium">{trip.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Experience the breathtaking beauty and unique culture of {trip.destination}. 
                  This {trip.duration} journey takes you through the heart of {trip.location}, 
                  giving you ample time to explore local landmarks, taste authentic cuisine, 
                  and create memories that will last a lifetime.
                </p>
              </div>

              {/* Itinerary */}
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
                <div className="space-y-4">
                  {trip.itinerary.map((day: string, index: number) => (
                    <div key={index} className="flex">
                      <div className="mr-4 relative">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                          {index + 1}
                        </div>
                        {index < trip.itinerary.length - 1 && (
                          <div className="absolute top-8 bottom-0 left-4 w-0.5 bg-border -translate-x-1/2 h-full"></div>
                        )}
                      </div>
                      <div className="pb-6">
                        <h4 className="font-bold">Day {index + 1}</h4>
                        <p className="text-muted-foreground">{day}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Inclusions</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Accommodation in {trip.destination}</li>
                      <li>Daily breakfast and selected meals</li>
                      <li>Guided tours as per itinerary</li>
                      <li>Airport transfers</li>
                      <li>Local transportation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Exclusions</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>International flights</li>
                      <li>Travel insurance</li>
                      <li>Personal expenses</li>
                      <li>Optional activities</li>
                      <li>Tips and gratuities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-1">
              <BookingForm 
                tripId={id || ""}
                tripName={trip.destination}
                tripPrice={Number(trip.price)}
                tripDuration={trip.duration}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TripDetails;
