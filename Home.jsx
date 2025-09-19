import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Users, 
  Shield, 
  Zap, 
  Crown, 
  ExternalLink, 
  Play, 
  Download,
  Star,
  TrendingUp
} from "lucide-react";
import FloatingParticles from "../components/FloatingParticles";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Необнаруживаемые клиенты",
      description: "Премиум обходы для всех основных античитовых систем",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Ежедневные обновления",
      description: "Регулярные обновления, чтобы оставаться впереди патчей",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Crown,
      title: "VIP функции",
      description: "Эксклюзивные модули для премиум участников",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Активное сообщество",
      description: "Присоединяйтесь к тысячам игроков, делящимся советами и трюками",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "15K+", label: "Участников", icon: Users },
    { number: "50+", label: "Клиентов", icon: Shield },
    { number: "24/7", label: "Поддержка", icon: Zap },
    { number: "99%", label: "Время работы", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative px-4 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent"></div>
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping shadow-sm shadow-blue-400/50"></div>
            <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 shadow-lg shadow-cyan-500/20">
              <Star className="w-4 h-4 mr-1" />
              #1 Сообщество Minecraft клиентов
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
              FreeClients
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Идеальное место для премиум клиентов Minecraft. Присоединяйтесь к нашему сообществу и доминируйте в игре с необнаруживаемыми читами и эксклюзивными функциями.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="mr-2" size={20} />
                Присоединиться к Discord серверу
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-slate-500/20"
              >
                <Play className="mr-2" size={20} />
                Смотреть туториал
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400 drop-shadow-lg" />
                    <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">{stat.number}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent drop-shadow-2xl">
                Почему выбирают FreeClients?
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Испытайте лучшие клиенты Minecraft с передовыми функциями и непревзойденной производительностью.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                  Готов доминировать?
                </h2>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Присоединяйтесь к тысячам игроков, которые доверяют FreeClients для своих приключений в Minecraft. Получите мгновенный доступ к премиум клиентам и эксклюзивным функциям.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="mr-2" size={20} />
                    Скачать сейчас
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-slate-500/20"
                  >
                    <Users className="mr-2" size={20} />
                    Присоединиться к сообществу
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
