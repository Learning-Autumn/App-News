<template>
    <div class="container pt-1">
        <div class="card">
            <h2>Актуальні новини {{ now }}</h2>
            <span>Вікрито: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
        </div>

        <app-news 
        v-for="item in news" 
        :key="item.id" 
        :title="item.title" 
        :id="item.id" 
        :isOpen="item.isOpen"
        :was-read="item.wasRead" 
        @update:isOpen="item.isOpen = $event" 
        @open-news="openRate++"
        @read-news="readNews"
        @unmark="unreadNews" />
    </div>
</template>

<script>
import AppNews from './components/AppNews.vue'

export default {
    components: {
        AppNews
    },
    data() {
        return {
            now: new Date().toLocaleDateString(),
            openRate: 0,
            readRate: 0,
            news: [
                {
                    title: 'Джон Байден переміг на виборах',
                    id: 1,
                    isOpen: false,
                    wasRead: false,
                },
                {
                    title: 'Джон Байден переміг на виборах 2',
                    id: 2,
                    isOpen: false,
                    falseRead: false,
                },
                {
                    title: 'Джон Байден переміг на виборах 3',
                    id: 3,
                    isOpen: false,
                    falseRead: false,
                }
            ]
        }
    },
    methods: {
        readNews(id) {
            const idx = this.news.findIndex(news => news.id === id)
            this.news[idx].wasRead = true
            this.readRate++
        },
        unreadNews(id) {
            const news = this.news.find(news => news.id === id)
            news.wasRead = false
            this.readRate--
        }
    }
}
</script>

<style lang="scss" scoped></style>
