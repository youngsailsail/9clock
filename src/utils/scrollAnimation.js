let isRun = false;
const speed = 2;
const scrollAnimation = (currentY, targetY, isClick = true) => {
  if (isRun && isClick) return;
  isRun = true;
  // 计算需要移动的距离
  const needScrollTop = targetY - currentY;
  let newCurrentY = currentY;
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / speed);
    newCurrentY += dist;
    window.scrollTo(0, currentY);
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > speed || needScrollTop < -speed) {
      scrollAnimation(newCurrentY, targetY, false);
    } else {
      window.scrollTo(0, targetY);
      isRun = false;
    }
  }, 1);
};

export default scrollAnimation;
