<template>
    <section>
        <!-- 
            <ul> => <transition-group> 
            # 애니메이션을 추가할 때 사용되는 태그
            # tag 속성에 애니메이션이 들어갈 HTML 태그 이름을 지정하면 됨
            # name 속성은 이후에 추가할 CSS 클래스와 연관 
        -->
        <transition-group name="list" tag="ul">
            <!-- 
                :key
                # 뷰는 특정 아이템이 삭제되거나 추가되었을 때 돔에서 나머지 아이템의 순서를 다시 조정하지 않고 프레임워크 내부적으로 전체 아이템의 순서를 제어함
                # 프레임워크에서 목록 아이템의 순서를 제어하는 이유는 브라우저가 돔을 조작하는데 소요되는 시간들을 최소화하기 위함 
                    # 돔 조작 ? 화면을 다시 그려야 하는 렌더링 > 프레임워크에서 순서를 조작하여 돔 이동을 최소화함 
            -->
            <li v-for="(todoItem, index) in todoData" :key="todoItem">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>
<script>
    export default {
        props: ['todoData'],
        methods: {
            // 이벤트 전달을 인자와 함께 보내기 가능 
            removeTodo(todoItem, index) {
                this.$emit('removeTodo', todoItem, index); 
            }
        },
        created() {
            console.log(this.todoData); 
        }
    }
</script>
<style scoped>
    ul {
        list-style-type : none;
        padding-left : 0px;
        margin-top: 0;
        text-align: left;
    }

    li {
        display: flex; /* 비율 기준의 레이아웃 방식인 flex로 지정 */
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    
    .removeBtn {
        margin-left : auto;
        color: #de4343;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

</style>