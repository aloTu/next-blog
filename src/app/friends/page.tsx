import { fetchAPI } from "@/lib/api";
import type { IStrapData } from "@/lib/api";

export default async function Friends() {
  const { data } = await fetchAPI<
    IStrapData<{
      friendLinks: { id: number; title: string; url: string; slogan: string }[];
    }>
  >("/about?populate[0]=friendLinks");
  const friends = data.attributes.friendLinks;
  return (
    <div className="flex flex-col">
      {friends.map((item) => (
        <a
          href={item.url}
          target="_blank"
          key={item.id}
          className="text-highlight"
        >
          <div className="border-l-[0.45rem] border-l-primary bg-friend py-2 pl-5 pr-3 mb-6 rounded">
            <span className="text-base text-[1.3rem]">{item.title}</span>
            <span className="text-base block text-[0.8rem]">{item.slogan}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
