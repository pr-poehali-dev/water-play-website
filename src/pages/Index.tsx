import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/8e935dc8-0c6e-4053-8557-8f6b30fb085f/files/5e4d9148-19f0-4481-b386-94ba4482a8bb.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
            Игровая деятельность<br />в воде с детьми<br />от 0 до 5 лет
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Погрузитесь в мир осознанного плавания — уникальная методика обучения через игру
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-8 rounded-[20px] uppercase font-bold"
            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Узнать больше
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={40} />
        </div>
      </section>

      <section id="programs" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 uppercase">
            Программы обучения
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-black rounded-[20px] p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon name="Baby" className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center uppercase">0-1 год</h3>
              <p className="text-gray-600 text-center mb-6">
                Знакомство с водой через игру. Формирование доверия к водной среде и развитие базовых навыков.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Адаптация к воде</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Игровые упражнения</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Контроль дыхания</span>
                </li>
              </ul>
              <Button className="w-full rounded-[20px] uppercase font-bold">
                Записаться
              </Button>
            </div>

            <div className="bg-white border-2 border-black rounded-[20px] p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon name="Heart" className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center uppercase">1-3 года</h3>
              <p className="text-gray-600 text-center mb-6">
                Осознанное погружение и развитие самостоятельности. Обучение через естественные движения.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Самостоятельное погружение</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Координация движений</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Уверенность в воде</span>
                </li>
              </ul>
              <Button className="w-full rounded-[20px] uppercase font-bold">
                Записаться
              </Button>
            </div>

            <div className="bg-white border-2 border-black rounded-[20px] p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon name="Waves" className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center uppercase">3-5 лет</h3>
              <p className="text-gray-600 text-center mb-6">
                Развитие техники плавания через игровые занятия. Формирование навыков безопасности на воде.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Базовые стили плавания</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Ныряние и задержка дыхания</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Игровые эстафеты</span>
                </li>
              </ul>
              <Button className="w-full rounded-[20px] uppercase font-bold">
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 uppercase">
            Фото и видео
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="relative group overflow-hidden rounded-[20px] aspect-video">
              <img 
                src="https://cdn.poehali.dev/projects/8e935dc8-0c6e-4053-8557-8f6b30fb085f/files/982a29a7-5f1b-4f5f-bf38-b2beea4e2850.jpg" 
                alt="Занятие с малышом"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Icon name="ZoomIn" className="text-white" size={48} />
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-[20px] aspect-video">
              <img 
                src="https://cdn.poehali.dev/projects/8e935dc8-0c6e-4053-8557-8f6b30fb085f/files/6df69eaf-8025-4cdc-8178-3cd221111424.jpg" 
                alt="Групповое занятие"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Icon name="ZoomIn" className="text-white" size={48} />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="rounded-[20px] uppercase font-bold border-2 border-black">
              Посмотреть все фото
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase">
            Начните обучение сегодня
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/80">
            Запишитесь на пробное занятие и откройте для вашего ребенка мир безопасного и радостного плавания
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-8 rounded-[20px] uppercase font-bold">
            Записаться на пробное занятие
          </Button>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">© 2024 Игровая деятельность в воде. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
