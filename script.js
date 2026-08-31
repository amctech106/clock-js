function clock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let day = now.getDay();
  let period = "AM";

  // --- ہجری تاریخ کے لیے Intl API کا استعمال ---
  // آپ لوکیل کو 'en-u-ca-islamic-umalqura' (انگریزی اعداد/نام) یا 'ur-u-ca-islamic-umalqura' (اردو) رکھ سکتے ہیں
  let hijriFormatter = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {
    day: "numeric",
    month: "long", // مہینے کا نام حاصل کرنے کے لیے (جیسے Ramadan، Shawwal)
    year: "numeric"
  });

  // ہجری حصوں کو الگ الگ حاصل کرنا
  let parts = hijriFormatter.formatToParts(now);
  let hDay = parts.find(p => p.type === "day")?.value || "";
  let hMonth = parts.find(p => p.type === "month")?.value || "";
  hMonth = hMonth.replace(/ʻ/g, "'");
  let hYear = parts.find(p => p.type === "year")?.value || "";

  // دنوں کے نام
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let shortDay = days[day].slice(0, 3);

  // 12 گھنٹے کا فارمیٹ
  if (hours >= 12) {
    period = "PM";
  }

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  // دو ہندسوں کا پیڈنگ (Zero padding)
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  hDay = String(hDay).padStart(2, "0");

  let time = `${hours}:${minutes}:${seconds} ${period}`;
  // ہجری تاریخ کا فارمیٹ: مثلاً Thu, 15 Ramadan 1448 AH
  let hijriDateStr = `${shortDay}/ ${hDay} /${hMonth} /${hYear} AH`;
  let dev = "Developed by AMC Tech";

  // HTML میں رینڈر کرنا
  document.querySelector("h3").innerHTML = time;
  document.querySelector("#para1").innerHTML = hijriDateStr;
  document.querySelector("#para2").innerHTML = dev;
}

clock();
setInterval(clock, 1000);