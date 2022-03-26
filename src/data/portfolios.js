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
        text: "small SPA made with React+Redux, fetches data using API and shows it in cards",
    },
    {
        id: 20,
        category: "react",
        image: imgThisWebsite,
        link1: "https://github.com/mpasichnyuk/mpasichnyuk.github.io/tree/master",
        link2: "https://mpasichnyuk.github.io",
        title: "Portfolio website",
        text: "Personal portfolio website, made with React, react-router, styled-components, material-ui, react hooks",
    },
    {
        id: 4,
        category: "JS",
        image: imgRotatingNavigation,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/03-rotating_navigation",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/03-rotating_navigation/index.html",
        title: "Awesome seals!",
        text: "That navigation menu is like a seal - they both love to rest on their side.",
    },
    {
        id: 2,
        category: "JS",
        image: imgExpandingCards,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/01-expanding-cards",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/01-expanding-cards/index.html",
        title: "Animated Flex Cards",
        text: "Click and it will magically take all available screenspace.",
    },
    {
        id: 1,
        category: "JS",
        image: imgRecipyCards,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/0A-Recipy-cards",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/0A-Recipy-cards/index.html",
        title: "Simple recipy cards",
        text: "Cards made with flex-box, arranged using CSS-Grid.",
    },
    {
        id: 3,
        category: "JS",
        image: imgButtonsIndicator,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/02-buttons-indicator",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/02-buttons-indicator/index.html",
        title: "Step Progress Indication",
        text: "Click button to go to next or previous steps",
    },

    {
        id: 5,
        category: "JS",
        image: imgSearchWidget,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/04-search-widget",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/04-search-widget/index.html",
        title: "Hidden search field",
        text: "Click on the icon to open the search field",
    },
    {
        id: 6,
        category: "JS",
        image: imgRandomChoice,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/13-random-choice",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/13-random-choice/index.html",
        title: "Randomized choicer",
        text: "Enter your options an let the RND-fate decide!",
    },
    {
        id: 7,
        category: "JS",
        image: imgCheapCheckbox,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/32-cheap-checkbox",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/32-cheap-checkbox/index.html",
        title: "Perfect project",
        text: "Make your perfect project - quick, cheap and of highest quality!",
    },

    {
        id: 8,
        category: "JS",
        image: imgColorHoverBoard,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/36-color-hover-board",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/36-color-hover-board/index.html",
        title: "Glowing Color Board",
        text: "Hover your mouse and see for yourself!",
    },

    {
        id: 9,
        category: "JS",
        image: imgTodoList,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/49-todo-list",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/49-todo-list/index.html",
        title: "Simple Notes Page",
        text: "Note-taking list made with JavaScript",
    },

    {
        id: 10,
        category: "JS",
        image: imgColorSlider,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/panda/color-slider",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/panda/color-slider/index.html",
        title: "Slider for Color Choice",
        text: "RGB-color choice made with JavaScript",
    },
    {
        id: 11,
        category: "game",
        image: imgGameFoxnbats,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/game-foxnbats",
        link2: "https://reynmar.itch.io/fox-and-bats",
        title: "Fox & Bats",
        text: "Very simple prototype for a 2D Zelda-style adventure game, made with GODOT engine",
    },
    {
        id: 12,
        category: "game",
        image: imgGameGlory,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/game-glory",
        link2: "https://reynmar.itch.io/textforglory",
        title: "Text for Glory",
        text: "Text-based adventure-RPG made with Twine engine.",
    },
    {
        id: 13,
        category: "game",
        image: imgGamePico,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/game-pico-adventure",
        link2: "https://reynmar.itch.io/micro-adventure-beta",
        title: "PICO-8 Adventure",
        text: "Retro pixel-art game prototype for top-down adventure, made with Pico-8 engine",
    },
    {
        id: 14,
        category: "react",
        image: imgReactFlashCards,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/react-flashcards",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/react-flashcards/index.html",
        title: "Flash Cards for word memorization",
        text: "Educational project, made with React class components",
    },
    {
        id: 15,
        category: "react",
        image: imgReactGuessGame,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/react-guess-game",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/react-guess-game/index.html",
        title: "Guess the number",
        text: "Mathematical exercises for small children",
    },
    {
        id: 16,
        category: "react",
        image: imgReactTodo,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/react-todos",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/react-todos/index.html",
        title: "Todo list",
        text: "Simple todo-list made with React class components",
    },
    {
        id: 17,
        category: "react",
        image: imgReactTable,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/panda/table-react",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/panda/table-react/index.html",
        title: "Interactive React Table",
        text: "No-plugins, pure JavaScript. Implemented filtering, pagination, column sorting from scratch.",
    },
    {
        id: 18,
        category: "JS",
        image: imgVerstkaTinkoff,
        link1: "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/tinkoff",
        link2: "https://mpasichnyuk.github.io/Portfolio-projects/tinkoff/tinkoff.html",
        title: "HTML and CSS pages",
        text: "Small web-pages, to be used as Stories in a Mobile App",
    },
];

export default portfolios;