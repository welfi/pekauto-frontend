import { fetchVins } from "@/lib/actions";
import React from "react";

interface Vin {
  version: string;
  equipment_code: string;
  year_of_issue: string;
  place_of_production: string;
  serial_number: number;
}

export default async function VinsTable({
  currentPage,
}: {
  currentPage: number;
}) {
  const data = await fetchVins(currentPage);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block align-middle">
        <div className="rounded-lg bg-[#1c2b50] p-2 md:pt-0">
          <table className="min-w-full text-white">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Version
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Equipment Code
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Year of Issue
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Place of Production
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Serial Number
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#1c2b50]">
              {data.data.vins.map((vin: Vin, index: number) => (
                <tr
                  key={index}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {vin.version}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {vin.equipment_code}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {vin.year_of_issue}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {vin.place_of_production}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {vin.serial_number}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
