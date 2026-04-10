import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, C as Camera, a as cn, G as GradientButton, L as Link } from "./index-C5Vn4MYE.js";
import { m as motion, C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./proxy-Ct9ybTzp.js";
import { L as Label, I as Input } from "./label-FkzCZSwB.js";
import { E as EyeOff, a as Eye } from "./eye-YbVPwYcc.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m14.31 8 5.74 9.94", key: "1y6ab4" }],
  ["path", { d: "M9.69 8h11.48", key: "1wxppr" }],
  ["path", { d: "m7.38 12 5.74-9.94", key: "1grp0k" }],
  ["path", { d: "M9.69 16 3.95 6.06", key: "libnyf" }],
  ["path", { d: "M14.31 16H2.83", key: "x5fava" }],
  ["path", { d: "m16.62 12-5.74 9.94", key: "1vwawt" }]
];
const Aperture = createLucideIcon("aperture", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const roles = [
  {
    value: "user",
    label: "Event Attendee",
    icon: User,
    description: "Book creators for your events"
  },
  {
    value: "creator",
    label: "Content Creator",
    icon: Aperture,
    description: "Offer your skills at local events"
  }
];
function Register() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user"
  });
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1e3));
    setIsLoading(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "min-h-[80vh] flex items-center justify-center py-16 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute top-1/3 right-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none",
        style: { background: "oklch(0.398 0.176 285)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "w-full max-w-md relative z-10",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl gradient-cosmic glow-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 22, className: "text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl text-foreground", children: "Create your account" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Join Capturo and capture more moments" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border/40 shadow-elevated", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-xl text-foreground text-center", children: "Register" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "form",
                {
                  onSubmit: handleSubmit,
                  className: "flex flex-col gap-5",
                  "data-ocid": "register-form",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium text-foreground", children: "I am a…" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "grid grid-cols-2 gap-3",
                          "data-ocid": "register-role-selector",
                          children: roles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => setForm((p) => ({ ...p, role: role.value })),
                              className: cn(
                                "flex flex-col items-center gap-2 p-4 rounded-xl border transition-smooth text-center",
                                form.role === role.value ? "border-primary/60 bg-primary/10 text-primary" : "border-border/40 bg-muted/10 text-muted-foreground hover:border-primary/30 hover:bg-muted/20"
                              ),
                              "data-ocid": `role-${role.value}`,
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(role.icon, { size: 20 }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-xs", children: role.label }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-70 leading-tight", children: role.description })
                              ]
                            },
                            role.value
                          ))
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "name",
                          className: "text-sm font-medium text-foreground",
                          children: "Full name"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "name",
                          name: "name",
                          type: "text",
                          autoComplete: "name",
                          placeholder: "Alex Johnson",
                          value: form.name,
                          onChange: handleChange,
                          className: "bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth",
                          required: true,
                          "data-ocid": "register-name"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "email",
                          className: "text-sm font-medium text-foreground",
                          children: "Email address"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "email",
                          name: "email",
                          type: "email",
                          autoComplete: "email",
                          placeholder: "you@example.com",
                          value: form.email,
                          onChange: handleChange,
                          className: "bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth",
                          required: true,
                          "data-ocid": "register-email"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "password",
                          className: "text-sm font-medium text-foreground",
                          children: "Password"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "password",
                            name: "password",
                            type: showPassword ? "text" : "password",
                            autoComplete: "new-password",
                            placeholder: "Min. 8 characters",
                            value: form.password,
                            onChange: handleChange,
                            className: "bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth pr-10",
                            minLength: 8,
                            required: true,
                            "data-ocid": "register-password"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth",
                            onClick: () => setShowPassword((v) => !v),
                            "aria-label": showPassword ? "Hide password" : "Show password",
                            children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 16 })
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "confirmPassword",
                          className: "text-sm font-medium text-foreground",
                          children: "Confirm password"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "confirmPassword",
                          name: "confirmPassword",
                          type: "password",
                          autoComplete: "new-password",
                          placeholder: "Repeat your password",
                          value: form.confirmPassword,
                          onChange: handleChange,
                          className: cn(
                            "bg-muted/20 border-border/60 focus:border-primary/60 transition-smooth",
                            form.confirmPassword && form.password !== form.confirmPassword && "border-destructive/60"
                          ),
                          required: true,
                          "data-ocid": "register-confirm-password"
                        }
                      ),
                      form.confirmPassword && form.password !== form.confirmPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: "Passwords do not match" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      GradientButton,
                      {
                        type: "submit",
                        variant: "primary",
                        size: "md",
                        className: "w-full mt-2",
                        disabled: isLoading || !!form.confirmPassword && form.password !== form.confirmPassword,
                        "data-ocid": "register-submit",
                        children: isLoading ? "Creating account…" : "Create Account"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                "Already have an account?",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/login",
                    className: "text-primary hover:text-accent transition-smooth font-medium",
                    children: "Sign in"
                  }
                )
              ] }) })
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  Register as default
};
