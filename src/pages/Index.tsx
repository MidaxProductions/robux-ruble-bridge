import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Zap, Clock, Users, Star, ArrowRight, Coins, CreditCard, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-robux.jpg';

const Index = () => {
  const advantages = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Полная безопасность',
      description: 'Все транзакции проходят через защищенные каналы с шифрованием данных'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Мгновенный вывод',
      description: 'Обмен робуксов на рубли за 5-15 минут без длительных ожиданий'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Обход санкций',
      description: 'Работаем в обход международных ограничений, используя альтернативные платежные системы'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 поддержка',
      description: 'Круглосуточная техническая поддержка на русском языке'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '50,000+ клиентов',
      description: 'Более 50 тысяч довольных клиентов уже воспользовались нашими услугами'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Выгодные курсы',
      description: 'Лучшие курсы обмена с минимальной комиссией от 3%'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Заявка',
      description: 'Оставьте заявку с указанием количества робуксов'
    },
    {
      step: '2',
      title: 'Проверка',
      description: 'Мы проверяем ваш аккаунт и подтверждаем операцию'
    },
    {
      step: '3',
      title: 'Обмен',
      description: 'Производим безопасный обмен через наши каналы'
    },
    {
      step: '4',
      title: 'Получение',
      description: 'Рубли поступают на указанную карту или кошелек'
    }
  ];

  const faqs = [
    {
      question: 'Как работает обход санкций?',
      answer: 'Мы используем альтернативные платежные системы и криптовалютные мосты, которые не подпадают под санкционные ограничения.'
    },
    {
      question: 'Безопасно ли это?',
      answer: 'Да, все операции проходят через проверенные каналы с многоуровневой защитой. За 3 года работы ни один клиент не потерял средства.'
    },
    {
      question: 'Какая минимальная сумма для обмена?',
      answer: 'Минимальная сумма составляет 1000 робуксов. Максимальная - без ограничений.'
    },
    {
      question: 'Сколько времени занимает вывод?',
      answer: 'Обычно от 5 до 15 минут. В редких случаях до 1 часа при высокой нагрузке.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Coins className="w-8 h-8 text-primary animate-float" />
            <span className="text-2xl font-bold text-foreground">RobuxExchange</span>
          </div>
          <Button variant="hero" size="lg">
            Начать обмен
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-fade-in">
              ✅ Работаем в обход санкций
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-slide-up">
              Выводите <span className="text-primary">Робуксы</span> в рубли
              <br />
              <span className="text-primary-glow">быстро и безопасно</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
              Профессиональный сервис обмена робуксов на российские рубли. 
              Работаем в обход международных санкций с гарантией безопасности.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-up">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Обменять робуксы
                <Coins className="w-6 h-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
                Узнать курс
              </Button>
            </div>
            <div className="mt-12 relative">
              <img 
                src={heroImage} 
                alt="Обмен робуксов на рубли" 
                className="rounded-2xl shadow-2xl mx-auto max-w-full animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-background/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем самые выгодные условия и надежную работу в сложных условиях
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-card/50 border-border/20 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-4">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Как это работает?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и понятный процесс обмена в 4 шага
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-6 animate-glow-pulse">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Успешных операций</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-primary mb-2">10 мин</div>
              <div className="text-muted-foreground">Среднее время обмена</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold text-primary mb-2">3%</div>
              <div className="text-muted-foreground">Минимальная комиссия</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Частые вопросы
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card/50 border-border/20 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Готовы начать?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных клиентов, которые успешно выводят робуксы в рубли
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Обменять сейчас
              <ArrowRight className="w-6 h-6" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Coins className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">RobuxExchange</span>
            </div>
            <div className="flex space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Условия</a>
              <a href="#" className="hover:text-primary transition-colors">Политика</a>
              <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/10 text-center text-muted-foreground">
            <p>&copy; 2024 RobuxExchange. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;