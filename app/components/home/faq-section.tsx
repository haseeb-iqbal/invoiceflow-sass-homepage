import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes, try InvoiceFlow free for 14 days. No credit card required.",
    },
    {
      question: "Can I export my invoices?",
      answer: "Yes, export invoices as PDFs or CSV at any time.",
    },
    {
      question: "Do you support international clients?",
      answer: "InvoiceFlow supports multiple currencies and regions.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We use industry-standard security practices to protect your data.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. No long-term contracts.",
    },
  ];

  return (
    <section id="faq" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about InvoiceFlow.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 hover:border-accent/30 transition-colors"
            >
              <AccordionTrigger className="py-4 hover:no-underline text-foreground font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
