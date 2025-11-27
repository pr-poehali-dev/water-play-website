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
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 uppercase">
            Что в курсе
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Комплексная программа для специалистов по обучению плаванию детей от 0 до 5 лет
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-black rounded-[20px] p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon name="Sparkles" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center uppercase">Модуль 1</h3>
              <p className="text-gray-800 text-center font-semibold mb-4">
                Значение игровой деятельности для развития ребёнка
              </p>
              <p className="text-sm text-gray-600 text-center">
                Психологические аспекты и развивающий потенциал игровых занятий в воде
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-[20px] p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon name="Gift" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center uppercase">Модуль 2</h3>
              <p className="text-gray-800 text-center font-semibold mb-4">
                Выбор игрушек по возрастам
              </p>
              <p className="text-sm text-gray-600 text-center">
                Критерии отбора безопасных и развивающих игровых материалов для каждого возраста
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-[20px] p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon name="Shield" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center uppercase">Модуль 3</h3>
              <p className="text-gray-800 text-center font-semibold mb-4">
                Принципы выстраивания границ
              </p>
              <p className="text-sm text-gray-600 text-center">
                Работа с ребенком и родителем относительно игр в бассейне. Правила игрушек
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-[20px] p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon name="Waves" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center uppercase">Модуль 4</h3>
              <p className="text-gray-800 text-center font-semibold mb-4">
                Разновидности и примеры игр
              </p>
              <p className="text-sm text-gray-600 text-center">
                Практические игры в бассейне для детей от 0 до 5-6 лет
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-[20px] p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon name="GraduationCap" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center uppercase">Модуль 5</h3>
              <p className="text-gray-800 text-center font-semibold mb-4">
                Правила для тренера
              </p>
              <p className="text-sm text-gray-600 text-center">
                Профессиональные стандарты и этика работы с детьми в водной среде
              </p>
            </div>

            <div className="bg-primary text-white rounded-[20px] p-8 hover:shadow-2xl transition-shadow flex flex-col items-center justify-center">
              <Icon name="Star" className="text-white mb-4" size={48} />
              <p className="text-2xl font-bold text-center mb-4">Бонусы курса</p>
              <p className="text-center">Методические материалы и сертификат</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-8 rounded-[20px] uppercase font-bold">
              Записаться на курс
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 uppercase">
            Фото и видео
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="relative group overflow-hidden rounded-[20px] aspect-video">
              <img 
                src="https://cdn.poehali.dev/files/0c337940-a097-48d8-a00c-b972a06692d4.jpg" 
                alt="Игровое занятие с малышом"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Icon name="ZoomIn" className="text-white" size={48} />
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-[20px] aspect-video">
              <img 
                src="https://cdn.poehali.dev/files/381f62cc-d790-4cbc-8cee-de84fd54b134.jpg" 
                alt="Обучение плаванию малыша"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Icon name="ZoomIn" className="text-white" size={48} />
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-[20px] aspect-video">
              <img 
                src="https://cdn.poehali.dev/files/413ab22f-9f9c-40a2-9152-03b03032b596.jpg" 
                alt="Ребенок с игрушкой под водой"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Icon name="ZoomIn" className="text-white" size={48} />
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-[20px] aspect-video">
              <img 
                src="https://cdn.poehali.dev/files/4a8d9db0-7787-4dea-86ed-fd04e0b6d9cf.jpg" 
                alt="Подводное плавание ребенка"
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