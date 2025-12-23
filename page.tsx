import Link from 'next/link';
import FAQSection from './components/FAQSection';
import LatestBlogPosts from './components/LatestBlogPosts';

const quickAnswers = [
  {
    q: "Is a heat pump worth it in Maryland, DC, or Virginia?",
    a: "Yes—especially with current rebates. Cold-climate heat pumps work efficiently down to -15°F and deliver 200-400% efficiency compared to oil or propane heating. Maryland homeowners save $800-$1,500/year on energy costs, and ZEHES rebates cover $5,000-$8,000 of installation costs for oil/propane conversions. DC and Northern Virginia offer up to $10,000 in combined utility and government incentives, making 2025-2027 the optimal replacement window before funding ends."
  },
  {
    q: "What size heat pump do I need for my home?",
    a: "Manual J load calculation is the only accurate method—rules of thumb like '400 sq ft per ton' fail in the DMV's mixed climate and varied housing stock. Professional sizing accounts for insulation levels, window efficiency, air sealing, orientation, and occupancy. Common DMV sizing ranges from 2-5 tons depending on these factors."
  },
  {
    q: "Do heat pumps work in cold weather?",
    a: "Modern cold-climate heat pumps deliver 100% heating capacity at 5°F and maintain output down to -15°F to -25°F depending on model. This covers 99.6% of winter hours in the DMV region. Top models include Mitsubishi H2i, Carrier Infinity, and Bosch IDS 2.0 Ultra."
  },
  {
    q: "What are A2L refrigerants and are they safe?",
    a: "A2L refrigerants (R-32, R-454B) replaced R-410A on January 1, 2025 to reduce greenhouse gas emissions by 85%. They're classified 'mildly flammable' but engineered safe through hermetic sealing, automatic leak detection, and high ignition energy requirements. 15+ million systems installed in Japan/Europe with zero residential fire incidents."
  }
];

const faqs = [
  {
    question: 'How much does a heat pump cost in Maryland, DC, or Virginia?',
    answer: `Complete installation costs (2025 pricing):
- Entry-level (SEER2 15-16, HSPF2 8-9): $8,000-$12,000
- Mid-range (SEER2 17-18, HSPF2 9.5-10.5): $12,000-$18,000
- Premium cold-climate (SEER2 19+, HSPF2 11+): $18,000-$25,000

After rebates:
- Maryland ZEHES: Net cost $2,000-$10,000 (depending on income/upgrades)
- DC EmPOWER: Net cost $500-$15,000
- Virginia: Net cost $7,000-$24,000 (fewer rebates)`
  },
  {
    question: 'Can I install a heat pump myself?',
    answer: `DIY installation is not recommended for ducted heat pumps due to:
1. Refrigerant handling: Requires EPA 608 certification (illegal to purchase/handle without license)
2. Electrical work: 240V circuits need permits, inspection (code violations void homeowner's insurance)
3. Load calculations: Manual J requires training to avoid oversizing/undersizing
4. Warranty: Manufacturers void coverage on non-professional installs
5. Rebate eligibility: Maryland ZEHES, DC EmPOWER require certified installers

Partial DIY options exist for ductless mini-splits (Mr. Cool DIY models), but professional installation pays for itself in avoided problems.`
  },
  {
    question: 'How long do heat pumps last?',
    answer: `Average lifespan: 15-20 years (comparable to gas furnaces)

Factors affecting longevity:
- Installation quality adds 3-5 years
- Annual maintenance extends life 20-30%
- DMV's moderate winters reduce wear vs. northern regions

Component lifespan:
- Compressor: 12-18 years (determines end-of-life)
- Air handler: 15-25 years
- Controls: 10-15 years

Replace when repairs exceed 50% of new system cost (typically after 10-12 years).`
  },
  {
    question: 'Do I need backup heat with a heat pump in the DMV?',
    answer: `Modern cold-climate heat pumps need minimal backup in DMV region:

Backup activation (typical system in Silver Spring, MD):
- Above 25°F: Heat pump meets 100% of load
- 15-25°F: Backup supplements 10-20%
- Below 15°F: Backup delivers 30-50% (occurs 10-30 hours/year)

Optimal strategy: Properly sized heat pump + 5-10 kW electric strips, with backup locked out above 15°F.`
  },
  {
    question: "What's the difference between a heat pump and an air conditioner?",
    answer: `A heat pump is an air conditioner that can reverse its refrigeration cycle to provide both heating and cooling.

Key differences:
- Heat pumps have a reversing valve (switches refrigerant flow)
- Heat pumps operate year-round (AC sits dormant in winter)
- Heat pumps cost $2,000-$6,000 more upfront
- Heat pumps qualify for $5,000-$10,000 rebates in DMV
- Heat pumps save $800-$1,500/year vs. gas/oil heating

Choose heat pump over AC + furnace for electrification, lower carbon emissions, and rebate eligibility.`
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Heat Pump Installation, Rebates & Training in Maryland, DC & Northern Virginia
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed">
              <strong>
                DMV Heat Pumps is your complete resource for heat pump education,
                installation guidance, and electrification rebates in the DMV
                region.
              </strong>{' '}
              Get expert answers on cold-climate heat pump sizing, A2L
              refrigerant safety, Maryland ZEHES rebates up to $8,000, contractor
              training programs, and AI-powered HVAC diagnostics.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                📍 Serving Maryland, DC & Northern Virginia
              </span>
              <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                🎓 EPA 608 & A2L Certified Resources
              </span>
              <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                💰 $8,000+ Rebate Navigation
              </span>
              <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                🤖 AI-Powered HVAC Intelligence
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/rebates"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-block"
              >
                Check Rebate Eligibility
              </Link>
              <Link
                href="/find-installer"
                className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-block border-2 border-white/30"
              >
                Find Certified Installer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answers Section */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Quick Answers to Your Top Heat Pump Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {quickAnswers.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {item.q}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {item.a}
                </p>
                <Link
                  href="/blog"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rebate Cards Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">
            Heat Pump Rebates & Incentives in the DMV
          </h2>
          <p className="text-xl text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Save thousands on your heat pump installation with federal, state,
            and utility rebates
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                Maryland
              </div>
              <h3 className="text-2xl font-bold mb-2">ZEHES Program</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                Up to $8,000
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">$2,000 electrical panel upgrade</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">$500 low-income bonus</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">Sales tax exemption</span>
                </li>
              </ul>
              <div className="text-sm text-slate-500 mb-4">
                ⏰ Funding may exhaust by 2027
              </div>
              <Link href="/rebates/maryland-zehes" className="btn-primary w-full text-center">
                View Details
              </Link>
            </div>

            <div className="card">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                Washington, DC
              </div>
              <h3 className="text-2xl font-bold mb-2">EmPOWER</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                Up to $10,000
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">Low-income: $10,000</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">Moderate-income: $2,500</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">Pepco additional rebates</span>
                </li>
              </ul>
              <div className="text-sm text-slate-500 mb-4">
                ⏰ Apply now
              </div>
              <Link href="/rebates/dc-incentives" className="btn-primary w-full text-center">
                View Details
              </Link>
            </div>

            <div className="card">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                Northern Virginia
              </div>
              <h3 className="text-2xl font-bold mb-2">Dominion Energy</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                Up to $800
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">$300 leak detector coverage</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">$200 smart thermostat</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">0% APR financing available</span>
                </li>
              </ul>
              <div className="text-sm text-slate-500 mb-4">
                ⏰ Ongoing program
              </div>
              <Link href="/rebates/virginia-rebates" className="btn-primary w-full text-center">
                View Details
              </Link>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-orange-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Stack Federal Tax Credits for Maximum Savings
            </h3>
            <p className="text-slate-700 mb-3">
              Add 30% federal tax credit (up to $2,000) on top of state/utility
              rebates. Example: $12,000 project - $8,000 ZEHES - $2,000 federal ={' '}
              <strong>$2,000 out-of-pocket</strong>
            </p>
            <Link
              href="/rebates/federal-tax-credits"
              className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
            >
              Calculate your federal credit
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contractor Training Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                HVAC Contractor Training & Certification
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                Prepare your business for the electrification transition with
                A2L certification, Manual J training, and AI-powered diagnostics.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 flex-shrink-0 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>EPA 608 + A2L Refrigerant Certification</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 flex-shrink-0 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Cold-Climate Heat Pump Installation Best Practices</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 flex-shrink-0 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>AI Diagnostics & Predictive Maintenance</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 flex-shrink-0 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Access to $1.8B+ ZEHES Market Opportunity</span>
                </li>
              </ul>
              <Link
                href="/training"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-block"
              >
                View Training Programs
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Join Our Contractor Network
              </h3>
              <p className="text-blue-100 mb-6">
                Get exclusive access to pre-qualified leads, bulk purchasing
                discounts, and advanced market intelligence.
              </p>
              <ul className="space-y-3 mb-6 text-blue-100">
                <li>✓ Lead generation tools & homeowner referrals</li>
                <li>✓ DMV market intelligence & competitive analysis</li>
                <li>✓ Business automation & AI scheduling</li>
                <li>✓ Technical support & code compliance</li>
              </ul>
              <Link
                href="/contractors/join"
                className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-white/30 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-block w-full text-center"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Blog Section */}
      <LatestBlogPosts />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Start Your Heat Pump Journey Today
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Whether you're a homeowner exploring electrification or a contractor
            preparing for the transition, we have the resources you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-block"
            >
              Read All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
