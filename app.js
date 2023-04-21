var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      hourDegrees: 0,
      minuteDegrees: 0,
      secondDegrees: 0
    },
    mounted() {
      setInterval(this.updateTime, 1000);
      this.updateTime();
    },
    methods: {
      updateTime() {
        var now = new Date();
        this.hourDegrees = (now.getHours() % 12) / 12 * 360 + (now.getMinutes() / 60) * 30;
        this.minuteDegrees = now.getMinutes() / 60 * 360;
        this.secondDegrees = now.getSeconds() / 60 * 360;
      }
    }
  })