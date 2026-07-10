import {
  ClipboardCheck,
  Calendar,
  Hammer,
  Sparkles,
  Smile,
  Crown,
} from "lucide-react";

export const businessData = {
  homepage: {
    hero: {
      heading1: "Loyal",
      heading2: "Dentistry",
      heading3: "Arcadia",
      subheading: "smile everyday!",
      buttonText: "Book Appointment",
    },
    clinicInfo: {
      logo: "/images/logo.png",
      name: "Loyal Dentistry Arcadia",
      tagline: "smile everyday!",
      ctaText: "View More",
      about:
        "Loyal Dentistry is here to serve you! Our philosophy is based on the fact that everyone deserves to be treated with the utmost care and we adhere to the principles of sound dentistry so your health is maintained and improved.",
      detailedAbout:
        "Loyal Dentistry is here to serve you! Our philosophy is based on the fact that everyone deserves to be treated with the utmost care and we adhere to the principles of sound dentistry so your health is maintained and improved. We want to be true to you and keep consistent in providing the best dental care possible. We will do all we can to be loyal to you and we hope you can be loyal to us. \n\n Our doctors are committed to listening to your needs and using their knowledge and skills to fulfill your desires so that your dental health is maintained and improved. \n\n We are up to date on all dental materials, technology, and biological knowledge.  Our doctors also keep up with exceptional continuing education so they can always be on the cutting edge of dental science.\nWe welcome you to contact us!",
      difference:
        "While our dedication to delivering top-notch services is what sets us apart, it’s our commitment to offering the best care that truly makes a difference!\n\nAt our dental practice, we go beyond the standard dental experience. We take the time to get to know you as a person; to listen, understand, and tailor your treatment to what your dental goals and needs are.",
      mission:
        "We believe in the power of a confident and healthy smile, but understand the journey to achieving it is unique for each individual. At Loyal Dental, we create an environment where you feel comfortable, understood, and are actively involved, so that you can make the best decisions for your oral health!",
      values:
        "Honesty, transparency, reliability, compassion, and trustworthiness are at the core of our Sunshine Coast dental practice and guide every aspect of what we do. This ensures that you have full confidence in the care you receive, knowing that your needs are genuinely understood and you leave every appointment smiling. ",
      primaryImage: "",
      interiorImages: [
        { src: "/images/6.png", alt: "" },
        { src: "/images/7.png", alt: "" },
        { src: "/images/8.png", alt: "" },
        { src: "/images/9.png", alt: "" },
      ],
      aboutImg: "/images/2.png",
      moreAboutUsImg: "/images/5.png",
    },
    doctors: [
      {
        name: "Dr. Isabel Kuo",
        credentials: "D.D.S • Herman Ostrow School of Dentistry",
        detailedBio:
          "Dr. Isabel Kuo received her Doctor of Dental Surgery Degree from the Herman Ostrow School of Dentistry at University of Southern California (USC).  She then continued her education obtaining a General Practice Residency at the Los Amigos National Rehabilitation Center. \n\n Dr. Kuo's training allowed her to work with patients with medical, physical and developmental disabilities.  Her knowledge continued to expand to all types of comprehensive dental care. She is passionate about helping her patients maintain their dental health but also tailors her care depending on the specific needs of her patients.  She is compassionate, kind, knowledgeable and wants to make her patients feel as comfortable as possible.   She deeply adheres to the philosophy of Loyal Dentistry and treats all patients like she would her own family members. \n\n Dr. Kuo keeps up to date with the latest technology, techniques and dental science with top notch continuing education. \n\n During her free time, she enjoys pilates, learning new languages and visiting museums. ",
        image: "/images/3.png",
        ctaText: "View More",
      },
    ],
    services: [
      {
        name: "Dental Fillings",
        image: "",
      },
    ],
    testimonials: [
      {
        patientName: "Sonia M.",
        reviewText: `"Pleasantly surprised by the warm welcome from the front desk. Anna Marie was so helpful from start to finish. The Dentist was very thorough when explaining what treatments should be done. Overall a great experience for our first visit! Would 100% recommend."
`,
        rating: 5,
      },
      {
        patientName: "Kristine F.",
        reviewText: `"Loyal Dentistry is white glove dentistry. The staff is always responsive and caring. The hygienists and dentists are thorough, explain things well, and I trust them. The space is clean and updated. I'm overall very happy as a dentistry patient here.
Vicki and Angelique are the best! And AnneMarie at the front!"
`,
        rating: 5,
      },
      {
        patientName: "Gregory P.",
        reviewText: `"I was recommended by my GF who would always speak highly of their office. So I decided to try it out and sure enough, 5/5 stars for sure! The moment you walk in to the moment you leave. I was greeted with professionalism and care. Felt human to human versus just staff/doctor to patient/client. They combined both to truly make the experience worth coming back. I highly recommend Loyal and will recommend to others!
Thank you Loyal Dentistry Arcadia"`,
        rating: 5,
      },
    ],
    ctaSection: {
      heading: "Ready for a Healthier Smile?",
      subheading:
        "From routine checkups to complete smile transformations, we're here to make every visit comfortable and stress-free.",
      icon: Calendar,
      hrefLink: "",
      CtaText: "Book Appointment",
      bgImage: "/images/bgImage.png",
    },
  },
  aboutpage: {
    heroHeading: "Meet Our Team",
    heroImg: "/images/team.png",
  },
  servicepage: {
    heroHeading: "Our Services",
    heroImg: "/images/services.png",
    services: [
      {
        title: "Routine Exams",
        icon: ClipboardCheck,
        description:
          "Routine Exams are typically recommended every 6 months. They involve full mouth X-rays and a careful examination of gum tissue and teeth to make sure there is no inflammation and to rule out cavities or fractures in the enamel of teeth.",
        imgPath: "/images/serviceComponent1.png",
        ctaText: "Schedule Your Checkup",
      },
      {
        title: "Dental Fillings",
        icon: Hammer,
        description:
          "Fillings are usually needed when there is some decay affecting the enamel and/or dentin. Sometimes it's because of a fracture that weakens tooth structure. We use state of the art resin based filling materials that are strong and safe.",
        imgPath: "/images/serviceComponent2.png",
        ctaText: "Restore Your Tooth",
      },
      {
        title: "Dental Hygiene",
        icon: Sparkles,
        description:
          "We truly believe that keeping regular hygiene appointments is essential for maintaining the health of your gum tissue and teeth.\n\nOur hygienists are amazing at giving you proper oral care instructions as well as cleaning your teeth to reduce plaque and tartar build up. We recommend cleanings every 6 months unless your periodontal status requires every 3 months.",
        imgPath: "/images/serviceComponent3.png",
        ctaText: "Book a Cleaning",
      },
      {
        title: "Dentures",
        icon: Smile,
        description:
          "A denture is a removable replacement for missing teeth and surrounding tissues. Two types of dentures are available, complete and partial dentures. Complete dentures are used when all teeth are missing, while partial dentures are used when some natural teeth remain.\n\nEvery measure is taken to have these teeth and gums look as natural as possible while you can function on them adequately. Sometimes, dentures are supported better when attached to an implant placed in your bone. This is termed, an over denture.",
        imgPath: "/images/serviceComponent4.png",
        ctaText: "Explore Denture Options",
      },
      {
        title: "Teeth Whitening",
        icon: Sparkles,
        description:
          "Teeth whitening is performed when there is staining to teeth. The source could be external staining or internal staining. If it is internal, internal bleaching can be done but only if the tooth has had endodontic therapy. Our Endodontist will help you with that.\n\nExternal bleaching can be done with take home appliances or in-office whitening systems. Your dentist can guide you on what is most appropriate for your situation.",
        imgPath: "/images/serviceComponent5.png",
        ctaText: "Brighten Your Smile",
      },
      {
        title: "Crowns & Veneers",
        icon: Crown,
        description:
          "A dental crown is a tooth-shaped cap that encases a tooth to restore the tooth to its original shape, size, and strength as well as to improve the overall appearance. There are several reasons why a dental crown is needed. They include protecting a weak or cracked tooth, to restore an already broken tooth, to cover a large filling when there isn’t much of the tooth left, to hold a dental bridge in place, to cover misshapen or discolored teeth, or to cover a dental implant. Veneers are recommended for front teeth where less natural tooth structure is removed.",
        imgPath: "/images/serviceComponent6.png",
        ctaText: "Transform Your Smile",
      },
    ],
    ctaSection: {
      ctaText: "Schedule Your Consultation",
      href: "/book",
      heading: "Found the Right Treatment for You?",
      subHeading:
        "Whether you need preventive care, cosmetic enhancements, or restorative treatment, our team is here to create a personalized plan that fits your smile and your goals.",
      bgImage: "/images/services-cta.png",
    },
  },
  contactPage: {
    heroHeading: "Book \n Your \n Appointment",
    heroImg: "/images/book.png",
  },
  // LoyalPage: {
  //   heroHeading: "The loyal dental plan",
  //   heroImg: "/images/loyalPlan.png",
  //   heading:
  //     "Frustrated with your dental insurance or Frustrated because you don't have insurance?",
  //   subH: ""
  // },

  contactInfo: {
    phone: "",
    email: "",
    address: "",
    workingHours: "",
    mapUrl: "",
    socials: {
      facebook: "",
      instagram: "",
      youtube: "",
    },
  },
  Footer: {
    clinicName: "Loyal Dentistry Arcadia",
    year: "2026",
    monToFri: "8AM to 5PM",
    satToSun: "Closed",
    location: "624 W Duarte Rd #204, Arcadia, CA 91007",
    email: "info@loyaldentistry.com",
    tel: "(626) 447-0934",
    ctaText: "Book Now",
  },
};
