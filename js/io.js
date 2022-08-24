const threshold = [];
for (let i = 0; i <= 1; i = i + 0.01) {
  threshold.push(i);
}

function cb(entries) {
  console.log(entries[1].intersectionRatio);
  if (entries[1].intersectionRatio > 0) {
    console.log(entries[1].target.style.opacity);
    entries[1].target.style.opacity = String(1 - entries[1].intersectionRatio);
  }
}


const options = {
  threshold,
};

const io = new IntersectionObserver(cb, options);

// 주시 대상 선언, 주시 시작
const page = document.querySelectorAll('.page');
page.forEach((el) => {
  io.observe(el);
});
