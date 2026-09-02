import { profile } from "@/lib/cv";

export function Masthead() {
  return (
    <header>
      <h1 className="font-display text-[clamp(2.4rem,7vw,3.6rem)] font-bold leading-none tracking-[-0.022em] text-balance">
        {profile.name}
      </h1>

      <p className="mb-4 mt-2.5 font-mono text-[0.78rem] uppercase tracking-[0.13em] text-accent">
        {profile.role}
      </p>

      <div className="flex flex-wrap gap-x-[18px] gap-y-1.5 border-t border-rule pt-4 text-[0.94rem] text-ink-2">
        <span>{profile.location}</span>
        <a className="hover:text-accent" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="hover:text-accent" href={profile.github.href}>
          {profile.github.label}
        </a>
        <a className="hover:text-accent" href={profile.linkedin.href}>
          {profile.linkedin.label}
        </a>
      </div>
    </header>
  );
}
