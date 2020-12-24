<template>
    <div>
        <form class="card comment-form" @submit.prevent="onAddComment">
            <div class="card-block">
                <textarea class="form-control" placeholder="Write a comment..." rows="3" v-model="commentValue"></textarea>
            </div>
            <div class="card-footer">
                <img :src="user.image" class="comment-author-img" />
                <button class="btn btn-sm btn-primary">
                    Post Comment
                </button>
            </div>
        </form>
            
        <div class="card" v-for="(comment, index) in comments" :key="comment.id">
            <div class="card-block">
                <p class="card-text">{{ comment.body }}</p>
            </div>
            <div class="card-footer">
                <nuxt-link class="comment-author" :to="{
                    name: 'profile',
                    params: {
                        username: comment.author.username
                    }
                }">
                    <img :src="comment.author.image" class="comment-author-img" />
                </nuxt-link>
                &nbsp;
                <nuxt-link class="comment-author" :to="{
                    name: 'profile',
                    params: {
                        username: comment.author.username
                    }
                }">{{ comment.author.username }}</nuxt-link>
                <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY') }}</span>
                <span class="mod-options" v-if="user.username === comment.author.username">
                    <!-- <i class="ion-edit"></i> -->
                    <i class="ion-trash-a" @click="onDeleteComment(comment, index)"></i>
                </span>
            </div>
        </div>

        <!-- <div class="card">
            <div class="card-block">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
                <a href="" class="comment-author">
                <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                </a>
                &nbsp;
                <a href="" class="comment-author">Jacob Schmidt</a>
                <span class="date-posted">Dec 29th</span>
                <span class="mod-options">
                    <i class="ion-edit"></i>
                    <i class="ion-trash-a"></i>
                </span>
            </div>
        </div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { getComments, addComment, deleteComment } from '@/api/article'

export default {
    name: 'ArticleComments',
    props: {
        article: {
            type: Object,
            requires: true
        }
    },
    data () {
        return {
            comments: [], // 文章评论列表
            commentValue: '', // 评论内容
        }
    },
    computed: {
        ...mapState(['user']),
        
    },
    async mounted () {
        const { data } = await getComments(this.article.slug)
        this.comments = data.comments;
    },
    methods: {
        // 添加评论
        async onAddComment () {
            try {
                const { data } = await addComment(this.article.slug, {
                    comment: {
                        body: this.commentValue
                    }
                });
                this.comments.unshift(data.comment);
                this.commentValue = '';
            } catch (err) {
                console.log(err);
            }
        },
        // 删除评论
        async onDeleteComment (comment, index) {
            await deleteComment(this.article.slug, comment.id);
            this.comments.splice(index, 1)
        },
    },
}
</script>

<style>

</style>