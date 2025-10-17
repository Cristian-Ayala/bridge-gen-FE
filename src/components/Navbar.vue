<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const isScrolled = ref(false)

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Evento', href: '#evento' },
  { name: 'Participar', href: '#participar' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="[
    'fixed top-0 w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  ]">
    <div class="container">
      <Disclosure as="nav" v-slot="{ open }">
        <div class="flex items-center justify-between">
          <div class="flex-shrink-0">
            <a href="#" class="flex items-center">
              <span :class="['text-2xl font-bold', isScrolled ? 'text-primary-700': 'text-white']">Bridge<span class="text-secondary-500">Gen</span></span>
            </a>
          </div>

          <!-- Desktop navigation -->
          <div class="hidden md:block">
            <div class="flex space-x-8">
              <a v-for="item in navLinks" :key="item.name" :href="item.href"
                :class="[
                  isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-secondary-400',
                  'font-medium transition-colors duration-200'
                ]">
                {{ item.name }}
              </a>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="hidden md:block">
            <a href="#contacto" class="btn btn-primary">Inscríbete</a>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              :class="isScrolled ? 'text-gray-800' : 'text-white'">
              <span class="sr-only">Abrir menú</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </DisclosureButton>
          </div>
        </div>

        <!-- Mobile menu -->
        <DisclosurePanel class="md:hidden">
          <div class="pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
            <a v-for="item in navLinks" :key="item.name" :href="item.href"
              class="block px-4 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
              {{ item.name }}
            </a>
            <a href="#contacto" class="block px-4 py-2 mt-2 text-center btn btn-primary w-full">
              Inscríbete
            </a>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </header>
</template>