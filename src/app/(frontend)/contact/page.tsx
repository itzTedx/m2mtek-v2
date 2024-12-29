import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="grid grid-cols-2">
      <section className="container max-w-md space-y-14 px-28 py-36">
        <div className="">
          <h2 className="pb-4 font-medium text-accent-800">Office</h2>
          <h3 className="pb-2 text-sm text-accent-800">
            Come visit us in Dubai.
          </h3>
          <p className="pb-3 text-lg">
            123, Sheikh Zayed Road, Al Wasl Area, Dubai, UAE
          </p>
          <Link
            href="#"
            className="font-aloevera text-lg font-medium text-brand-600"
          >
            Google Maps
          </Link>
        </div>
        <div className="">
          <h2 className="pb-4 font-medium text-accent-800">Email</h2>
          <h3 className="pb-2 text-sm text-accent-800">
            Our friendly team is here to help.
          </h3>
          <Link href="mailto:info@m2m-tek.com" className="text-lg">
            info@m2m-tek.com
          </Link>
        </div>
        <div className="">
          <h2 className="pb-4 font-medium text-accent-800">Contacts</h2>
          <h3 className="pb-2 text-sm text-accent-800">
            Our friendly team is here to help.
          </h3>
          <Link href="tel:+971987654321" className="text-lg">
            +971 98 765 4321
          </Link>
        </div>
      </section>
      <section className="container bg-white px-28 py-36">
        <h1 className="pb-3 font-aloevera text-3xl font-semibold text-brand-600">
          We&apos;re Here to Help
        </h1>
        <p className="text-balance pb-6 leading-loose">
          Have questions, need support, or want to learn more about our products
          and services? Our team is ready to assist you. Reach out to us through
          any of the channels below, and we&apos;ll get back to you promptly.
        </p>
        <form action="" className="flex flex-col gap-y-4 *:space-y-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="name@company.com" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Type your message" />
          </div>
          <p className="text-pretty pb-6 text-xs text-accent-600">
            By submitting this form, you agree to our Privacy Policy and allow
            us to use your information to respond to your inquiry.
          </p>
          <Button
            type="submit"
            size="lg"
            className="mx-auto font-aloevera text-base"
          >
            Send Message
          </Button>
        </form>
      </section>
    </main>
  );
}
