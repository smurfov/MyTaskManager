src/
├── app/ # Корневые файлы приложения
│ ├── App.tsx # Главный компонент
│ └── main.tsx # Точка входа (ReactDOM.render / createRoot)
│
├── shared/ # Общие утилиты, типы, хуки, константы
│ ├── types/ # Глобальные типы
│ ├── hooks/ # Переиспользуемые кастомные хуки
│ ├── lib/ # Вспомогательные функции
│ └── constants/ # Константы (например, пути, статусы)
│
├── widgets/ # Крупные UI-компоненты, связанные с логикой
│ └── Header/
│ ├── Header.tsx
│ └── Header.module.css
│
├── features/ # Фичи приложения (логические блоки)
│ └── add-task/
│ ├── AddTaskButton.tsx
│ ├── AddTaskForm.tsx
│ └── index.ts # Экспорт по дефолту
│
├── entities/ # Бизнес-сущности (модели данных)
│ └── task/
│ ├── Task.ts
│ ├── TaskCard.tsx
│ └── TaskService.ts # API, бизнес-логика
│
├── pages/ # Страницы приложения
│ └── tasks-page/
│ ├── TasksPage.tsx
│ └── TasksPage.module.css
