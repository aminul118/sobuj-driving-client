import React from "react";
import { Button } from "@/components/ui/button";
import { Car, ShieldCheck, CheckCircle } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* background blur shapes */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-500/20 blur-3xl" />
      <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-gray-300">
              Trusted Driving Training Institute
            </span>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Learn to Drive with <br />
              <span className="text-red-500">Confidence & Control</span>
            </h1>

            <p className="max-w-xl text-gray-300 text-base md:text-lg">
              Professional instructors, modern vehicles, and step-by-step
              training designed for beginners and advanced learners.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600">
                Book a Lesson
              </Button>
              <Button size="lg" variant="secondary">
                View Courses
              </Button>
            </div>

            {/* features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Car className="h-5 w-5 text-red-500" />
                <span className="text-sm text-gray-300">
                  Expert Instructors
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-red-500" />
                <span className="text-sm text-gray-300">Safety Focused</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-red-500" />
                <span className="text-sm text-gray-300">High Pass Rate</span>
              </div>
            </div>
          </div>

          {/* Right visual card */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
              <h3 className="mb-4 text-xl font-semibold">Why Choose Us?</h3>

              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Certified & friendly trainers
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Flexible class schedules
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Modern dual-control cars
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
