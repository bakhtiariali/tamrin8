function submit(e){
    var userConfirm = confirm("ایا از ارسال نظر خود اطمینان دارید؟")
    if (userConfirm) {
        alert("ارسال موفقیت امیز بود")
    }else {
        e.preventDefault()
    }
}

var form = document.getElementsByClassName("form-parent")
console.log(form[0])
form[0].addEventListener("submit", submit) 