import React, { useState } from "react";

const roles = [
  {
    title: "Engineer",
    description: "Maintain ship systems, repair critical infrastructure, and ensure mission continuity.",
  },
  {
    title: "Navigator",
    description: "Plot deep-space routes and monitor long-range transmission anomalies.",
  },
  {
    title: "Security Officer",
    description: "Protect company assets, enforce protocol, and manage crew compliance.",
  },
  {
    title: "Science Officer",
    description: "Analyze biological, geological, and atmospheric discoveries under corporate directive.",
  },
  {
    title: "Medical Technician",
    description: "Preserve crew health during extended cryosleep and hazardous field operations.",
  },
  {
    title: "Cargo Specialist",
    description: "Oversee resource transport, freight integrity, and classified cargo handling.",
  },
];

export default function WeylandYutaniRecruitmentPortal() {
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [applicationStarted, setApplicationStarted] = useState(false);

  return (
    <main className="min-h-screen bg-[#050808] text-green-100 font-mono selection:bg-green-300 selection:text-black overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:100%_4px] opacity-20" />
      <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_65%,rgba(0,0,0,0.85)_100%)]" />

      <header className="sticky top-0 z-30 border-b border-green-400/20 bg-black/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-green-300/60 text-xs tracking-widest text-green-200 shadow-[0_0_20px_rgba(34,197,94,0.25)]">
              WY
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.35em] text-green-200">WEYLAND-YUTANI</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-green-500/70">Building Better Worlds</p>
            </div>
          </div>

          <div className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-green-300/80 md:flex">
            <a href="#missions" className="hover:text-green-100">Missions</a>
            <a href="#roles" className="hover:text-green-100">Careers</a>
            <a href="#apply" className="hover:text-green-100">Apply</a>
            <a href="#footer" className="hover:text-green-100">Login</a>
          </div>
        </nav>
      </header>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,197,94,0.18),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.2),#050808)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.6em] text-green-400/80">Commercial Deep-Space Recruitment Division</p>
          <h1 className="text-5xl font-black uppercase tracking-[0.15em] text-green-100 drop-shadow-[0_0_25px_rgba(134,239,172,0.35)] md:text-7xl">
            Expand Human Frontiers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-100/75 md:text-lg">
            Join the next deep-space commercial expedition. Secure your future, serve human progress, and help Weyland-Yutani build better worlds.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#apply"
              className="group border border-green-300 bg-green-300 px-8 py-4 text-sm font-bold uppercase tracking-[0.3em] text-black shadow-[0_0_30px_rgba(134,239,172,0.35)] transition hover:bg-transparent hover:text-green-200"
            >
              Apply Now
            </a>
            <a
              href="#missions"
              className="border border-green-300/40 px-8 py-4 text-sm uppercase tracking-[0.3em] text-green-200 transition hover:border-green-200 hover:bg-green-300/10"
            >
              View Mission
            </a>
          </div>

          <p className="mt-12 text-xs uppercase tracking-[0.35em] text-green-500/60">
            Opportunity // Discipline // Discovery // Compliance
          </p>
        </div>
      </section>

      <section className="relative z-10 border-y border-green-400/20 bg-green-950/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-green-400/70">Employee Benefits</p>
              <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.12em] text-green-100">Why Join Weyland-Yutani?</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-green-100/60">
              Every mission is backed by industry-leading support systems, advanced corporate technology, and carefully optimized crew-management protocols.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["Competitive Pay", "Hazard-adjusted earnings for qualified crew members."],
              ["Exploration Bonus", "Additional compensation for frontier-zone assignments."],
              ["Safety Protocols", "Automated monitoring and emergency procedure compliance."],
              ["Off-World Travel", "Experience distant systems beyond ordinary human reach."],
            ].map(([title, text]) => (
              <div key={title} className="border border-green-300/20 bg-black/40 p-6 shadow-[0_0_25px_rgba(34,197,94,0.08)] transition hover:border-green-300/70 hover:bg-green-300/5">
                <h3 className="text-lg font-bold uppercase tracking-[0.12em] text-green-200">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-green-100/60">{text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-green-500/50">
            *Terms subject to mission conditions. Crew compliance required. Contract revision possible during active deployment.
          </p>
          <p className="mt-2 text-[9px] uppercase tracking-[0.35em] text-green-950 transition hover:text-red-400">
            Priority: specimen acquisition // Crew expendable
          </p>
        </div>
      </section>

      <section id="roles" className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-green-400/70">Open Positions</p>
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.12em] text-green-100">Available Crew Roles</h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {roles.map((role) => (
                <button
                  key={role.title}
                  onClick={() => setSelectedRole(role)}
                  className={`border p-5 text-left transition ${
                    selectedRole.title === role.title
                      ? "border-green-300 bg-green-300/10 text-green-100 shadow-[0_0_25px_rgba(34,197,94,0.18)]"
                      : "border-green-300/20 bg-black/30 text-green-100/70 hover:border-green-300/60 hover:bg-green-300/5"
                  }`}
                >
                  <span className="text-sm font-bold uppercase tracking-[0.2em]">{role.title}</span>
                </button>
              ))}
            </div>
          </div>

          <aside className="border border-green-300/30 bg-black/60 p-8 shadow-[0_0_35px_rgba(34,197,94,0.12)]">
            <p className="text-xs uppercase tracking-[0.35em] text-green-400/70">Role Profile</p>
            <h3 className="mt-4 text-2xl font-bold uppercase tracking-[0.15em] text-green-100">{selectedRole.title}</h3>
            <p className="mt-5 leading-7 text-green-100/65">{selectedRole.description}</p>
            <div className="mt-8 border-t border-green-300/20 pt-6 text-xs uppercase tracking-[0.2em] text-green-500/70">
              Clearance Level: Pending<br />
              Cryosleep Required: Yes<br />
              Family Contact Delay: 12-36 Months<br />
              Risk Level: <span className="text-green-200 hover:text-red-400">Low</span>
            </div>
          </aside>
        </div>
      </section>

      <section id="missions" className="relative z-10 border-y border-green-400/20 bg-black/50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.35em] text-green-400/70">Current Mission</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border border-green-300/30 bg-green-300/5 p-8">
              <h2 className="text-3xl font-bold uppercase tracking-[0.12em] text-green-100">Nostromo Freight Expedition</h2>
              <p className="mt-5 leading-7 text-green-100/65">
                A routine commercial transport assignment supporting resource movement across the outer rim. Crew members will maintain vessel systems, monitor cargo, and respond to navigational updates as directed by central command.
              </p>
            </div>

            <div className="grid gap-3 text-sm uppercase tracking-[0.18em] text-green-100/75">
              {[
                ["Destination", "Outer Rim"],
                ["Duration", "18 Months Estimated"],
                ["Objective", "Resource Transport"],
                ["Crew Status", "Replaceable / Rotational"],
                ["Risk Level", "LOW"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border border-green-300/20 bg-black/50 p-5">
                  <span className="text-green-500/80">{label}</span>
                  <span className={label === "Risk Level" ? "text-green-200 hover:text-red-400" : "text-green-100"}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-3xl border border-green-300/30 bg-green-950/10 p-8 text-center shadow-[0_0_45px_rgba(34,197,94,0.12)] md:p-12">
          {!applicationStarted ? (
            <>
              <p className="text-xs uppercase tracking-[0.35em] text-green-400/70">Begin Application</p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.12em] text-green-100">Ready To Begin Your Journey?</h2>
              <p className="mx-auto mt-6 max-w-xl leading-7 text-green-100/65">
                By beginning your application, you acknowledge Weyland-Yutani authority over mission assignment, communication delay, emergency procedure interpretation, and classified objective disclosure.
              </p>
              <button
                onClick={() => setApplicationStarted(true)}
                className="mt-9 border border-green-300 bg-green-300 px-8 py-4 text-sm font-bold uppercase tracking-[0.3em] text-black transition hover:bg-transparent hover:text-green-200"
              >
                Start Application
              </button>
            </>
          ) : (
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-green-400/70">Application Status</p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.12em] text-green-100">Candidate Selected</h2>
              <div className="mt-8 space-y-3 text-sm uppercase tracking-[0.18em] text-green-100/70">
                <p>&gt; Identity confirmed...</p>
                <p>&gt; Role preference ignored...</p>
                <p>&gt; Mission assignment generated...</p>
                <p className="text-red-400">&gt; Return probability: data restricted</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <footer id="footer" className="relative z-10 border-t border-green-400/20 bg-black px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-xs uppercase tracking-[0.25em] text-green-500/60 md:flex-row">
          <p>Weyland-Yutani Corp © 2122</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-200">Privacy</a>
            <a href="#" className="hover:text-green-200">Terms</a>
            <a href="#" className="hover:text-green-200">Compliance</a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-7xl text-[9px] uppercase tracking-[0.4em] text-black transition hover:text-red-500">
          Special Order 937: Ensure return of organism for analysis. All other considerations secondary. Crew expendable.
        </p>
      </footer>
    </main>
  );
}
