export const footerWhatWeDoLinks = [
  { label: "Offset Printing & Packaging", href: "/what-we-do/offset-packaging" },
  { label: "Computer Forms", href: "/what-we-do/computer-forms" },
  { label: "Business Forms", href: "/what-we-do/business-forms" },
  { label: "Web Printing", href: "/what-we-do/web-printing" },
  { label: "Rigid Boxes", href: "/what-we-do/rigid-boxes" },
  { label: "Thermal & ATM/POS Rolls", href: "/what-we-do/thermal-rolls" },
  { label: "Stickers & Labels", href: "/what-we-do/stickers-labels" },
] as const;

export const whatWeDoLinks = [
  { label: "Computer Forms", href: "/what-we-do/computer-forms", img: "/card-computer-forms.webp", desc: "Precision continuous paper & litho-coded secure forms" },
  { label: "Business Forms", href: "/what-we-do/business-forms", img: "/card-computer-forms.webp", desc: "NCR multi-ply auto-carbon forms for critical transactions" },
  { label: "OMR Forms", href: "/what-we-do/omr-forms", img: "/card-computer-forms.webp", desc: "Optical Mark Recognition examination forms" },
  { label: "Exam Copy", href: "/what-we-do/exam-copy", img: "/card-web-printing.webp", desc: "Examination materials at national scale" },
  { label: "Exercise Books", href: "/what-we-do/exercise-books", img: "/card-web-printing.webp", desc: "Exercise books printed and bound at volume" },
  { label: "Web Printing", href: "/what-we-do/web-printing", img: "/card-web-printing.webp", desc: "Textbooks, exercise books & calendars at volume" },
  { label: "Offset Printing & Packaging", href: "/what-we-do/offset-packaging", img: "/card-offset-packaging.webp", desc: "Commercial packaging with premium finishes" },
  { label: "Thermal & ATM/POS Rolls", href: "/what-we-do/thermal-rolls", img: "/card-thermal-rolls.webp", desc: "Precision-slit, dust-free transactional rolls" },
  { label: "Rigid Boxes", href: "/what-we-do/rigid-boxes", img: "/card-rigid-boxes.webp", desc: "Luxury packaging on automated smart lines" },
  { label: "Stickers & Labels", href: "/what-we-do/stickers-labels", img: "/card-stickers-labels.webp", desc: "High-definition adhesive labels, built to stick" },
] as const;

export const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Mission, Vision & Values", href: "/about/mission" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
] as const;

export const mainNav = [
  { key: "about", href: "/about" },
  { key: "whatWeDo", href: "/what-we-do", hasMega: true },
  { key: "capabilities", href: "/capabilities" },
  { key: "clients", href: "/clients" },
  { key: "contact", href: "/contact" },
  { key: "careers", href: "/careers" },
] as const;
