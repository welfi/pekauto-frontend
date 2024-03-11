"use server";

import axios from "axios";
import { z } from "zod";
import { AddedVin, Vin } from "./definitions";
import { revalidatePath } from "next/cache";

export type State = {
  errors: {
    version?: string[] | undefined;
    equipment_code?: string[] | undefined;
    year_of_issue?: string[] | undefined;
    place_of_production?: string[] | undefined;
  };
  message: string;
  data?: undefined;
};

export async function searchVin(prevState: State, formData: FormData) {
  const validatedFields = Vin.safeParse({
    version: formData.get("version") as string,
    equipment_code: formData.get("equipment_code") as
      | "000"
      | "014"
      | "037"
      | "036"
      | "038"
      | "027",
    year_of_issue: formData.get("year_of_issue") as string,
    place_of_production: formData.get("place_of_production") as "00" | "01",
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Please fill them all in.",
    };
  }
  try {
    const response = await axios.post(
      "http://localhost:8000/backend/search/",
      validatedFields.data
    );
    return {
      data: response.data,
      message: "Search request sent successfully.",
    };
  } catch (error) {
    return {
      message: "Search request failed. Please try again.",
    };
  }
}

export async function addVin(prevState: State, formData: FormData) {
  const validatedFields = AddedVin.safeParse({
    version: formData.get("version") as string,
    equipment_code: formData.get("equipment_code") as
      | "000"
      | "014"
      | "037"
      | "036"
      | "038"
      | "027",
    year_of_issue: formData.get("year_of_issue") as string,
    serial_number: parseInt(formData.get("serial_number") as string),
    place_of_production: formData.get("place_of_production") as "00" | "01",
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Please fill them all in.",
    };
  }
  try {
    const response = await axios.post(
      "http://localhost:8000/backend/add/",
      validatedFields.data
    );
    revalidatePath("/browse");
    return {
      data: response.data,
      message: "Add request sent successfully.",
    };
  } catch (error) {
    return {
      message: "Add request failed. Please try again.",
    };
  }
}

export async function getTotalPages() {
  try {
    const response = await axios.get(
      "http://localhost:8000/backend/total_pages/"
    );
    return response.data.total_pages;
  } catch (error) {
    return {
      message: "Total pages fetch failed. Please try again.",
    };
  }
}

export async function fetchVins(page = 1) {
  try {
    const response = await axios.get(
      `http://localhost:8000/backend/browse/?page=${page}`
    );
    return {
      data: response.data,
      message: "Vins fetched successfully.",
    };
  } catch (error) {
    return {
      message: "Vins fetch failed. Please try again.",
    };
  }
}
