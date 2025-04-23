import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Film, VideoIcon, Scissors, Star, Clock, Award, Instagram, Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import ServiceCard from "@/components/ServiceCard";
import PortfolioItem from "@/components/PortfolioItem";
import Navbar from "@/components/Navbar";

const Index = () => {
  useEffect(() => {
    document.title = "Вера | Профессиональный Видеомонтаж";
  }, []);

  const services = [
    {
      title: "Монтаж видео",
      description: "Профессиональный монтаж любой сложности для различных целей, от личных до коммерческих проектов.",
      icon: Scissors,
    },
    {
      title: "Цветокоррекция",
      description: "Профессиональная цветокоррекция для придания вашим видео кинематографичного вида.",
      icon: VideoIcon,
    },
    {
      title: "Спецэффекты",
      description: "Добавление спецэффектов, анимации и графики для усиления визуального воздействия ваших видео.",
      icon: Film,
    },
  ];

  const portfolioItems = [
    {
      title: "Рекламный ролик",
      category: "Коммерческая реклама",
      imageUrl: "/placeholder.svg",
      videoId: "",
    },
    {
      title: "Свадебное видео",
      category: "Свадебная съемка",
      imageUrl: "/placeholder.svg",
      videoId: "",
    },
    {
      title: "Трейлер фильма",
      category: "Кинопроизводство",
      imageUrl: "/placeholder.svg",
      videoId: "",
    },
    {
      title: "Музыкальный клип",
      category: "Музыкальное видео",
      imageUrl: "/placeholder.svg",
      videoId: "",
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="bg-[url('/placeholder.svg')] bg-cover bg-center h-full"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-20 z-10 relative">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
              <span className="text-primary">Вера</span> - Ваш профессиональный видеомонтажер
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Создаю видео, которые захватывают внимание и рассказывают истории
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">
                Смотреть работы
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Вера" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Обо мне
              </h2>
              <Separator className="mb-6 w-24 bg-primary h-1" />
              <p className="mb-4 text-foreground/80">
                Привет! Меня зовут Вера, я профессиональный видеомонтажер с более чем 5-летним опытом работы. Я специализируюсь на создании качественного и креативного видеоконтента для различных целей.
              </p>
              <p className="mb-6 text-foreground/80">
                Мой подход к монтажу сочетает техническое мастерство и творческое видение. Я верю, что каждый проект уникален и заслуживает индивидуального подхода. Моя цель — помочь вам воплотить вашу идею в качественное видео, которое привлечет внимание вашей аудитории.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Качество</h4>
                    <p className="text-sm text-foreground/70">Внимание к деталям</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Пунктуальность</h4>
                    <p className="text-sm text-foreground/70">В срок, всегда</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Опыт</h4>
                    <p className="text-sm text-foreground/70">Более 5 лет</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <VideoIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Креативность</h4>
                    <p className="text-sm text-foreground/70">Уникальный подход</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Мои услуги</h2>
            <Separator className="mx-auto mb-6 w-24 bg-primary h-1" />
            <p className="max-w-2xl mx-auto text-foreground/80">
              Я предлагаю широкий спектр услуг по видеомонтажу, от базовой обработки до сложных проектов с анимацией и спецэффектами
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Мои работы</h2>
            <Separator className="mx-auto mb-6 w-24 bg-primary h-1" />
            <p className="max-w-2xl mx-auto text-foreground/80">
              Ознакомьтесь с некоторыми из моих последних работ. Нажмите на видео, чтобы узнать больше о проекте
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                title={item.title}
                category={item.category}
                imageUrl={item.imageUrl}
                videoId={item.videoId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Связаться со мной</h2>
            <Separator className="mx-auto mb-6 w-24 bg-primary h-1" />
            <p className="max-w-2xl mx-auto text-foreground/80">
              Готовы начать работу над вашим проектом? Свяжитесь со мной, чтобы обсудить детали
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-xl font-heading mb-6">Есть проект? Давайте его обсудим!</h3>
              <p className="mb-8 text-foreground/80">
                Заполните форму для связи или используйте контактные данные. Я отвечу вам в течение 24 часов.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Телефон</p>
                    <p className="font-medium">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Email</p>
                    <p className="font-medium">vera@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Instagram</p>
                    <p className="font-medium">@vera_video</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">Имя</label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">Email</label>
                    <Input id="email" type="email" placeholder="ваш@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm mb-2">Тема</label>
                  <Input id="subject" placeholder="Тема сообщения" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm mb-2">Сообщение</label>
                  <Textarea id="message" placeholder="Ваше сообщение" rows={5} />
                </div>
                
                <Button className="w-full">Отправить сообщение</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-primary font-heading text-xl font-bold">Вера</span>
              <span className="text-foreground font-heading text-xl ml-1">Видео</span>
            </div>
            <div className="text-foreground/70 text-sm">
              © 2023 Вера | Профессиональный видеомонтажер. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
