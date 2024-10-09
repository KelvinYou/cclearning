export const phoneContacts: {
  id: number
  name: string
  content: string
}[] = [
  {
    id: 1,
    name: 'Ms Tan',
    content: '+60176926818',
  },
  {
    id: 2,
    name: 'Florence',
    content: '+60176293202',
  },
]

export const emailContacts: {
  id: number
  content: string
}[] = [
  {
    id: 1,
    content: 'ptinspirasibijaksana@yahoo.com',
  },
];

export const locations: {
  id: number,
  name: string,
  fullAddress: string,
  googleMapLink?: string,
  embedMap?: string
}[] = [
  {
    id: 1,
    name: 'BCH',
    fullAddress: '28A, Jalan Desa 1/1, Bandar Country Homes, 48000 Rawang',
    googleMapLink: 'https://maps.app.goo.gl/UhaofyazBbwqSBum7',
    embedMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.7724676809468!2d101.52635446954801!3d3.3279716997904387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc42cb0539418f%3A0xb6ab4bce833164f5!2s28%2C%20Jalan%20Desa%201%2F1%2C%20Bandar%20Country%20Homes%2C%2048000%20Rawang%2C%20Selangor!5e0!3m2!1sen!2smy!4v1728463142511!5m2!1sen!2smy'
  },
  {
    id: 2,
    name: 'BTP',
    fullAddress: '85-1-A, Jalan 7A/3, Medan Puteri, Bandar Tasik Puteri, 48200 Rawang',
    googleMapLink: 'https://maps.app.goo.gl/UhaofyazBbwqSBum7',
    embedMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.7724676809468!2d101.52635446954801!3d3.3279716997904387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc42cb0539418f%3A0xb6ab4bce833164f5!2s28%2C%20Jalan%20Desa%201%2F1%2C%20Bandar%20Country%20Homes%2C%2048000%20Rawang%2C%20Selangor!5e0!3m2!1sen!2smy!4v1728463142511!5m2!1sen!2smy'
  }
];