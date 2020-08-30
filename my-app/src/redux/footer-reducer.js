let initialState = {
    links: [
        {id: '1', name: 'telegram', image: './icon_telegram.png'},
        {id: '2', name: 'facebook', image: './icon_facebook.png'},
        {id: '3', name: 'twitter', image: 'icon_twitter.png'},
        {id: '4', name: 'vkontakte', image: 'icon_vk.png'},
        {id: '5', name: 'instagram', image: 'icon_instagram.png'}
    ]
}

const footerReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default footerReducer