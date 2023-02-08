const items = ['ผัดกระเพราหมู','ผัดเผ็ดไก่กรอบ', 'ผัดเผ็ดไข่ไก่อ่อน', 'หลนกุ้ง', 'ฉู่ฉี่กุ้งแม่น้ำ', 'ผัดเผ็ดปลาหมึก','พะแนงเนื้อ','แกงส้มกุ้งผักรวม','แกงเทโพ','ต้มข่าไก่'];

const btn = document.querySelector('.spinBtn');
const wheel = document.querySelector('.wheel');

btn.addEventListener('click', spin);

function spin() {
  const randomIndex = Math.floor(Math.random() * items.length);
  const result = items[randomIndex];
  wheel.style.transform = `rotate(${360 * 10 + (360 / items.length) * randomIndex}deg)`;

  setTimeout(() => {
    alert(`คุณได้ : ${result}`);
  }, 5000);
}
