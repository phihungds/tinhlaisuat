function cal() {
    let money = Number(document.getElementById("money").value)
    let lai = Number(document.getElementById("lai").value)
    let year = Number(document.getElementById("year").value)
    let namdau = money * (lai / 100)
    let tientra = money + year * namdau
    let ketqua = "Sau " + year + " năm tổng số tiền phải trả cả gốc và lãi là : " + tientra + " triệu đồng"
    document.getElementById("ketqua").innerText = ketqua
}