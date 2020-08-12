<template>
    <!--
        # 범위슬롯 : 자식 컴포넌트에서 부모 컴포넌트로 속성을 전달하여 부모 컴포넌트 측에서 출력할 내용을 커스터마이징 해야할 경우 사용  
    -->
    <div class="parent">
        <child>
            <!-- p1, p2의 이름으로 자식 컴포넌트로부터 속성을 전달 받음. slot의 이름이 같음. -->
            <template slot="type1" scope="p1">
                <div>
                    {{ p1.cx }} + {{ p1.cy }} = {{ parseInt(p1.cx) + parseInt(p1.cy) }}
                </div>
            </template>
            <template slot="type2" scope="p2">
                <div>
                    {{ p2.cx }} 더하기 {{ p2.cy }}는 {{ parseInt(p2.cx) + parseInt(p2.cy) }}입니다. 
                </div>
            </template>
        </child>
    </div>
</template>
<script>
    // ScopedSlot을 받아서 사용하고 있음
    import Child from './components/ScopedSlot.vue'

    export default {
        components : { Child } 
    }
</script>
<style>
    .parent { border : dashed 2px black; padding : 5px }
</style>