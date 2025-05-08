<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  id: string
}>()

const steps = [
  {
    title: 'Participa',
    description: 'Inscríbete en el evento más cercano y únete a las reuniones mensuales.',
    number: '01',
    delay: 0
  },
  {
    title: 'Recomienda',
    description: 'Comparte Bridge Gen con un joven líder de tu iglesia.',
    number: '02',
    delay: 200
  },
  {
    title: 'Sirve',
    description: 'Únete al equipo de multimedia, bienvenida, logística o contenido.',
    number: '03',
    delay: 400
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

  const element = document.getElementById('steps-container')
  if (element) observer.observe(element)
})
</script>

<template>
  <section :id="id" class="section bg-gray-50">
    <div class="container">
      <h2 class="section-title">¿Cómo ser parte?</h2>
      <p class="section-subtitle">Tres sencillos pasos para conectar y crecer con nosotros.</p>
      
      <div id="steps-container" class="mt-16">
        <div class="flex flex-col md:flex-row justify-between items-start gap-8">
          <div v-for="(step, index) in steps" :key="index" 
               class="flex-1 relative"
               :class="{ 'animate-step': isVisible }"
               :style="{ animationDelay: `${step.delay}ms` }">
            
            <div class="bg-white rounded-lg p-8 shadow-md border border-gray-100 h-full">
              <!-- Number label -->
              <div class="absolute -top-5 left-8 bg-secondary-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                {{ step.number }}
              </div>
              
              <!-- Connector line (desktop only) -->
              <div v-if="index < steps.length - 1" class="hidden md:block absolute top-1/2 right-0 w-full max-w-[100px] h-0.5 bg-gray-300 -mr-8 z-0">
                <div class="absolute right-0 -mt-1.5 w-3 h-3 bg-secondary-500 rounded-full"></div>
              </div>
              
              <h3 class="text-xl font-bold mb-3 mt-4 text-gray-800">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
              
              <!-- Icon based on step type -->
              <div class="mt-6 text-primary-600">
                <template v-if="index === 0">
                  <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </template>
                <template v-else-if="index === 1">
                  <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </template>
                <template v-else>
                  <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-16">
        <a href="#contacto" class="btn btn-primary inline-flex items-center">
          Quiero ser parte
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-step {
  opacity: 0;
  animation: stepAppear 0.7s ease-out forwards;
}

@keyframes stepAppear {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>