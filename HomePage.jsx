import Hero from "../components/hero";
import TeamStanding from "../components/TeamStanding";
import StatsSection from "../components/StatsSection";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('stadium.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/40">
        <div className="space-y-12 pd-12">
          <div className="bg-opacity-90">
            <Hero />
          </div>
          <div className="bg-opacity-90">
            <TeamStanding />
          </div>
        </div>
      </div>
   </div>
  );
}
