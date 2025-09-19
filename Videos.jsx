import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Play, ExternalLink, Eye, ThumbsUp, Clock } from "lucide-react";
import { mockVideos } from "../data/mockData";
import FloatingParticles from "../components/FloatingParticles";

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  
  const categories = ["Все", "Туториалы", "Обзоры", "Обновления", "Советы"];
  
  const filteredVideos = selectedCategory === "Все" 
    ? mockVideos 
    : mockVideos.filter(video => {
        const categoryMap = {
          "Туториалы": "Tutorials",
          "Обзоры": "Showcases", 
          "Обновления": "Updates",
          "Советы": "Tips"
        };
        return video.category === categoryMap[selectedCategory];
      });

  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}М`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}К`;
    }
    return views.toString();
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getCategoryName = (category) => {
    const categoryMap = {
      "Tutorials": "Туториалы",
      "Showcases": "Обзоры", 
      "Updates": "Обновления",
      "Tips": "Советы"
    };
    return categoryMap[category] || category;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent drop-shadow-2xl">
              Видео LoliPoop1k
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Смотрите последние туториалы, обзоры и советы от нашего избранного контент-создателя
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0 shadow-lg shadow-cyan-500/30"
                    : "border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <Card 
                key={video.id}
                className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group overflow-hidden backdrop-blur-sm"
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <Button 
                      size="lg"
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-red-600 hover:bg-red-700 text-white border-0 shadow-xl"
                    >
                      <Play className="mr-2" size={20} />
                      Смотреть сейчас
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Clock size={12} />
                    {formatDuration(video.duration)}
                  </div>
                  <Badge 
                    className="absolute top-2 left-2 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 text-white border-0"
                  >
                    {getCategoryName(video.category)}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {video.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {formatViews(video.views)}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp size={14} />
                        {formatViews(video.likes)}
                      </span>
                    </div>
                    <span>{video.publishedAt}</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white border-0 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={16} />
                      Смотреть на YouTube
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-0 shadow-lg hover:shadow-xl"
            >
              Загрузить больше видео
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
