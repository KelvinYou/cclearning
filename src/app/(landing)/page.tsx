import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { tutors } from "@/data/tutors";
import { SectionWrapper } from "@/hoc";
import dayjs from "dayjs";
import FaqsSection from "./_components/faqs-section";

export default function Home() {
  return (
    <>
      {/* <SectionWrapper
        id="home"
        title="Pusat Tuisyen Inspirasi Bijaksana"
        subtitle="Educate Every Student and Expect Excellence"
      >
        coming soon
      </SectionWrapper> */}
      <SectionWrapper
        id="tutor"
        title="Explore Class Tutors,"
        subtitle="Get to know them."
      >
        <div className="w-full grid gap-6 lg:grid-cols-3">
          {tutors.map((tutor) => {
            return (
              <Card key={tutor.name} className="border-primary shadow-md">
                <CardHeader>
                  <CardTitle>{tutor.name}</CardTitle>
                  <CardDescription>
                    {tutor.qualification} {" "}
                    {tutor.graduateFromShort && `${`(${tutor.graduateFromShort})`}`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{tutor.subjects.join(", ")}</p>
                  <p>{tutor.teachingLevel?.join(', ')}</p>
                </CardContent>
                <CardFooter>
                  <p>{dayjs().diff(tutor.teachingSince, 'year')} years of teaching exp</p>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </SectionWrapper>

      <FaqsSection />
    </>
  );
}
