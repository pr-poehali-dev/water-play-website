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
          <p className="text-2xl md:text-3xl text-primary mb-4 uppercase font-bold">
            Онлайн интенсив
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
            Игровая деятельность<br />в воде с детьми<br />от 0 до 5 лет
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Как с помощью игр выстроить эффективный тренировочный процесс и добиться результата от ребенка
          </p>
          
          <div className="flex flex-col gap-4 mb-12 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl text-white font-bold flex items-center justify-center gap-3">
              <Icon name="Zap" className="text-primary" size={32} />
              Старт сразу после оплаты
            </p>
            <p className="text-2xl md:text-3xl text-white font-bold flex items-center justify-center gap-3">
              <Icon name="Clock" className="text-primary" size={32} />
              Доступ 4 месяца
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-[20px] uppercase font-bold w-full max-w-md mx-auto min-h-[60px]"
            onClick={() => window.open('https://wa.me/79169455813', '_blank')}
          >
            Купить доступ
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={40} />
        </div>
      </section>

      <section id="programs" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 uppercase">
            Что будет в интенсиве
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Комплексная авторская программа, по которой я сама тренирую и обучаю детей состоящая из 5 модулей
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
              <p className="text-2xl font-bold text-center mb-4">Бонус интенсива</p>
              <p className="text-center">Обновленный гайд по игрушкам</p>
            </div>
          </div>
          
          <div className="mt-24 px-4 max-w-3xl mx-auto" id="pricing">
            <div className="bg-white border-2 border-black rounded-[20px] p-8 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 uppercase">Стоимость</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 border-2 border-primary rounded-[20px]">
                  <p className="text-lg font-semibold mb-2">Стандартная цена</p>
                  <p className="text-4xl font-bold text-primary">3 990 ₽</p>
                </div>
                <div className="text-center p-6 border-2 border-green-600 rounded-[20px] bg-green-50">
                  <p className="text-lg font-semibold mb-2">Для участников<br />"Осознанное погружение"</p>
                  <p className="text-4xl font-bold text-green-600">3 490 ₽</p>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-[20px] uppercase font-bold w-full max-w-md mx-auto min-h-[60px]"
                onClick={() => window.open('https://wa.me/79169455813', '_blank')}
              >
                Записаться на интенсив
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-black hover:bg-black hover:text-white text-sm md:text-lg px-6 md:px-12 py-6 md:py-8 rounded-[20px] uppercase font-bold w-full max-w-md mx-auto min-h-[60px] whitespace-normal leading-tight"
                onClick={() => window.open('https://wa.me/79169455813', '_blank')}
              >
                Задать вопрос менеджеру
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 uppercase">
            Что вы получите после интенсива
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-[20px] p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">Сертификат</h3>
                <p className="text-gray-700">Официальный документ о прохождении</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-[20px] p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" className="text-green-600" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">Гайд по игрушкам</h3>
                <p className="text-gray-700">Обновленное руководство по выбору</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-[20px] p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-blue-600" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">Игры по возрастам</h3>
                <p className="text-gray-700">Примеры от 0 до 5 лет с инструкциями</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-[20px] group">
                <img 
                  src="https://cdn.poehali.dev/projects/8e935dc8-0c6e-4053-8557-8f6b30fb085f/files/db74601b-8ba4-4bfe-b986-0f0bdd0f75d2.jpg" 
                  alt="Сертификат о прохождении"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-white font-bold text-xl">📜 Сертификат после обучения</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-[20px] p-8 flex flex-col justify-center space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon name="Video" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Видео-разборы тренировок</h3>
                    <p className="text-gray-700">Подробный анализ игровых методик</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Система взаимодействия</h3>
                    <p className="text-gray-700">Понятная структура работы с ребенком</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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