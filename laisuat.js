function cal() {
    let money = document.getElementById("money").value
    let lai =document.getElementById("lai").value
    let year = document.getElementById("year").value
    let namdau = money * (lai / 100)
    let tientra = money + year * namdau
    let ketqua = "Sau " + year + " năm tổng số tiền phải trả cả gốc và lãi là : " + tientra
    document.getElementById("ketqua").innerText = ketqua
}