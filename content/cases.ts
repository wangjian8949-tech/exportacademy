export interface CaseStudy {
  id: string;
  name: string;
  background: string;
  starting: string;
  changed: string;
  outcome: string;
  quote: string;
  category: string;
  timeline: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    name: "M.R. — Marketing Manager, UK",
    background: "Corporate marketing, 8 years experience",
    category: "Home & Kitchen",
    timeline: "11 weeks",
    starting: "Had a product idea for 2 years. Never placed a single supplier inquiry. Earning £52k but with no exit plan.",
    changed: "1:1 guidance to identify 2 certified suppliers in Guangdong. Sample comparison process. First order of 300 units placed with Trade Assurance.",
    outcome: "First order landed. Sold 240/300 units in 6 weeks via Amazon UK. Gross profit: £1,840 on £780 investment. Reinvested and is now on third order.",
    quote: "I spent two years reading about this. It took six weeks with actual guidance to finally do it. The difference isn't information — it's having someone tell you exactly what to do next.",
  },
  {
    id: "2",
    name: "J.T. — Instagram Creator, 68K followers",
    background: "Fitness niche, brand deals only",
    category: "Fitness Accessories",
    timeline: "14 weeks",
    starting: "Making $800-1,200/month from brand deals. No product, no ownership, completely dependent on algorithm.",
    changed: "Identified audience pain point from comment mining. Sourced custom-branded resistance band set. Used audience for pre-sell validation (47 units pre-sold before ordering).",
    outcome: "First product: 200 units, custom branding. Sold out in 3 weeks to existing audience. Revenue: $6,200. Building second SKU now. Brand deal dependency dropped to secondary income.",
    quote: "I had the audience. I just needed someone to show me how to actually build the product side. That's exactly what happened.",
  },
  {
    id: "3",
    name: "D.K. — Shop owner, Malaysia",
    background: "Ran retail shop, struggling with margins on locally sourced goods",
    category: "Gift & Lifestyle",
    timeline: "9 weeks",
    starting: "Physical retail with 12-18% margins on resold goods. Knew he needed to source direct but didn't know how.",
    changed: "Mapped current product line against direct-source equivalents. Identified 3 categories with viable direct-import economics. First factory visit virtually facilitated.",
    outcome: "Switched 40% of product line to direct import. Average margin on those products: 47%. Year 1 bottom-line improvement: est. $14,000.",
    quote: "The economics are completely different when you cut the middlemen. I just needed someone who knew the supply chain to help me navigate it.",
  },
  {
    id: "4",
    name: "P.N. — Accountant, Singapore",
    background: "Finance professional, zero business experience outside employment",
    category: "Office & Stationery",
    timeline: "16 weeks",
    starting: "Wanted to start a business. Had capital. Had financial skills. Had zero supply chain knowledge.",
    changed: "$999 Done-with-you track. We identified the category, sourced 3 factories, ran sample comparison, handled QC, managed logistics. She approved and monitored.",
    outcome: "First order: 500 units, premium desk organizer set. Landed in Singapore. Listed on Shopee + Carousell. Sold through in 8 weeks. Profit: SGD 3,200. Now managing second order independently.",
    quote: "I could build the spreadsheets. I needed someone who knew the supply side. That's exactly what the program delivered.",
  },
  {
    id: "5",
    name: "A.M. — Former teacher, Australia",
    background: "Career change, limited capital, high motivation",
    category: "Children's Educational",
    timeline: "12 weeks",
    starting: "Left teaching. $2,000 total budget. Wanted to build something but didn't know where to start.",
    changed: "Started with $99 self-study. Struggled with supplier communication. Upgraded to $499 guided track. Got matched with verified supplier. Placed first order in week 7.",
    outcome: "First order: 150 units educational wooden toy set. Sold to 3 independent toy stores + Etsy. Revenue: $4,200. Margin: 58%. Reorder already placed.",
    quote: "I started with the $99 course and it gave me the foundation. But I needed the 1:1 to actually push through. Worth every cent.",
  },
  {
    id: "6",
    name: "K.L. — Tech startup, B2B",
    background: "Small tech company needing branded merchandise for clients",
    category: "B2B / Branded Merchandise",
    timeline: "6 weeks",
    starting: "Spending $8,000/year on branded merchandise through local vendors at terrible margins.",
    changed: "Mapped full merchandise line against direct-source options. Identified 4 categories for direct import. Set up repeatable ordering process.",
    outcome: "Cut merchandise cost by 62%. Same quality, better delivery time. Annual saving: $4,960. Now using surplus budget for additional product lines.",
    quote: "We thought importing directly was only for product businesses. Turns out it works for corporate purchasing too. Simple process once you know how.",
  },
];
