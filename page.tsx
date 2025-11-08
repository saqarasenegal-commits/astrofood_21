
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-2xl">
          <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8 relative overflow-hidden">
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20elegant%20logo%20design%20for%20Astrofood%20brand%20featuring%20sophisticated%20typography%20with%20cosmic%20stars%20and%20culinary%20elements%2C%20minimalist%20design%20with%20orange%20and%20red%20gradient%20colors%2C%20professional%20food%20and%20astronomy%20theme%2C%20clean%20geometric%20shapes%2C%20premium%20brand%20identity%2C%20white%20background%2C%20vector%20style%20illustration%20with%20celestial%20and%20gastronomic%20symbols&width=200&height=200&seq=astrofood-logo-modern&orientation=squarish"
              alt="Astrofood Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-2" style={{ fontFamily: '"Pacifico", serif' }}>
            Astrofood
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Nutrition Astrologique Personnalisée
          </p>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Découvrez votre alimentation personnalisée selon votre profil astrologique unique. 
            Harmonisez votre énergie avec les astres pour un bien-être optimal.
          </p>
          
          <div className="space-y-4">
            <Link 
              to="/nutrition"
              className="inline-block bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-500 hover:to-red-600 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Voir Mon Profil Nutritionnel ✨
            </Link>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">♈</div>
                <h3 className="font-semibold text-gray-900 mb-2">Profil Astrologique</h3>
                <p className="text-gray-600 text-sm">Analyse complète de vos signes solaire, lunaire et ascendant</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🍽️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Menu Personnalisé</h3>
                <p className="text-gray-600 text-sm">Recommandations nutritionnelles adaptées à votre élément</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🥤</div>
                <h3 className="font-semibold text-gray-900 mb-2">Boissons Énergétiques</h3>
                <p className="text-gray-600 text-sm">Jus et smoothies pour équilibrer votre énergie cosmique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
