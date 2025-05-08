<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  id: string
}>()

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  church: '',
  submitted: false,
  error: false
})

const submitForm = () => {
  // In a real application, you would send this data to a server
  // This is just a simulation for now
  if (form.value.name && form.value.email && form.value.message) {
    form.value.submitted = true
    form.value.error = false
    
    // Reset form after successful submission
    setTimeout(() => {
      form.value = {
        name: '',
        email: '',
        phone: '',
        message: '',
        church: '',
        submitted: false,
        error: false
      }
    }, 5000)
  } else {
    form.value.error = true
  }
}
</script>

<template>
  <section :id="id" class="section bg-gray-50">
    <div class="container">
      <h2 class="section-title">Contáctanos</h2>
      <p class="section-subtitle">¿Tienes preguntas? ¿Deseas colaborar o invitar a tu iglesia?<br>Escríbenos y con gusto conectamos.</p>
      
      <div class="max-w-4xl mx-auto mt-12 bg-white rounded-lg shadow-md overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Contact Info -->
          <div class="bg-primary-700 p-8 text-white">
            <h3 class="text-2xl font-bold mb-6">Información de contacto</h3>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <svg class="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="font-medium">Email</p>
                  <a href="mailto:contacto@bridgegen.org" class="text-secondary-300 hover:text-white transition-colors">contacto@bridgegen.org</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <svg class="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p class="font-medium">Teléfono</p>
                  <a href="tel:+1234567890" class="text-secondary-300 hover:text-white transition-colors">+123 456 7890</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <svg class="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p class="font-medium">Ubicación</p>
                  <p class="text-secondary-300">El Mesón de Goya</p>
                </div>
              </div>
            </div>
            
            <div class="mt-10">
              <p class="text-lg font-medium mb-4">Síguenos</p>
              <div class="flex space-x-4">
                <a href="https://instagram.com/bridgegeneration" target="_blank" class="w-10 h-10 rounded-full bg-primary-600 hover:bg-secondary-500 flex items-center justify-center transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.526.203 1.018.471 1.423.875.404.405.666.94.87 1.44.246.636.415 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.05 1.064-.22 1.791-.465 2.427a4.9 4.9 0 01-1.44 2.015 4.9 4.9 0 01-2.014 1.44c-.636.246-1.363.415-2.427.465-1.025.047-1.385.06-4.123.06-2.738 0-3.098-.013-4.123-.06-1.064-.05-1.791-.219-2.427-.465a4.856 4.856 0 01-1.423-.876 4.86 4.86 0 01-.875-1.438c-.247-.637-.416-1.364-.465-2.428-.048-1.024-.06-1.36-.06-4.123s.012-3.097.06-4.121c.049-1.064.218-1.791.465-2.428a4.907 4.907 0 01.875-1.44 4.9 4.9 0 011.439-.873c.637-.247 1.363-.416 2.428-.465 1.024-.048 1.36-.06 4.123-.06z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M12.315 15.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666m0-8.333a5 5 0 100 10 5 5 0 000-10" clip-rule="evenodd"></path>
                    <circle cx="17.5" cy="6.5" r="1.5"></circle>
                  </svg>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" class="w-10 h-10 rounded-full bg-primary-600 hover:bg-secondary-500 flex items-center justify-center transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.72 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 01-1.516-5.26c.006-5.445 4.455-9.885 9.942-9.885 2.654.004 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.906 6.989-.004 5.445-4.455 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.88 11.88 0 005.71 1.447h.006c6.585 0 11.946-5.335 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"></path>
                  </svg>
                </a>
                <a href="mailto:contacto@bridgegen.org" class="w-10 h-10 rounded-full bg-primary-600 hover:bg-secondary-500 flex items-center justify-center transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-6 text-gray-800">Envíanos un mensaje</h3>
            
            <div v-if="form.submitted" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              <p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
            </div>
            
            <div v-if="form.error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              <p>Por favor completa todos los campos requeridos.</p>
            </div>
            
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="name" class="block text-gray-700 font-medium mb-2">Nombre *</label>
                <input type="text" id="name" v-model="form.name" required
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              </div>
              
              <div class="mb-4">
                <label for="email" class="block text-gray-700 font-medium mb-2">Email *</label>
                <input type="email" id="email" v-model="form.email" required
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              </div>
              
              <div class="mb-4">
                <label for="phone" class="block text-gray-700 font-medium mb-2">Teléfono</label>
                <input type="tel" id="phone" v-model="form.phone"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              </div>
              
              <div class="mb-4">
                <label for="church" class="block text-gray-700 font-medium mb-2">Iglesia</label>
                <input type="text" id="church" v-model="form.church"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-gray-700 font-medium mb-2">Mensaje *</label>
                <textarea id="message" v-model="form.message" required rows="4"
                          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary w-full">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>