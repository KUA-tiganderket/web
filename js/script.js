$(document).ready(function() {
    // Fungsi untuk memuat konten sesuai dengan tautan yang diklik
    $(".link").click(function(e) {
        e.preventDefault(); // Menghentikan perilaku default dari tautan
        
        var target = $(this).data('target'); // Mengambil data-target dari tautan yang diklik
        var url = ''; // Tentukan URL untuk masing-masing konten berdasarkan target
        
        // Tentukan URL berdasarkan target
        if (target === 'beranda') {
            url = 'konten/beranda.html';
        } else if (target === 'profile') {
            url = 'konten/profile.html';
        } else if (target === 'visi-misi') {
            url = 'konten/visi-misi.html';
        } else if (target === 'informasi') {
            url = 'konten/informasi.html';
        }
        
        // Memuat konten menggunakan AJAX
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html',
            success: function(response) {
                $('#konten-dinamis').html(response); // Mengganti konten dengan respons dari AJAX
            },
            error: function(xhr, status, error) {
                console.error(error); // Tampilkan pesan kesalahan jika terjadi error
            }
        });
    });
});