import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sagar Kale | Software Engineer | Personal Website",
  description:
    "I am a Software Engineer with experience in Angular6+, React, RxJs and state management like Ngrx, Redux with proficiency in web technologies like HTML, CSS, JavaScript, building large-scale web applications, cross-browser platforms, and design constraints on the web, and building responsive user interfaces.",
  icons: {
    icon: "favicon.png",
  },
  keywords:
    "sagar kale, Sagar, Sagar Kale, Kale, sagar, kale, sagarkale, sagar-kale, sagar kale portfolio, pune based software engineer, pune engineer",
  openGraph: {
    title: "Sagar Kale | Software Engineer | Personal Website",
    description:
      "I am a Software Engineer with experience in Angular6+, React, RxJs and state management like Ngrx, Redux with proficiency in web technologies like HTML, CSS, JavaScript, building large-scale web applications, cross-browser platforms, and design constraints on the web, and building responsive user interfaces.",
    images: "https://avatars.githubusercontent.com/u/46244365?v=4",
  },
  twitter: {
    title: "Sagar Kale | Software Engineer | Personal Website",
    description:
      "I am a Software Engineer with experience in Angular6+, React, RxJs and state management like Ngrx, Redux with proficiency in web technologies like HTML, CSS, JavaScript, building large-scale web applications, cross-browser platforms, and design constraints on the web, and building responsive user interfaces.",
    images: "https://avatars.githubusercontent.com/u/46244365?v=4",
  },
  authors: {
    name: "Sagar Kale",
  },
  publisher: "Sagar Kale",
};

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Sagar Kale",
  url: "https://sagarkale.co.in/",
  sameAs: [
    "https://www.linkedin.com/in/sagar-kale/",
    "https://twitter.com/sagarkale94",
    "https://github.com/sagarkale94",
  ],
  jobTitle: "Software Engineer",
  image: "https://avatars.githubusercontent.com/u/46244365?v=4",
  description:
    "I am a Software Engineer with experience in Angular6+, React, RxJs and state management like Ngrx, Redux with proficiency in web technologies like HTML, CSS, JavaScript, building large-scale web applications, cross-browser platforms, and design constraints on the web, and building responsive user interfaces.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "India",
  },
  email: "sagarkale94@gmail.com",
  telephone: "+918551913973",
  memberOf: {
    "@type": "Organization",
    name: "Sagacity Software Pvt Ltd.",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Smt. Kashibai Navale College of Engineering, Vadgaon",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sagarkale.co.in/",
  },
  knowsAbout: [
    {
      "@type": "Language",
      name: "English",
    },
    {
      "@type": "Language",
      name: "Hindi",
    },
    {
      "@type": "Language",
      name: "Marathi",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://www.sagarkale.co.in/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
