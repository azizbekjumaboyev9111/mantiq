const month = document.getElementById("month");
const day = document.getElementById("day");
const year = document.getElementById("year");
const check = document.getElementById("check");


check.addEventListener("click", () => {
    if (month.value == 9 && day.value == 11 && year.value == 2001) {
        alert("Siz bu kalit so'zlarni eslab qoling bu sizga foyda beradi!")
        window.open("./pages/question.html", "_self");
    } else if (month.value === "" || day.value === "" || year.value === ""){
        alert("Siz malumotlarni bo'sh qoldira olmaysiz ❌")
    } else {
        alert("Xato malumot kirtdingiz ⚠️");
        location.reload();
    }
});
