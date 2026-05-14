import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Magnettic Visualizer</h1>
          <p className="text-sm text-muted-foreground">
            A visual layer for your team&apos;s prototypes.
          </p>
          <Link href="/prototypes" className="mt-4 block w-full">
            <Button className="w-full">View Prototypes</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
