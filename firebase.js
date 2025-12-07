// ===== Configuración Firebase =====
const firebaseConfig = {
  apiKey: "TU_NUEVO_API_KEY", // Reemplaza con tu nueva apiKey
  authDomain: "esp32-a9f92.firebaseapp.com",
  databaseURL: "https://esp32-a9f92-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "esp32-a9f92",
  storageBucket: "esp32-a9f92.appspot.com",
  messagingSenderId: "917386871044",
  appId: "1:917386871044:web:aaafa3f886da30287d5051"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ===== Función para actualizar datos en tiempo real =====
db.ref("sensores").on("value", snapshot => {
  const data = snapshot.val();
  if (!data) return;

  const temp = parseFloat(data.temp);
  const tds  = parseInt(data.tds);
  const ph   = parseFloat(data.ph);
  const ec   = parseInt(data.ec);

  document.getElementById("temp").textContent = temp.toFixed(1);
  document.getElementById("temp").className = (temp >= 20 && temp <= 26) ? "normal" : "alert";

  document.getElementById("tds").textContent = tds;
  document.getElementById("tds").className = (tds >= 400 && tds <= 800) ? "normal" : "alert";

  document.getElementById("ph").textContent = ph.toFixed(2);
  document.getElementById("ph").className = (ph >= 5.5 && ph <= 6.5) ? "normal" : "alert";

  document.getElementById("ec").textContent = ec;
  document.getElementById("ec").className = (ec >= 800 && ec <= 1500) ? "normal" : "alert";
});
