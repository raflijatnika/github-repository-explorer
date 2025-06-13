import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";
import { Star } from 'lucide-react'


export default function Home() {
  return (
    <main className="h-screen w-screen">
      <div className="flex justify-center flex-col items-center gap-10 p-16">
        <h1 className="text-primary font-bold">Github Repository Explorer</h1>
        <section className="flex flex-col min-w-xl gap-10">
          <div className="flex flex-col gap-3">
            <Input placeholder="Enter username" className="w-full h-[45px] bg-white border border-primary focus:!border-primary rounded-md p-5" />
            <Button variant='default' className="bg-primary" size='sm'>Search</Button>
          </div>
          <div className="flex flex-col gap-5">
            <h3>Showing result for "raflijatnika" </h3>
            <Accordion type="single" collapsible className="w-full bg-transparent">
              <AccordionItem value="item-1" className="w-full text-left">
                <AccordionTrigger className="w-full text-left bg-white p-5 rounded-xl border border-primary">Is it accessible?</AccordionTrigger>
                <AccordionContent className="pl-10 py-5 flex flex-col gap-5">
                  <div className="w-full bg-white border border-primary p-4 rounded-xl flex justify-between h-[100px]">
                    <h2>Masak Masak</h2>
                    <div className="flex gap-2">
                      <Star className="text-yellow-500" />
                      <p className="font-semibold text-yellow-500">20</p>
                   </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </main>
  )
}
