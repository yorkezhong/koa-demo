<template>
  <div class="wrapper">
    <div class="title" v-html="title"></div>

    <quill-editor class="editor" v-model="messages" ref="myQuillEditor"></quill-editor>
    <button class="btn" @click="sumbit">提交文章</button>
    <button class="btn" @click="getinfo">获取文章</button>


				<div class="blog-content" v-html="content">
</div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      messages: "",
						title: "写文章",
						content:""
    };
  },

  methods: {
    sumbit() {
      this.$http
        .post("/writer",{text:this.messages})
        .then(res => {
								
										console.log(res)
        });
				},
				getinfo(){
 this.$http
        .post("/writer/find")
        .then(res => {
										this.content=res.data.list[4].text
										console.log(res)
        });
				}
		},
		mounted(){
			 this.$http
        .post("/writer/find")
        .then(res => {
										this.messages=res.data.list[4].text
										console.log(res)
        });
		}
};
</script>


<style>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.title {
  font-size: 15;
  color: red;
  padding-bottom: 20px;
  line-height: 150%;
}
.input-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px 0;
  box-sizing: border-box;
}

.editor {
    width: 1000px;
    height: 400px;
    margin: 0 auto;
}
.btn {
  outline: none;
  color: #fff;
  background: blue;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin: 150px 50px;
  cursor: pointer;
}
.ql-snow .ql-tooltip[data-mode=link]::before {
  content: "请输入链接地址:";
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: '保存';
    padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode=video]::before {
    content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: '14px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
  content: '10px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
  content: '18px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
  content: '32px';
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: '文本';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: '标题1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: '标题2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: '标题3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: '标题4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: '标题5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: '标题6';
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: '标准字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
  content: '衬线字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
  content: '等宽字体';
}
</style>
