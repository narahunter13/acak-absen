const KELAS_1KS3 = 1;
const KELAS_1KS4 = 2;
const JUMLAH_MAHASISWA = 38;

const TAMPIL_ABSEN = document.getElementById('no-absen');
const TAMPIL_NAMA = document.getElementById('nama-lengkap');

var sudahDipilih = [];
var indexTerpilih;
var namaMahasiswa = "";
var noAbsen = 0;

function acakAbsen() {
    var kelas = document.getElementById('kelas').value;
    var kelasTerpilih = kelas == 1 ? mahasiswa1KS3 : mahasiswa1KS4;

    // Get Random Index
    indexTerpilih = Math.floor(Math.random() * JUMLAH_MAHASISWA);

    // Loop if index was selected
    while (sudahDipilih.includes(indexTerpilih)) {
        indexTerpilih = Math.floor(Math.random() * JUMLAH_MAHASISWA);
    }

    // Display the name
    noAbsen = indexTerpilih + 1;
    namaMahasiswa = kelasTerpilih[indexTerpilih].nama;
    TAMPIL_ABSEN.textContent = noAbsen;
    TAMPIL_NAMA.textContent = namaMahasiswa;
}

function sudahMenjawab() {
    sudahDipilih.push(indexTerpilih);
}

function resetAbsen() {
    sudahDipilih = [];
}