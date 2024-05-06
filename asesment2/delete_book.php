<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "asesment2pabw");

// Periksa koneksi
if (mysqli_connect_errno()) {
    echo "Koneksi database gagal: " . mysqli_connect_error();
    exit();
}

// Periksa jika parameter ID telah diterima
if (isset($_GET['id'])) {
    // Escape karakter khusus pada ID
    $id = mysqli_real_escape_string($koneksi, $_GET['id']);

    // Query untuk menghapus buku berdasarkan ID
    $query = "DELETE FROM books WHERE id = '$id'";
    if (mysqli_query($koneksi, $query)) {
        echo "Buku berhasil dihapus";
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($koneksi);
    }
} else {
    echo "ID tidak diterima";
}

// Tutup koneksi
mysqli_close($koneksi);
?>
