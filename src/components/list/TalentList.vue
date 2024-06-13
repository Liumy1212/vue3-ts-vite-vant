<script setup lang="ts">
import { useRouter } from "vue-router";
const props = defineProps({
  talentList: {
    type: Array,
    default: () => [],
  },
});
const router = useRouter();
const gotoDetail = (id) => {
  router.push("/talent/details/" + id);
};
const arrayList = (str) => {
  if (str) {
    return str.split(",");
  } else {
    return [];
  }
};
</script>
<template>
  <div
    class="talent-item"
    v-for="(item, index) in talentList"
    :key="index"
    @click="gotoDetail(item.resume_id || item.id)"
  >
    <div class="talent-item-top">
      <div class="talent-item-pic">
        <img src="src\assets\img\icon\用户.svg"/>
      </div>
      <div class="talent-item-cont">
        <h3>
          {{ item.user_name }}
          <span
            v-for="(child, index) in arrayList(item.service_mode)"
            :key="index"
            >{{ child }}</span
          >
        </h3>
        <div class="talent-item-tag">
          <span class="position-name">{{ item.position_name }}</span>
          <span class="work-year">{{ item.work_year }}</span>
          <span class="highest-education">{{ item.highest_education }}</span>
          <span class="age">{{ item.age }}</span>
        </div>
        <dl>
          <dt v-for="(child, index) in arrayList(item.skill_ids)" :key="index">
            {{ child }}
          </dt>
        </dl>
      </div>
    </div>
    <div class="talent-item-bottom">
      <label>已做{{ item.project_count }}个项目</label>
      <!-- <span><van-icon name="location-o" />{{ item.city }}</span> -->
    </div>
  </div>
</template>

<style scoped>
.talent-item {
  margin: 0 0 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.talent-item:hover {
  transform: translateY(-5px);
}
.talent-item-top {
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
}
.talent-item-pic {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
}
.talent-item-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.talent-item-cont {
  flex: 1;
}
.talent-item-cont h3 {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.talent-item-cont h3 span {
  margin-left: 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 0.7rem;
  font-weight: 400;
  color: #fff;
  background: #007bff;
}
.talent-item-cont p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}
dl {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
}
dl dt {
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  color: #666;
  background: #f0f0f0;
  border-radius: 0.2rem;
  margin-top: 0.7rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.talent-item-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
}
.talent-item-bottom label {
  font-size: 0.8rem;
  color: #666;
}
.talent-item-bottom span {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #007bff;
}
.talent-item-bottom span van-icon {
  margin-right: 0.3rem;
}

.talent-item-cont div {
  height: 1rem;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap */
  font-size: 1rem;
  line-height: 1rem;
  border-radius: 10px;
  color: white;
}

.talent-item-cont div span {
  height: 1rem;
  margin: 0.2rem 0.3rem 0 0;
  padding: 0.2rem;
  display: inline-flex; /* Corrected from flex to inline-flex */
  align-items: center; /* Center the text vertically */
  font-size: 1rem;
  line-height: 1rem;
  border-radius: 10px;
  color: white;
}
.talent-item-cont .position-name {
  background-color: #ff9999;
}
.talent-item-cont .work-year {
  background-color: #99ccff;
}
.talent-item-cont .highest-education {
  background-color: #99ff99;
}
.talent-item-cont .age {
  background-color: #ffcc99;
}
</style>
