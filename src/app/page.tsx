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
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

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
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Frontier Plumbing"
      button={{
        text: "Call Now",        href: "tel:2086304240"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Frontier Plumbing"
      description="Fast, reliable residential plumbing services in McCall, Idaho – on call when you need us most."
      buttons={[
        {
          text: "Call Now: (208) 630-4240",          href: "tel:2086304240"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiAZWDji79X7atOCtPSK4CpOon/uploaded-1774896433735-30rgz611.jpg"
      imageAlt="Frontier Plumbing residential service tools"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Serving the McCall Community"
      description="Frontier Plumbing is dedicated to providing homeowners in McCall with top-tier plumbing solutions. We offer reliable, individualized plumbing options that fit your budget, ensuring exceptional work and long-term community relationships."
      metrics={[
        {
          value: "18",          title: "Google Reviews"},
        {
          value: "Local",          title: "Expertise"},
        {
          value: "24/7",          title: "Care"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiAZWDji79X7atOCtPSK4CpOon/uploaded-1774889775071-csi3atmo.jpg"
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
          tag: "Fix",          title: "Reliable Professionals",          subtitle: "Expert residential & commercial plumbing",          description: "From faucet installation to full sewer line replacements, we service water heaters, softeners, toilets, tubs, showers, and all plumbing needs inside and out.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiAZWDji79X7atOCtPSK4CpOon/uploaded-1774889947191-pxrc7ngy.jpg"},
        {
          id: 2,
          tag: "Budget",          title: "Individualized Plumbing Options",          subtitle: "No pressure sales",          description: "We work to educate our customers, helping you make informed decisions that fit your budget. We are plumbers, not salesmen, focused on long-term relationships.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiAZWDji79X7atOCtPSK4CpOon/uploaded-1774890044860-r18ts0kb.jpg"},
        {
          id: 3,
          tag: "Quality",          title: "Customer Satisfaction Guaranteed",          subtitle: "Exceptional work, fair value",          description: "Combining high-quality plumbing parts and equipment with a dedication to exceptional work, we deliver satisfactory service to all residential and commercial clients.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiAZWDji79X7atOCtPSK4CpOon/uploaded-1774890227557-0my4s9qq.jpg"},
      ]}
      title="Our Residential & Commercial Services"
      description="We specialize in high-quality plumbing services for your home and business."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
    <TestimonialCardFifteen
      testimonial="Frontier Plumbing did a fantastic job with my sink installation. Fast, professional, and very knowledgeable about local McCall home systems."
      rating={5}
      author="Val Iorga"
      avatars={[{ src: "https://ui-avatars.com/api/?name=Val+Iorga&background=random", alt: "Val Iorga" }]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
      useInvertedBackground={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Do you serve all of McCall?",          content: "Yes, we are fully dedicated to serving all residential properties in McCall, Idaho."},
        {
          id: "q2",          title: "Can I call for emergencies?",          content: "Absolutely, feel free to call our number at (208) 630-4240 for any urgent plumbing needs."},
        {
          id: "q3",          title: "Are you licensed?",          content: "Yes, Frontier Plumbing is licensed and insured for residential work."},
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
        variant: "plain"}}
      text="Ready to get your plumbing fixed? Call Frontier Plumbing today for reliable service."
      buttons={[
        {
          text: "Call Now: (208) 630-4240",          href: "tel:2086304240"},
      ]}
      className="bg-transparent"
      containerClassName="relative isolate after:absolute after:inset-0 after:-z-10 after:bg-black/50"
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