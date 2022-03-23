import imgRecipyCards from './portfolios/0A-Recipy-cards.png';
import imgExpandingCards from './portfolios/01-expanding-cards.png';
import imgButtonsIndicator from './portfolios/02-buttons-indicator.png';
import imgRotatingNavigation from './portfolios/03-rotating_navigation.png';
import imgSearchWidget from './portfolios/04-search-widget.png';
import imgRandomChoice from './portfolios/13-random-choice.png';
import imgCheapCheckbox from './portfolios/32-cheap-checkbox.png';
import imgColorHoverBoard from './portfolios/36-color-hover-board.png';
import imgTodoList from './portfolios/49-todo-list.png';
import imgColorSlider from './portfolios/color-slider.jpg';
import imgGameFoxnbats from './portfolios/game-foxnbats.jpg';
import imgGameGlory from './portfolios/game-glory.jpg';
import imgGamePico from './portfolios/game-pico-adventure.jpg';
import imgReactFlashCards from './portfolios/react-flashcards.jpg';
import imgReactGuessGame from './portfolios/react-guess-game.jpg';
import imgReactTodo from './portfolios/react-todo.jpg';
import imgReactTable from './portfolios/table-react.png';
import imgVerstkaTinkoff from './portfolios/verstka-tinkoff.png';
import imgAlfaReact from './portfolios/alfa.jpg';
import imgThisWebsite from './portfolios/react-portfolio.jpg';



const portfolios = [
    {
        id: 19,
        category: "react",
        image: imgAlfaReact,
        link1: "https://github.com/mpasichnyuk/react-alfa-test/tree/master",
        link2: "https://mpasichnyuk.github.io/react-alfa-test/",
        title: "API Fetch",
        text: "small SPA made with React, fetches data using API and shows it in cards",
    },
    {
        id: 20,
        category: "react",
        image: imgThisWebsite,
        link1: "https://github.com/mpasichnyuk/mpasichnyuk.github.io/tree/master",
        link2: "https://mpasichnyuk.github.io",
        title: "React-портфолио",
        text: "Личный сайт, собран на react-router, styled-components, material-ui, react hooks",
    },
    {
        id: 4,
        category: "JS",
        image: imgRotatingNavigation,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/03-rotating_navigation",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/03-rotating_navigation/index.html",
        title: "Тюлени прекрасны!",
        text: "Они любят завалиться на бочок, прямо как это меню навигации.",
    },
    {
        id: 2,
        category: "JS",
        image: imgExpandingCards,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/01-expanding-cards",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/01-expanding-cards/index.html",
        title: "Анимированные Флекс-карточки",
        text: "При клике карточка расширяется на всю доступную длину.",
    },
    {
        id: 1,
        category: "JS",
        image: imgRecipyCards,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/0A-Recipy-cards",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/0A-Recipy-cards/index.html",
        title: "Карточки с рецептами",
        text: "Сделаны на флексе, положены в грид.",
    },
    {
        id: 3,
        category: "JS",
        image: imgButtonsIndicator,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/02-buttons-indicator",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/02-buttons-indicator/index.html",
        title: "Кнопки с индикацией прогресса",
        text: "Нажмите далее для установки мастера :)",
    },

    {
        id: 5,
        category: "JS",
        image: imgSearchWidget,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/04-search-widget",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/04-search-widget/index.html",
        title: "Скрытый виджет",
        text: "Нажми на иконку и откроется поле ввода",
    },
    {
        id: 6,
        category: "JS",
        image: imgRandomChoice,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/13-random-choice",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/13-random-choice/index.html",
        title: "Случайный выбиратор",
        text: "Если не можешь выбрать, за тебя выберет Случайный Выбиратор!",
    },
    {
        id: 7,
        category: "JS",
        image: imgCheapCheckbox,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/32-cheap-checkbox",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/32-cheap-checkbox/index.html",
        title: "Идеальный проект",
        text: "Собери идеальный проект - быстрый, качественный, недорогой!",
    },

    {
        id: 8,
        category: "JS",
        image: imgColorHoverBoard,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/36-color-hover-board",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/36-color-hover-board/index.html",
        title: "Цветные шашечки",
        text: "Проведи мышкой над доской!",
    },

    {
        id: 9,
        category: "JS",
        image: imgTodoList,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/49-todo-list",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/49-todo-list/index.html",
        title: "Заметки",
        text: "Динамически пополняемый список задач на чистом JS",
    },

    {
        id: 10,
        category: "JS",
        image: imgColorSlider,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/panda/color-slider",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/panda/color-slider/index.html",
        title: "Слайдер с выбором цвета",
        text: "Слайдер для выбора RGB цвета на чистом JS",
    },
    {
        id: 11,
        category: "game",
        image: imgGameFoxnbats,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/game-foxnbats",
        link2: "https://reynmar.itch.io/fox-and-bats",
        title: "Fox & Bats",
        text: "Ранний прототип action-adventure в стиле Zelda на движке GODOT",
    },
    {
        id: 12,
        category: "game",
        image: imgGameGlory,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/game-glory",
        link2: "https://reynmar.itch.io/textforglory",
        title: "Поход за Славой",
        text: "Текстовый квест с механиками боя и RPG, сделан на движке Twine",
    },
    {
        id: 13,
        category: "game",
        image: imgGamePico,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/game-pico-adventure",
        link2: "https://reynmar.itch.io/micro-adventure-beta",
        title: "PICO-8 Adventure",
        text: "простой прототип top-down adventure на движке Pico-8",
    },
    {
        id: 14,
        category: "react",
        image: imgReactFlashCards,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/react-flashcards",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/react-flashcards/index.html",
        title: "Флеш-карточки",
        text: "Интерактивные карточки для изучения иностранного языка",
    },
    {
        id: 15,
        category: "react",
        image: imgReactGuessGame,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/react-guess-game",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/react-guess-game/index.html",
        title: "Угадай число",
        text: "математический тренажер для первоклассников",
    },
    {
        id: 16,
        category: "react",
        image: imgReactTodo,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/react-todos",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/react-todos/index.html",
        title: "Todo list",
        text: "Простой списк задач на React class components",
    },
    {
        id: 17,
        category: "react",
        image: imgReactTable,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/panda/table-react",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/panda/table-react/index.html",
        title: "Интерактивная таблица",
        text: "Интерактивная таблица с фильтрацией, пагинацией, и сортировкой по колонкам",
    },
    {
        id: 18,
        category: "JS",
        image: imgVerstkaTinkoff,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/tinkoff",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/tinkoff/tinkoff.html",
        title: "HTML-вёрстка",
        text: "Веб-сторис для банка Тинькофф",
    },
];

export default portfolios;