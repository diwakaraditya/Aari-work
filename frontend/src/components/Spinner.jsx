export default function Spinner() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute w-full h-full rounded-full border-4 border-primary/20 dark:border-secondary/20"></div>
        {/* Spinning Ring */}
        <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-primary dark:border-t-secondary animate-spin"></div>
        {/* Sparkle center */}
        <div className="absolute inset-0 flex items-center justify-center text-primary dark:text-secondary font-serif text-lg font-bold animate-pulse">
          A
        </div>
      </div>
    </div>
  );
}
