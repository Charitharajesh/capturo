import { GradientButton } from "@/components/GradientButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { RegisterFormData, UserRole } from "@/types";
import { Link } from "@tanstack/react-router";
import { Aperture, Camera, Eye, EyeOff, User } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const roles: {
  value: UserRole;
  label: string;
  icon: typeof User;
  description: string;
}[] = [
  {
    value: "user",
    label: "Event Attendee",
    icon: User,
    description: "Book creators for your events",
  },
  {
    value: "creator",
    label: "Content Creator",
    icon: Aperture,
    description: "Offer your skills at local events",
  },
];

export default function Register() {
  const [form, setForm] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-16 px-4">
      <div
        className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.398 0.176 285)" }}
      />

      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl gradient-cosmic glow-primary flex items-center justify-center">
            <Camera size={22} className="text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-foreground">
            Create your account
          </h1>
          <p className="text-muted-foreground text-sm">
            Join Capturo and capture more moments
          </p>
        </div>

        <Card className="bg-card border-border/40 shadow-elevated">
          <CardHeader className="pb-4">
            <CardTitle className="font-display text-xl text-foreground text-center">
              Register
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              data-ocid="register-form"
            >
              {/* Role selector */}
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-medium text-foreground">
                  I am a…
                </Label>
                <div
                  className="grid grid-cols-2 gap-3"
                  data-ocid="register-role-selector"
                >
                  {roles.map((role) => (
                    <button
                      type="button"
                      key={role.value}
                      onClick={() =>
                        setForm((p) => ({ ...p, role: role.value }))
                      }
                      className={cn(
                        "flex flex-col items-center gap-2 p-4 rounded-xl border transition-smooth text-center",
                        form.role === role.value
                          ? "border-primary/60 bg-primary/10 text-primary"
                          : "border-border/40 bg-muted/10 text-muted-foreground hover:border-primary/30 hover:bg-muted/20",
                      )}
                      data-ocid={`role-${role.value}`}
                    >
                      <role.icon size={20} />
                      <span className="font-semibold text-xs">
                        {role.label}
                      </span>
                      <span className="text-xs opacity-70 leading-tight">
                        {role.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Full name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Alex Johnson"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth"
                  required
                  data-ocid="register-name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth"
                  required
                  data-ocid="register-email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-foreground"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Min. 8 characters"
                    value={form.password}
                    onChange={handleChange}
                    className="bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth pr-10"
                    minLength={8}
                    required
                    data-ocid="register-password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-foreground"
                >
                  Confirm password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Repeat your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className={cn(
                    "bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth",
                    form.confirmPassword &&
                      form.password !== form.confirmPassword &&
                      "border-destructive/60",
                  )}
                  required
                  data-ocid="register-confirm-password"
                />
                {form.confirmPassword &&
                  form.password !== form.confirmPassword && (
                    <p className="text-xs text-destructive">
                      Passwords do not match
                    </p>
                  )}
              </div>

              <GradientButton
                type="submit"
                variant="primary"
                size="md"
                className="w-full mt-2"
                disabled={
                  isLoading ||
                  (!!form.confirmPassword &&
                    form.password !== form.confirmPassword)
                }
                data-ocid="register-submit"
              >
                {isLoading ? "Creating account…" : "Create Account"}
              </GradientButton>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:text-accent transition-smooth font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
