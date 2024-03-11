import Pagination from "@/components/ui/pagination";
import VinsTable from "@/components/ui/vins-table";
import { getTotalPages } from "@/lib/actions";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const totalPages = await getTotalPages();
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-full flex items-center flex-col">
      <Suspense>
        <VinsTable currentPage={currentPage} />
        <Pagination totalPages={totalPages} />
      </Suspense>
    </div>
  );
}
