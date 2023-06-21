const progressBar = document.getElementById('progress');

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            alert('Файл успешно загружен');
        }
    })

    xhr.upload.onprogress = function(event) {
        const value = event.loaded / event.total;
        const progress = new Intl.NumberFormat("en", {minimumFractionDigits: 2}).format(value);
        progressBar.value = progress;
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(document.getElementById('form'));

    xhr.send(formData);

})




