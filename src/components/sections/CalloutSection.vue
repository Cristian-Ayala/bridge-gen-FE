<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{
  id: string
}>()

interface Chapter {
  name: string
  status: string
  location: string
  church: string
  date: string
  time: string
  description: string
  features: Array<{
    icon: string
    label: string
  }>
  registrationUrl: string
}

const chapters: Chapter[] = [
  {
    name: "Santa Ana",
    status: "Próximamente",
    location: "Santa Ana",
    church: "Iglesia CCRD",
    date: "Sábado 22 de noviembre de 2025",
    time: "3:00 p.m. - 5:00 p.m.",
    description: "Una experiencia con exposiciones, mesas, dinámicas, regalos y adoración.",
    features: [
      {
        icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
        label: "Networking"
      },
      {
        icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
        label: "Regalos"
      },
      {
        icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        label: "Sorpresas"
      },
      {
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        label: "Certificados"
      }
    ],
    registrationUrl: "https://bridgegen.org/inscripcion"
  },
  {
    name: "San Salvador",
    status: "En planificación",
    location: "San Salvador",
    church: "Centro de Vida",
    date: "Sábado 15 de febrero de 2025",
    time: "2:00 p.m. - 4:30 p.m.",
    description: "Conecta con emprendedores cristianos en el corazón de la capital.",
    features: [
      {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        label: "Comunidad"
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        label: "Innovación"
      },
      {
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        label: "Mentoría"
      },
      {
        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        label: "Liderazgo"
      }
    ],
    registrationUrl: "https://bridgegen.org/inscripcion-salvador"
  },
  {
    name: "San Miguel",
    status: "En desarrollo",
    location: "San Miguel",
    church: "Iglesia Bautista Emanuel",
    date: "Domingo 12 de abril de 2025",
    time: "4:00 p.m. - 6:00 p.m.",
    description: "Fortaleciendo los negocios cristianos en la región occidental.",
    features: [
      {
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        label: "Formación"
      },
      {
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        label: "Propósito"
      },
      {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        label: "Finanzas"
      },
      {
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        label: "Recursos"
      }
    ],
    registrationUrl: "https://bridgegen.org/inscripcion-sonsonate"
  }
]

const currentSlide = ref(0)
let touchStartX = 0
let touchEndX = 0

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % chapters.length
  // Reset autoplay timer when manually navigating
  stopAutoPlay()
  startAutoPlay()
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? chapters.length - 1 : currentSlide.value - 1
  // Reset autoplay timer when manually navigating
  stopAutoPlay()
  startAutoPlay()
}

const goToSlide = (index: number) => {
  currentSlide.value = index
  // Reset autoplay timer when manually navigating
  stopAutoPlay()
  startAutoPlay()
}

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}

// Auto-play functionality
let autoPlayInterval: ReturnType<typeof setInterval> | null = null

const startAutoPlay = () => {
  autoPlayInterval = setInterval(nextSlide, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})

// Función para manejar la reserva de lugar
const reserveSpot = (chapter: Chapter) => {
  // Mapear los nombres de capítulos a las razones de contacto
  const reasonMap: Record<string, string> = {
    'Santa Ana': 'Inscribirme al evento de Santa Ana',
    'San Salvador': 'Inscribirme al evento de San Salvador',
    'San Miguel': 'Inscribirme al evento de San Miguel'
  }

  const reason = reasonMap[chapter.name] || 'Quiero unirme a Bridge Gen'

  // Buscar la sección de contacto y hacer scroll
  const contactSection = document.getElementById('contacto')
  if (contactSection) {
    // Scroll suave a la sección
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // Actualizar la URL con el hash
    window.history.pushState(null, '', '#contacto')

    // Esperar un momento para que el scroll termine y luego establecer la razón
    setTimeout(() => {
      const event = new CustomEvent('setContactReason', {
        detail: { reason }
      })
      window.dispatchEvent(event)
    }, 800)
  } else {
    console.warn('No se encontró la sección de contacto con ID "contacto"')
  }
}
</script>

<template>
  <section :id="id" class="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
    <div class="px-0 md:px-4 lg:px-8 xl:px-16 2xl:px-24">
      <div class="max-w-7xl mx-auto">
        <!-- Carousel Header -->
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Próximos Capítulos</h2>
          <p class="text-primary-200 text-lg">Únete a nosotros en diferentes ciudades</p>
        </div>

        <!-- Carousel Container with Navigation -->
        <div class="relative">
          <!-- Navigation Arrows - Outside the carousel container -->
          <button
            @click="prevSlide"
            class="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all group z-10"
            aria-label="Slide anterior"
          >
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            @click="nextSlide"
            class="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all group z-10"
            aria-label="Slide siguiente"
          >
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Carousel Content -->
          <div class="overflow-hidden rounded-none md:rounded-2xl bg-white/5 backdrop-blur-sm mx-0 md:mx-16">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
              @touchstart="handleTouchStart"
              @touchend="handleTouchEnd"
              @mouseenter="stopAutoPlay"
              @mouseleave="startAutoPlay"
            >
              <div
                v-for="chapter in chapters"
                :key="chapter.name"
                class="w-full flex-shrink-0 p-8"
              >
                <div class="text-center max-w-4xl mx-auto">
                  <span
                    class="inline-block bg-white text-primary-700 px-4 py-1 rounded-full text-sm font-semibold mb-6"
                    :class="{
                      'bg-green-500 text-white': chapter.status === 'Activo',
                      'bg-yellow-500 text-white': chapter.status === 'En planificación',
                      '!bg-blue-500 text-white': chapter.status === 'En desarrollo'
                    }"
                  >
                    {{ chapter.status }}
                  </span>

                  <h3 class="text-3xl md:text-4xl font-bold mb-8">¡Capítulo {{ chapter.name }}!</h3>

                  <div class="flex flex-col md:flex-row justify-center items-center mb-8 gap-6">
                    <div class="flex items-center">
                      <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{{ chapter.church }}</span>
                    </div>

                    <div class="flex items-center">
                      <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{{ chapter.date }}</span>
                    </div>

                    <div class="flex items-center">
                      <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{{ chapter.time }}</span>
                    </div>
                  </div>

                  <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
                    <p class="text-lg mb-6">{{ chapter.description }}</p>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div
                        v-for="feature in chapter.features"
                        :key="feature.label"
                        class="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <svg class="w-8 h-8 mx-auto mb-2 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                        </svg>
                        <span>{{ feature.label }}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    @click="reserveSpot(chapter)"
                    class="btn btn-secondary inline-flex items-center group"
                  >
                    Reserva tu lugar
                    <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide Indicators -->
        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(chapter, index) in chapters"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="index === currentSlide ? 'bg-secondary-400 w-8' : 'bg-white/30 hover:bg-white/50'"
            :aria-label="`Ir a capítulo ${chapter.name}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>