import {
  ClipboardCheck,
  Calendar,
  Hammer,
  Sparkles,
  Smile,
  Crown,
} from "lucide-react";

const zentooth = {
  homepage: {
    hero: {
      heading1: "Zentooth",
      heading2: "Endodontics",
      heading3: "Atlanta",
      subheading: "Comfort, Care, and Expertise.",
      buttonText: "Book Appointment",
      bgImg: "/clients/zentooth/1.png",
    },
    clinicInfo: {
      logo: "/clients/zentooth/logo.png",
      ctaText: "View More",
      about:
        "At Zentooth Endodontics, we are dedicated to providing exceptional endodontic care with precision, compassion, and advanced technology. Led by Dr. Young Okeke, our practice focuses on preserving natural teeth through specialized treatment while ensuring every patient receives personalized care in a comfortable and welcoming environment.",
      detailedAbout:
        "Zentooth Endodontics is a specialty practice dedicated exclusively to advanced endodontic care. Under the leadership of Dr. Young Okeke, our goal is to provide patients and referring dentists with expert treatment using modern techniques, evidence-based care, and state-of-the-art technology. \n\n Dr. Okeke brings a diverse background in dentistry, including earning his Doctor of Dental Surgery from Columbia University College of Dental Medicine, serving as a Dental Officer in the United States Navy, and completing advanced specialty training in Endodontics at Louisiana State University Health Sciences Center. His experience allows him to deliver precise, high-quality care for both routine and complex endodontic cases. \n\n Our practice provides comprehensive endodontic services including root canal therapy, retreatment, root canal surgery, treatment of cracked teeth, management of dental trauma and abscesses, internal tooth bleaching, and care for patients with dental anxiety. Every treatment plan is carefully tailored to preserve your natural teeth while prioritizing your comfort and long-term oral health. \n\n ",
      difference:
        "What sets Zentooth Endodontics apart is our exclusive focus on endodontic care combined with advanced technology and a patient-centered approach. From accurate diagnosis to precise treatment, every aspect of your visit is designed to provide exceptional outcomes while making your experience as comfortable and stress-free as possible. Our commitment to clinical excellence, compassionate care, and clear communication ensures that every patient receives specialized treatment tailored to their individual needs.",
      mission:
        "Our mission is to preserve natural teeth by providing advanced endodontic care with precision, integrity, and compassion. We strive to create a comfortable environment where every patient receives expert treatment, clear guidance, and personalized care that promotes lasting oral health and confidence.",
      values:
        "At Zentooth Endodontics, our values are rooted in clinical excellence, honesty, compassion, and respect. We believe every patient deserves individualized care, transparent communication, and treatment supported by the latest advancements in endodontics. Through professionalism, continuous learning, and genuine concern for our patients' well-being, we aim to build lasting trust and deliver exceptional care at every visit.",
      primaryImage: "",
      interiorImages: [
        { src: "/clients/zentooth/6.png", alt: "" },
        { src: "/clients/zentooth/7.png", alt: "" },
        { src: "/clients/zentooth/8.png", alt: "" },
        { src: "/clients/zentooth/9.png", alt: "" },
      ],
      aboutImg: "/clients/zentooth/2.png",
      moreAboutUsImg: "/clients/zentooth/5.png",
    },
    doctors: [
      {
        name: "Dr. Young Okeke",
        credentials: "D.D.S • M.S.D",
        detailedBio:
          "Dr. Okeke received his Doctor of Dental Surgery degree from the Columbia University College of Dental Medicine in New York, NY. Upon graduating, he was commissioned as a Lieutenant in the United States Navy Dental Corps. He went on to complete a one-year credentialing tour in General Dentistry at the Marine Recruiting Depot Parris Island in Beaufort, SC. \n \n Immediately after receiving his postgraduate training, Dr. Okeke joined the staff onboard USS Ronald Reagan (CVN-76) which at the time was preparing to go through a transition phase into an unprecedented three carrier crew swap comprising over 15,000 sailors. Dr. Okeke set out to treat patients using the full scope of general dentistry \n\n Dr. Okeke thoroughly enjoys practicing the full scope of endodontics and prides himself on his strong relationship with referrals and commitment to patients. When not in the office he enjoys hiking, cycling, kayaking and exploring diverse cuisines the great Peach State has to offer.",
        image: "/clients/zentooth/team1.png",
        ctaText: "View More",
      },
    ],
    testimonials: [
      {
        patientName: "Vivian D.",
        reviewText: `"My name is Vivian Denson my experience here was absolutely Amazing!! From the front desk staff to the doctor was a great experience they made me feel comfortable they ease my anxiety. They even call me the next day after my procedure to check on me and that meant alot. The procedure was easy and painless. I applaud each of them!"
`,
        rating: 5,
      },
      {
        patientName: "Jacob C.",
        reviewText: `"Dr Okeke and the Zentooth staff were awesome. They were empathetic, professional and knowledgeable in their interactions with me. Dr Okeke provided painless and proficient service. Dental hygienist Stacia was friendly and provided a comfortable environment. I highly recommend this place and I will continue to use Zentooth services."`,
        rating: 5,
      },
      {
        patientName: "Ashley W.",
        reviewText: `"Amazing experience here! Everyone here was so kind and made sure I understood all my options and costs upfront. I was able to be seen quickly and the procedure was stress-free. I left with zero pain and was able to work that afternoon. 10/10 highly recommend!"`,
        rating: 5,
      },
    ],
    ctaSection: {
      heading: "Ready to Save Your Tooth?",
      subheading:
        "Whether you're experiencing tooth pain, a cracked tooth, dental trauma, or need expert root canal treatment, we're here to provide compassionate care and lasting relief.",
      icon: Calendar,
      hrefLink: "",
      CtaText: "Book Appointment",
      bgImage: "/images/bgImage.png",
    },
  },
  aboutpage: {
    heroHeading: "Meet Our Team",
    heroImg: "/clients/zentooth/team.png",
  },
  servicepage: {
    heroHeading: "Our Services",
    heroImg: "/clients/zentooth/services.png",
    services: [
      {
        title: "Root canal therapy",
        icon: ClipboardCheck,
        description:
          "Root canal therapy is a dental procedure that treats infection in a tooth's root canal by removing the damaged pulp, then cleaning and sealing the tooth. This process helps save the tooth and prevent further infection, relieving pain and maintaining oral health.",
        imgPath: "/clients/zentooth/serviceComponent1.png",
        ctaText: "Book Root Canal Consultation",
      },
      {
        title: "Cracked tooth repair",
        icon: Hammer,
        description:
          "Cracked tooth repair involves diagnosing the extent of a tooth crack and then using dental techniques such as bonding, filling, a crown, or root canal therapy to restore the tooth's structure and function. The chosen treatment depends on the crack's severity and location, aiming to alleviate pain, prevent further damage, and preserve the tooth's integrity",
        imgPath: "/clients/zentooth/serviceComponent2.png",
        ctaText: "Repair My Tooth",
      },
      {
        title: "Dental trauma",
        icon: Sparkles,
        description:
          "Dental trauma refers to injury to the teeth, gums, or jawbone, which can result from accidents, sports injuries, falls, or violent incidents. Treatment varies based on the injury's severity and might include reattachment of knocked-out teeth, splinting, root canal therapy, or surgery to restore dental health and function, emphasizing the importance of immediate and appropriate care to optimize outcomes.",
        imgPath: "/clients/zentooth/serviceComponent3.png",
        ctaText: "Get Emergency Dental Care",
      },
      {
        title: "Root canal retreatment",
        icon: Smile,
        description:
          "Root canal retreatment involves re-opening a tooth that has previously undergone root canal therapy to remove the filling materials, cleanse the canals, and address any new infection or persistent problems. This procedure aims to restore the tooth's health and function when the initial treatment fails or complications arise, offering a second chance to save the tooth.",
        imgPath: "/clients/zentooth/serviceComponent4.png",
        ctaText: "Schedule Retreatment",
      },
      {
        title: "Dental anxiety",
        icon: Sparkles,
        description:
          "Dental anxiety refers to the fear, stress, or unease experienced by some individuals when facing dental procedures, often leading to avoidance of dental care. Various strategies, including psychological techniques, communication, sedation, and anesthesia, are employed by dental professionals to manage and alleviate these fears, ensuring patients can receive necessary dental treatment comfortably.",
        imgPath: "/clients/zentooth/serviceComponent5.png",
        ctaText: "Feel Comfortable at Your Visit",
      },
      {
        title: "Internal tooth bleaching",
        icon: Crown,
        description:
          "Internal tooth bleaching is a cosmetic dental procedure targeting discoloration within a tooth, typically performed on teeth that have undergone root canal therapy. The process involves placing a bleaching agent inside the tooth and sealing it temporarily to lighten the tooth from the inside out, effectively improving its appearance without altering the external structure.",
        imgPath: "/clients/zentooth/serviceComponent6.png",
        ctaText: "Enhance Your Smile",
      },
      {
        title: "Root canal surgery",
        icon: Crown,
        description:
          "Root canal surgery, also known as apicoectomy, is a surgical procedure performed to remove the tip of a tooth's root and any surrounding infected tissue when conventional root canal therapy cannot resolve the infection. This technique helps preserve the tooth by sealing the root end, preventing further infection and promoting healing in the surrounding bone.",
        imgPath: "/clients/zentooth/serviceComponent7.png",
        ctaText: "Book Now",
      },
    ],
    ctaSection: {
      ctaText: "Schedule Your Consultation",
      href: "/book",
      heading: "Found the Right Treatment for You?",
      subHeading:
        "Whether you're dealing with tooth pain, dental trauma, a cracked tooth, or need specialized root canal care, our team is here to restore your comfort and protect your smile.",
      bgImage: "/images/services-cta.png",
    },
  },
  contactPage: {
    heroHeading: "Book \n Your \n Appointment",
    heroImg: "/clients/zentooth/book.png",
  },
  Footer: {
    clinicName: "Zentooth Endodontics Atlanta",
    year: "2026",
    monToFri: "8AM to 4PM",
    satToSun: "Closed",
    location: "999 Peachtree St NE #705, Atlanta, GA 30309",
    email: "office@zentooth.com",
    tel: "(404) 885-1441",
    ctaText: "Book Now",
    instaLink: "https://www.instagram.com/zentooth/",
    fbLink: "https://www.facebook.com/p/Young-Okeke-DDS-MSD-100064175434225/",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.2110879038905!2d-84.38624742589535!3d33.78104673200437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e20de8496cfb6c5%3A0x88005524bea734b5!2sZentooth%20Endodontics%20-%20Atlanta%3A%20Root%20Canal%20Specialist%20-%20Young%20Okeke%20DDS%2C%20MSD!5e0!3m2!1sen!2s!4v1784130692636!5m2!1sen!2s",
  },
  practiceInfo: {
    section1Heading: "What Sets Zentooth Endodontics Apart",
    section1List: [
      "Dedicated endodontic specialists providing advanced diagnosis and treatment using state-of-the-art technology.",
      "Comprehensive care focused exclusively on preserving natural teeth through modern endodontic procedures.",
      "Treatment delivered by Dr. Young Okeke, whose experience includes advanced specialty training and service as a United States Navy Dental Officer.",
      "Strict infection control protocols following the recommendations of OSHA, the American Association of Endodontists (AAE), and the American Dental Association (ADA).",
      "Personalized treatment plans designed to maximize comfort while delivering precise, evidence-based care.",
      "Comprehensive services including root canal therapy, retreatment, endodontic surgery, cracked tooth treatment, dental trauma management, dental abscess treatment, and internal tooth bleaching.",
      "A welcoming environment where patient comfort, clear communication, and clinical excellence remain our highest priorities.",
    ],

    section2Heading: "Patient Resources & Insurance",

    section2List: [
      "Expert care delivered using advanced diagnostic technology and modern treatment techniques.",
      "We work with most major dental insurance providers to help maximize your benefits and minimize your out-of-pocket costs.",
      "No insurance? Cash payments are accepted, and flexible financing is available through Sunbit's 'Smile Now, Pay-over-Time' program.",
      "Prescription requests can be conveniently sent directly to your preferred pharmacy.",
      "Our knowledgeable team is always available to answer insurance questions and help you understand your treatment options.",
    ],
  },
};

export default zentooth;
