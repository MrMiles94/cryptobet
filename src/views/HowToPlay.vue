<template>
    <div class="container play-guides flex-col align-center">
    
        <div class="container btn-container flex-row align-center">
            <router-link to="/" class="btn-back small-circle faint-background  flex-col just-center align-center">
                <b class="fa fa-arrow-left"></b>
            </router-link>
            <h4>Home / Learn How To Play</h4>
            
        </div>
        <h2>How to play in the market with well detailed guides</h2>
        <span>We Understand that a times predictions market can be hard to Understand. Learn how to participate with your prefered method of learning. Articles or Videos?</span>
        <hr>
        <div class="container">
            <div class="art-n-video">
                <router-link @click="videosLink" class="btn clear-fill" to='/how_to_play/articles'>Articles</router-link>
                <router-link @click="videosLink" class="btn clear-fill"  to='/how_to_play/videos'>Videos</router-link>
            </div>
            <div class="container-fluid flex-row wrap">
                <div v-for="video in videos" :key="video.id" class="card how-to-videos deemed-black">
                    <div class="video flex-col align-center just-center">
                        <div class="play-btn blue-border btn flex-col align-center just-center circle">
                            <span class="fa fa-play"></span>
                        </div>
                        
                    </div>
                    <div class="container text">
                        <span>{{video.title}} </span>
                    </div>
                    <div class="time-n-rating container flex-row just-space-between">
                        <span>time</span>
                        <div>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>
<script>
export default{
    name:"HowToPlay",
    computed:{
        videos(){
            const page = this.$route.params.page
            return this.$store.state.tutorials[page]
        }
    }
}
</script>
