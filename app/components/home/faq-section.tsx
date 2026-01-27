import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FaqSection() {
  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and cryptocurrency for Enterprise customers.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Absolutely. Start with a 14-day free trial with full access to all Professional features. No credit card required.'
    },
    {
      question: 'How do you handle data security?',
      answer: 'We use end-to-end encryption, regular security audits, and maintain SOC 2 Type II compliance. All data is encrypted at rest and in transit.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include email support. Professional plans get priority support with 4-hour response times. Enterprise includes 24/7 dedicated support.'
    }
  ]

  return (
    <section id="faq" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Atlas.
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
  )
}
