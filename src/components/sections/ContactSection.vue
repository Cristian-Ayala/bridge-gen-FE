<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

defineProps<{
  id: string
}>()

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

// Departamentos y ciudades de El Salvador
const departamentosYCiudades: Record<string, string[]> = {
  'Ahuachapán': ['Ahuachapán', 'Apaneca', 'Atiquizaya', 'Concepción de Ataco', 'El Refugio', 'Guaymango', 'Jujutla', 'San Francisco Menéndez', 'San Lorenzo', 'San Pedro Puxtla', 'Tacuba', 'Turín'],
  'Cabañas': ['Sensuntepeque', 'Cinquera', 'Dolores', 'Guacotecti', 'Ilobasco', 'Jutiapa', 'San Isidro', 'Tejutepeque', 'Victoria'],
  'Chalatenango': ['Chalatenango', 'Agua Caliente', 'Arcatao', 'Azacualpa', 'Cancasque', 'Citalá', 'Comalapa', 'Concepción Quezaltepeque', 'Dulce Nombre de María', 'El Carrizal', 'El Paraíso', 'La Laguna', 'La Palma', 'La Reina', 'Las Vueltas', 'Nombre de Jesús', 'Nueva Concepción', 'Nueva Trinidad', 'Ojos de Agua', 'Potonico', 'San Antonio de la Cruz', 'San Antonio Los Ranchos', 'San Fernando', 'San Francisco Lempa', 'San Francisco Morazán', 'San Ignacio', 'San Isidro Labrador', 'San Luis del Carmen', 'San Miguel de Mercedes', 'San Rafael', 'Santa Rita', 'Tejutla'],
  'Cuscatlán': ['Cojutepeque', 'Candelaria', 'El Carmen', 'El Rosario', 'Monte San Juan', 'Oratorio de Concepción', 'San Bartolomé Perulapía', 'San Cristóbal', 'San José Guayabal', 'San Pedro Perulapán', 'San Rafael Cedros', 'San Ramón', 'Santa Cruz Analquito', 'Santa Cruz Michapa', 'Suchitoto', 'Tenancingo'],
  'La Libertad': ['Santa Tecla', 'Antiguo Cuscatlán', 'Ciudad Arce', 'Colón', 'Comasagua', 'Chiltiupán', 'Huizúcar', 'Jayaque', 'Jicalapa', 'La Libertad', 'Nuevo Cuscatlán', 'Opico', 'Quezaltepeque', 'Sacacoyo', 'San José Villanueva', 'San Juan Opico', 'San Matías', 'San Pablo Tacachico', 'Talnique', 'Tamanique', 'Teotepeque', 'Zaragoza'],
  'La Paz': ['Zacatecoluca', 'Cuyultitán', 'El Rosario', 'Jerusalén', 'Mercedes La Ceiba', 'Olocuilta', 'Paraíso de Osorio', 'San Antonio Masahuat', 'San Emigdio', 'San Francisco Chinameca', 'San Juan Nonualco', 'San Juan Talpa', 'San Juan Tepezontes', 'San Luis La Herradura', 'San Luis Talpa', 'San Miguel Tepezontes', 'San Pedro Masahuat', 'San Pedro Nonualco', 'San Rafael Obrajuelo', 'Santa María Ostuma', 'Santiago Nonualco', 'Tapalhuaca'],
  'La Unión': ['La Unión', 'Anamorós', 'Bolívar', 'Concepción de Oriente', 'Conchagua', 'El Carmen', 'El Sauce', 'Intipucá', 'Lislique', 'Meanguera del Golfo', 'Nueva Esparta', 'Pasaquina', 'Polorós', 'San Alejo', 'San José', 'Santa Rosa de Lima', 'Yayantique', 'Yucuaiquín'],
  'Morazán': ['San Francisco Gotera', 'Arambala', 'Cacaopera', 'Chilanga', 'Corinto', 'Delicias de Concepción', 'El Divisadero', 'El Rosario', 'Gualococti', 'Guatajiagua', 'Joateca', 'Jocoaitique', 'Jocoro', 'Lolotiquillo', 'Meanguera', 'Osicala', 'Perquín', 'San Carlos', 'San Fernando', 'San Isidro', 'San Simón', 'Sensembra', 'Sociedad', 'Torola', 'Yamabal', 'Yoloaiquín'],
  'San Miguel': ['San Miguel', 'Carolina', 'Chapeltique', 'Chinameca', 'Chirilagua', 'Ciudad Barrios', 'Comacarán', 'El Tránsito', 'Lolotique', 'Moncagua', 'Nueva Guadalupe', 'Nuevo Edén de San Juan', 'Quelepa', 'San Antonio del Mosco', 'San Gerardo', 'San Jorge', 'San Luis de la Reina', 'San Rafael Oriente', 'Sesori', 'Uluazapa'],
  'San Salvador': ['San Salvador', 'Aguilares', 'Apopa', 'Ayutuxtepeque', 'Cuscatancingo', 'Delgado', 'El Paisnal', 'Guazapa', 'Ilopango', 'Mejicanos', 'Nejapa', 'Panchimalco', 'Rosario de Mora', 'San Marcos', 'San Martín', 'Santiago Texacuangos', 'Santo Tomás', 'Soyapango', 'Tonacatepeque'],
  'San Vicente': ['San Vicente', 'Apastepeque', 'Guadalupe', 'San Cayetano Istepeque', 'San Esteban Catarina', 'San Ildefonso', 'San Lorenzo', 'San Sebastián', 'Santa Clara', 'Santo Domingo', 'Tecoluca', 'Tepetitán', 'Verapaz'],
  'Santa Ana': ['Santa Ana', 'Candelaria de la Frontera', 'Chalchuapa', 'Coatepeque', 'El Congo', 'El Porvenir', 'Masahuat', 'Metapán', 'San Antonio Pajonal', 'San Sebastián Salitrillo', 'Santa Rosa Guachipilín', 'Santiago de la Frontera', 'Texistepeque'],
  'Sonsonate': ['Sonsonate', 'Acajutla', 'Armenia', 'Caluco', 'Cuisnahuat', 'Izalco', 'Juayúa', 'Nahuizalco', 'Nahulingo', 'Salcoatitán', 'San Antonio del Monte', 'San Julián', 'Santa Catarina Masahuat', 'Santa Isabel Ishuatán', 'Santo Domingo de Guzmán', 'Sonzacate'],
  'Usulután': ['Usulután', 'Alegría', 'Berlín', 'California', 'Concepción Batres', 'El Triunfo', 'Ereguayquín', 'Estanzuelas', 'Jiquilisco', 'Jucuapa', 'Jucuarán', 'Mercedes Umaña', 'Nueva Granada', 'Ozatlán', 'Puerto El Triunfo', 'San Agustín', 'San Buenaventura', 'San Dionisio', 'San Francisco Javier', 'Santa Elena', 'Santa María', 'Santiago de María', 'Tecapán']
}

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  church: '',
  department: '',
  city: '',
  reason: 'Quiero unirme a Bridge Gen',
  submitted: false,
  error: false,
  loading: false
})

// Opciones para razón de contacto
const contactReasons = [
  'Inscribirme al evento de Santa Ana',
  'Inscribirme al evento de San Salvador',
  'Inscribirme al evento de San Miguel',
  'Quiero unirme a Bridge Gen',
  'Quiero formar parte de un equipo'
]

// Estados para los filtros de búsqueda
const departmentSearch = ref('')
const citySearch = ref('')
const showDepartmentDropdown = ref(false)
const showCityDropdown = ref(false)

// Computed properties para filtrar las opciones
const filteredDepartments = computed(() => {
  if (!departmentSearch.value) return Object.keys(departamentosYCiudades)
  return Object.keys(departamentosYCiudades).filter(dept =>
    dept.toLowerCase().includes(departmentSearch.value.toLowerCase())
  )
})

const filteredCities = computed(() => {
  if (!form.value.department) return []

  const availableCities = departamentosYCiudades[form.value.department] || []

  if (!citySearch.value) return availableCities
  return availableCities.filter(city =>
    city.toLowerCase().includes(citySearch.value.toLowerCase())
  )
})

// Funciones para manejar la selección
const selectDepartment = (dept: string) => {
  form.value.department = dept
  departmentSearch.value = dept
  showDepartmentDropdown.value = false
  // Resetear ciudad cuando cambie el departamento
  form.value.city = ''
  citySearch.value = ''
}

const selectCity = (city: string) => {
  form.value.city = city
  citySearch.value = city
  showCityDropdown.value = false
}

// Funciones para manejar el blur con delay
const handleDepartmentBlur = () => {
  setTimeout(() => {
    showDepartmentDropdown.value = false
  }, 200)
}

const handleCityBlur = () => {
  setTimeout(() => {
    showCityDropdown.value = false
  }, 200)
}

// Watchers para actualizar las búsquedas
watch(() => departmentSearch.value, (newValue) => {
  if (newValue !== form.value.department) {
    form.value.department = ''
    form.value.city = ''
    citySearch.value = ''
  }
})

watch(() => citySearch.value, (newValue) => {
  if (newValue !== form.value.city) {
    form.value.city = ''
  }
})

const submitForm = async () => {
  // Validate required fields
  if (!form.value.name || !form.value.email || !form.value.department || !form.value.city || !form.value.reason) {
    form.value.error = true
    return
  }

  form.value.loading = true
  form.value.error = false

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        message: form.value.message,
        church: form.value.church,
        department: form.value.department,
        city: form.value.city,
        reason: form.value.reason,
        subject: "Nuevo mensaje de contacto - Bridge Generation"
      }),
    })

    const result = await response.json()

    if (result.success) {
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
          department: '',
          city: '',
          reason: 'Quiero unirme a Bridge Gen',
          submitted: false,
          error: false,
          loading: false
        }
        departmentSearch.value = ''
        citySearch.value = ''
      }, 5000)
    } else {
      form.value.error = true
    }
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    form.value.error = true
  } finally {
    form.value.loading = false
  }
}

// Función para pre-seleccionar la razón de contacto
const setContactReason = (reason: string) => {
  form.value.reason = reason
}

// Event listener para el evento personalizado
const handleSetContactReason = (event: CustomEvent) => {
  const { reason } = event.detail
  setContactReason(reason)
}

// Configurar event listeners
onMounted(() => {
  window.addEventListener('setContactReason', handleSetContactReason as EventListener)
})

onUnmounted(() => {
  window.removeEventListener('setContactReason', handleSetContactReason as EventListener)
})

// Exponer la función para que pueda ser llamada desde otros componentes
defineExpose({
  setContactReason
})
</script>

<template>
  <section :id="id" class="section bg-gray-50">
    <div class="container">
      <div class="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <!-- Left Side - Community Section -->
          <div class="bg-gradient-to-br from-primary-600 to-primary-800 p-12 text-white flex flex-col justify-center items-center text-center relative">
            <!-- Heart Icon -->
            <div class="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-8">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>

            <h2 class="text-4xl font-bold mb-6 leading-tight">
              Únete a Nuestra<br>Comunidad
            </h2>

            <p class="text-lg mb-8 text-primary-100 leading-relaxed max-w-md">
              Estamos aquí para acompañarte en tu camino de fe. Escríbenos y forma parte de nuestra familia.
            </p>
          </div>

          <!-- Right Side - Contact Form -->
          <div class="p-12 flex flex-col justify-center">
            <h3 class="text-3xl font-bold mb-2 text-gray-800">Envíanos un mensaje</h3>
            <p class="text-gray-600 mb-8">Completa el formulario y nos pondremos en contacto contigo</p>

            <div v-if="form.submitted" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
              <p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
            </div>

            <div v-if="form.error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
              <p>Por favor completa todos los campos requeridos: Nombre, Email, Razón de contacto, Departamento y Ciudad.</p>
            </div>

            <form @submit.prevent="submitForm" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-gray-700 font-medium mb-1">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    placeholder="Tu nombre completo"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-200">
                </div>

                <div>
                  <label for="email" class="block text-gray-700 font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    placeholder="tu@email.com"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-200">
                </div>
              </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="phone" class="block text-gray-700 font-medium mb-1">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    placeholder="(opcional)"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-200">
                </div>

                <div>
                  <label for="church" class="block text-gray-700 font-medium mb-1">Iglesia</label>
                  <input
                    type="text"
                    id="church"
                    v-model="form.church"
                    placeholder="(opcional)"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-200">
                </div>
              </div>

              <div>
                <label for="reason" class="block text-gray-700 font-medium mb-1">Razón de contacto *</label>
                <select
                  id="reason"
                  v-model="form.reason"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-200 bg-white appearance-none cursor-pointer">
                  <option value="" disabled selected hidden>Selecciona una razón</option>
                  <option v-for="reason in contactReasons" :key="reason" :value="reason">
                    {{ reason }}
                  </option>
                </select>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="relative">
                  <label for="department" class="block text-gray-700 font-medium mb-1">Departamento *</label>
                  <input
                    type="text"
                    id="department"
                    v-model="departmentSearch"
                    @focus="showDepartmentDropdown = true"
                    @blur="handleDepartmentBlur"
                    required
                    placeholder="Buscar departamento..."
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-200">

                  <div v-if="showDepartmentDropdown && filteredDepartments.length > 0"
                       class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                    <div v-for="dept in filteredDepartments"
                         :key="dept"
                         @click="selectDepartment(dept)"
                         class="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                      {{ dept }}
                    </div>
                  </div>
                </div>

                <div class="relative">
                  <label for="city" class="block text-gray-700 font-medium mb-1">Ciudad *</label>
                  <input
                    type="text"
                    id="city"
                    v-model="citySearch"
                    @focus="showCityDropdown = true"
                    @blur="handleCityBlur"
                    required
                    :disabled="!form.department"
                    :placeholder="form.department ? 'Buscar ciudad...' : 'Primero selecciona un departamento'"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed">

                  <div v-if="showCityDropdown && filteredCities.length > 0 && form.department"
                       class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                    <div v-for="city in filteredCities"
                         :key="city"
                         @click="selectCity(city)"
                         class="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                      {{ city }}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label for="message" class="block text-gray-700 font-medium mb-1">Mensaje</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="3"
                  placeholder="Cuéntanos cómo podemos ayudarte o sobre tu interés en unirte a la comunidad..."
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-200 resize-none"></textarea>
              </div>

              <button
                type="submit"
                :disabled="form.loading"
                class="w-full btn btn-primary transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                <span v-if="form.loading" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
                <span v-else>
                  Enviar mensaje
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>