import { AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

export default function VerificationNote({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-lg border border-accent-dark/40 bg-accent/10 p-4 text-sm text-ink">
      <AlertTriangle size={20} className="mt-0.5 shrink-0 text-accent-dark" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}
