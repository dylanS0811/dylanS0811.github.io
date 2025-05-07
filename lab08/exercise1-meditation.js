class Meditation {
  constructor(seconds) {
    this.seconds = seconds;
    this.timerId = null;
  }

  start(onComplete) {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }

    log('Start meditation');
    let count = this.seconds;

    if (count <= 0) {
      log('Jay Guru Dev');
      if (onComplete) onComplete(); // 如果秒数非法，也保证回调
      return;
    }

    this.timerId = setInterval(() => {
      log(count--);

      if (count === 0) {
        clearInterval(this.timerId);
        this.timerId = null;
        log('Jay Guru Dev');
        if (onComplete) onComplete(); // 正常完成时执行
      }
    }, 1000);
  }
}
