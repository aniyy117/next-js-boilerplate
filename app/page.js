import { ProgressBar } from "@/components/common";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center flex-col">
      <h1 className="text-3xl">Hello world!</h1>
      <Button variant="destructive">Destructive</Button>
      <ProgressBar />
    </main>
  );
}
