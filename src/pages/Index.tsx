import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from '@/components/ui/icon';

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  interests: string[];
  image: string;
  bio: string;
}

const mockProfiles: Profile[] = [
  {
    id: 1,
    name: "Анна",
    age: 26,
    location: "Москва",
    interests: ["Путешествия", "Фотография", "Йога"],
    image: "https://cdn.poehali.dev/projects/9f89d12b-803b-4c3c-9ff9-087dc4bd3e4b/files/02b38041-9832-474b-8e08-dfc5a5e067b5.jpg",
    bio: "Люблю путешествовать и открывать новые места"
  },
  {
    id: 2,
    name: "Дмитрий",
    age: 29,
    location: "Санкт-Петербург",
    interests: ["Спорт", "Музыка", "Кино"],
    image: "https://cdn.poehali.dev/projects/9f89d12b-803b-4c3c-9ff9-087dc4bd3e4b/files/c9c26315-7453-4780-b601-970a732d0011.jpg",
    bio: "Активный образ жизни и новые впечатления"
  },
  {
    id: 3,
    name: "Мария",
    age: 24,
    location: "Москва",
    interests: ["Искусство", "Книги", "Кофе"],
    image: "https://cdn.poehali.dev/projects/9f89d12b-803b-4c3c-9ff9-087dc4bd3e4b/files/392046b9-a7f4-43a8-970f-99bc6252c5a0.jpg",
    bio: "В поисках интересных разговоров и новых знакомств"
  }
];

const Index = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [ageRange, setAgeRange] = useState([18, 45]);
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedInterest, setSelectedInterest] = useState("all");

  const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург"];
  const interests = ["Путешествия", "Спорт", "Музыка", "Искусство", "Кино", "Книги"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Heart" size={28} className="text-primary" />
              DateConnect
            </h1>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" size={18} className="mr-2" />
                Поиск
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Сообщения
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Найди свою половинку
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Тысячи людей уже нашли свою любовь. Присоединяйся к нам!
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Начать поиск
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold">Популярные анкеты</h3>
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Icon name="SlidersHorizontal" size={18} />
            {showFilters ? "Скрыть фильтры" : "Фильтры"}
          </Button>
        </div>

        {showFilters && (
          <Card className="mb-8 animate-scale-in">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Возраст: {ageRange[0]} - {ageRange[1]} лет
                  </label>
                  <Slider
                    min={18}
                    max={65}
                    step={1}
                    value={ageRange}
                    onValueChange={setAgeRange}
                    className="mb-4"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Город</label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все города</SelectItem>
                      {cities.map(city => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Интересы</label>
                  <Select value={selectedInterest} onValueChange={setSelectedInterest}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите интерес" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все интересы</SelectItem>
                      {interests.map(interest => (
                        <SelectItem key={interest} value={interest}>{interest}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Поиск по имени</label>
                  <Input placeholder="Введите имя..." />
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button className="flex-1">
                  <Icon name="Search" size={18} className="mr-2" />
                  Применить фильтры
                </Button>
                <Button variant="outline">
                  <Icon name="RotateCcw" size={18} className="mr-2" />
                  Сбросить
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProfiles.map((profile, index) => (
            <Card 
              key={profile.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={profile.image} 
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">
                    {profile.name}, {profile.age}
                  </h3>
                  <p className="flex items-center gap-1 text-sm opacity-90">
                    <Icon name="MapPin" size={14} />
                    {profile.location}
                  </p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {profile.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {profile.interests.map(interest => (
                    <Badge key={interest} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <Icon name="Heart" size={16} className="mr-1" />
                    Нравится
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Как это работает?</h3>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Три простых шага к новым знакомствам
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="UserPlus" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Создайте профиль</h4>
              <p className="text-sm text-muted-foreground">
                Расскажите о себе и добавьте фотографии
              </p>
            </div>
            <div className="p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Найдите совпадения</h4>
              <p className="text-sm text-muted-foreground">
                Используйте фильтры для поиска интересных людей
              </p>
            </div>
            <div className="p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Начните общение</h4>
              <p className="text-sm text-muted-foreground">
                Отправьте сообщение и узнайте друг друга лучше
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 DateConnect. Безопасные знакомства онлайн.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-primary transition-colors">О нас</a>
            <a href="#" className="hover:text-primary transition-colors">Правила</a>
            <a href="#" className="hover:text-primary transition-colors">Безопасность</a>
            <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
