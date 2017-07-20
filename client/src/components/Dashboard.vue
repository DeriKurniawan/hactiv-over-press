<template lang="html">
    <div class="ui container">
        <!--<h2 class="ui header">
            <i class="comments outline icon"></i>
            All Articles
        </h2>-->
        Haloooo
        <!--<div class="ui large orange animated button" tabindex="0">
            <div class="visible content">Post Article</div>
            <div class="hidden content">
                <i class="write icon"></i>
            </div>
        </div>-->
        <br /><br /><br />
        <!--<div class="ui link cards" >
            <div class="card" style="width: 100%" >
                <div class="content">
                    <div class="ui right floated compact icon button" style="background-color: white;" @click=""><i class="trash icon"></i></div>
                    <div class="header" @click=""></div>
                </div>
                <div class="content">
                    <div class="description">
                        <span></span>
                    </div>
                </div>
                <div class="content">
                    <span class="right floated">
                        <i class="heart outline like icon"></i>
                         likes
                    </span>
                    <span ><i class="comment icon"></i>
                     comments</span>
                </div>
            </div>
        </div>-->
        <!--<div class="ui error message">
            <div class="header">Cannot get some question</div>
            <p>Tidak dapat menemukan apapun, mungkin akan ada jika anda mulai menulis tentang hal ini</p>
        </div>-->
        <!-- modal untuk create new question -->
        <!--<div class="ui modal" id="modal-question">
            <i class="close icon"></i>
            <div class="header">
                Create New Question
            </div>
            <div class="description" style="padding-left: 20px; padding-right: 20px; padding-top: 25px; padding-bottom: 30px;">
                <form class="ui form">
                    <div class="field">
                        <label>Title</label>
                        <input type="text" placeholder="Tulis Judulnya..." v-model="newQuestions.title">
                    </div>
                    <div class="field">
                        <label>Question</label>
                        <textarea rows="4" placeholder="Tulis pertanyaan..." v-model="newQuestions.question"></textarea>
                    </div>
                </form>
            </div>
            <div class="actions">
                <div class="ui black deny button">
                    Nope
                </div>
                <div class="ui positive right labeled icon button" @click="createNewQuestion">
                    Create Question
                    <i class="checkmark icon"></i>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'dashboard',
        data () {
            return {
                newQuestions: {
                    title: '',
                    content: '',
                    category: '',
                    token: localStorage.token,
                    author: localStorage._id
                }
            }
        },
        methods: {
            ...mapActions([
                'getArticlesData',
                'apiCreateNewArticleMethod',
                'apiAllArticleMethod'
            ]),
            showModalArticle () {
                if(localStorage.token){
                    $('#modal-question')
                    .modal('setting', 'transition', 'fade up')
                    .modal('show');
                } else {
                    alert('Kamu harus login dahulu')
                }
            },
            createNewArticle () {
                this.createNewArticleMethod(this.newQuestions);
            }
        },
        computed: mapGetters({
            questions: 'getArticlesData'
        }),
        created () {
            this.apiAllArticleMethod();
        }
    }
</script>

<style scoped>
    .ui.container {
        padding-top: 100px;
    }
    .huge.header {
        font-size: 1.4em;
    }
</style>