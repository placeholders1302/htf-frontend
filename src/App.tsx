import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col gap-4 w-screen h-screen items-center justify-center">
        <p>{"<placeholders/>"}</p>
        <Button>click me!</Button>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
