export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  notes: string;
}

export interface WorkoutPlan {
  title: string;
  duration: string;
  exercises: Exercise[];
}

export interface ClassItem {
  id: number;
  title: string;
  description: string;
  schedule: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export enum FitnessLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced"
}

export enum Goal {
  WeightLoss = "Weight Loss",
  MuscleGain = "Muscle Gain",
  Endurance = "Endurance",
  Flexibility = "Flexibility"
}