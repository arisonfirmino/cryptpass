import { getPageBlocks } from "@/app/lib/notion";

import { PasswordGenerator } from "@/app/components/ui/password-generator";

export default async function Home() {
  const blocks = await getPageBlocks();

  return (
    <main className="flex h-screen w-full justify-center gap-10">
      <div className="flex h-full w-full max-w-300 gap-10">
        <section className="scrollbar-hide h-full w-full overflow-y-auto py-10">
          <div
            className="ml-10 flex flex-col gap-2.5 text-sm"
            dangerouslySetInnerHTML={{ __html: blocks }}
          />
        </section>

        <PasswordGenerator />
      </div>
    </main>
  );
}
