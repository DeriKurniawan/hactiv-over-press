<template lang="html">
    <div style="padding-top: 70px; padding-bottom: 40px;">
        <div class="ui container">
            <div class="ui grid">
                <div class="sixteen wide column">
                    <br /><br /><br />
                    <div class="ui blue card" style="width: 100%">
                        <div class="content">
                            <div class="header">{{ oneQuestion.title }}</div>
                        </div>
                        <div class="content">
                            <div class="description">
                                <span>{{ oneQuestion.question }}</span>
                            </div>
                        </div>
                        <div class="content">
                            <span class="right floated">
                                <i class="heart outline like icon" @click="checkQuestionLikeStatus(oneQuestion)"></i>
                                {{ oneQuestion.like.length }} likes
                            </span>
                            <i class="comment icon"></i>
                            {{ answers.length }} comments
                        </div>
                    </div>                
                </div>
            </div>
        </div>
        <br /><br /><br />
        <div class="ui text container">
            <div class="ui grid">
                <div class="sixteen wide column">
                    <div class="ui orange card" style="width: 100%" v-for="answer in answers">
                        <div class="content">
                            <div class="ui white right floated compact icon button" @click="deleteOwnAnswer(answer)" style="background-color: white;"><i class="trash icon"></i></div>
                            <div class="header"></div>
                        </div>
                        <div class="content">
                            <div class="description">
                                <span>{{ answer.content }}</span>
                            </div>
                        </div>
                        <div class="content">
                            <i class="heart outline like icon" @click="checkAnswerLikeStatus(answer._id, answer.like)"></i>
                            {{ answer.like.length }} likes
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui bottom fixed huge menu" style="height: 70px; background-color: rgba(255, 255, 255, 0.88);">
            <div class="item" style="padding-right: 430px;"></div>
            <div class="item" style="width: 600px;">
                <div class="ui action input">
                    <input type="text" placeholder="Input jawaban baru..." v-model="newAnswer.content" @keyup.13="createNewAnswerMethod(newAnswer)">
                    <div class="ui orange button" @click="createNewAnswerMethod(newAnswer)"><i class="large send icon"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'article'
    }
</script>

<style scoped>

</style>