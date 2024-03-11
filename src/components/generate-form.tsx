"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AddedVin, Vin } from "@/lib/definitions";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const equipmentOptions = [
  { value: "000", label: "000 - Base platform" },
  { value: "014", label: "014 - Bumper" },
  { value: "037", label: "037 - Drum Mulcher" },
  { value: "036", label: "036 - Side Trimmer" },
  { value: "038", label: "038 - Sprayer" },
  { value: "027", label: "027 - Lawn Mower" },
];

const placeOfProductionOptions = [
  { value: "00", label: "00 - Slovenia" },
  { value: "01", label: "01 - Turkey" },
];

export default function GenerateForm() {
  const [searchResults, setSearchResults] = React.useState({
    next_serial_number: undefined,
  });
  const [vinNumber, setVinNumber] = React.useState("");
  const [isAnimating, setIsAnimating] = React.useState(false);
  const generateForm = useForm<z.infer<typeof AddedVin>>({
    resolver: zodResolver(AddedVin),
    defaultValues: {
      version: "",
      equipment_code: "000",
      year_of_issue: "",
      serial_number: undefined,
      place_of_production: "00",
    },
  });

  const onSubmitGenerate = (formData: z.infer<typeof AddedVin>) => {
    setVinNumber("");
    generateForm.setValue("serial_number", formData.serial_number);
    generateForm.setValue("version", formData.version);
    generateForm.setValue("equipment_code", formData.equipment_code);
    generateForm.setValue("year_of_issue", formData.year_of_issue);
    generateForm.setValue("place_of_production", formData.place_of_production);
    setVinNumber(
      `${formData.version}${formData.equipment_code}${formData.year_of_issue}${formData.serial_number}${formData.place_of_production}`
    );
    toast.success("VIN Generated Succefully!", {
      position: "bottom-left",
    });
    setIsAnimating(true);
  };

  return (
    <div className="text-white flex flex-col items-center w-full min-h-full">
      <ToastContainer />
      <div className="w-[450px] mt-[100px] bg-[#1c2b50] p-5 border-2 rounded-xl">
        <Form {...generateForm}>
          <form
            onSubmit={generateForm.handleSubmit(onSubmitGenerate)}
            className="w-2/3 space-y-6 m-auto"
          >
            <FormField
              control={generateForm.control}
              name="version"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="version">Version</FormLabel>
                  <FormControl>
                    <Input type="text" id="version" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={generateForm.control}
              name="equipment_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="equipment_code">Equipment Code</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a version" />
                      </SelectTrigger>
                      <SelectContent>
                        {equipmentOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={generateForm.control}
              name="year_of_issue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="year_of_issue">Year of Issue</FormLabel>
                  <FormControl>
                    <Input type="text" id="year_of_issue" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={generateForm.control}
              name="serial_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="serial_number">Serial Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      id="serial_number"
                      {...field}
                      onChange={(e) => {
                        if (e.target.value) {
                          generateForm.setValue(
                            "serial_number",
                            parseInt(e.target.value)
                          );
                        } else {
                          generateForm.setValue("serial_number", 0);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={generateForm.control}
              name="place_of_production"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="place_of_production">
                    Place of Production
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a version" />
                      </SelectTrigger>
                      <SelectContent>
                        {placeOfProductionOptions.map((option, index) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex justify-center gap-2 align-center">
                              <Image
                                src={
                                  index === 0
                                    ? "/Flag_of_Slovenia.svg.png"
                                    : "/turkey.jpg"
                                }
                                alt="Slovenia Flag"
                                width={20}
                                height={5}
                                className="mr-2 pt-1 pb-1"
                              />
                              {option.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={!generateForm.formState.isValid}
              type="submit"
              className="ml-[95px]"
            >
              Generate
            </Button>
            <div className="h-[80px] flex flex-col items-center">
              <div className="flex gap-2 mt-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isAnimating ? { opacity: 1, scale: 1 } : ""}
                  transition={{ duration: 1 }}
                  id="serial_number"
                  className="w-[65px]"
                >
                  {searchResults?.next_serial_number || ""}
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isAnimating ? { opacity: 1, scale: 1 } : ""}
                transition={{ duration: 1 }}
                id="serial_number"
                className="text-3xl mt-[20px]"
              >
                {vinNumber}
              </motion.div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
