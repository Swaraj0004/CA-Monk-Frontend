import {
  TrendingUp,
  Briefcase,
  FileText,
  Brain,
  Cpu,
} from "lucide-react";

export const categoryConfig: Record<
  string,
  {
    icon: any;
    color: string;
    badge: string;
  }
> = {
  FINANCE: {
    icon: TrendingUp,
    color: "text-purple-600",
    badge: "bg-purple-100 text-purple-700",
  },
  CAREER: {
    icon: Briefcase,
    color: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
  },
  REGULATIONS: {
    icon: FileText,
    color: "text-orange-600",
    badge: "bg-orange-100 text-orange-700",
  },
  SKILLS: {
    icon: Brain,
    color: "text-green-600",
    badge: "bg-green-100 text-green-700",
  },
  TECHNOLOGY: {
    icon: Cpu,
    color: "text-slate-600",
    badge: "bg-slate-100 text-slate-700",
  },
};
