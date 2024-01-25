const { createApp } = Vue

createApp({
data() {
    return {
        title: 'Primo esercizio con vue3',
        image: 'https://picsum.photos/id/1/400/400',
    }
},
    methods: {
        imgChange(){
            let randomImg = Math.floor (Math.random()*(100-1 + 1)+1);
            this.image = `https://picsum.photos/id/${randomImg}/400/400`
        }
    }
}).mount('#app')
