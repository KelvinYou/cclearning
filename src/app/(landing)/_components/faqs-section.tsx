"use client"

import Accordion from '@/components/accordion';
import { Button } from '@/components/ui/button';
import { faqs } from '@/data/faq';
import { SectionWrapper } from '@/hoc';
import React from 'react'

const FaqsSection: React.FC = () => {
  return (
    <SectionWrapper
    id="faq"
    title="FAQs"
    subtitle="most parents want to know."
  >
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq) => {
        return (
          <Accordion
            key={faq.title}
            id={faq.title}
            title={faq.title}
            active={faq.active}
          >
            {faq.content}
          </Accordion>
        );
      })}
    </div>

    <div className="w-fit mx-auto mt-4">
      {`can't find your answer?`}
      <Button 
        className='ml-4'
        variant={"outline"}
        onClick={() => console.log('Link to google form')}
      >Contact us now</Button>

    </div>
  </SectionWrapper>
  )
}

export default FaqsSection