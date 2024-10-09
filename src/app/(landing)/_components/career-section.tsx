"use client"

import { Button } from '@/components/ui/button';
import { jobDescriptions } from '@/data/jobDescriptions';
import { SectionWrapper } from '@/hoc';
import React from 'react'

const CareerSection: React.FC = () => {
  const tutorJD = jobDescriptions.find(jd => jd.id === 1);

  return (
    <SectionWrapper
      id="career"
      title="Careers"
      // subtitle="most parents want to know."
    >
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {tutorJD?.title}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {tutorJD?.description}
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Requirements:
        </p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {tutorJD?.requirements?.map((r, i) => {
            return <li key={i}>{r}</li>;
          })}
        </ul>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Responsibilities:
        </p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {tutorJD?.responsibilities?.map((r, i) => {
            return <li key={i}>{r}</li>;
          })}
        </ul>
        
        <Button>Apply now</Button>
        
      </div>
    </SectionWrapper>
  )
}

export default CareerSection;