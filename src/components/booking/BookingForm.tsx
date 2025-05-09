
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Define form schema with validation
const bookingFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  travelDate: z.date({
    required_error: "Please select a travel date.",
  }),
  travelers: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 1, {
    message: "Please enter a valid number of travelers.",
  }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

interface BookingFormProps {
  tripId: string;
  tripName: string;
  tripPrice: number;
  tripDuration: string;
}

const BookingForm = ({ tripId, tripName, tripPrice, tripDuration }: BookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingFormValues | null>(null);
  const [totalPrice, setTotalPrice] = useState(tripPrice);
  const navigate = useNavigate();
  
  // Initialize form
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      travelers: "1",
    },
  });
  
  // Watch travelers value to update price in real-time
  const travelers = form.watch("travelers");
  
  // Update total price whenever travelers changes
  useState(() => {
    const numTravelers = Number(travelers) || 1;
    setTotalPrice(tripPrice * numTravelers);
  });
  
  // Handle form submission
  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Set booking details for confirmation
      setBookingDetails(data);
      setShowConfirmation(true);
      
      // Reset form 
      form.reset();
    } catch (error) {
      toast.error("There was an error processing your booking");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Calculate total price based on number of travelers
  const calculateTotal = () => {
    const numTravelers = Number(travelers) || 1;
    return tripPrice * numTravelers;
  };
  
  // Handle booking confirmation
  const handleConfirmBooking = () => {
    setShowConfirmation(false);
    toast.success("Booking confirmed! Thank you for choosing XYZ Travel.");
    navigate("/");
  };
  
  return (
    <div className="glass-card p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-4">Book Your Trip</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John" 
                      {...field} 
                      className="text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Doe" 
                      {...field} 
                      className="text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      {...field} 
                      className="text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="(123) 456-7890" 
                      {...field} 
                      className="text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="travelDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Travel Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal text-foreground",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="travelers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Travelers</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="1" 
                      {...field} 
                      onChange={(e) => {
                        field.onChange(e);
                        setTotalPrice(calculateTotal());
                      }}
                      className="text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="border-t border-border pt-4 mt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">Trip Price (per person)</span>
              <span>${tripPrice}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">Number of Travelers</span>
              <span>{Number(travelers) || 1}</span>
            </div>
            <div className="flex justify-between items-center font-bold">
              <span>Total Price</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full mt-4" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing
              </>
            ) : (
              "Book Now"
            )}
          </Button>
        </form>
      </Form>
      
      {/* Booking Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Booking Confirmation</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Your trip has been booked successfully!
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="glass-card p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2">Trip Details</h4>
              <p className="text-sm mb-1"><span className="font-medium">Destination:</span> {tripName}</p>
              <p className="text-sm mb-1"><span className="font-medium">Duration:</span> {tripDuration}</p>
              <p className="text-sm mb-1"><span className="font-medium">Travel Date:</span> {bookingDetails?.travelDate ? format(bookingDetails.travelDate, "PPP") : "N/A"}</p>
              <p className="text-sm mb-1"><span className="font-medium">Travelers:</span> {bookingDetails?.travelers || "1"}</p>
            </div>
            
            <div className="glass-card p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2">Traveler Information</h4>
              <p className="text-sm mb-1"><span className="font-medium">Name:</span> {bookingDetails?.firstName} {bookingDetails?.lastName}</p>
              <p className="text-sm mb-1"><span className="font-medium">Email:</span> {bookingDetails?.email}</p>
              <p className="text-sm mb-1"><span className="font-medium">Phone:</span> {bookingDetails?.phone}</p>
            </div>
            
            <div className="glass-card p-4 rounded-lg">
              <h4 className="font-medium mb-2">Payment Summary</h4>
              <div className="flex justify-between text-sm mb-1">
                <span>Trip Price (per person)</span>
                <span>${tripPrice}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span>Number of Travelers</span>
                <span>{bookingDetails?.travelers || "1"}</span>
              </div>
              <div className="border-t border-border my-2"></div>
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={handleConfirmBooking}>
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingForm;
