import { z } from "zod";

export const Vin = z.object({
  version: z.string().length(3),
  equipment_code: z.enum(["000", "014", "037", "036", "038", "027"]),
  year_of_issue: z
    .string()
    .min(2, { message: "Please select a year between 00 and 24" })
    .max(2, { message: "Please select a year between 00 and 24" }),
  place_of_production: z.enum(["00", "01"]),
});

export const AddedVin = z.object({
  version: z.string().length(3),
  equipment_code: z.enum(["000", "014", "037", "036", "038", "027"]),
  year_of_issue: z
    .string()
    .min(2, { message: "Please select a year between 00 and 24" })
    .max(2, { message: "Please select a year between 00 and 24" }),
  place_of_production: z.enum(["00", "01"]),
  serial_number: z.number().min(999999),
});
