<template>
  <div>
    <h3>快要被开除的学生（单个学期内未满足教学计划）</h3>
    <a-table :columns="columns" :data-source="firing" bordered :loading="loading">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" />学生姓名</span>
    </a-table>
    <h3>已经被开除的学生（单个学期内挂科学分过多）</h3>
    <a-table :columns="columns" :data-source="fired" bordered :loading="loading">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" />学生姓名</span>
    </a-table>
  </div>
</template>
<script>
import { getFiring, getFired } from "../api/index";

const columns = [
  {
    align: "center",
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    align: "center",
    title: "出生日期",
    dataIndex: "birthDate",
    key: "birthDate",
  },
  {
    align: "center",
    title: "学号",
    dataIndex: "studentNum",
    key: "studentNum",
  },
  {
    align: "center",
    title: "学院",
    dataIndex: "collegeName",
    key: "collegeName",
  },
  {
    align: "center",
    title: "专业",
    dataIndex: "subjectName",
    key: "subjectName",
  },
  {
    align: "center",
    title: "班级",
    dataIndex: "className",
    key: "className",
  },
  {
    align: "center",
    title: "性别",
    key: "male",
    dataIndex: "male",
  }
];

export default {
  async mounted() {
    var content;
    content = await getFiring();
    content.forEach((element) => {
      element.birthDate = new Date(element.birthDate * 1000).toLocaleString().slice(0,-10)
      element.male = element.male ? "男" : "女";
    });
    this.firing = content;
    
    content = await getFired();
    content.forEach((element) => {
      element.birthDate = new Date(element.birthDate * 1000).toLocaleString().slice(0,-10)
      element.male = element.male ? "男" : "女";
    });
    this.fired = content;
    this.loading = false
  },
  data() {
    return {
      firing: [],
      fired: [],
      columns,
      name: "",
      id: 0,
      loading: true
    };
  },
  methods: {
    handleOk_1(e) {
      console.log(e);
      this.visible_1 = false;
    },
    handleOk_2(e) {
      console.log(e);
      this.visible_2 = false;
    },
  },
};
</script>
