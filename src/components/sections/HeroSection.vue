<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <section :id="id" class="relative h-screen flex items-center">
    <!-- Background image with overlay -->
    <div class="absolute inset-0 z-0">
      <div 
        class="w-full h-full bg-cover bg-center" 
        style="background-image: url('https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')">
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/70"></div>
    </div>
    
    <div class="container relative z-10">
      <div class="max-w-3xl text-white">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          Bienvenido a <span class="text-secondary-400">Bridge Generation</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
          Una comunidad para líderes con llamado ministerial
        </p>
        <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
          <a href="#evento" class="btn btn-secondary">
            Inscríbete al evento
          </a>
          <a href="#nosotros" class="btn btn-outline border-white text-white hover:bg-white/10">
            Conócenos
          </a>
        </div>
      </div>
    </div>
    
    <!-- Scroll down indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}
.animate-fade-in-delay {
  opacity: 0;
  animation: fadeIn 1s ease-out 0.3s forwards;
}
.animate-fade-in-delay-2 {
  opacity: 0;
  animation: fadeIn 1s ease-out 0.6s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>