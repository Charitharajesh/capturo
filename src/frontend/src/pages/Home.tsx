import { GradientButton } from "@/components/GradientButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Calendar, Rocket, ShieldCheck, Star, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Calendar,
    title: "Instant Booking",
    description:
      "Find and book nearby professional creators in seconds. Real-time availability for your event.",
    badge: "Fast",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Receive edited photos and videos within minutes of your event. Straight to your phone.",
    badge: "Real-time",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Creators",
    description:
      "Every creator is vetted and verified. Professional-grade results with us and fare commitments.",
    badge: "Verified",
  },
];

const stats = [
  { icon: Users, value: "12,000+", label: "Happy Clients" },
  { icon: Star, value: "4.9★", label: "Average Rating" },
  { icon: Zap, value: "<5 min", label: "Avg. Delivery" },
  { icon: Calendar, value: "500+", label: "Creators Active" },
];

const howItWorks = [
  {
    step: "01",
    title: "Share your event details",
    description: "Tell us your event type, location, and preferred style.",
  },
  {
    step: "02",
    title: "Match with a creator",
    description: "We instantly connect you with nearby verified creators.",
  },
  {
    step: "03",
    title: "Receive your content",
    description:
      "Get professionally captured photos and videos delivered instantly.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        id="hero"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/hero-capturo.dim_1400x700.jpg"
            alt="Capturo hero background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
        </div>

        {/* Cosmic glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.398 0.176 285)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: "oklch(0.594 0.238 10)" }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold rounded-full">
              🎉 On-Demand Event Photography
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Capture Moments
            <span className="block mt-2 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Instantly
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Book nearby creators and get your event content in minutes.
            Concerts, weddings, festivals — we've got you covered.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link to="/booking">
              <GradientButton
                variant="primary"
                size="lg"
                data-ocid="hero-cta-book"
              >
                Book Now
              </GradientButton>
            </Link>
            <Link to="/register">
              <GradientButton
                variant="outline"
                size="lg"
                glowing={false}
                data-ocid="hero-cta-register"
              >
                Become a Creator
              </GradientButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-card border-y border-border/40 py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <stat.icon size={22} className="text-primary" />
                <p className="font-display font-bold text-2xl text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background" id="features">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Why Capturo
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Everything you need for flawless event content
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card
                  className="bg-card border-border/40 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth group h-full"
                  data-ocid={`feature-card-${i}`}
                >
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-cosmic-subtle border border-primary/20 flex items-center justify-center group-hover:glow-primary transition-smooth">
                      <feature.icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display font-semibold text-lg text-foreground">
                          {feature.title}
                        </h3>
                        <Badge className="text-xs bg-accent/20 text-accent border-accent/30 px-2 py-0.5">
                          {feature.badge}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <Link
                      to="/booking"
                      className="mt-auto text-sm font-semibold text-primary hover:text-accent transition-smooth inline-flex items-center gap-1 group/link"
                    >
                      Learn More
                      <span className="translate-x-0 group-hover/link:translate-x-1 transition-smooth">
                        ↗
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-muted/30" id="how-it-works">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Simple Process
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              How it works
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                className="flex flex-col items-center text-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="w-14 h-14 rounded-full gradient-cosmic glow-primary flex items-center justify-center font-display font-bold text-lg text-white shadow-glow animate-glow-pulse">
                  {step.step}
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden p-10 sm:p-14 text-center shadow-elevated"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 gradient-cosmic opacity-90" />
            <div className="absolute inset-0 glow-primary opacity-30" />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                Ready to capture your story?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of users who trust Capturo for their most
                important moments.
              </p>
              <Link to="/booking">
                <GradientButton
                  variant="outline"
                  size="lg"
                  className="border-white/60 text-white hover:bg-white/10"
                  glowing={false}
                  data-ocid="cta-banner-book"
                >
                  Book a Creator Now
                </GradientButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
