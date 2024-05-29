import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  isFull?: boolean;
};

const Button = ({ type, title, icon, variant, isFull }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        isFull && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
