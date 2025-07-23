<template>
  <div class="slide">
    <div class="div">
      <header class="header">
        <div class="menu" @click="isSidebarOpen = true">
          <img class="icon-menu" alt="Icon menu" :src="iconMenu" />
          <div class="text-wrapper">Каталог</div>
        </div>
        <div :class="['sidebar', { open: isSidebarOpen }]">
            <ul>
            <li @click="goToPage('ai-tour')">Создать тур с помощью ИИ</li>
            <li @click="goToPage('hot')">Горящие предложения</li>
            <li @click="goToPage('favorites')">Избранные туры</li>
            <li @click="closeSidebar">Закрыть</li>
            </ul>
            </div>
        <img class="logotype" alt="Logotype" :src="logotype" @click="goToPage('')" />
        <div class="frame">
          <img class="img" alt="Search" :src="search24Px" />
          <img class="img" alt="User" :src="user24Px" />
          <img class="img" alt="Heart" :src="heart" @click="goToPage('favourite')"/>
        </div>
      </header>
      <div class="text-wrapper-2">СОЗДАЙТЕ СВОЙ ИНДИВИДУАЛЬНЫЙ ТУР</div>
      <footer class="footer">
        <div class="vector-wrapper">
          <img class="vector" alt="Vector" src="@/img/Logotype.png" />
        </div>
        <div class="view">
          <div class="text-wrapper-3">+7 700 757 5481</div>
          <div class="text-wrapper-4">круглосуточный телефон call-центра</div>
        </div>
        <div class="frame-2">
          <div class="text-wrapper-5">клиентам</div>
          <div class="flexcontainer">
            <p class="text">
              <span class="span">горящие туры<br /></span>
            </p>
            <p class="text">
              <span class="span">ии-автоматизация<br /></span>
            </p>
            <p class="text">
              <span class="span">возврат тура<br /></span>
            </p>
            <p class="text">
              <span class="span">бонусная программа и акции<br /></span>
            </p>
            <p class="text">
              <span class="span">подарите тур близким</span>
            </p>
          </div>
        </div>
        <div class="frame-3">
          <div class="text-wrapper-5">о нас</div>
          <div class="flexcontainer-2">
            <p class="text">
              <span class="span">политика конфиденциальности и обработки персональных данных<br /></span>
            </p>
            <p class="text">
              <span class="span">юридическая информация<br /></span>
            </p>
            <p class="text">
              <span class="span">вакансии и карьера в Trip AI<br /></span>
            </p>
            <p class="text">
              <span class="span">связаться с нами</span>
            </p>
          </div>
        </div>
      </footer>
      <TourGenerator />
    </div>
  </div>
</template>

<script>
import heart from "@/img/Heart.png";
import iconMenu from "@/img/icon menu.png";
import logotype from "@/img/Logotype.png";
import search24Px from "@/img/Search 24px.png";
import user24Px from "@/img/User 24px.png";
import TourGenerator from "@/components/TourGenerator.vue";

export default {
  name: "Slide",
  components: {
    TourGenerator 
  },
  data() {
    return {
      heart,
      iconMenu,
      logotype,
      search24Px,
      user24Px,
      isSidebarOpen: false,
    }
  },
  methods: {
      closeSidebar(){
    this.isSidebarOpen = false;
  },
  goToPage(page) {
      this.closeSidebar();
      this.$router.push(`/${page}`)
  }
    }
};
</script>

<style>
.slide {
  background-color: #375f57;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.slide .div {
  background-color: #375f57;
  height: 2892px;
  position: relative;
  width: 1920px;
}

.slide .header {
  background-color: transparent;
  height: 104px;
  left: 160px;
  position: absolute;
  top: 34px;
  width: 1600px;
}

.slide .menu {
  height: 22px;
  left: 0;
  position: absolute;
  top: 41px;
  width: 114px;
}

.slide .icon-menu {
  height: 21px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 35px;
}

.slide .text-wrapper {
  color: #ffffff;
  font-family: "Arial-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 55px;
  letter-spacing: 0;
  line-height: 22.4px;
  position: absolute;
  top: -1px;
  white-space: nowrap;
}

.slide .logotype {
  height: 104px;
  left: 748px;
  position: absolute;
  top: 0;
  width: 104px;
}

.slide .frame {
  align-items: center;
  display: inline-flex;
  gap: 40px;
  justify-content: center;
  left: 1424px;
  position: absolute;
  top: 36px;
}

.slide .img {
  height: 31.98px;
  position: relative;
  width: 31.98px;
}

.slide .text-wrapper-2 {
  color: #ffffff;
  font-family: "Arial-Bold", Helvetica;
  font-size: 48px;
  font-weight: 700;
  left: 448px;
  letter-spacing: 0;
  line-height: 67.2px;
  position: absolute;
  text-align: center;
  top: 272px;
  white-space: nowrap;
}

.slide .footer {
  background-color: #375f57;
  border-bottom-style: none;
  border-color: #ffffff;
  border-left-style: none;
  border-right-style: none;
  border-top-style: solid;
  border-top-width: 1px;
  height: 508px;
  left: 0;
  position: absolute;
  top: 2384px;
  width: 1920px;
}

.slide .vector-wrapper {
  background-color: #375f57;
  height: 104px;
  left: 159px;
  position: absolute;
  top: 79px;
  width: 104px;
}

.slide .vector {
  height: 54px;
  left: 21px;
  position: absolute;
  top: 25px;
  width: 63px;
}

.slide .view {
  align-items: flex-start;
  background-color: #375f57;
  display: flex;
  flex-direction: column;
  gap: 6.67px;
  height: 84px;
  left: 431px;
  position: absolute;
  top: 79px;
  width: 299px;
}

.slide .text-wrapper-3 {
  color: var(--x-1);
  font-family: "Arial-Regular", Helvetica;
  font-size: 46.7px;
  font-weight: 400;
  letter-spacing: -2.80px;
  line-height: 56.0px;
  margin-right: -33.33px;
  margin-top: -1.33px;
  position: relative;
  width: 332px;
}

.slide .text-wrapper-4 {
  align-self: stretch;
  color: var(--x-4);
  font-family: "Arial-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20.8px;
  position: relative;
}

.slide .frame-2 {
  align-items: flex-start;
  background-color: #375f57;
  display: flex;
  flex-direction: column;
  gap: 26.67px;
  height: 295px;
  left: 1111px;
  position: absolute;
  top: 79px;
  width: 240px;
}

.slide .text-wrapper-5 {
  align-self: stretch;
  color: #69948c;
  font-family: "Arial-Regular", Helvetica;
  font-size: 33.3px;
  font-weight: 400;
  letter-spacing: -2.00px;
  line-height: 33.3px;
  margin-top: -1.33px;
  position: relative;
}

.slide .flexcontainer {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 26.67px;
  height: 233px;
}

.slide .text {
  align-self: stretch;
  color: var(--x-4);
  font-family: "Arial-Regular", Helvetica;
  font-size: 21.3px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 21.3px;
  position: relative;
}

.slide .span {
  color: #b9b9b9;
  font-family: "Arial-Regular", Helvetica;
  font-size: 21.3px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 21.3px;
}

.slide .frame-3 {
  align-items: flex-start;
  background-color: #375f57;
  display: flex;
  flex-direction: column;
  gap: 26.67px;
  height: 284px;
  left: 1519px;
  position: absolute;
  top: 79px;
  width: 298px;
}

.slide .flexcontainer-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 26.67px;
  height: 227px;
}

.slide .p {
  color: #636363;
  font-family: "Arial-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 104px;
  letter-spacing: 0;
  line-height: 28.0px;
  position: absolute;
  top: 57px;
  white-space: nowrap;
}

.slide .div-wrapper {
  display: inline-flex;
}

.slide .text-wrapper-6 {
  color: #ffffff;
  font-family: "Arial-Regular", Helvetica;
  font-size: 34.5px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 48.3px;
  margin-top: -1.72px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.slide .text-wrapper-7 {
  color: #ffffff;
  font-family: "Arial-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 528px;
  letter-spacing: 0;
  line-height: 28.0px;
  position: absolute;
  text-align: center;
  top: 357px;
  white-space: nowrap;
}

</style>