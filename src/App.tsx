import NewsItem from "./components/NewsItem";
import TopBar from "./components/TopBar";
import PromoCard from "./components/PromoCard";
import promoFoto from "./assets/2.jpg";
import CurrencyBar from "./components/CurrencyBar";
import SearchBar from "./components/SearchBar";
import Banner from "./components/Banner";
import WeatherWidget from "./components/WeatherWidget";
import VisitedList from "./components/VisitedList";
import MapWidget from "./components/MapWidget";
import TVSchedule from "./components/TVSchedule";
import BroadcastList from "./components/BroadcastList";

import bannerImg from "./assets/banner.png";

function App() {
  const topNavLinks = [
    { text: "Сейчас в СМИ", href: "#", isActive: true },
    { text: "в Германии", href: "#" },
    { text: "Рекомендуем", href: "#" },
  ]

  const currencyLinks = [
    { name: "USD", href: "#", currency: 63.52, },
    { name: "RUR", href: "#", currency: 70.86, },
    { name: "НЕФТЬ", href: "#", currency: 64.9, },
  ]

  const searchLinks = [
    { text: "Видео", href: "#" },
    { text: "Картинки", href: "#" },
    { text: "Новости", href: "#" },
    { text: "Карты", href: "#" },
    { text: "Маркет", href: "#" },
    { text: "Переводчик", href: "#" },
    { text: "Эфир", href: "#" },
    { text: "еще", href: "#" },
  ]

  return (
    <div className='container'>
      {/* Верхняя панель навигаии и промо */}
      <div className="mb-3">
        <TopBar links={topNavLinks} />
      </div>

      {/* Блок с новостями */}
      <div className="row">
        <div className="col-md-8">
          <NewsItem icon="🌐" text="Путин упростил получение автомобильных номеров" link="#" />
          <NewsItem icon="⚡" text="В команде Зеленского Раскрыли план реформ на Украине" link="#" />
          <NewsItem icon="🚐" text="Турпомощь прокоментировала гибель десятков россиян в Анталье" link="#" />
          <NewsItem icon="⏳" text="Суд закрыл дело Демпартии США против России" link="#" />
          <NewsItem icon="🚀" text="На Украине призвали создать ракеты для удара по Москве" link="#" />
        </div>
        <div className="col-md-4">
          <PromoCard
            img={{src: promoFoto, alt: "promo"}}
            title="Работа над ошибками"
            link="#"
            text="Смотрите на Яндексе и запоминайте"
          />
        </div>
      </div>

      {/* Курсы валют */}
      <div className="mb-3">
        <CurrencyBar links={currencyLinks} />
      </div> 

      {/* Логотип, поиск и меню */}
      <SearchBar links={searchLinks} />

      {/* Рекламный баннер */}
      <Banner src={bannerImg} href="#" />

      {/* Нижние виджеты в 3 колонки */}
      <div className="row">
        <div className="col-md-4">
          <WeatherWidget />
          <VisitedList />
        </div>
        <div className="col-md-4">
          <MapWidget />
          <TVSchedule />
        </div>
        <div className="col-md-4">
          <BroadcastList />
        </div>
      </div>
    </div>
  )
}

export default App
