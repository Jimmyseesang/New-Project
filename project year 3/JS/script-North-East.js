const items = ['ก้อยเนื้อ', 'ตำเส้นแก้ว', 'ส้มตำทอด', 'เสือร้องไห้', 'ลาบเป็ด', 'ยำขนมจีน','ผัดหมี่โคราช','คอหมูย่าง','ซุปหน่อไม้','หมูย่าง น้ำจิ้มแจ่ว'];

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
