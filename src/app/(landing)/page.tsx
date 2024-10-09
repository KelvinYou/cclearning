import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { tutors } from "@/data/tutors";
import { SectionWrapper } from "@/hoc";
import dayjs from "dayjs";
import FaqsSection from "./_components/faqs-section";
import CareerSection from "./_components/career-section";
import ContactUsSection from "./_components/contact-us-section";
import AboutUsSection from "./_components/about-us-section";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <SectionWrapper
        id="home"
        title="Pusat Tuisyen Inspirasi Bijaksana"
        subtitle="Educate Every Student and Expect Excellence"
      >
        <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Welcome to Pusat Tuisyen Inspirasi Bijaksana
          </h1>

          <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">Tuition center for primary and secondary school students. The team at Pusat Tuisyen Inspirasi Bijaksana (Clever Clogs Learning) is qualified teachers (BSc & MBA holders) with many years of teaching experience.</p>

          <Link href="/contact-us" className={buttonVariants({ variant: "default" })}>Contact Us</Link>
        </div>

      </SectionWrapper>

      <AboutUsSection />
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

      <CareerSection />

      <ContactUsSection />
    </>
  );
}
