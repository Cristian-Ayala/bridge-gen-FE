<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  id: string
}>()

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

  const element = document.getElementById('about-content')
  if (element) observer.observe(element)
})
</script>

<template>
  <section :id="id" class="section bg-gray-50">
    <div class="container">
      <h2 class="section-title">¿Quiénes somos?</h2>

      <div id="about-content" class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-12"
           :class="{ 'animate-fade-in': isVisible }">
        <div class="prose lg:prose-lg mx-auto">
          <p class="mb-4">
            Somos <strong>Bridge Generation</strong>, una comunidad de líderes multigeneracionales que conecta a personas con llamado ministerial, brindando mentoría, acompañamiento y recursos.
          </p>
          <p class="mb-4">
            Nos enfocamos en líderes de 20 a 40 años, creando espacios seguros para crecer, conectar y servir con propósito.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div class="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
              <h3 class="text-xl font-bold text-primary-700 mb-3">Nuestra Misión</h3>
              <p class="text-gray-700">Conectar, equipar y empoderar a la próxima generación de líderes ministeriales a través de relaciones intencionales y recursos prácticos.</p>
            </div>

            <div class="bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-500">
              <h3 class="text-xl font-bold text-secondary-700 mb-3">Nuestra Visión</h3>
              <p class="text-gray-700">Ser un puente que conecta generaciones, llamados y propósitos para impactar comunidades enteras a través del liderazgo transformacional.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>