import Link from "next/link";
import Footer from "@/components/Footer";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Arena?",
      answer: "Arena is a sports analytics product built to deliver real time match intelligence, including live mapping, contextual metrics and insight, designed for performance analysis and deeper viewing."
    },
    {
      question: "Which tournaments will you cover?",
      answer: "Our roadmap is to start with the ongoing T20 World Cup, then IPL, and then expand into other major domestic and international tournaments. Coverage may vary by region and data availability."
    },
    {
      question: "Who is Arena for?",
      answer: "Teams, coaches, analysts, broadcasters, academies and serious fans. Certain features are available only under a paid license."
    },
    {
      question: "What does Pre Register do?",
      answer: "Pre registration helps us plan rollout and onboarding. We will contact you with access updates, product releases and next steps. You can opt out at any time."
    },
    {
      question: "Do you offer demos or trials?",
      answer: "If a demo or trial is available, we will share it during onboarding or through official updates."
    },
    {
      question: "How do licenses work?",
      answer: "If you purchase or receive a license key, you can activate it in your account to unlock licensed features for the term and scope purchased."
    },
    {
      question: "My license will not activate. What should I do?",
      answer: "Double check you are logged in with the correct account email, confirm the key has not expired or been used, and paste it again without extra spaces. If it still fails, contact us via the website support channel and include the error message or screenshot."
    },
    {
      question: "How do you use my information?",
      answer: "We use your information to contact you about access, onboarding and product updates, and to operate and secure the service. See the Privacy Policy for details."
    },
    {
      question: "How do I delete my account or data?",
      answer: "Contact us via the website support channel from your registered email and request account and data deletion. We will guide you through the process."
    },
    {
      question: "Are you raising investment or looking for partners?",
      answer: "If you are interested in investment or partnerships, contact us via the website. This website is not an offer to sell securities."
    }
  ];

  return (
    <main className="min-h-screen bg-background-main selection:bg-accent-blue selection:text-text-main flex flex-col">
      <div className="flex-grow section-padding py-20 md:py-32 max-w-5xl mx-auto w-full pt-32">
        {/* Header / Back Link */}
        <div className="mb-12">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 mb-8 font-manrope">
                ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bebas text-white mb-4">Frequently Asked Questions</h1>
            <div className="h-1 w-24 bg-accent-blue/50 rounded-full"></div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 pb-20">
            {faqs.map((faq, index) => (
                <div key={index} className="flex flex-col gap-3 group border-b border-white/5 pb-8 last:border-0 hover:border-white/10 transition-colors">
                    <h2 className="text-2xl md:text-3xl font-bebas text-white tracking-wide group-hover:text-accent-blue transition-colors">
                        {faq.question}
                    </h2>
                    <p className="text-gray-400 font-manrope text-lg md:text-xl leading-relaxed max-w-4xl">
                        {faq.answer}
                    </p>
                </div>
            ))}
        </div>
      </div>
      
      {/* Reusing existing Footer */}
      <Footer />
    </main>
  );
}
