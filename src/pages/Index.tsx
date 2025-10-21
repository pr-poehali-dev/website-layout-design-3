import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">ConsultPro</div>
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-accent transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-accent transition-colors"
              >
                О компании
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-accent transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-accent hover:bg-accent/90"
            >
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Профессиональный консалтинг для вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Помогаем компаниям достигать целей через стратегическое планирование и экспертную поддержку
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => scrollToSection('contacts')}
                >
                  Начать сотрудничество
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/54cf7fd6-0428-4d1a-997c-f1ccedd1aaf6/files/a095871a-0572-4066-ba2a-bc49a483b859.jpg"
                alt="Команда консалтинга"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'TrendingUp',
                title: 'Стратегический консалтинг',
                description: 'Разработка бизнес-стратегий и планов развития компании'
              },
              {
                icon: 'Users',
                title: 'Управленческий консалтинг',
                description: 'Оптимизация процессов управления и организационной структуры'
              },
              {
                icon: 'BarChart3',
                title: 'Финансовый консалтинг',
                description: 'Анализ финансовых показателей и оптимизация бюджета'
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/54cf7fd6-0428-4d1a-997c-f1ccedd1aaf6/files/d94499e5-14cd-483d-af9b-bf16a5bf3bfe.jpg"
                alt="Офис компании"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">О компании</h2>
              <p className="text-lg text-muted-foreground mb-4">
                ConsultPro — ведущая консалтинговая компания с более чем 10-летним опытом работы на рынке бизнес-услуг.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы помогаем компаниям различных масштабов решать сложные задачи, оптимизировать процессы и достигать устойчивого роста.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: '500+', label: 'Успешных проектов' },
                  { number: '150+', label: 'Клиентов' },
                  { number: '10+', label: 'Лет опыта' },
                  { number: '95%', label: 'Довольных клиентов' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  'Индивидуальный подход к каждому клиенту',
                  'Команда сертифицированных экспертов',
                  'Доказанная результативность проектов'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение 24 часов
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 1</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Email</h3>
                  <p className="text-muted-foreground">info@consultpro.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Часы работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Имя</label>
                    <Input 
                      required
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input 
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                    <Textarea 
                      required
                      placeholder="Расскажите о вашем проекте..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ConsultPro</h3>
              <p className="text-primary-foreground/80">
                Профессиональный консалтинг для развития вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Главная
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  О компании
                </button>
                <button 
                  onClick={() => scrollToSection('contacts')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Контакты
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>г. Москва, ул. Тверская, д. 1</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@consultpro.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 ConsultPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
