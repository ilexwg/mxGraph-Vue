<template>
  <div class="editor-wrapper">
    <div class="editor">
      <div class="editor-tool-bar">
        <el-button type="primary" size="small">导入</el-button>
        <el-button type="primary" size="small">导出</el-button>
        <el-button type="primary" size="small">输出XML</el-button>
        <el-button type="danger" icon="el-icon-delete" size="small"></el-button>
      </div>
      <div class="editor-container">
        <div class="editor-content"></div>
      </div>
    </div>
    <aside class="menu">

    </aside>
  </div>
</template>

<script>
export default {
  name: 'GraphEditor'
};
</script>

<style lang="less" scoped>
.editor-wrapper {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  .editor {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #f1f1f1;
    .editor-tool-bar {
      padding: 10px 20px;
      background-color: aliceblue;
    }
    .editor-container {
      flex: 1;
      width: 100%;
      padding: 10px;
      background-color: #fff;
      .editor-content {
        width: 100%;
        height: 100%;
        background-color: ghostwhite;
      }
    }
  }
  .menu {
    width: 260px;
    flex: 0 0 260px;
    order: -1;
    background-color: lavender;
  }
}
</style>
