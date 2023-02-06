<template>
    <div class="prediction">
        <PredictionCategory category='Sports'/>
        <div class="headline container-fluid flex-row just-space-between align-center">
            <img src="#" alt="t-p">
            <span>Man-United wil win 
                PSG tonight
            </span>
        </div>
        <EventTime :time='predictions.time'/>
        <hr>
        <div class=" volume container-fluid flex-row just-space-between">
            <span>Total Volume</span>
            <span>{{'$'+predictions.totalVolume}}</span>
        </div>
        <div class=" prediction-type container-fluid  flex-row just-space-between">
            <span>Prediction Type</span>
            <span>{{predictions.type}}</span>
        </div>
        <router-link 
        class="btn btn-block pale-blue-border predict-now" 
        to='/predictionmarket/prediction'
        >
        Predict Now
        </router-link>
    </div>
</template>
