import PageTitle from "@/components/UI/Website/PageTitle";
import AllNews from "@/lib/KV/fetchNews";
import Link from "next/link";

const Page = async () => {
  const newsEntries = await AllNews();

  return (
    <div>
      <PageTitle title="Recent Readings" emoji="❤️" />
      <p className="pb-4">
        The following article list shows my recent readings which I think are worth sharing.
      </p>
      <div className="rounded-lg bg-white p-4">
        <h2 className="px-2 pb-4 font-title text-2xl font-bold">
          Readings of Last 14 Days
        </h2>
        {newsEntries.map((entry) => (
          <Link href={entry.url} key={entry.title}>
            <div className="flex items-center px-1 py-3 transition-all hover:bg-gray-50">
              <div className="min-w-0 flex-grow">
                <p>
                  <span className="font-bold text-xl">{entry.title}</span>
                </p>
                <div className="news-summary py-1" dangerouslySetInnerHTML={{ __html: entry.summary ? entry.summary : "" }}></div>
              </div>
              <p className="flex-shrink-0 font-mono text-xs text-gray-500 sm:text-sm">
                {(new Date(entry.date)).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
