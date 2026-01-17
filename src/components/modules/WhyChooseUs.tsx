import React from "react";
import { Car, ShieldCheck, Users, Clock } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Why Choose Our Driving School?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We focus on safety, confidence, and real-world driving skills — not
            just passing the test.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <Car className="mb-4 h-8 w-8 text-red-500" />
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Modern Vehicles
            </h3>
            <p className="text-sm text-slate-600">
              Train with well-maintained, dual-control cars for maximum safety.
            </p>
          </div>

          <div className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <Users className="mb-4 h-8 w-8 text-red-500" />
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Expert Instructors
            </h3>
            <p className="text-sm text-slate-600">
              Friendly, certified trainers who guide you step by step.
            </p>
          </div>

          <div className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <ShieldCheck className="mb-4 h-8 w-8 text-red-500" />
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Safety First
            </h3>
            <p className="text-sm text-slate-600">
              Defensive driving techniques focused on real road conditions.
            </p>
          </div>

          <div className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <Clock className="mb-4 h-8 w-8 text-red-500" />
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Flexible Timing
            </h3>
            <p className="text-sm text-slate-600">
              Morning and evening slots that fit your busy schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
