
export default function Header() {

  return (
    <nav className="p-6">
      <div className="flex items-center">
          <a href="/" className="font-bold text-[24px] text-neutral-900 flex items-center gap-2">
            <img 
              src="/logo/spiral.png" 
              alt="senseGrid Logo" 
              className="h-8 w-auto"
            />
            Paul Mothapo
          </a>
        </div>
    </nav>
  );
}
