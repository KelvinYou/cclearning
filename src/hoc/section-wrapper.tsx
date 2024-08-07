import React from 'react'

interface IProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<IProps> = ({ title, subtitle, children }) => {
  return (
    <section className='sm:px-16 px-6 sm:py-16 py-2 pb-10 max-w-7xl mx-auto'>
      {title && <div className='flex justify-center items-center flex-col pb-10'>
        <h1 className='text-3xl'>{title}</h1>
        <h2 className='text-2xl'>{subtitle}</h2>
      </div>}


      {children}
    </section>
  )
}

export default SectionWrapper