import { GradientButton } from "@/components/GradientButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { LoginFormData } from "@/types";
import { Link } from "@tanstack/react-router";
import { Camera, Eye, EyeOff } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState<LoginFormData>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Auth logic will connect to Internet Identity
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-16 px-4">
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.594 0.238 10)" }}
      />

      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl gradient-cosmic glow-primary flex items-center justify-center">
            <Camera size={22} className="text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-foreground">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-sm">
            Sign in to your Capturo account
          </p>
        </div>

        <Card className="bg-card border-border/40 shadow-elevated">
          <CardHeader className="pb-4">
            <CardTitle className="font-display text-xl text-foreground text-center">
              Sign In
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              data-ocid="login-form"
            >
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
                  data-ocid="login-email"
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
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    className="bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth pr-10"
                    required
                    data-ocid="login-password"
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

              <GradientButton
                type="submit"
                variant="primary"
                size="md"
                className="w-full mt-2"
                disabled={isLoading}
                data-ocid="login-submit"
              >
                {isLoading ? "Signing in…" : "Sign In"}
              </GradientButton>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary hover:text-accent transition-smooth font-medium"
                >
                  Create one free
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
