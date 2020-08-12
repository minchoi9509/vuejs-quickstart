<template>
  <div id="app">
    <speech-box :headerText="A.header" :footerText="A.footer">
      <div>
        <p>
          {{A.message}}
        </p>
      </div>
    </speech-box>

    <speech-box class="sanders" :headerText="B.header" :footerText="B.footer">
      <div>
        <p class="sanders-content">
          {{B.message}}
        </p>
      </div>
    </speech-box>
  </div>
</template>

<script>
import SpeechBox from './components/SpeechBox.vue'

export default {
  name: 'app',
  components : { SpeechBox },
  data () {
    return {
      A : {
        header : "오바마 대통령..",
        footer : "시카고에서..",
        message : `저의... 동료... 국민... 여러분.... 안녕...하십니까...`
      },
      B : {
        header : "버니.. 샌더스....",
        footer : "필라델피아... 가보고.. 싶다....",
        message : `하이..땡큐.....`
      }
    }
  }
}
</script>

<style scoped>
  .sanders { background-color:antiquewhite; }
  .sanders-content { font-family: 굴림; text-decoration: underline; }
</style>