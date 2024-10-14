import { Button } from "@/components/ui/button"

import type { ViewOption } from "./App";

const Menu = ({ view, setView }: { view: ViewOption; setView: (v: ViewOption) => void }) => {
  const viewOptions: ViewOption[] = ["daily", "weekly", "monthly"];

  return (
    <nav className="flex gap-2 justify-center items-center">
      {viewOptions.map((v) => (
        <Button
          variant={v === view ? "default" : "outline"}
          onClick={() => v !== view && setView(v)}
          key={v}
        >
          Trending {v}
        </Button>
      ))}
    </nav>
  );
};

export default Menu;
