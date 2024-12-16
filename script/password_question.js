const question_1 = document.getElementById("question_1");
const check_1 = document.getElementById("check_1");
const question_2 = document.getElementById("question_2");
const check_2 = document.getElementById("check_2");
const question_3 = document.getElementById("question_3");
const check_3 = document.getElementById("check_3");


check_1.addEventListener("click", () => {
    if (question_1.value == 2001) {
        alert("Siz kiritgan javob to'g'ri va bu javobingizni 'Yil' uchun kiritansigz bo'ladi")
        question_1.disabled = true;
    } else {
        alert("Xato javob kiritidingiz yana bir bor urinib ko'ring")
    }
})
check_2.addEventListener("click", () => {
    if (question_2.value == 9) {
        alert("Siz kiritgan javob to'g'ri va bu javobingizni 'oy' uchun kiritansigz bo'ladi")
        question_2.disabled = true;
    } else {
        alert("Xato javob kiritidingiz yana bir bor urinib ko'ring")
    }
})
check_3.addEventListener("click", () => {
    if (question_3.value == 11) {
        alert("Siz kiritgan javob to'g'ri va bu javobingizni 'kun' uchun kiritansigz bo'ladi")
        question_3.disabled = true;
    } else {
        alert("Xato javob kiritidingiz yana bir bor urinib ko'ring")
    }
})