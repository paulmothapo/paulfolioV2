import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <div className="h-full px-6 lg:px-8 py-16 sm:py-16 relative">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-x-12 relative z-10">
        <div className="">
          <p className="text-lg leading-8 text-slate-500">
            Expirienced software engineer specializing in building scalable and
            efficient solutions. Skilled in full stack development, cloud
            computing and database management, I focus on creating impactiful
            systems that solve real-world challenges.
          </p>
          <Button 
            onClick={() => window.location.href = 'mailto:paulmothpo.business@gmail.com'}
            className="rounded-3xl hover:shadow-lg shadow-md hover:shadow-indigo-600/50 shadow-indigo-600/50 border hover:rounded-none bg-indigo-600 hover:bg-transparent hover:bg-indigo-600 hover:text-white border-neutral-900 px-8 py-6 text-sm font-semibold transition-all duration-700 ease-in-out mt-8"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}
