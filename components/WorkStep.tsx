type Props = {
  variant: "orbit" | "linkbloom";
  step: string;
  description: string;
};

const STEP_STYLES = {
  orbit: "border-orbit-shadow text-orbit-title",
  linkbloom: "border-linkbloom-shadow/30 text-linkbloom-title",
};

export default function WorkStep({ variant, step, description }: Props) {
  const style = STEP_STYLES[variant];

  return (
    <div>
      <h4
        className={`font-mono text-sm uppercase font-bold border-b-2 pb-1 mb-2 ${style}`}
      >
        {step}
      </h4>
      <p className="text-lg font-medium">{description}</p>
    </div>
  );
}
