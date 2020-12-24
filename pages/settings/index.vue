<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

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
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model.trim="userInfo.image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model.trim="userInfo.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model.trim="userInfo.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model.trim="userInfo.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model.trim="userInfo.password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right"
                @click.prevent="onUpdateSettings"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr>
          <button class="btn btn-outline-danger" @click="logout">
            Or click here to logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { updateUser } from '@/api/user'

// 仅在客户端加载js-cookie包
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'authenticated',
  name: 'SettingsIndex',
  data () {
    return {
      userInfo: {},
      errors: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted () {
    this.userInfo = JSON.parse(JSON.stringify(this.user))
  },
  methods: {
    async onUpdateSettings () {
      try {
        const { data } = await updateUser({
          user: this.userInfo
        })

        // 保存登录状态
        this.$store.commit('setUser', data.user)

        // 防止页面刷新数据丢失，将数据存进cookie
        Cookie.set('user', data.user)

        // 跳转到个人信息页
        this.$router.push({
          name: 'profile',
          params: {
            username: data.user.username
          }
        })
      } catch (error) {
        this.errors = error.response.data.errors
      }
    },
    logout () {
      this.$store.commit('setUser', '')

      Cookie.set('user', '')
      this.$router.push({
          name: 'home'
      })
    }
  }
};
</script>

<style lang="stylus"></style>