import Image from 'next/image'; 
import { getTranslations } from 'next-intl/server'; 

async function getUserData() {
  await new Promise(resolve => setTimeout(resolve, 50)); 
  
  return {
    username: 'johndoe',
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    createdAt: '2024-01-15',
    status: 'Active',
    profilePicture: 'https://media.gq.com.mx/photos/61463245a0d1cd648a4521d5/master/w_1600%2Cc_limit/persona%2520feliz.jpg',
  };
}

export default async function AccountPage() {
  // Obtenemos los datos y las traducciones en paralelo en el servidor
  const [user, t] = await Promise.all([
    getUserData(),
    getTranslations('accountpage') // Paso 2: Usar getTranslations
  ]);

  return (
    // --- Paso 3: Aplicar clases de Tailwind CSS ---
    <div className="bg-gray-50 flex-grow p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <header className="border-b border-gray-200 pb-4 mb-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {t('title')}
              </h1>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Columna de la imagen */}
              <div className="flex flex-col items-center md:col-span-1">
                <div className="relative w-32 h-32">
                  {/* --- Paso 4: Usar el componente <Image> --- */}
                  <Image
                    src={user.profilePicture}
                    alt={t('profileAlt')}
                    width={128}
                    height={128}
                    className="rounded-full object-cover border-4 border-white shadow-md"
                    priority // Marcar como prioridad si es una imagen importante
                  />
                </div>
              </div>

              {/* Columna del formulario */}
              <div className="space-y-6 md:col-span-2">
                {/* Reemplazamos los valores quemados con los datos del usuario */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                    {t('username')}
                  </label>
                  <input className="mt-1 w-full p-3 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed" type="text" id="username" value={user.username} readOnly />
                </div>

                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">
                    {t('fullName')}
                  </label>
                  <input className="mt-1 w-full p-3 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed" type="text" id="fullname" value={user.fullName} readOnly />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    {t('email')}
                  </label>
                  <input className="mt-1 w-full p-3 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed" type="email" id="email" value={user.email} readOnly />
                </div>

                <div>
                  <label htmlFor="createdAt" className="block text-sm font-medium text-gray-600">
                    {t('accountCreated')}
                  </label>
                  <input className="mt-1 w-full p-3 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed" type="text" id="createdAt" value={user.createdAt} readOnly />
                </div>

                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-600">
                    {t('status')}
                  </label>
                  <input className="mt-1 w-full p-3 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed" type="text" id="status" value={user.status} readOnly />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}