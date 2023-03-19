<template>
    <div class="flat-box btn-container flex-row align-center">
        <router-link :to="link" class="btn-back small-circle faint-background  flex-col just-center align-center">
            <b class="fa fa-arrow-left"></b>
        </router-link>
        <h4>{{dirTo}} / <b>{{dirFrom}}</b></h4>
    </div>
</template>
<script>
export default{
    name:"BackButton",
    props:{
        link:String,
        dirTo:String,
        dirFrom:String
    }
}
</script>