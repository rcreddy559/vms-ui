import Index from "./components/Index";
import VmsProvider from "./components/hooks/context/VmsProvider";

export default function Home() {
  return (
    <VmsProvider>
      <Index />
    </VmsProvider>
  );
}
