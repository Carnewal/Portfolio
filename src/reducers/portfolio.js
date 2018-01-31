
const initialState = [
    {
        year: '2018', 
        title: 'Tonhuis',
        subtitle: 'A website for my uncle\'s business.',
        description: 'A single-page website powered by **Angular** 5 and **Bootstrap** with `Directus`, a headless **PHP** **CMS** that\'s all about exposing API endpoints.', 
        img: 'img/tonhuis.png', 
        links: [
            {icon: 'globe', link: 'http://www.tonhuis.be/'}
        ]
    },
    {
        year: '2018', 
        title: 'Portfolio',
        subtitle: 'This website!',
        description: 'I made this portfolio to refresh my **React** and **Redux** knowledge. It also uses `react-router` with history, `reactstrap` for **Bootstrap** 4 components and `react-markdown` to style descriptions like this one!', 
        img: 'img/portfolio.png', 
        links: [
            {icon: 'globe', link: 'https://carnewal.github.io/Portfolio'},
            {icon: 'github', link: 'https://github.com/Carnewal/Portfolio' }
        ]
    },
    {
        year: '2017', 
        title: 'Pozyx',
        subtitle: 'School project with 4 friends.',
        description: 'Our **team** chose to work together through **Git**hub and created a powerful frontend with **React**, **Redux** and **Redux Saga**. The backend is powered by **Node.js** (`Express`) and `Sequelize` as **ORM** for **MySQL**. ', 
        img: 'img/pozyx.png', 
        links: [
            {icon: 'github', link: 'https://github.com/Carnewal/pozyx-03'}
        ]
    },
    {
        year: '2016', 
        title: 'PieSync',
        subtitle: 'Internship and student job.',
        description: 'My task was to migrate the Dashboard app\'s **Ruby on Rails** server rendered views to the client. I learned all about writing and **Testing** code with **React**, **Redux**, **Redux Saga**, `mocha`, `chai`, `enzyme` and `sinon`. Working in a **team** of great people and using tools like **Git** and **Slack** was an amazing experience I\'ll never forget.', 
        img: 'img/piesync.png', 
        links: [
            {icon: 'globe', link: 'https://app.piesync.com/'},
            {icon: 'image', link: '/img/peter.png'},
        ]
    },
    {
        year: '2016', 
        title: 'hi.Carnewal',
        subtitle: 'Reception app.',
        description: 'A smaller webapp made for my father\'s business. Technologies used include a **PHP** backend powered by the `Slim` framework, `Illuminate` as **ORM** for **MySQL** and `Twig` views using **Bootstrap** with some **jQuery** sprinkled on top. Hosted at home on an Orange Pi Lite.', 
        img: 'img/hicarnewal.png', 
        links: [
            {icon: 'globe', link: 'https://hi.carnewal.com/register'}
        ]
    },
    {
        year: '2015', 
        title: 'Hack the future',
        subtitle: 'Hackathon (mobile category).',
        description: 'To test our knowledge, my friend Laurens and I **team**ed up and attended Hack The Future where we had to create a frontend for an existing API. We chose to create an **Angular** webapp as well as an **Android** mobile app (using `Retrofit` for API calls). The code was lost through the years, the memories haven\'t!', 
        img: 'img/htf.png', 
    },
    {
        year: '2015', 
        title: '\'t Juiste Verzet',
        subtitle: 'Website for a bed & breakfast.',
        description: 'The scope was translations for 3 languages and a CMS for easy editing, so I tackled this with the **PHP**-based `Ionize` **CMS** and a pre-made **Bootstrap** template.', 
        img: 'img/tjv.png', 
        links: [
            {icon: 'globe', link: 'http://www.tjuisteverzet.be/'}
        ]
    },
    {
        year: '2014', 
        title: 'Carnewal',
        subtitle: 'Website for my dad\'s business.',
        description: 'In 2014 this site\'s frontend was still running flash. I decided this wasn\'t OK and made a **HTML and CSS** clone served with **PHP**. I was very proud at the time, even the **MySQL** queries are made by hand!', 
        img: 'img/carnewal.png', 
        links: [
            {icon: 'globe', link: 'http://www.carnewal.com'}
        ]
    },
]

export default (state = initialState, action) => state