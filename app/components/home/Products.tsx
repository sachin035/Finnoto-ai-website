import {ProductDetail, ProductDetailProps} from "./ProductDetail";

const Products = () => {
  const products: ProductDetailProps[] = [
    {
      header: {
        label: "AI POWERED OCR ",
        appearance: "error",
        title: "Extract Data with 99% Accuracy & 10x Speed",
        description:
          "Finnoto AI instantly converts scanned documents into structured data with 99% accuracy. Process invoices, receipts, and forms 10x faster—eliminating manual entry and errors. ",
      },
      image: "/images/home/ocr-data.png",
    },
    {
      header: {
        label: "EMAIL Data Extraction & Expense Approval",
        appearance: "success",
        title: "Automate Expenses with 99% Accuracy & Zero Effort",
        description:
          "Finnoto AI extracts key data from invoices, receipts, and approval emails with 99% accuracy, eliminating manual effort. It auto-detects approvals and updates your system, making expense processing 80% faster.",
      },
      image: "/images/home/email-data.png",
      reverseOrder: true,
    },
    {
      header: {
        label: "AI POWERED OCR ",
        appearance: "error",
        title: "Instant Reports & Insights – 10x Faster Data Analysis",
        description:
          "Ask Finnoto AI for any report—sales, expenses, invoices, or financial summaries—and get detailed insights with interactive graphs in seconds.",
      },
      image: "/images/home/reports-data.png",
    },
    {
      header: {
        label: "AI-Powered Report Generation & Insights",
        appearance: "base",
        title: "Extract Data with 99% Accuracy & 10x Speeds",
        description:
          "Finnoto AI instantly converts scanned documents into structured data with 99% accuracy. Process invoices, receipts, and forms 10x faster—eliminating manual entry and errors. ",
      },
      image: "/images/home/order-data.png",
      reverseOrder: true,
    },
    {
      header: {
        label: "AI-Powered Knowledge Base Assistant",
        appearance: "warning",
        title: "AI-Powered Knowledge Base Assistant – 24/7 Intelligent Support",
        description:
          "Get step-by-step guidance, troubleshooting help, and financial insights with Finnoto AI’s smart assistant—complete with precise answers, video links, and actionable suggestions.",
      },
      image: "/images/home/knowledge-base.png",
    },
  ];
  return products.map((product) => (
    <div className="mb-10" key={product.header.title}>
      <ProductDetail
        header={product.header}
        image={product.image}
        reverseOrder={product.reverseOrder}
      />
    </div>
  ));
};

export {Products};
