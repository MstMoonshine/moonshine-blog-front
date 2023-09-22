import Prose from "@/components/Layouts/Prose";
import ProcessDraft from "@/lib/Markdown/Draft";
import { format, parseISO } from "date-fns";

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string[] };
}) {
  const post = await ProcessDraft({params});
  const title: string = post.frontmatter.title as string;
  const date: Date = post.frontmatter.date as Date;

  return (
    <div>
      {/* TODO <ScrollUp /> */}

      <div className="bg-gray-100">
        <article className="pb-5 font-article sm:pt-10">
          <Prose>
            <h1>{title}</h1>
            <div className="-mt-5 flex items-center justify-between pb-5 font-sans text-sm lg:text-base">
              <div className="inline-flex items-center space-x-1">
                <span>
                  {format(
                    date,
                    "MMMM dd, yyyy",
                  )}
                </span>
              </div>
              {/* TODO: Post reading time*/}
              {/* TODO: Post series*/}
            </div>
            {children}
            {/* TODO: License*/}
          </Prose>
        </article>
        {/* TODO: Comment*/}
      </div>
    </div>
  );
}
