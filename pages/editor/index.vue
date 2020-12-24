<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }} {{ message }}
              </li>
            </template>
          </ul>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model.trim="title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model.trim="description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model.trim="body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model.trim="tag"
                  @keyup.enter="addTag"
                />
                <div class="tag-list">
                  <span class="tag-default tag-pill"
                    v-for="(item, index) in tagList"
                    :key="index"
                  >
                    <i class="ion-close-round" @click="deleteTag(index)"></i>
                    {{ item }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="onPublishArticle"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, addArticle, updateArticle } from '@/api/article'

export default {
    // 在路由匹配组件渲染之前会先执行中间件处理
    middleware: 'authenticated',
    name: 'EditorIndex',
    data () {
      return {
        title: '',
        description: '',
        body: '',
        tag: '',
        tagList: [],
        errors: []
      }
    },
    computed: {
      isEditor () {
        return this.$route.name === 'editor'
      }
    },
    mounted () {
      this.isEditor && this.getArticleDetail()
    },
    methods: {
      async getArticleDetail () {
        const { data } = await getArticle(this.$route.params.slug)
        const article = data.article
        this.title = article.title
        this.description = article.description
        this.body = article.body
        this.tagList = article.tagList
      },
      addTag () {
        if (!this.tag) return false
        this.tagList.push(this.tag)
        this.tag = ''
      },
      deleteTag (index) {
        this.tagList.splice(index, 1)
      },
      async onPublishArticle () {
        console.log('==='+this.isEditor)
        try {
          let params = {
            article: {
              title: this.title,
              description: this.description,
              body: this.body,
              tagList: this.tagList
            }
          }
          const { data } = this.isEditor
            ? await addArticle(params)
            : await updateArticle(this.$route.params.slug, params)
          
          this.$router.push({
            name: 'article',
            params: {
              slug: data.article.slug
            }
          })
        } catch (error) {
          this.errors = error.response.data.errors
        }
      }
    }
}
</script>

<style lang="stylus">

</style>