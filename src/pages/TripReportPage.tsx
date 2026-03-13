import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TripReportPrekToal from "@/components/trip-reports/TripReportPrekToal";
import TripReportSVC2014 from "@/components/trip-reports/TripReportSVC2014";
import TripReportATT2015 from "@/components/trip-reports/TripReportATT2015";

const TripReportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        <Tabs defaultValue="prek-toal" className="w-full">
          <div className="bg-background sticky top-16 z-40 border-b">
            <div className="container mx-auto px-4">
              <TabsList className="w-full justify-start h-auto p-2 bg-transparent gap-2 flex-wrap">
                <TabsTrigger 
                  value="prek-toal" 
                  className="data-[state=active]:bg-nature-forest data-[state=active]:text-white px-4 py-2 text-sm"
                >
                  Tmat Beoy - Gaint Ibis(March 2022)
                </TabsTrigger>
                <TabsTrigger 
                  value="att-2015" 
                  className="data-[state=active]:bg-nature-forest data-[state=active]:text-white px-4 py-2 text-sm"
                >
                  Ang Trapeang Thmor (Mar 2015)
                </TabsTrigger>
                <TabsTrigger 
                  value="svc-2014" 
                  className="data-[state=active]:bg-nature-forest data-[state=active]:text-white px-4 py-2 text-sm"
                >
                  Prek Toal (Feb 2023)
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="prek-toal" className="mt-0">
            <TripReportPrekToal />
          </TabsContent>

          <TabsContent value="att-2015" className="mt-0">
            <TripReportATT2015 />
          </TabsContent>

          <TabsContent value="svc-2014" className="mt-0">
            <TripReportSVC2014 />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default TripReportPage;
