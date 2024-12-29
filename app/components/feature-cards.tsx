import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import {
  ChevronsRight,
  SquareArrowOutUpRight,
  Grid2X2,
  LayoutList,
  Columns,
} from "lucide-react";
import { useState } from "react";

export default function FeatureCards() {
  const [layout, setLayout] = useState<"grid" | "list" | "columns">("grid");

  const layoutClasses = {
    grid: "grid gap-6 md:grid-cols-3",
    list: "flex flex-col gap-6",
    columns: "columns-1 md:columns-2 lg:columns-2 gap-6 space-y-6",
  };

  return (
    <>
      <div className="px-6">
        <div className="flex items-center gap-4">
          <span>View mode:</span>
          <button
            onClick={() => setLayout("grid")}
            className={`p-2 rounded ${layout === "grid" ? "bg-indigo-100 text-indigo-600" : ""
              }`}
          >
            <Grid2X2 className="h-5 w-5" />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={`p-2 rounded ${layout === "list" ? "bg-indigo-100 text-indigo-600" : ""
              }`}
          >
            <LayoutList className="h-5 w-5" />
          </button>
          <button
            onClick={() => setLayout("columns")}
            className={`p-2 rounded ${layout === "columns" ? "bg-indigo-100 text-indigo-600" : ""
              }`}
          >
            <Columns className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className={`px-4 py-12 ${layoutClasses[layout]}`}>
        <Card className="relative overflow-hidden shadow-indigo-600/50 hover:shadow-indigo-600/50 hover:shadow-lg transition-all duration-700 ease-in-out">
          <CardHeader>
            <CardTitle className="text-[24px]">
              Full-Stack Development
            </CardTitle>
            <CardDescription className="text-[36px] font-extrabold">
              Building Scalable and Efficient Applications.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="relative overflow-hidden border-none shadow-indigo-600/50 hover:shadow-indigo-600/50 hover:shadow-lg transition-all duration-700 ease-in-out">
          <CardHeader>
            <CardTitle className="text-[24px]">
              Cloud & Infrastructure
            </CardTitle>
            <CardDescription className="text-[36px] font-extrabold">
              Scalable and Reliable cloud solutions.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="relative overflow-hidden shadow-indigo-600/50 hover:shadow-indigo-600/50 hover:shadow-lg transition-all duration-700 ease-in-out">
          <CardHeader>
            <CardTitle className="text-[24px]">
              UI/UX User-Centred and Intuitive Systems
            </CardTitle>
            <CardDescription className="text-[36px] font-extrabold">
              Creating User-Centered and Intuitive Systems
            </CardDescription>
          </CardHeader>
        </Card>


        <Card className="relative overflow-hidden border-2 border-indigo-500 shadow-indigo-600/50 hover:shadow-indigo-600/50 hover:shadow-lg transition-all duration-700 ease-in-out">
          <CardHeader>
            <CardTitle className="text-[24px]">
              Currently Building at:
            </CardTitle>
            <CardDescription className="text-[36px] font-extrabold flex items-center space-x-2">
              <a
                href="https://aurumwealth.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-600"
              >
                Aurum Wealth <SquareArrowOutUpRight />
              </a>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="relative overflow-hidden border-2 border-indigo-600 shadow-indigo-600/50 hover:shadow-indigo-600/50 hover:shadow-lg transition-all duration-700 ease-in-out">
          <CardHeader>
            <CardTitle className="text-[24px]">Selected projects</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-500">
            <ul className="space-y-2">
              <li className="flex items-center gap-2 hover:text-indigo-500">
                <ChevronsRight className="h-4 w-4" />
                <a href="https://cfc.com" target="_blank" rel="noopener noreferrer">Church management App(CFC)</a>
              </li>
              <li className="flex items-center gap-2 hover:text-indigo-500">
                <ChevronsRight className="h-4 w-4" />
                <a href="https://desk911.co.za" target="_blank" rel="noopener noreferrer">Desk911</a>
              </li>
              <li className="flex items-center gap-2">
                <ChevronsRight className="h-4 w-4" />
                Piece O paper pty(ltd)
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-2 border-indigo-500 shadow-indigo-600/50 hover:shadow-indigo-600/50 hover:shadow-lg transition-all duration-700 ease-in-out">
          <CardHeader>
            <CardTitle className="text-[24px]">
              Building:
            </CardTitle>
            <a
              href="https://idealisticgroup.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold flex items-center gap-2"
            >Preview website <SquareArrowOutUpRight size={16}/></a>
            <CardDescription className="text-[36px] font-extrabold flex items-center space-x-2">
              <a
                href="https://idealisticwolrd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-600"
              >
                Idealistic Group <SquareArrowOutUpRight />
              </a>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
