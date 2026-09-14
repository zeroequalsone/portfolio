type Props = {
  title: string;
  items: string[];
};

export default function StackCategory({ title, items }: Props) {
  return (
    <div className="p-6 md:p-12 hover:bg-neutral-50 transition-colors">
      <h3 className="font-mono text-xl uppercase font-black mb-6">{title}</h3>

      <ul className="space-y-4 text-lg font-medium">
        {items.map((item) => (
          <li
            key={item}
            className="border-b last:border-0 border-neutral-300 pb-2"
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
