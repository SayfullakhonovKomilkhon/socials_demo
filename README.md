# Belle Pâtisserie 🧁

Современный веб-сайт для кондитерской с изысканным дизайном в стиле розового золота.

## 🚀 Технологии

- **React 18** + **TypeScript** - современный фреймворк с типизацией
- **Styled Components** - кастомная CSS-in-JS стилизация
- **Framer Motion** - анимации и переходы
- **React Router v6** - маршрутизация
- **Lucide React** - иконки
- **Vite** - быстрая сборка

## 📱 Страницы

1. **Главная** - Hero секция, описание, бестселлеры, промо
2. **Меню** - Каталог с категориями, поиском и модальным окном деталей
3. **Бронирование** - 3-шаговая форма бронирования столика
4. **Филиалы** - Интерактивная карта с маркерами
5. **Контакты** - Форма обратной связи

## 🎨 Особенности дизайна

- Цветовая палитра: розовое золото, бордовый, золотой акцент
- Шрифты: Cormorant Garamond (заголовки) + Nunito (текст)
- Адаптивный дизайн для Desktop (1440px), Tablet (768px), Mobile (375px)
- Плавные анимации и переходы

## 🛠 Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр сборки
npm run preview
```

## 📁 Структура проекта

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Card.tsx
│       └── Modal.tsx
├── pages/
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── Reservation.tsx
│   ├── Locations.tsx
│   └── Contact.tsx
├── styles/
│   ├── theme.ts
│   ├── GlobalStyles.ts
│   └── styled.d.ts
├── App.tsx
└── main.tsx
```

## 🎯 Ключевые компоненты

### Reusable UI Components
- `Button` - кнопки с вариантами (primary, secondary, outline, ghost, gold)
- `Input` / `Textarea` - стилизованные поля ввода
- `Card` / `ProductCard` - карточки для контента
- `Modal` - модальные окна

### Responsive Breakpoints
- Desktop: 1440px+
- Tablet: 768px - 1024px
- Mobile: 375px - 768px

---

Сделано с ❤️ для Belle Pâtisserie

# socials_demo
