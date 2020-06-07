var path = require('path')
module.exports = [
    {
        path: '/about',
        component: path.resolve(`src/pages/AboutPage.js`)
    },
    {
        path: '/',
        component: path.resolve(`src/pages/HomePage.js`)
    },
    {
        path: '/event-host',
        component: path.resolve(`src/pages/EventHost.js`)
    }
]