import Card from "@/components/UI/Readings/NewsCard";
import PageTitle from "@/components/UI/Website/PageTitle";
import AllNews from "@/lib/KV/fetchNews";

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
          <Card entry={entry} key={entry.title} />
        ))}
      </div>
    </div>
  );
};

export default Page;
