<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description }}/{{seller.deliveryTime}}分钟送达
        </div>
        <!--由于seller是异步请求，如果还没有请求的时候使用，seller.supports[0]等于undifined[0]报错，所以要判定是否已经有这个数据-->
        <div class="support" v-if="seller.supports">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .header
    background #000
    color #fff
    .content-wrapper
      font-size 0
      padding 24px 12px 18px 24px
      .avatar
        display inline-block
      .content
        display inline-block
        font-size 14px
        margin-left 16px
        .title
          margin 2px 0px 8px 0px
          .brand
            display inline-block
            vertical-align top
            width 30px
            height 18px
            bg-img('brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 6px
            font-size 16px
            font-weight bold
            line-height 18px
</style>
