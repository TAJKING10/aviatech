import Link from "next/link";

export default function BookingReviewPage() {
  return (
    <div className="bg-[#f6f9ff] font-['Inter'] text-[#161c22] antialiased min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Progress Stepper */}
        <div className="mb-16">
          <div className="flex justify-between items-start">
            {[
              { num: "1", label: "Select Modules", done: true },
              { num: "2", label: "Your Details", done: true },
              { num: "3", label: "Review & Confirm", active: true },
              { num: "4", label: "Success", done: false },
            ].map((step, i) => (
              <div key={step.num} className="flex flex-col items-center gap-3 relative flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    step.done
                      ? "bg-[#0059bb] text-white shadow-md"
                      : step.active
                      ? "bg-[#0070ea] text-white shadow-xl ring-4 ring-[#0059bb]/10"
                      : "bg-[#dde3eb] text-[#414754]"
                  }`}
                >
                  {step.done ? (
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  ) : (
                    step.num
                  )}
                </div>
                <span
                  className={`font-['Inter'] text-[10px] uppercase tracking-[0.15em] text-center ${
                    step.done ? "font-bold text-[#0059bb]" : step.active ? "font-bold text-[#161c22]" : "font-semibold text-[#414754]/50"
                  }`}
                >
                  {step.label}
                </span>
                {i < 3 && (
                  <div
                    className={`absolute top-5 left-1/2 w-full h-[2px] -z-10 ${
                      step.done ? "bg-[#0059bb]" : "bg-[#dde3eb]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Review Card */}
        <div className="bg-white rounded-xl shadow-[0px_40px_80px_rgba(22,28,34,0.08)] overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="mb-10">
              <h1 className="font-headline text-3xl font-extrabold tracking-tight mb-2">
                Review Your Application
              </h1>
              <p className="text-[#414754] text-sm">
                Please review all details before submitting your training application.
              </p>
            </div>

            {/* Summary Sections */}
            <div className="space-y-8">
              {/* Selected Modules */}
              <div className="bg-[#eef4fc] rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-headline font-bold text-sm uppercase tracking-widest text-[#0059bb]">
                    Selected Modules
                  </h2>
                  <Link href="/booking" className="text-xs text-[#0059bb] font-bold uppercase tracking-widest hover:underline">
                    Edit
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {["M1 Mathematics", "M9 Human Factors", "M11A Turbine Aeroplane Aerodynamics"].map((mod) => (
                    <div key={mod} className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-[#0059bb] text-sm">check_circle</span>
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#e8eef6] flex gap-4 text-xs text-[#414754]">
                  <span className="font-bold">Category:</span> B1.1 Aeroplanes Turbine
                  <span className="font-bold ml-4">Path:</span> Training + Examination
                </div>
              </div>

              {/* Personal Details */}
              <div className="bg-[#eef4fc] rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-headline font-bold text-sm uppercase tracking-widest text-[#0059bb]">
                    Personal Information
                  </h2>
                  <Link href="/booking/details" className="text-xs text-[#0059bb] font-bold uppercase tracking-widest hover:underline">
                    Edit
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {[
                    { label: "Full Name", value: "Jean Dupont" },
                    { label: "Email", value: "j.dupont@airline.com" },
                    { label: "Phone", value: "+33 1 00 00 00 00" },
                    { label: "Organization", value: "Air France" },
                    { label: "Country", value: "France" },
                    { label: "Postal Code", value: "75001" },
                  ].map((item) => (
                    <div key={item.label}>
                      <span className="text-[#414754]/60 text-xs uppercase tracking-widest font-bold block mb-0.5">
                        {item.label}
                      </span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 w-5 h-5 rounded border-[#c1c6d7] text-[#0059bb] focus:ring-[#0059bb]" />
                <span className="text-sm text-[#414754]">
                  I confirm that all information provided is accurate and I agree to Aviatech&apos;s terms of service and privacy policy.
                </span>
              </label>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#e8eef6]">
              <Link
                href="/booking/details"
                className="flex items-center gap-2 text-[#414754] font-['Inter'] text-sm font-bold hover:text-[#0059bb] transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back
              </Link>
              <button className="bg-gradient-to-br from-[#0059bb] to-[#0070ea] text-white font-headline font-bold px-10 py-4 rounded-lg shadow-lg hover:opacity-90 transition-all inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">send</span>
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
