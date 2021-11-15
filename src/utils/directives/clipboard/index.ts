const clipboard = {
  bind(el: any, { value }: any) {
    el.$value = value;
    el.handler = () => {
      if (!el.$value) {
        // 值为空时
        return;
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement("textarea");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      textarea.value = el.$value;
      document.body.appendChild(textarea);
      // 选中值并复制
      textarea.select();
      const result = document.execCommand("Copy");
      if (result) {
        // 可根据项目UI仔细设计
        console.log("复制成功");
      }
      document.body.removeChild(textarea);
    };
    // 绑定点击事件，就是所谓的一键 copy
    el.addEventListener("click", el.handler);
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el: any, { value }: any) {
    el.$value = value;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el: any) {
    el.removeEventListener("click", el.handler);
  },
};

export default clipboard;
