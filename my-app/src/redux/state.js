const state = {

    header: {
        companyLogo: {logo: './favicon.ico'},
    },

    footer: {
        links: [
            {id: '1', name: 'telegram', image: './icon_telegram.png'},
            {id: '2', name: 'facebook', image: './icon_facebook.png'},
            {id: '3', name: 'twitter', image: 'icon_twitter.png'},
            {id: '4', name: 'vkontakte', image: 'icon_vk.png'},
            {id: '5', name: 'instagram', image: 'icon_instagram.png'}
        ]
    },

    mainPage: {
        companyName: {logo: './favicon.ico', name: 'ИТ Перспективы'},
        description: {
            title: 'МЫ СОЗДАЕМ БЛА БЛА БЛА',
            text: 'Все наблюдения привели к тому, что стало понятно – вся музыка уйдет в цифровой формат. Позже стало\n' +
            '                ясно, что доминирующим форматом станет mp3, и пользователь не оценит качества других форматов. С точки\n' +
            '                зрения потребительских свойств ему [пользователю] mp3 вполне достаточно. Но mp3 лишен эмоциональной\n' +
            '                составляющей, к которой я привык, как меломан. Для поколения постарше выход альбома любимого артиста\n' +
            '                всегда был событием. Событием культурным.'
        },
        projects: [
            {id: '1', image: './WorksInfo.jpg', title: 'Шины и диски'},
            {id: '2', image: './WorksInfo2.jpg', title: 'Диски и шины'},
            {id: '3', image: './WorksInfo3.jpg', title: 'Колёса резина'},
        ],
        employees: [
            {
                id: '1',
                text: 'Yeah buddy Light Weight baby',
                day: '1 ноября 2018г.',
                name: 'Вася',
                image: './Worker.jpg',
                link: '@ArnieLightWeight'
            },
            {
                id: '2',
                text: 'Yeah buddy Light Weight baby',
                day: '1 ноября 2017г.',
                name: 'Петя',
                image: './Worker2.jpg',
                link: '@RonnieLightWeight'
            },
            {
                id: '3',
                text: 'Yeah buddy Light Weight baby',
                day: '1 ноября 2016г.',
                name: 'Ихтиандр',
                image: './Worker3.jpg',
                link: '@GudokLightWeight'
            }
        ]

    }
}

export default state