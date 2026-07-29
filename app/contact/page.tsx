import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import LocationsMapSection from "@/components/contact/LocationsMapSection";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Contact | Master Simex Paper Limited",
  "Get in touch with Master Simex Paper Limited in Dhaka, Bangladesh. Head office and three factories. Call +880 2 2233 50096 or email msplbd@gmail.com.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        headline="Let's talk about what you need made."
        subhead="Tell us about your project (format, volume, finish, timeline) and our team will come back with how we'll deliver it. Average turnaround on custom work is 10 days."
        compact
      />

      <section className="section-padding bg-parchment">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <ScrollFadeIn direction="up">
                <h2 className="font-display text-2xl font-bold text-charcoal mb-8">Contact details</h2>
                <div className="space-y-8">
                  <div>
                    <p className="eyebrow text-charcoal-500 mb-2">Head Office</p>
                    <address className="not-italic font-sans text-sm text-charcoal-400 leading-relaxed">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city} {siteConfig.address.postalCode}
                    </address>
                  </div>
                  <div>
                    <p className="eyebrow text-charcoal-500 mb-2">Telephone</p>
                    {siteConfig.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block font-sans text-sm text-charcoal-400 hover:text-primary transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                  <div>
                    <p className="eyebrow text-charcoal-500 mb-2">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="font-sans text-sm text-charcoal-400 hover:text-primary transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn direction="up" delay={0.15} className="mt-10">
                <LocationsMapSection />
              </ScrollFadeIn>
            </div>

            <div className="lg:col-span-7">
              <ScrollFadeIn direction="left" delay={0.1}>
                <h2 className="font-display text-2xl font-bold text-charcoal mb-8">Send an enquiry</h2>
                <ContactForm />
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
