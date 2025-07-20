// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn em đã dành thời gian để nhìn trò trẻ con của anhh, anh có những điều muốn gởi gắm đến em .❤️ Chúc em sinh nhật vui vẻ và luôn hạnh phúc nhé , hiện anh ở xa nên chưa thể tặng quà sinh nhật cho em nên anh xin phép gởi em tấm lòng của anh trước, em gần du học rồi nên để ý đến sức khỏe của mình nhiều hơn , qua bên đó cố gắng học thật giỏi để sau này về có nhiều cơ hội và việc làm tốt hơn. Tháng sau anh về mình đi chơi sau nhé ❤️. Love you💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})