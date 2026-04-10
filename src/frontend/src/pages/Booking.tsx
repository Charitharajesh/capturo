import { GradientButton } from "@/components/GradientButton";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSubmitBooking } from "@/hooks/useQueries";
import type { BookingFormData } from "@/types";
import { Calendar, CheckCircle2, DollarSign, MapPin, Tv } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const eventTypes = [
  "Concert",
  "Wedding",
  "Festival",
  "Birthday",
  "Corporate",
  "Sports",
  "Other",
];

export default function Booking() {
  const [form, setForm] = useState<BookingFormData>({
    eventName: "",
    location: "",
    budget: "",
    eventDate: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const submitBooking = useSubmitBooking();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEventType = (type: string) => {
    setForm((prev) => ({ ...prev, eventName: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitBooking.mutateAsync(form);
      setSubmitted(true);
      toast.success(
        "Booking request submitted! We'll match you with a creator soon.",
      );
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center py-16 px-4">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          data-ocid="booking-success"
        >
          <div className="w-20 h-20 rounded-full gradient-cosmic glow-primary flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-white" />
          </div>
          <h2 className="font-display font-bold text-3xl text-foreground mb-3">
            Booking Confirmed!
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Your request has been submitted. We're matching you with the best
            nearby creators for{" "}
            <span className="text-foreground font-medium">
              {form.eventName}
            </span>
            .
          </p>
          <GradientButton
            variant="primary"
            size="md"
            onClick={() => setSubmitted(false)}
            data-ocid="booking-new"
          >
            Book Another Event
          </GradientButton>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1.5 text-sm font-semibold rounded-full">
            📸 Instant Booking
          </Badge>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-3">
            Book a Creator
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Fill in your event details and we'll connect you with the perfect
            nearby creator.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Card className="bg-card border-border/40 shadow-elevated">
            <CardHeader>
              <CardTitle className="font-display text-xl text-foreground">
                Event Details
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Tell us about your event to find the right creator.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
                data-ocid="booking-form"
              >
                {/* Event type quick select */}
                <div className="flex flex-col gap-3">
                  <Label className="text-sm font-medium text-foreground">
                    Event Type
                  </Label>
                  <div
                    className="flex flex-wrap gap-2"
                    data-ocid="booking-event-types"
                  >
                    {eventTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => handleEventType(type)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-smooth ${
                          form.eventName === type
                            ? "gradient-cosmic text-white border-transparent glow-primary"
                            : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground bg-muted/10"
                        }`}
                        data-ocid={`event-type-${type.toLowerCase()}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="eventName"
                    className="text-sm font-medium text-foreground flex items-center gap-2"
                  >
                    <Tv size={15} className="text-primary" />
                    Event Name
                  </Label>
                  <Input
                    id="eventName"
                    name="eventName"
                    type="text"
                    placeholder="e.g. Alex's Wedding Reception"
                    value={form.eventName}
                    onChange={handleChange}
                    className="bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth"
                    required
                    data-ocid="booking-event-name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="location"
                    className="text-sm font-medium text-foreground flex items-center gap-2"
                  >
                    <MapPin size={15} className="text-primary" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="e.g. Mumbai, Bandra West"
                    value={form.location}
                    onChange={handleChange}
                    className="bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth"
                    required
                    data-ocid="booking-location"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="budget"
                      className="text-sm font-medium text-foreground flex items-center gap-2"
                    >
                      <DollarSign size={15} className="text-primary" />
                      Budget (₹)
                    </Label>
                    <Input
                      id="budget"
                      name="budget"
                      type="number"
                      min="500"
                      step="500"
                      placeholder="e.g. 5000"
                      value={form.budget}
                      onChange={handleChange}
                      className="bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth"
                      required
                      data-ocid="booking-budget"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="eventDate"
                      className="text-sm font-medium text-foreground flex items-center gap-2"
                    >
                      <Calendar size={15} className="text-primary" />
                      Event Date
                    </Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={handleChange}
                      className="bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth"
                      required
                      data-ocid="booking-date"
                    />
                  </div>
                </div>

                <GradientButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full mt-2"
                  disabled={submitBooking.isPending}
                  data-ocid="booking-submit"
                >
                  {submitBooking.isPending
                    ? "Submitting…"
                    : "Find Creators Near Me"}
                </GradientButton>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
