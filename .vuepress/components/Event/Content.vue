<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div>
    <div class="category">
      <Badge :text="capitalizeWord(data.category)"/>
    </div>
    <h1 id="name">{{ data.name }}</h1>
    <Synopsis/>

    <div id="speakers" v-if="data.speakers && data.speakers.length > 0">
      <h2>Speakers</h2>
      <Speakers/>
    </div>

    <div id="date" v-if="data.date">
      <h2>Date</h2>
      <DateTime/>
    </div>

    <div id="address" v-if="data.venue || data.address">
      <h2 v-if="Array.isArray(data.address)">Venues</h2>
      <h2 v-else>Venue</h2>
      <MapLink/>
    </div>

    <div id="tickets" v-if="data.tickets">
      <h2>More information</h2>
      <TicketsLink/>
    </div>
  </div>
</template>

<script>
import DateTime from './DateTime'
import MapLink from './MapLink'
import Speakers from './Speakers'
import Synopsis from './Synopsis'
import TicketsLink from './TicketsLink'
import { capitalizeWord } from './../../theme/util.js'

export default {
  components: { DateTime, MapLink, Speakers, Synopsis, TicketsLink },
  computed: {
    data () {
      return this.$page.frontmatter
    }
  },
  methods: {
    capitalizeWord (word) {
      return capitalizeWord(word)
    }
  }
}
</script>

<style lang="stylus">
.category
  text-align right
h2
  margin-top 1.5em
</style>
