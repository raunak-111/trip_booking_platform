
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8">
                We'd love to hear from you! Whether you have questions about our trips, need assistance with booking, or want to provide feedback, our team is here to help.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      XYZ Travel Headquarters<br />
                      123 Adventure Street<br />
                      Wanderlust City, WL 54321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      General Inquiries: info@xyztravel.com<br />
                      Booking Support: bookings@xyztravel.com<br />
                      Customer Service: support@xyztravel.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      Toll-Free: 1-800-XYZ-TRVL (1-800-999-8785)<br />
                      International: +1 (555) 123-4567<br />
                      Hours: Mon-Fri 9AM-6PM EST
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>Monday - Friday:</div>
                  <div>9:00 AM - 6:00 PM EST</div>
                  <div>Saturday:</div>
                  <div>10:00 AM - 4:00 PM EST</div>
                  <div>Sunday:</div>
                  <div>Closed</div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  *Emergency support available 24/7 for travelers on active trips.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="text-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="text-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className="text-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="text-foreground"
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold mb-2">How do I book a trip?</h3>
                <p className="text-muted-foreground text-sm">
                  You can book directly through our website by selecting your desired trip and following the booking process, or contact our booking team for personalized assistance.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground text-sm">
                  We accept all major credit cards, bank transfers, and PayPal. Some destinations also offer payment plans.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold mb-2">What is your cancellation policy?</h3>
                <p className="text-muted-foreground text-sm">
                  Cancellation policies vary by trip. Please refer to the specific trip details page or contact our support team for more information.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold mb-2">Do you offer travel insurance?</h3>
                <p className="text-muted-foreground text-sm">
                  While we don't sell insurance directly, we strongly recommend purchasing travel insurance and can suggest trusted providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
