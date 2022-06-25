$(".button-one ").click(function() {
    let message = $(".review").val();
    console.log(message);
    alert("Try Again");
    $(".review").text(message);
});