import twemoji from "twemoji";

const Twemoji = ({ emoji } : { emoji: string }) => (
  <span
    className="not-prose"
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: "svg",
        ext: ".svg",
      }) as unknown as string,
    }}
  />
);

export default Twemoji;
