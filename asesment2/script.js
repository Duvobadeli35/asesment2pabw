// Fungsi untuk melakukan AJAX request
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Proses data JSON yang diterima
            var data = JSON.parse(this.responseText);
            displayData(data);
        }
    };
    xhttp.open("GET", "display_books.php", true);
    xhttp.send();
}

// Panggil fungsi untuk mengambil data saat halaman dimuat
window.onload = function() {
    loadData();
};

// Fungsi untuk menampilkan data dalam bentuk tabel
function displayData(data) {
    var table = "<table border='1'>";
    table += "<tr><th>Judul</th><th>Pengarang</th><th>Tahun Terbit</th><th>Aksi</th></tr>";
    for (var i = 0; i < data.length; i++) {
        table += "<tr>";
        table += "<td>" + data[i].judul + "</td>";
        table += "<td>" + data[i].pengarang + "</td>";
        table += "<td>" + data[i].tahun_terbit + "</td>";
        table += "<td><button onclick='deleteBook(" + data[i].id + ")'>Hapus</button></td>";
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("bookTable").innerHTML = table;
}

// Fungsi untuk menghapus buku menggunakan AJAX
function deleteBook(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Refresh data setelah penghapusan
            loadData();
        }
    };
    xhttp.open("GET", "delete_book.php?id=" + id, true);
    xhttp.send();
}
