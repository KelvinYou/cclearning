import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { emailContacts, locations, phoneContacts } from '@/data/contacts';
import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import WhatsApp from '/public/assets/images/WhatsApp_icon.png'
import { buttonVariants } from '@/components/ui/button';

const ContactUsSection: React.FC = () => {
  return (
    <SectionWrapper
      id="contact-us"
      title="Contact Us"
      // subtitle="most parents want to know."
    >
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Your satisfaction is out priority. Wondering about an enrolment and classes or just want to leave general feedback?
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Our customer service team is ready to assist you.
        </p>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-4'>
          <Card className='flex-grow'>
            <CardContent>
              <h2>Call us at</h2>
              {phoneContacts.map(contact => (
                <div key={contact.id}>
                <p><a>{contact.name}</a></p>
                <p><a href={`tel:${contact.content}`}>{contact.content}</a></p>
                <p><Link href={`https://wa.me/${contact.content}`} target='_blank'>
                  <Image src={WhatsApp} alt="Whatsapp logo" width={48} height={48}/>
                </Link></p>

                </div>
              ))}

              {/* whatsapp */}
  
            </CardContent>
          </Card>

          <Card className='flex-grow'>
            <CardContent>
              <h2>Email us at</h2>

              {emailContacts.map(contact => (
                <div key={contact.id}>
                  <p><a href={`mailto:${contact.content}`}>{contact.content}</a></p>
                </div>
              ))}

            </CardContent>
          </Card>
        </div>

        <div>
          <Card className='h-full'>
            <CardContent>
              <h2>Give a visit</h2>
              <h2>Get our office direction</h2>

              <div className='grid grid-cols-2 gap-4'>
                {locations.map(location => (
                  <div key={location.id}>
                    <h3>{location.name}</h3>
                    <iframe src={location.embedMap} className="w-full" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <p>{location.fullAddress}</p>

                    {location.googleMapLink && (
                      <Link href={location.googleMapLink} target='_blank' className={buttonVariants({ variant: 'outline', size: 'sm' })}>Google Map</Link>
                    )}
                    <p className='break-words'></p>
                  </div>
                ))}
                <div>
                  
                </div>

                <div>
                  
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </SectionWrapper>
  )
}

export default ContactUsSection;