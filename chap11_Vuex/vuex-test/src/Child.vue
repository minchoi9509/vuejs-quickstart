<template>
<!-- Child.vue(Child) -->
<div>
  <hr>
  Child counter : {{ getCounter }} <br>
  <button>+</button>
  <button>-</button>
</div>
</template>
<script>
import { mapGetters } from 'vuex' 

// Child.vue(Child)
export default {
    // 상위 컴포넌트에서 내려준 counter 속성을 num로 받음
    //   props: ["num"]
    computed: mapGetters([
        'getCounter'
    ])
};
</script>