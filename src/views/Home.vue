<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import FeaturesSection from '../components/sections/FeaturesSection.vue'
import CalloutSection from '../components/sections/CalloutSection.vue'
import StepsSection from '../components/sections/StepsSection.vue'
import PricingSection from '../components/sections/PricingSection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="home">
    <Navbar />
    <main>
      <HeroSection id="inicio" />
      <AboutSection id="nosotros" />
      <FeaturesSection id="servicios" />
      <CalloutSection id="evento" />
      <StepsSection id="participar" />
      <PricingSection id="membresias" />
      <TestimonialsSection id="testimonios" />
      <ContactSection id="contacto" />
    </main>
    <Footer />
  </div>
</template>