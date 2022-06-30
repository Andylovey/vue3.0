<script lang="ts">

interface Person {
    name: string
    age: number
    skill: string
    hobby?: string
}

import { defineComponent, reactive, ref, toRef, toRefs } from "vue";

// 类可以实现接口，使用关键字 implements，并将Person接口作为类的属性使用
class PersonInfo implements Person {
    name = 'JentXu'
    age = 25
    skill = '篮球'
    hobby = '篮球'
}




export default defineComponent({
    name: 'ResponsePage',
    setup() {

        // ref的使用(基本数据类型)
        let starRef = ref<string>('麦迪')

        // reactive的使用(复杂数据类型)
        let objReactive = reactive<Person>({
            name: '卡特',
            age: 42,
            skill: 'basketball'
        })

        // toRefs的使用(解构了具备响应式)
        const { name } = toRefs(objReactive)

        // toRef的使用
        let hobby = toRef(objReactive, 'hobby')

        const handleAddHobby = () => {
            hobby.value = 'baseball'
        }

        return {
            starRef,
            objReactive, // 不建议使用这种方式，建议将objReactive解构（...toRefs(objReactive)）
            name,
            handleAddHobby
        }

    }
})

</script>

<template>
    <div class="page-container">
        <div class="reactive-api">
            <h1>reactive</h1>
            <p>1.reactive 方法 根据传入的对象 ，创建返回一个深度响应式对象。响应式对象看起来和传入的对象一样，但是，响应式对象属性值改动，不管层级有多深，都会触发响应式。新增和删除属性也会触发响应式</p>
            <p>2.reactive 只能 给对象添加响应式，对于值类型，比如String，Number，Boolean，Symbol无能为力。</p>
            <p>3.不能通过 ...state 方式解构，这样会丢失响应式。下面这种方式是错误的</p>
        </div>
        <div class='ref-api'>
            <h1>ref</h1>
            <p>1.上面我们提到 reactive 只能给对象，数组 添加响应式，如果想给值类型(String，Number，Boolean，Symbol)添加响应式，就要用到ref</p>
        </div>

        <div class="toref-api">
            <h1>toRef</h1>
            <p>1.针对一个响应式对象（reactive 封装）的 prop（属性）创建一个ref，且保持响应式</p>
        </div>
        <div class="torefs-api">
            <h1>toRefs</h1>
            <p>1.toRefs 是一种用于破坏响应式对象并将其所有属性转换为 ref 的实用方法</p>
            <p>2.将响应式对象（reactive封装）转成普通对象</p>
            <p>3.对象的每个属性(Prop)都是对应的ref</p>
        </div>
    </div>
</template>
