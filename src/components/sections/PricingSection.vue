<script setup lang="ts">
defineProps<{
  id: string
}>()

const plans = [
  {
    name: 'Mensual',
    price: '$5.00',
    description: 'Acceso general sin compromiso',
    features: [
      'Acceso a reuniones mensuales',
      'Recursos digitales básicos',
      'Grupos de WhatsApp',
      'Podcast exclusivo'
    ],
    cta: 'Comenzar ahora',
    popular: false
  },
  {
    name: 'Anual',
    price: '$60.00',
    description: 'Incluye kit de regalo',
    features: [
      'Todo lo del plan mensual',
      'Camiseta oficial',
      'Lapicero personalizado',
      'Descargas premium',
      '2 sesiones de mentoría',
      'Descuentos en eventos especiales'
    ],
    cta: 'Mejor valor',
    popular: true
  }
]
</script>

<template>
  <section :id="id" class="section bg-white">
    <div class="container">
      <h2 class="section-title">Planes de membresía</h2>
      <p class="section-subtitle">Únete a nuestra comunidad y accede a recursos exclusivos.</p>
      
      <div class="flex flex-col md:flex-row gap-8 justify-center mt-16">
        <div v-for="(plan, index) in plans" :key="index"
             class="flex-1 max-w-md bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
             :class="[
               plan.popular ? 'shadow-lg border-2 border-primary-500 relative' : 'shadow-md border border-gray-200'
             ]">
          
          <!-- Popular badge -->
          <div v-if="plan.popular" class="absolute top-0 right-0 bg-primary-600 text-white py-1 px-4 rounded-bl-lg font-medium text-sm">
            Recomendado
          </div>
          
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-2 text-gray-800">{{ plan.name }}</h3>
            <p class="text-gray-600 mb-4">{{ plan.description }}</p>
            
            <div class="mb-8">
              <span class="text-4xl font-bold text-gray-900">{{ plan.price }}</span>
              <span class="text-gray-500 ml-2">{{ plan.name === 'Mensual' ? '/mes' : '/año' }}</span>
            </div>
            
            <ul class="space-y-3 mb-8">
              <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start">
                <svg class="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            
            <a href="#contacto" 
               class="block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
               :class="[
                 plan.popular 
                   ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                   : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
               ]">
              {{ plan.cta }}
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center text-gray-600">
        <p>¿Tienes preguntas sobre nuestros planes? <a href="#contacto" class="text-primary-600 font-medium">Contáctanos</a></p>
      </div>
    </div>
  </section>
</template>