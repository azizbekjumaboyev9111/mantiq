const question_1 = document.getElementById("question_1");
const question_2 = document.getElementById("question_2");
const question_3 = document.getElementById("question_3");
const question_4 = document.getElementById("question_4");
const question_5 = document.getElementById("question_5");
const question_6 = document.getElementById("question_6");
const question_7 = document.getElementById("question_7");
const check_1 = document.getElementById("check_1");
const check_2 = document.getElementById("check_2");
const check_3 = document.getElementById("check_3");
const check_4 = document.getElementById("check_4");
const check_5 = document.getElementById("check_5");
const check_6 = document.getElementById("check_6");
const check_7 = document.getElementById("check_7");
const secret_word = document.getElementById("secret_word");
const check_secret_word = document.getElementById("check_secret_word");



check_1.addEventListener("click", () => {
    if (question_1.value == "terrorizm") {
        alert(`Sizning javobingiz to'g'ri siz maxsus so'zning birinchi harifini topdiz bu "T"`);
        question_1.disabled = true;
    } else {
        alert("Javobingiz xato, agar javobingiz to'g'ri ekanligiga ishonch hosil qilgan bo'lsangiz uni kichkina harflarda yozib ko'ring!")
    }
})

check_2.addEventListener("click", () => {
    if (question_2.value == "iymonga" || question_2.value == "iymon") {
        alert(`Sizning javobingiz to'g'ri siz maxsus so'zning Ikkinchi harifini topdiz bu "I"`);
        question_2.disabled = true;
    } else {
        alert("Javobingiz xato, agar javobingiz to'g'ri ekanligiga ishonch hosil qilgan bo'lsangiz uni kichkina harflarda yozib ko'ring!")
    }
});

check_3.addEventListener("click", () => {
    if (question_3.value == "norvegiya" || question_3.value == "norvegiyada") {
        alert(`Sizning javobingiz to'g'ri siz maxsus so'zning uchinchi harifini topdiz bu "N"`);
        question_3.disabled = true;
    } else {
        alert("Javobingiz xato, agar javobingiz to'g'ri ekanligiga ishonch hosil qilgan bo'lsangiz uni kichkina harflarda yozib ko'ring!")
    }
})

check_4.addEventListener("click", () => {
    if (question_4.value == "chechen" || question_4.value == "chechenlar") {
        alert(`Sizning javobingiz to'g'ri siz maxsus so'zning to'rtinchi harifini topdiz bu "CH"`);
        question_4.disabled = true;
    } else {
        alert("Javobingiz xato, agar javobingiz to'g'ri ekanligiga ishonch hosil qilgan bo'lsangiz uni kichkina harflarda yozib ko'ring!")
    }
})


check_5.addEventListener("click", () => {
    if (question_5.value == "livan" || question_5.value == "Livan") {
        alert(`Sizning javobingiz to'g'ri siz maxsus so'zning beshinchi harifini topdiz bu "L"`);
        question_5.disabled = true;
    } else {
        alert("Javobingiz xato, agar javobingiz to'g'ri ekanligiga ishonch hosil qilgan bo'lsangiz uni kichkina harflarda yozib ko'ring!")
    }
})

check_6.addEventListener("click", () => {
    if (question_6.value == "Isroil" || question_6.value == "isroil") {
        alert(`Sizning javobingiz to'g'ri siz maxsus so'zning oltinchi harifini topdiz bu "I"`);
        question_6.disabled = true;
    } else {
        alert("Javobingiz xato, agar javobingiz to'g'ri ekanligiga ishonch hosil qilgan bo'lsangiz uni kichkina harflarda yozib ko'ring!")
    }
})


check_7.addEventListener("click", () => {
    if (question_7.value == "Koreya" || question_7.value == "koreya") {
        alert(`Sizning javobingiz to'g'ri siz maxsus so'zning yitinchi harifini topdiz bu "K"`);
        question_7.disabled = true;
    } else {
        alert("Javobingiz xato, agar javobingiz to'g'ri ekanligiga ishonch hosil qilgan bo'lsangiz uni kichkina harflarda yozib ko'ring!")
    }
})

check_secret_word.addEventListener("click", () => {
    if (secret_word.value == "tinchlik" || secret_word.value == "TINCHLIK") {
        alert(`Tabreklaymiz siz sirli so'zning topdingiz! Tinchlek bebaho nemat uni qadirlashimiz kerak !`);
        secret_word.disabled = true;
    } else {
        alert("Javobingiz xato, agar javobingiz to'g'ri ekanligiga ishonch hosil qilgan bo'lsangiz uni kichkina harflarda yozib ko'ring!")
    }
})