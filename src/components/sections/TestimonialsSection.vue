<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  id: string
}>()

const testimonials = [
  {
    quote: "Gracias a Bridge Gen confirmé mi llamado y comencé mi pasantía en una iglesia local.",
    name: "Ricardo",
    role: "Participante",
    avatar: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    quote: "Las amistades y mentorías que encontré aquí cambiaron mi vida.",
    name: "Ale",
    role: "Líder emergente",
    avatar: "/img/ale.jpg"
  },
  {
    quote: "Encontré un espacio seguro para crecer en mi llamado y conectar con otros líderes con propósito.",
    name: "Rudis",
    role: "Hijo de pastor",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    quote: "Bridge Gen me ayudó a encontrar mi propósito y a conectarme con otros líderes que comparten mi visión.",
    name: "Jonathan",
    role: "Líder de multimedia",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    quote: "Gracias a Bridge Gen encontré un espacio seguro para crecer en mi llamado y conectar con otros líderes con propósito.",
    name: "Romel",
    role: "Ministro de alabanza",
    avatar: "https://images.pexels.com/photos/220457/pexels-photo-220457.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    quote: "Bridge Gen me ayudó a encontrar mi propósito y a conectarme con otros líderes que comparten mi visión.",
    name: "Cristian",
    role: "Ps. Asociado",
    avatar: "/img/cris.jpeg"
  }
]

const stats = [
  { value: '30+', label: 'Líderes activos' },
  { value: '8', label: 'Mentores' },
  { value: '12', label: 'Iglesias participantes' },
  { value: '4', label: 'Países representados' }
]

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    })
  }, { threshold: 0.1 })

  const element = document.getElementById('testimonials-container')
  if (element) observer.observe(element)
})
</script>

<template>
  <section :id="id" class="section bg-gradient-to-b from-gray-50 to-white">
    <div class="container">
      <h2 class="section-title">Indicadores de impacto</h2>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 my-12" id="testimonials-container">
        <div v-for="(stat, index) in stats" :key="index" class="text-center p-4" :class="{ 'animate-stat': isVisible }"
          :style="{ animationDelay: `${index * 100}ms` }">
          <div class="text-4xl font-bold text-primary-600 mb-2">{{ stat.value }}</div>
          <div class="text-gray-600">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index"
          class="bg-white p-6 rounded-lg shadow-md border border-gray-100" :class="{ 'animate-testimonial': isVisible }"
          :style="{ animationDelay: `${index * 200 + 400}ms` }">

          <div class="mb-4">
            <svg class="w-8 h-8 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <p class="text-gray-800 mb-6 italic">{{ testimonial.quote }}</p>

          <div class="flex items-center">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4 object-cover">
            <div>
              <h4 class="font-bold text-gray-900">{{ testimonial.name }}</h4>
              <p class="text-gray-600 text-sm">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-stat {
  opacity: 0;
  animation: countUp 1s ease-out forwards;
}

.animate-testimonial {
  opacity: 0;
  animation: slideIn 0.7s ease-out forwards;
}

@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>