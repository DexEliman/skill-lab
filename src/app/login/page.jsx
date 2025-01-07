// app/login/page.js
export default function LoginPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Connexion</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Adresse e-mail</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Entrez votre e-mail"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Mot de passe</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Entrez votre mot de passe"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  