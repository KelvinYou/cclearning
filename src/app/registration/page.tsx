import { SectionWrapper } from '@/hoc'
import React from 'react'
import { RegistrationForm } from './_components/RegistrationForm'

const RegistrationPage: React.FC = () => {
  return (
    <SectionWrapper>
      <RegistrationForm />
    </SectionWrapper>
  )
}

export default RegistrationPage
