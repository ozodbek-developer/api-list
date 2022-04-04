$(() => {
    $.ajax({
        type: "GET",
        url: "https://api.publicapis.org/entries",
        success: data => {
            for (api of data.entries) {
                document.write(`<p><b>API NOMI</b>: ${api.API}</p>`);
                document.write(`<p><b>API MANZILI: <a href="${api.Link}">${api.Link}</a></b></p><hr>`);
            }            
        }
        
    });
})
    

// $.get("https://www.w3schools.com", data => {
//     $("body").html(data)
// })