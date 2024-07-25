import { About } from "@/components/home/about";
import { Features } from "@/components/home/features";

const Home = () => {
  return (
    <div className="h-full overflow-y-visible p-4 pb-[80px] md:pb-0">
      <About />
      <br />
      <div className="bg-background/50 rounded-2xl border p-6">
        <Features />
      </div>
    </div>
  );
};

export default Home;
