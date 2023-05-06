import Link from "next/link";
import Listing from "@/app/ui/listing";
import { fetchAPI } from "@/lib/api";

export const metadata = {
  title: "Blog",
};

export default async function Blog() {
  // const { data } = await fetchAPI("/about", { populate: "externalLinks" });
  return (
    <main>
      <div className="flex flex-wrap  items-center justify-between">
        <h1 className="my-2 font-bold leading-tight text-[1.875rem] sm:text-[2.25rem] lg:text-[3rem]">
          Blog
        </h1>
        <Link
          className="text-secondary hover:underline hover:text-heading"
          href="/tags"
        >
          View all tags
        </Link>
      </div>
      <Listing
        className="mt-8 mb-16 sm:mt-16 sm:mb-32 md:mb-64"
        posts={[
          {
            slug: "/测试组件",
            title: "测试组件",
            date: "04.05.2021",
            excerpt: "qwfp",
            description: "介绍一下测试?",
          },
        ]}
      />
    </main>
  );
}
