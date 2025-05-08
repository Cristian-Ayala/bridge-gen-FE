<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <section :id="id" class="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
    <div class="container">
      <div class="max-w-4xl mx-auto">
        <div class="text-center">
          <span class="inline-block bg-white text-primary-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">Próximamente</span>
          <h2 class="text-3xl md:text-4xl font-bold mb-8">¡Lanzamiento oficial!</h2>
          
          <div class="flex flex-col md:flex-row justify-center items-center mb-8 gap-6">
            <div class="flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>El Mesón de Goya</span>
            </div>
            
            <div class="flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Sábado 13 de septiembre de 2025</span>
            </div>
            
            <div class="flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>3:00 p.m. - 5:00 p.m.</span>
            </div>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
            <p class="text-lg mb-4">
              Una experiencia con exposiciones, mesas, dinámicas, regalos, podcast y adoración.
            </p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div class="bg-white/10 p-3 rounded-lg">
                <svg class="w-8 h-8 mx-auto mb-2 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>Networking</span>
              </div>
              <div class="bg-white/10 p-3 rounded-lg">
                <svg class="w-8 h-8 mx-auto mb-2 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                <span>Regalos</span>
              </div>
              <div class="bg-white/10 p-3 rounded-lg">
                <svg class="w-8 h-8 mx-auto mb-2 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                <span>Podcast en vivo</span>
              </div>
              <div class="bg-white/10 p-3 rounded-lg">
                <svg class="w-8 h-8 mx-auto mb-2 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Sorpresas</span>
              </div>
            </div>
          </div>
          
          <a href="https://bridgegen.org/inscripcion" class="btn btn-secondary inline-flex items-center group" target="_blank">
            Reserva tu lugar
            <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>