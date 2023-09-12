import {
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const DynJump = () => {
  return (
    <div className="my-6 grid gap-y-4 sm:grid-cols-2 sm:gap-x-4">
      <div className="relative">
        <Link href="/readings">
          <div className="primary flex items-center gap-x-4 px-4 py-2 transition-all hover:bg-gray-50">
            <StarIcon className="h-8 w-8" />
            <div>
              <h2 className="font-bold">Rencent Readings</h2>
              <p>Personal collection from internet</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DynJump;
