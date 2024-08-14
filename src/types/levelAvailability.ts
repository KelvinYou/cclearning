import { SchoolLevel } from "@/enums/schoolLevel";

export type LevelAvailability = {
  [key in SchoolLevel]: boolean;
};