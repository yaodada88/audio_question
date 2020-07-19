<template>
  <div class="home">
    <div  class="questuion">
      <p  @click="handleSpeak('1、世界上第一高峰是什么？')">1、世界上第一高峰是什么？</p>
    </div>
    <div class="circleBox">
      <van-circle
        v-model="currentRate"
        :speed="100"
        :rate="rate"
        :stroke-width="60"
        :color="gradientColor"
        :text="text"
      />
    </div>
    <div class="startBtn" @click="handleClick">开始挑战</div>
    <div class="none">
      <audio
        controls="controls"
        preload="auto"
        ref="myradio"
        src="../assets/mp3/yinxiao1431.mp3"
      ></audio>
      <audio
        controls="controls"
        preload="auto"
        ref="radioend"
        src="../assets/mp3/闹钟音效 01_爱给网_aigei_com.mp3"
      ></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      currentRate: 1,
      rate: 0,
      text: "5",
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6"
      },
      time: 5
    };
  },
  methods: {
    handleClick() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.play();
        this.time--;
        this.rate += 20;
        this.text = this.time + "";
        if (this.time == 0) {
          clearInterval(this.timer);
          this.pause();
          let ends = 0;
          this.endpaly();
          this.endtime = setInterval(() => {
            ends++;
            if (ends == 1) {
              this.endpause();
              clearInterval(this.endtime);
            }
          }, 1000);
        }
      }, 1000);
    },
    //播放音频
    play() {
      let audio = this.$refs.myradio;
      audio.play(); // 播放
    },
    pause() {
      let audio = this.$refs.myradio;
      audio.pause(); // 暂停
    },
    //重播
    repeat() {
      let audio = this.$refs.myradio;
      audio.currentTime = 0; //重新播放
    },
    endpaly() {
      let video = this.$refs.radioend;
      video.play();
    },
    endpause() {
      let audio = this.$refs.radioend;
      audio.pause(); // 暂停
    },
    handleSpeak(str){
      let url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=7&text="+encodeURI(str);
      let n = new Audio(url);
      n.src=url;
      if(str){
        n.play();
      }else {
        n.pause();
      }
    }
  //   read(word) {
  //     const synth = window.speechSynthesis;
  //     const msg = new SpeechSynthesisUtterance();
  //     msg.text = word;
  //     msg.lang = "zh-CN";
  //     function handleSpeak(e) {
  //       synth.speak(msg);
  //     }
  //     function throttle(fn, delay) {
  //       let last = 0;
  //       return function() {
  //         const now = new Date();
  //         if (now - last > delay) {
  //           fn.apply(this, arguments);
  //           last = now;
  //         }
  //       };
  //     }
  //     console.log(msg);

  //     throttle(handleSpeak(), 1000);
  //   }
  // }
  }
};
</script>
<style lang="less">
body {
  background: #999;
}
.circleBox {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 150px;
}
.startBtn {
  width: 100px;
  height: 30px;
  background: skyblue;
  border-radius: 6px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 0 auto;
  margin-top: 30px;
}
.none {
  display: none !important ;
}
.questuion{
  margin-top: 20px;
  p{
    text-align: center;
    color: #fff;
    font-weight: bold;
    margin-top: 50px;
  }
}
</style>
<style >
.van-circle__text {
  font-size: 30px !important;
  color: #fff !important;
  font-weight: bold !important;
}
</style>