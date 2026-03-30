"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="blurBottom"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Frontier Plumbing"
      button={{
        text: "Call Now",
        href: "tel:2086304240",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Frontier Plumbing"
      description="Professional residential plumbing services in McCall, Idaho. Trusted, reliable, and ready to help with your home plumbing needs."
      buttons={[
        {
          text: "Call Now: (208) 630-4240",
          href: "tel:2086304240",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/sanitary-technician-gesturing-thumb-up_23-2147772204.jpg"
      imageAlt="Frontier Plumbing residential service"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Serving the McCall Community"
      description="Frontier Plumbing is dedicated to providing homeowners in McCall with top-tier plumbing solutions. From routine maintenance to emergency repairs, we prioritize your comfort and home safety."
      metrics={[
        {
          value: "18",
          title: "Google Reviews",
        },
        {
          value: "Local",
          title: "Expertise",
        },
        {
          value: "24/7",
          title: "Care",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721540.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          tag: "Fix",
          title: "Emergency Repairs",
          subtitle: "Fast local response",
          description: "Quick solutions for leaks, clogs, and broken fixtures.",
          imageSrc: "http://img.b2bpic.net/free-photo/sanitary-technician-gesturing-thumb-up_23-2147772204.jpg",
        },
        {
          id: 2,
          tag: "Install",
          title: "Fixture Installation",
          subtitle: "Upgrade your home",
          description: "Professional installation for sinks, faucets, and showers.",
          imageSrc: "http://img.b2bpic.net/free-photo/sanitary-technician-gesturing-thumb-up_23-2147772204.jpg",
        },
        {
          id: 3,
          tag: "Main",
          title: "Routine Maintenance",
          subtitle: "Prevent issues early",
          description: "Regular checkups to keep your home plumbing smooth.",
          imageSrc: "http://img.b2bpic.net/free-photo/sanitary-technician-gesturing-thumb-up_23-2147772204.jpg",
        },
      ]}
      title="Our Residential Services"
      description="We specialize in high-quality plumbing services for your home."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah M.",
          role: "Homeowner",
          company: "McCall Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-high-fiving-each-other-beer-pong-game_23-2149431325.jpg",
        },
        {
          id: "2",
          name: "David L.",
          role: "Homeowner",
          company: "McCall Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-caucasian-smiling-woman_93675-135824.jpg",
        },
        {
          id: "3",
          name: "Emily B.",
          role: "Homeowner",
          company: "McCall Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/satisfied-customer-shaking-hands-with-mechanic_1170-1275.jpg",
        },
        {
          id: "4",
          name: "Mark K.",
          role: "Homeowner",
          company: "McCall Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-male-plumber-standing-near-kitchen-sink-showing-thumb-up_1098-17823.jpg",
        },
        {
          id: "5",
          name: "Jessica R.",
          role: "Homeowner",
          company: "McCall Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-high-fiving-each-other-beer-pong-game_23-2149431325.jpg",
        },
      ]}
      title="Trusted by Local Homeowners"
      description="Read why our neighbors in McCall trust Frontier Plumbing."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you serve all of McCall?",
          content: "Yes, we are fully dedicated to serving all residential properties in McCall, Idaho.",
        },
        {
          id: "q2",
          title: "Can I call for emergencies?",
          content: "Absolutely, feel free to call our number at (208) 630-4240 for any urgent plumbing needs.",
        },
        {
          id: "q3",
          title: "Are you licensed?",
          content: "Yes, Frontier Plumbing is licensed and insured for residential work.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Common questions about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to get your plumbing fixed? Call Frontier Plumbing today for reliable service."
      buttons={[
        {
          text: "Call Now: (208) 630-4240",
          href: "tel:2086304240",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Frontier Plumbing"
      copyrightText="© 2025 Frontier Plumbing | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
