
import { Plus, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How is digital marketing different for manufacturers?",
      answer: "Manufacturing digital marketing requires understanding complex B2B sales cycles, technical product specifications, and industry-specific buyer behaviors. We create strategies that speak to engineers, procurement teams, and decision-makers with technical content and targeted campaigns."
    },
    {
      question: "Can you handle technical products and niche B2B industries?",
      answer: "Absolutely. We specialize in translating complex technical specifications into compelling marketing messages. Our team has experience across automotive, aerospace, heavy machinery, and industrial automation sectors."
    },
    {
      question: "What platforms work best for manufacturing marketing?",
      answer: "LinkedIn is crucial for B2B manufacturing, along with Google Ads for technical keywords. We also focus on industry publications, trade show digital presence, and specialized B2B platforms where your buyers are active."
    },
    {
      question: "How long does it take to see results?",
      answer: "While some improvements in website performance can be seen within 30-60 days, meaningful lead generation typically takes 3-6 months. Manufacturing sales cycles are longer, so we build sustainable, long-term growth strategies."
    },
    {
      question: "Do you understand manufacturing compliance requirements?",
      answer: "Yes, we're familiar with ISO certifications, safety standards, and industry regulations. Our content and websites are built with compliance considerations in mind, ensuring your digital presence meets industry standards."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-engine-gray to-steel-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-precision-teal to-warning-yellow bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Common questions about digital marketing for manufacturing companies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-montserrat font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-precision-teal" />
                  ) : (
                    <Plus className="w-5 h-5 text-precision-teal" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-white/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
