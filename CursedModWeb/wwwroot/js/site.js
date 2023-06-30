let plugins = [];

$(document).ready(function () {
    $.get('/plugins/list', function (data) {
        $("#market").empty();
        plugins = JSON.parse(data);
        plugins.forEach(function (plugin) {
            addPlugin(plugin['Title'], plugin['Author'], plugin['Description'], plugin['Url'], 0, 0);
        });
    });
});

$("#search").on('change', function () {
    let p = [];
    
    plugins.forEach(function (plugin) {
        let searchVal = $("#search").val().toLowerCase();
        if(plugin['Title'].toLowerCase().includes(searchVal) || plugin['Author'].toLowerCase().includes(searchVal) || plugin['Description'].toLowerCase().includes(searchVal) || plugin['Url'].toLowerCase().includes(searchVal))
            p.push(getPlugin(plugin['Title'], plugin['Author'], plugin['Description'], plugin['Url'], 0, 0));
    });

    $("#market").empty();

    p.forEach(function (plugin) {
        $("#market").append(plugin);
    });
});


function addPlugin(title, author, description, url, downloads, likes) {
    $("#market").append(getPlugin(title, author, description, url, downloads, likes));
}

function getPlugin(title, author, description, url, downloads, likes) {
    return '<div class="plugin"><div class="plugin-body"><h3 class="card-title">' + title + '</h3><p class="card-subtext">by <object><a class="anchor" href="https://github.com/' + author + '">' + author + '</a></object></p><p class="card-description">' + description + '</p><div class="card-footer"><a href="https://github.com/' + author + '/' + url + '" class="btn2 btn-primary"><svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path></svg><span>Download</span></a><div class="card-stats"><div class="card-stat" id="addon-downloads"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path></svg><span>' + downloads + '</span></div><div class="card-stat" id="addon-likes"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg><span>' + likes + '</span></div></div></div></div>';
}