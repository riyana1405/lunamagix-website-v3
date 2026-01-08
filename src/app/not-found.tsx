import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="text-8xl font-bold text-[var(--luna-purple)]/30">
        404
      </div>
      <h1 className="mt-4 text-3xl font-bold text-[var(--text-primary)]">
        Page Not Found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-[var(--text-secondary)]">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
        moved or doesn&apos;t exist.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Contact Support
          </Link>
        </Button>
      </div>
    </div>
  );
}
