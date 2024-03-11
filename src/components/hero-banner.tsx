import Link from "next/link";
import { Button } from "./ui/button";

export const HeroBanner = () => {
  return (
    <div className="container mt-[100px] text-primary-foreground">
      <div className="flex justify-center font-title">
        <div className="flex">
          <h1 className="text-3xl font-bold text-primary-foreground">
            Generate and Search your
          </h1>
          <span className="word-animation text-3xl font-bold ml-2">
            Vehicle Identification Number
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-20 mt-10">
        <Button asChild variant={"outline"}>
          <Link href="/generate">Generate</Link>
        </Button>
        <Button asChild variant={"secondary"} className="w-[96px]">
          <Link href="/search">Search</Link>
        </Button>
      </div>
    </div>
  );
};
