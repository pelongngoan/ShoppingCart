interface IContainerProps {
  children: React.ReactNode;
  className?: string;
  container?: "default" | "full";
}
export const Container = ({
  children,
  className = "",
  container = "default",
}: IContainerProps) => {
  return (
    <div
      className={`${
        container === "full" ? "w-full" : "container mx-auto"
      } ${className}`}
    >
      {children}
    </div>
  );
};
