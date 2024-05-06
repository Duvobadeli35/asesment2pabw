<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "asesment2pabw");

// Periksa koneksi
if (mysqli_connect_errno()) {
    echo "Koneksi database gagal: " . mysqli_connect_error();
    exit();
}

// Query untuk mengambil data buku dari tabel
$query = "SELECT * FROM books";
$result = mysqli_query($koneksi, $query);

// Buat array untuk menyimpan data buku
$books = array();

// Ambil data buku dan tambahkan ke dalam array
while ($row = mysqli_fetch_assoc($result)) {
    $books[] = $row;
}

// Konversi array ke format JSON
echo json_encode($books);

// Tutup koneksi
mysqli_close($koneksi);
?>
