import {ReactNode} from "react";
import {Column, getBlogs} from "@/lib/blog";
import Link from "next/link";
import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/ui/components";

export default function TagsLayout({children}: Readonly<{
  children: ReactNode;
}>) {
  const columnTags = (getBlogs("column") as Column[])
    .map((c) => c.tags).flatMap((t) => t.split(","));
  return (
    <main className="grid md:grid-cols-[30%_70%] gap-x-4">
      <div className="hidden md:block overflow-y-hidden border-r h-screen border-r-zinc-950 dark:border-r-zinc-100">
        <h2 className="text-3xl font-semibold mb-10">Available Tags:</h2>
        <ul className="flex flex-col gap-y-6 h-full">
          {columnTags.map((t) => (
            <li key={t}>
              <Link href={`/blog/tag/${encodeURIComponent(t)}`} className="text-xl hover:underline">
                #{t}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden text-right">
        <Drawer>
          <DrawerTrigger>
            <h2 className="text-xl font-semibold px-2 py-1 rounded-lg border-2">Available Tags</h2>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-3xl mb-10">Available Tags</DrawerTitle>
              <DrawerDescription className="text-xl flex flex-col gap-y-6 h-full">
                {columnTags.map((t) => (
                  <Link key={t} href={`/blog/tag/${encodeURIComponent(t)}`} className="text-xl hover:underline">
                    #{t}
                  </Link>
                ))}
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose className="mx-auto">
                <p className="w-fit mb-8 border rounded px-2 py-1 text-xl border-zinc-800 dark:border-zinc-200">Close Drawer</p>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div>{children}</div>
    </main>
  )
}