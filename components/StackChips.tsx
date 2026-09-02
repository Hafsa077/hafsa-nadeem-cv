export function StackChips({ items }: { items: string[] }) {
  return (
    <ul className="mb-3 flex flex-wrap gap-1.5 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="whitespace-nowrap rounded-sm border border-rule-strong px-[7px] py-[2px] font-mono text-[0.7rem] text-ink-2"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
