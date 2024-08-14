// Type definition for tutor dat

import dayjs from "dayjs";

type teachingLevel = "Primary" | "Lower Secondary";

interface ITutor {
  name: string;
  qualification: string;
  graduateFrom: string;
  graduateFromShort: string;
  teachingSince: Date;
  subjects: string[];
  teachingLevel?: teachingLevel[];
}

export const tutors: ITutor[] = [
  {
    name: "Cikgu Aina",
    qualification: "Bachelor Pendidikan Pengajaran Bahasa Melayu sebagai Bahasa Pertama",
    graduateFrom: "Universiti Putra Malaysia",
    graduateFromShort: "UPM",
    teachingSince: dayjs("2021-01-01").toDate(),
    subjects: ["Bahasa Melayu"],
    teachingLevel: ["Primary", 'Lower Secondary']
  },
  {
    name: "Cikgu Emyra",
    qualification: "Bachelor of Education (Hons) Teaching of English As secondary Language",
    graduateFrom: "",
    graduateFromShort: "UNISEL",
    teachingSince: dayjs("2014-01-01").toDate(),
    subjects: ["English"]
  },
  {
    name: "Teacher Divyaa",
    qualification: "Master in Education (TESL)",
    graduateFrom: "City University",
    graduateFromShort: "City U",
    teachingSince: dayjs("2017-01-01").toDate(),
    subjects: ["Science", "Mathematics", "English"],
    teachingLevel: ["Primary"]
  },
  {
    name: "Cikgu Mokh",
    qualification: "Diploma Kejuruteraan Awam",
    graduateFrom: "",
    graduateFromShort: "UiTM",
    teachingSince: dayjs("2018-01-01").toDate(),
    subjects: ["Physics"]
  },
  {
    name: "Teacher Tiba",
    qualification: "Master in Engineering Management",
    graduateFrom: "",
    graduateFromShort: "UPM",
    teachingSince: dayjs("2018-01-01").toDate(),
    subjects: ["Add Maths"]
  },
  {
    name: "Ching Yee Laoshi",
    qualification: "Diploma in Early Childhood",
    graduateFrom: "HELP University",
    graduateFromShort: "HELP",
    teachingSince: dayjs("2018-01-01").toDate(),
    subjects: ["Bahasa Cina", "Science", "Mathematics"],
    teachingLevel: ["Primary"]
  },
  {
    name: "Teacher Florence",
    qualification: "MBA (Hons) Marketing Management",
    graduateFrom: "",
    graduateFromShort: "UPM",
    teachingSince: dayjs("2017-01-01").toDate(),
    subjects: ["Business", "Accounting", "Economics", "English"]
  },
  {
    name: "Ms Tan",
    qualification: "BS (Hons) Chemistry Industry",
    graduateFrom: "",
    graduateFromShort: "UTM",
    teachingSince: dayjs("2014-01-01").toDate(),
    subjects: ["Chemistry", "Science", "Maths", "Add Maths"]
  },
  {
    name: "Cikgu Fatimah",
    qualification: "Iazah Sarjana Muda Pendidikan Bahasa Melayu",
    graduateFrom: "",
    graduateFromShort: "",
    teachingSince: dayjs("2007-01-01").toDate(),
    subjects: ["Bahasa Melayu"]
  },
  {
    name: "Cikgu Mas",
    qualification: "Bachelor of Accountancy",
    graduateFrom: "",
    graduateFromShort: "UPM",
    teachingSince: dayjs("2014-01-01").toDate(),
    subjects: ["Sejarah"]
  },
]