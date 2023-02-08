const items = ['คอหมูทอดน้ำปลา', 'ไส้อั่ว', 'ขนมจีนน้ำเงี้ยว', 'แหนมหมกไข่', 'อ่องปู', 'แกงฮังเล','ไข่ป่าม','น้ำพริกปู','น้ำพริกหนุ่ม','ข้าวซอยไก่'];

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
