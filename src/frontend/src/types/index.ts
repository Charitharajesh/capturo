export interface BookingFormData {
  eventName: string;
  location: string;
  budget: string;
  eventDate: string;
}

export type UserRole = "user" | "creator";

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}
