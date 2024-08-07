import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { tutors } from "@/data/tutors";
import SectionWrapper from "@/hoc/section-wrapper";
import dayjs from "dayjs";
import { Metadata } from "next";


export default function Home() {
  return (
    <main className="">
      <SectionWrapper>
        
        coming soon
      </SectionWrapper>
      <SectionWrapper
        title="Explore Class Tutors,"
        subtitle="Get to know them."
      >
        <div className="w-full grid gap-6 lg:grid-cols-3">
          {tutors.map((tutor) => {
            return (
              <Card key={tutor.name} className=" bg-[#fbe9f0]">
                <CardHeader>
                  <CardTitle>{tutor.name}</CardTitle>
                  <CardDescription>{tutor.qualification} ({tutor.graduateFromShort})</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{tutor.subjects.join(", ")}</p>
                </CardContent>
                <CardFooter>
                  <p>{dayjs().diff(tutor.teachingSince, 'year')} years of teaching exp</p>
                </CardFooter>
              </Card>
            )
          })}
        </div>


      </SectionWrapper>
    </main>
  );
}
