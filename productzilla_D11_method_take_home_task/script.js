 const nilaiKeaktifanMida = 85;
const nilaiUjianMida = 90;
const absensiMida = 95;

const hasil = cekKelulusan(nilaiKeaktifanMida, nilaiUjianMida, absensiMida);
console.log(hasil); 

function cekKelulusan(nilaiKeaktifanMida, nilaiUjianMida, absensiMida) {
    // apakah semua nilai adalah 100
    if (nilaiKeaktifanMida === 100 && nilaiUjianMida === 100 && absensiMida === 100) {
      return "Outstanding";
    }
  
    // Hitung rata-rata nilai
    const rataRata = (nilaiKeaktifanMida + nilaiUjianMida + absensiMida ) / 3;
  
    // rata-rata nilai berada di antara 90-100
    if (rataRata >= 90 && rataRata <= 100) {
      return "Excellent";
    }
  
    // rata-rata nilai berada di antara 80-90
    if (rataRata >= 80 && rataRata < 90) {
      return "Good";
    }
  
    // Jika tidak memenuhi kriteria di atas, kembalikan "Participant"
    return "Participant";
  }
