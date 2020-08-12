<template>
    <div class="child">
        <!-- 
           # 자식 컴포넌트 
           # 텍스트 필드에 v-model 디렉티브로 바인딩되어 있기 때문에 데이터 옵션에 즉시 반영. 
        -->
        x : <input type="text" v-model="x"><br/>
        y : <input type="text" v-model="y"><br/>
        <slot name="type1" :cx="x" :cy="y"></slot>
        <slot name="type2" :cx="x" :cy="y"></slot>
    </div>
</template>
<script>
    // 자식 컴포넌트이지만 자체 x,y 데이터를 가지고 있음. 
    export default {
        data() {
            return {x:4, y:5};
        }
    }
</script>
<style scoped>
    .child { padding : 5px; border: solid 1px gray}; 
</style>