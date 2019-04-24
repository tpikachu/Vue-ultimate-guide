<template>
    <figure id="access-to-chapter" class="figure md-layout">
        <div class="md-layout-item md-small-size-100 text-center">
          <img :src="require('../assets/images/book.png')" alt="Book">
        </div>
        <figcaption class="md-layout-item md-small-size-100 text-left">
           <h2 class="title_theme_dark">Get access to the final chapter!</h2>
           <p>These 14 essential metrics will give you the tools you need to measure your success. Learn about how to grow your business!</p>
           <md-button class="md-accent md-raised md-button_size_middle m-0"
                @click="toggleDialog()">GET THE FULL GUIDE</md-button>
        </figcaption>
    </figure>
</template>

<script>
export default {
    methods: {
        toggleDialog() {
            window.toggleDialog();
        }
    }
}
</script>
