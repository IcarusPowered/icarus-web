<template>
  <div class="interfaces">
    <div class="interfaces_search">
      <div class="interfaces_search_bar">
        <i class="el-icon-plus" @click="addProject(e)"></i>
        <el-input
          placeholder="搜索接口"
          prefix-icon="el-icon-search"
          v-model="searchInterfaces"
          >
        </el-input>
      </div>
      <div class="interfaces_search_file">
        <span v-if="isFile" class="interfaces_search_file_text">列表为空，创建一个
          <span class="interfaces_search_file_text_directory">目录</span>或者
          <span class="interfaces_search_file_text_interfaces">接口</span>吧。
        </span>
        <div class="interfaces_search_menutree">
          <el-tree
          :data="tree"
          :props="defaultProps"
          :highlight-current="true"
          node-key="id"
          @node-click="handleNodeClick"
          >
          <span slot-scope="{ node, data }" class="custom-tree-node">
            <span v-show="data.label" class="el-icon"><i class="el-icon-folder" v-if="!data.method"></i></span>
            <span
              class="method"
              :class="[
                {
                  'POST': data.method === 'POST',
                },
                {
                  'GET': data.method === 'GET',
                },
                {
                  'DELET': data.method === 'DELET',
                },
                {
                  'PUT': data.method === 'PUT',
                },
                {
                  'PATCH': data.method === 'PATCH',
                },
                {
                  'HEAD': data.method === 'HEAD',
                },
                {
                  'OPTION': data.method === 'OPTION',
                },]"
              >
              {{ data.method }}
            </span>
            <span class="name">{{ node.label }}</span>
          </span>
        </el-tree>
        </div>
      </div>
    </div>
    <div class="interfaces_content">
      <div class="interfaces_content_bar">
        <div
          class="interfaces_content_bar_method card"
          @click="handleSlect($event)"
          v-for="(item, index) in tabList" :key="item.id"
          >
          <div
            class="project_method"
            :class="[
              {
                'POST': item.method === 'POST',
              },
              {
                'GET': item.method === 'GET',
              },
              {
                'DELET': item.method === 'DELET',
              },
              {
                'PUT': item.method === 'PUT',
              },
              {
                'PATCH': item.method === 'PATCH',
              },
              {
                'HEAD': item.method === 'HEAD',
              },
              {
                'OPTION': item.method === 'OPTION',
              },
              {
                'CUSTOM': item.method === 'CUSTOM',
              },]"
            >{{ item.method }}
          </div>
          <div class="project_name">{{ item.projectName }}</div>
          <i class="el-icon-close" @click="deleteTab(index)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Interfaces',
  components: {},
  data () {
    return {
      searchInterfaces: '',
      isFile: false,
      defaultProps: {
        children: 'children',
        label: 'label',
        method: 'method',
        isLeaf: 'isLeaf'
      },
      tabList: [
        {
          projectName: 'PostProject',
          method: 'POST',
          id: '1'
        },
        {
          projectName: 'GetProject',
          method: 'GET',
          id: '2'
        },
        // {
        //   projectName: 'PatchProject',
        //   method: 'PATCH',
        //   id: '3'
        // }
      ]
    }
  },
  computed: {
    ...mapState('fileTree', ['tree']),
  },
  watch: {},
  methods: {
    addProject () {
      // 点击icon-plus新增一个空项目
    },
    handleSlect (e) { // 切换tab添加active样式
      const cards = document.getElementsByClassName('card')
      for (let i = 0; i < cards.length; i++) {
        cards[i].onclick = function () {
          for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('is_active')
          }
          e.target.classList.add('is_active')
        }
      }
    },
    handleNodeClick (data, node, self) { // 点击treeNode,获得其相关信息。
      // 1.判断是不是叶节点，是叶节点选中时，出现在tab，并渲染相关信息
      console.log(data)
      console.log(node)
      console.log(self)
    },
    deleteTab (index) { // 点击icon-close，关闭标签页
      console.log(index)
    }
  },
  created () {},
}
</script>
<style scoped lang='less'>
@import url('@/assets/style/method.less');
.interfaces {
  float: left;
  height: 100%;
  width: 100%;
  &_search {
    float: left;
    width: 340px;
    height: 100%;
    background: #F8F9FA;
    &_bar {
      float: left;
      width: 100%;
      height: 50px;
      ::v-deep .el-icon-plus {
        font-size: 18px;
        margin: 16px 38.5px;
        font-weight: 600;
        cursor: pointer;
      }
      .el-input {
        float: right;
        width: 210px;
        height: 36px;
        margin: 7px auto;
        margin-right: 34px;
      }
      ::v-deep .el-input__inner {
        height: 36px;
        border-radius: 5px;
        border: 1px solid #BFBFBF;
        padding-left: 40px;
        color: black;
        &::placeholder {
          text-align: center;
          color: #767676;
        }
      }
      ::v-deep .el-icon-search {
        font-size: 25.5px;
        height: 36px;
        line-height: 36px;
      }
    }
    &_file {
      height: 100%;
      width: 100%;
      &_text {
        float: left;
        text-align: center;
        margin-top: 225px;
        font-family: Source Han Sans CN;
        color: #3D3D3D;
        font-size: 16px;
        width: 100%;
        span {
          margin-left: -5px;
          text-align: center;
          color: #0052D9;
        }
      }
    }
    &_menutree {
      float: left;
      height: calc(100% - 50px);
      width: 94.1%;
      margin: 0 10px;
      .el-tree {
        background-color: #F8F9FA;
        span {
          font-family: Source Han Sans CN;
          font-size: 14px;
          color: #3D3D3D;
        }
        .el-icon {
          margin-right: 15px;
          float: left;
        }
        .method {
          margin-right: 15px;
        }
      }
      ::v-deep .el-tree-node__content {
        height: 30px;
      }
    }
  }
  &_content {
    margin-left: 340px;
    height: 50px;
    // background-color: yellow;
    &_bar {
      display: flex;
      width: 100%;
      cursor: pointer;
      box-sizing: border-box;
      &_method{
        display: grid;
        grid-template-areas: "method name icon"
        "underline underline underline";
        grid-template-columns: repeat(1fr, 2) max-content;
        gap: 10px;
        height: 50px;
        flex: 1;
        line-height: 50px;
        font-family: Source Han Sans CN;
        font-size: 16px;
        font-weight: bold;
        border: 2px solid #E7E7E7;
        .project_method {
          grid-area: method;
          text-align: right;
          pointer-events: none;
        }
        .project_name {
          text-align: left;
          grid-area: name;
          pointer-events: none;
        }
        .active_underline {
          grid-area: underline;
          position: relative;
          left: 278px;
          top: 45px;
          width: 18px;
          height: 3px;
          border-radius: 999px;
          opacity: 1;
          background: #0052D9;
        }
      }
    }
  }
}
.is_active {
  border: 1px solid #0052D9;
  color: #0052D9;
  // border-bottom: none;
}
.el-icon-close {
  grid-area: icon;
  float: right;
  font-size: 18px;
  margin: 14px 0;
  margin-right: 20px;
  pointer-events: none;
}
</style>
