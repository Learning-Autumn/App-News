<template>
    <div>
        <div class="card">
            <h3>{{ title }}</h3>
            <app-button @action="toggleOpen">
                {{ isOpen ? 'Закрити' : 'Відкрити' }}
            </app-button>
            <app-button color="danger" v-if="wasRead" @action="$emit('unmark', id)">
                Відмитить непрочитані
            </app-button>
            <div v-if="isOpen">
                <hr>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut earum voluptas impedit
                    voluptates commodi blanditiis quis expedita soluta provident, reiciendis doloribus numquam beatae
                    nostrum odio quidem esse fuga quibusdam dolor?</p>
                <app-button v-if="!wasRead" color="primary" @action="mark">Прочитать
                    новину</app-button>

                <app-news-list>
                    
                </app-news-list>    

            </div>

        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppNewsList from './AppNewsList.vue';

export default {
    emits: ['open-news', 'read-news', 'unmark'],
    props: {
        wasRead: Boolean,
        title: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        isOpen: {
            type: Boolean,
            required: false,
            default: false,
            validator(value) {
                console.log(value);
                return value === true || value === false
            }
        },
    },
    data() {
        return {
            // isNewsOpen: this.isOpen

        }
    },
    methods: {
        toggleOpen() {
            this.$emit('update:isOpen', !this.isOpen);
            if (!this.isOpen) {
                this.$emit('open-news')

            }
        },
        mark() {

            this.$emit('read-news', this.id)
        },
    },
    components: { AppButton, AppNewsList }
}
</script>

<style lang="scss" scoped></style>
