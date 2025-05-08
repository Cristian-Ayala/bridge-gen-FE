<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  id: string
}>()

const features = [
  {
    title: 'Mentorías',
    description: 'Acompañamiento personalizado con pastores locales e internacionales.',
    icon: 'users',
    delay: 0
  },
  {
    title: 'Pasantías',
    description: 'Oportunidades en iglesias locales y en el extranjero para servir y aprender.',
    icon: 'globe',
    delay: 150
  },
  {
    title: 'Foros y Mesas de Discusión',
    description: 'Reuniones periódicas para crecer y conectar a través del diálogo.',
    icon: 'message-square',
    delay: 300
  },
  {
    title: 'Recursos y Podcast',
    description: 'Materiales exclusivos, guías devocionales y comentarios sobre los temas tratados.',
    icon: 'headphones',
    delay: 450
  }
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

  const element = document.getElementById('features-grid')
  if (element) observer.observe(element)
})
</script>

<template>
  <section :id="id" class="section bg-white">
    <div class="container">
      <h2 class="section-title">Qué hacemos</h2>
      <p class="section-subtitle">Ofrecemos diversas oportunidades para tu crecimiento ministerial y personal.</p>
      
      <div id="features-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <div v-for="(feature, index) in features" :key="index" 
             class="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
             :class="{ 'animate-feature': isVisible }"
             :style="{ animationDelay: `${feature.delay}ms` }">
          
          <!-- Icon -->
          <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <template v-if="feature.icon === 'users'">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </template>
            <template v-else-if="feature.icon === 'globe'">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </template>
            <template v-else-if="feature.icon === 'message-square'">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </template>
            <template v-else-if="feature.icon === 'headphones'">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8a9 9 0 0118 0v8M4 19h4m12-9v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9" />
              </svg>
            </template>
          </div>
          
          <h3 class="text-xl font-bold mb-2 text-gray-800">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-feature {
  opacity: 0;
  animation: featureAppear 0.6s ease-out forwards;
}

@keyframes featureAppear {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>