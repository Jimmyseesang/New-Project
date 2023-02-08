const items = ['คั่วกลิ้งหมู', 'น้ำพริกกุ้งเสียบ', 'ขนมจีนน้ำยาปู', 'แกงไตปลา', 'แกงส้มหน่อไม้ดอง', 'ข้าวยำ','ผัดไทยไชยา','ผัดสะตอสามรส','ผัดสะตอกุ้งสด','หมูผัดกะปิ'];

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
