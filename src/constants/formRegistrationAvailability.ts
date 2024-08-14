import { SchoolLevel } from "@/enums/schoolLevel";
import { LevelAvailability } from "@/types/levelAvailability";

export const formRegistrationAvailability: LevelAvailability = {
  [SchoolLevel.Primary1]: false,
  [SchoolLevel.Primary2]: true,
  [SchoolLevel.Primary3]: true,
  [SchoolLevel.Primary4]: true,
  [SchoolLevel.Primary5]: true,
  [SchoolLevel.Primary6]: true,
  [SchoolLevel.Secondary1]: true,
  [SchoolLevel.Secondary2]: true,
  [SchoolLevel.Secondary3]: true,
  [SchoolLevel.Secondary4]: true,
  [SchoolLevel.Secondary5]: true
};