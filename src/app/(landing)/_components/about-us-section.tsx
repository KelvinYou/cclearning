import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
import React from 'react';
import SignBoardBch from "/public/assets/images/branches/bch/signboard.png"
import InteriorBch from "/public/assets/images/branches/bch/interior.png"
import LobbyBch from "/public/assets/images/branches/bch/lobby.png"

const AboutUsSection: React.FC = () => {
  return (
    <SectionWrapper
      id="about-us"
      title="About Us"
      className="flex flex-col gap-4"
    >
      <div className='grid grid-cols-1 md:grid-cols-2 min-h-96'>
        <div className='py-4 px-8'>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            More About Us
          </h3>

          <p>Since our founding, Pusat Tuisyen Inspirasi Bijaksana (Clever Clogs Learning) has been known for quality services, exceptional efficiency and the highest level of professionalism.</p>
          <p>We strive to provide quality education to all our students and to assist them in achieving their personal goals.</p>
          <p>Please get in touch to learn more about our team, our centre or for details about the services we provide.</p>
        </div>

        <div className="relative w-full h-full overflow-hidden hidden md:block">
          <Image src={SignBoardBch} alt="More about Us" fill objectFit='cover' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 min-h-96'>

        <div className="relative w-full h-full overflow-hidden hidden md:block">
          <Image src={InteriorBch} alt="More about Us 2" fill objectFit='cover' />
        </div>

        <div className='py-4 px-8'>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Group Tutoring
          </h3>
          <p>Group tutoring sessions assist students with specific subjects. The group meet with a tutor and it consist of a small group (max 8 students) of students who are in the same course.</p>
          <p>The group tutor is able to provide further explanation of difficult topics or concepts review for tests or quizzes and answer student questions as well as helping the students to develop strategies to improve their study skills and build on their strengths.
          Hire us for this service and learn how we cater to the needs of each student, ensuring the results you need and deserve.</p>
        </div>


      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 min-h-96'>
        <div className='py-4 px-8'>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            One-on-One Tutoring
          </h3>
          <p>One-on-one tutoring to students of all ages and grade levels.</p>
          <p>Benefits of one-on-one tutoring include:</p>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Individualized attention to your child’s learning needs</li>
            <li>Students can learn at their own pace</li>
            <li>Lessons can be tailored by the tutor to suit your child’s learning style</li>
            <li>Students can ask questions without feeling embarrassed or afraid of being judged by their peers</li>
          </ul>
        </div>

        <div className="relative w-full h-full overflow-hidden hidden md:block">
          <Image src={LobbyBch} alt="More about Us 3" fill objectFit='cover' />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AboutUsSection;