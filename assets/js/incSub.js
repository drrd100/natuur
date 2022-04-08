
fetch("../inc/sub_header.html")
        .then(response => {
        return response.text()
        })
        .then(data => {
        document.querySelector("#header").innerHTML = data;
});

fetch("../inc/aside.html")
        .then(response => {
        return response.text()
        })
        .then(data => {
        document.querySelector("#aside").innerHTML = data;
});

fetch("../inc/sub_footer.html")
        .then(response => {
        return response.text()
        })
        .then(data => {
        document.querySelector("#footer").innerHTML = data;
});