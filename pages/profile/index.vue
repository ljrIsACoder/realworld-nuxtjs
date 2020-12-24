<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            
            <nuxt-link class="btn btn-sm btn-outline-secondary action-btn"
              v-if="username === user.username"
              to="/settings"
            >
              <i class="ion-gear-a"></i> Edit Profile Settings
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link class="nav-link active"
                  :class="{
                    active: tab === 'my_articles'
                  }"
                  :to="{
                    name: 'profile'
                  }"
                  exact
                >My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link"
                  :class="{
                    active: tab === 'favorited_articles'
                  }"
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'favorited_articles'
                    }
                  }"
                  exact
                >Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: { username: article.author.username }
              }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link :to="{
                  name: 'profile',
                  params: { username: article.author.username }
                }">
                  {{ article.author.username }}
                </nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM, DD YYYY') }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
                @click="onFavorite(article)"
                :disabled="article.articleDisabled"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link class="preview-link" :to="{
              name: 'article',
              params: { slug: article.slug }
            }">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li class="tag-default tag-pill tag-outline"
                  v-for="(item, index) in article.tagList"
                  :key="index"
                >{{ item }}</li>
              </ul>
            </nuxt-link>
          </div>

          <div class="empty-data" v-if="articles.length === 0">暂无数据</div>

          <nav>
            <ul class="pagination">
              <li class="page-item" v-for="item in totalPage" :key="item"
                :class="{ active: item === page }">
                <nuxt-link class="page-link"
                  :to="{
                    name: 'profile',
                    query: {
                      page: item,
                      tab: tab
                    }
                  }"
                >{{ item }}</nuxt-link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfile } from '@/api/profile'
import { getArticles, addFavorite, deleteFavorite } from '@/api/article'
import { mapState } from 'vuex'
export default {
  middleware: 'authenticated',
  name: 'UserProfile',
  data () {
    return {
      profiles: {}
    }
  },
  async asyncData ({ query, params }) {
    const page = Number.parseInt(query.page || 1)
    const limit = 5
    const tab = query.tab || 'my_articles'

    const [ profileRes, articlesRes ] = await Promise.all([
      getProfile(params.username),
      getArticles({
        limit,
        offset: (page - 1) * limit,
        [tab === 'my_articles' ? 'author' : 'favorited']: params.username
      })
    ])

    const { data } = await getArticles({
      limit,
      offset: (page - 1) * limit,
      [tab === 'my_articles' ? 'author' : 'favorited']: params.username
    })

    const { profile } = profileRes.data
    const { articles, articlesCount } = articlesRes.data

    articles.forEach(article => article.articleDisabled = false)

    const result = {
      profile,
      articles,
      articlesCount,
      limit,
      page,
      tab
    }
    return result
  },
  watchQuery: ['page', 'tab'],
  computed: {
    ...mapState(['user']),
    username () {
      return this.$route.params.username
    },
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  methods: {
    async onFavorite (article) {
      article.articleDisabled = true
      if (article.favorited) {
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount -= 1
      } else {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.articleDisabled = false
    }
  }

};
</script>

<style scoped>
  .empty-data {
      margin-top: 50px;
      text-align: center;
  }
</style>