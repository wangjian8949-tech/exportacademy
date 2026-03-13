export interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  pages?: string;
  downloadLabel: string;
}

export const resources: Resource[] = [
  {
    id: "supplier-outreach",
    title: "Supplier Outreach Scripts",
    description:
      "7 proven message templates for first contact, sample requests, price negotiation, and quality issues. Copy-paste ready for Alibaba Trade Manager or email.",
    type: "PDF + Templates",
    pages: "14 pages",
    downloadLabel: "Download Scripts",
  },
  {
    id: "sampling-scorecard",
    title: "Sampling Scorecard",
    description:
      "Systematic framework for evaluating samples across 12 quality dimensions. Stop guessing — know exactly which supplier to choose and why.",
    type: "Excel / Google Sheets",
    pages: "2 sheets",
    downloadLabel: "Download Scorecard",
  },
  {
    id: "qc-checklist",
    title: "Pre-Shipment QC Checklist",
    description:
      "The exact checklist we use before approving any shipment. Covers product, packaging, documentation, and labeling. Works for self-inspection or briefing a third-party inspector.",
    type: "PDF Checklist",
    pages: "8 pages",
    downloadLabel: "Download QC Checklist",
  },
  {
    id: "shipping-basics",
    title: "Shipping & Logistics Basics Guide",
    description:
      "Air vs. ocean freight. Incoterms explained. How to read a shipping quote. Customs clearance simplified. Everything you need to understand your first shipment without getting ripped off.",
    type: "PDF Guide",
    pages: "22 pages",
    downloadLabel: "Download Shipping Guide",
  },
];
