"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

// Layout Components
import Navbar from "@/components/layout/navbar"
import CustomCursor from "@/components/common/custom-cursor"
import DigitalRain from "@/components/magicui/digital-rain"

// Section Components
import HeroSection from "@/components/sections/hero"
import AboutSection from "@/components/sections/about"
import TechStackSection from "@/components/sections/tech-stack"
import ProjectsSection from "@/components/sections/projects"
import ContactSection from "@/components/sections/contact"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black cursor-none relative overflow-x-hidden">
      {/* Global Background Effects */}
      <CustomCursor />

      {/* Digital Rain / Laser Waterfall Effect - Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DigitalRain number={30} />
      </div>

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
