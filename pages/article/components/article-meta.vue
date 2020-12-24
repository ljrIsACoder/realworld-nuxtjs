<template>
    <div class="article-meta">
        <nuxt-link :to="{
            name: 'profile',
            params: {
                username: article.author.username
            }
        }">
            <img :src="article.author.image" />
        </nuxt-link>
        <div class="info">
            <nuxt-link class="author" :to="{
                name: 'profile',
                params: {
                    username: article.author.username
                }
            }">{{ article.author.username }}</nuxt-link>
            <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
        </div>
        
        <template v-if="user.username !== article.author.username">
            <button class="btn btn-sm btn-outline-secondary" :class="{ active: article.author.following }"
                :disabled="followingDisabled" @click="onFollowing">
                <i class="ion-plus-round"></i>
                &nbsp;
                {{ article.author.following ? 'Unfollow' : 'Follow' }} {{ article.author.username }}
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-primary" :class="{ active: article.favorited }"
                :disabled="favoriteDisabled" @click="onFavorite(article)">
                <i class="ion-heart"></i>
                &nbsp;
                Favorite Article <span class="counter">({{ article.favoritesCount }})</span>
            </button>
        </template>
        <template v-else>
            <nuxt-link class="btn btn-outline-secondary btn-sm" :to="{
                name: 'editor',
                params: {
                    slug: article.slug
                }
            }">
                <i class="ion-edit"></i> Edit Article
            </nuxt-link>
            &nbsp;&nbsp;
            <button class="btn btn-outline-danger btn-sm" :disabled="isDeleting" @click="deleteArticle">
                <i class="ion-trash-a"></i> Delete Article
            </button>
        </template>
    </div>
</template>

<script>
import { addFollowing, deleteFollowing } from '@/api/profile'
import { addFavorite, deleteFavorite, deleteArticle } from '@/api/article'
import { mapState } from 'vuex'

export default {
    name: 'ArticleMeta',
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            followingDisabled: false,
            favoriteDisabled: false,
            isDeleting: false,
        }
    },
    computed: {
        ...mapState(['user'])
    },
    mounted () {
        
    },
    methods: {
        async onFollowing () {
            this.followingDisabled = true
            let author = this.article.author
            if (author.following) {
                // 取消关注
                await deleteFollowing(author.username)
                author.following = false
            } else {
                // 添加关注
                await addFollowing(author.username)
                author.following = true
            }
            this.followingDisabled = false
        },
        async onFavorite (article) {
            this.favoriteDisabled = true
            if (article.favorited) {
                // 取消点赞
                await deleteFavorite(article.slug)
                article.favorited = false
                article.favoritesCount -= 1
            } else {
                // 添加点赞
                await addFavorite(article.slug)
                article.favorited = true
                article.favoritesCount += 1
            }
            this.favoriteDisabled = false
        },
        async deleteArticle () {
            this.isDeleting = true
            await deleteArticle(this.article.slug)
            this.isDeleting = false
            this.$router.push({
                name: 'home'
            })
        }
    },
}
</script>

<style>

</style>