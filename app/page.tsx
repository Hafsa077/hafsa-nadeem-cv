import { DefinitionRows } from "@/components/DefinitionRows";
import { Entry } from "@/components/Entry";
import { Masthead } from "@/components/Masthead";
import { Metrics } from "@/components/Metrics";
import { Section } from "@/components/Section";
import {
  credentials,
  education,
  profile,
  projects,
  roles,
  skills,
} from "@/lib/cv";

export default function Home() {
  return (
    <main className="mx-auto max-w-sheet px-7 pb-24 pt-14">
      <Masthead />
      <Metrics />

      <Section title="Summary">
        <p className="max-w-measure text-[1.06rem] leading-relaxed">
          {profile.summary}
        </p>
      </Section>

      <Section title="Experience">
        {roles.map((role) => (
          <Entry
            key={role.org}
            rail={
              <>
                {role.from} —<br />
                {role.to}
              </>
            }
            badge={role.current ? "Current" : undefined}
            heading={
              <>
                {role.title} — <span className="text-accent">{role.org}</span>
                {role.kind ? (
                  <span className="text-[0.86rem] font-medium text-ink-3">
                    {" "}
                    ({role.kind})
                  </span>
                ) : null}
              </>
            }
            where={
              <>
                {role.where}
                {role.link ? (
                  <>
                    {" · "}
                    <a
                      className="not-italic text-accent hover:underline"
                      href={role.link.href}
                    >
                      {role.link.label}
                    </a>
                  </>
                ) : null}
              </>
            }
            stack={role.stack}
            bullets={role.bullets}
          />
        ))}
      </Section>

      <Section title="Selected Projects">
        {projects.map((project) => (
          <Entry
            key={project.name}
            rail={project.note}
            heading={
              <>
                {project.name}
                {project.tagline ? (
                  <span className="text-[0.86rem] font-medium text-ink-3">
                    {" "}
                    — {project.tagline}
                  </span>
                ) : null}
              </>
            }
            stack={project.stack}
            bullets={project.bullets}
          />
        ))}
      </Section>

      <Section title="Skills">
        <DefinitionRows
          rows={skills.map((skill) => ({
            label: skill.label,
            content: skill.items,
          }))}
        />
      </Section>

      <Section title="Education">
        {education.map((study) => (
          <Entry
            key={study.qualification}
            rail={
              <>
                {study.from} —<br />
                {study.to}
              </>
            }
            heading={study.qualification}
            where={`${study.institution} — ${study.detail}`}
          />
        ))}
      </Section>

      <Section title="Certifications">
        <DefinitionRows
          rows={credentials.map((credential) => ({
            label: credential.issuer,
            content: credential.items.map((item, i) => (
              <span key={item.href}>
                {i > 0 ? " · " : null}
                <a className="text-accent hover:underline" href={item.href}>
                  {item.name}
                </a>
              </span>
            )),
          }))}
        />
      </Section>

      <footer className="mt-12 flex flex-wrap justify-between gap-x-5 gap-y-2 border-t border-rule pt-5 text-[0.86rem] text-ink-3">
        <span>
          {profile.name} · Software Engineer · {profile.location}
        </span>
        <a className="text-accent hover:underline" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </footer>
    </main>
  );
}
