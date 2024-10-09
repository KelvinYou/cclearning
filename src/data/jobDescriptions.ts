type JobDescription = {
  id: number
  title: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

export const jobDescriptions: JobDescription[] = [
  {
    id: 1,
    title: "Tutor",
    description: "Tutoring students on their academic journey. The tutor will be responsible for ensuring students have a positive and engaging learning experience. Required subjects are: B. Melayu / English / B. Cina / Mathematics / Science / Sejarah / Physic / Chemistry / Biology / Add. Mathematics / Prinsip Perakaunan / Ekonomi / Perniagaan",
    requirements: [
      `The tutors must posses at least a Diploma, Advance / Higher / Graduate Diploma / Post Graduate Diploma, Bachelor's Degree, Professional Degree in any field`,
      `Required language: B. Melayu / English / Mandarin (SJKC).`,
      `Tutors should have a minimum of 2 years of teaching experience and must be expert on the subject teaching.`,
      `Have own transportation`
    ],
    responsibilities: [
      `Support students to develop and must academic goats.`,
      `Help students to prepare for tests and examinations.`,
      `conduct lessons adhering to the lesson plan`,
      `gain fulfillment in making students learn`,
      `Provide creative ways to engage students towards the subject.`,
      `strive to diversify teaching methods so that each content is easily comprehensible.`,
      `Prepare notes for the learning lesson.`
    ]
  }
]