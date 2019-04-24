<template>
  <figure class="figure extreme-aversion-figure">
    <figcaption class="figure__title">Extreme Aversion</figcaption>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100">
        <md-card>
          <md-card-media 
            class="extreme-aversion-figure__media" 
            :style="{ backgroundImage: 'url(' + require('../../assets/images/low_burger.svg') + ')' }"></md-card-media>
          <md-card-header>
            <div class="md-title">$1</div>
            <div class="md-subhead">Risk: Trying to save money. May be too small.</div>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-small-size-100">
        <md-card>
          <md-card-media 
            class="extreme-aversion-figure__media"
            :style="{ backgroundImage: 'url(' + require('../../assets/images/middle_burger.svg') + ')' }"></md-card-media>
          <md-card-header>
            <div class="md-title">$5</div>
            <div class="md-subhead">The comfortable middle</div>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-small-size-100">
        <md-card>
          <md-card-media 
            class="extreme-aversion-figure__media"
            :style="{ backgroundImage: 'url(' + require('../../assets/images/high_burger.svg') + ')' }"></md-card-media>
          <md-card-header>
            <div class="md-title">$8</div>
            <div class="md-subhead">Risk: Spending too much. May be too large</div>
          </md-card-header>
        </md-card>
      </div>
    </div>
  </figure>
</template>
