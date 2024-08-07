import React from 'react'

interface IProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<IProps> = ({ id, title, subtitle, children }) => {
  return (
    <section className='sm:px-16 px-6 sm:pt-4 pt-2 pb-10 max-w-7xl mx-auto' >
      <span id={id}>1</span>
      {title && <div className='flex justify-center items-center flex-col pb-10'>
        <h1 className='text-3xl'>{title}</h1>
        <h2 className='text-2xl'>{subtitle}</h2>
      </div>}


      {children}
    </section>
  )
}

export default SectionWrapper