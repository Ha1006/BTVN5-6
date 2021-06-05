// Bài 1 : Nhập 3 số nguyên và sắp xếp tăng dần

var btnSapXep = document.getElementById('btnSapXep').onclick = function () {
    var soThuNhat = document.getElementById('soThuNhat').value;
    var soThuHai = document.getElementById('soThuHai').value;
    var soThuBa = document.getElementById('soThuBa').value;

    if (isNaN(soThuNhat) || isNaN(soThuHai) || isNaN(soThuBa)) {
        alert('Bạn cần nhập lại');
    } else if (parseInt(soThuNhat) || parseInt(soThuHai) || parseInt(soThuBa)) {
        if (parseInt(soThuNhat) > parseInt(soThuHai) && parseInt(soThuHai) > parseInt(soThuBa)) {
            alert('Dãy số tăng dần : ' + soThuBa + ' ' + parseInt(soThuHai) + ' ' + parseInt(soThuNhat));
        } else if (parseInt(soThuNhat) > parseInt(soThuBa) && parseInt(soThuBa) > parseInt(soThuHai)) {
            alert('Dãy số tăng dần : ' + parseInt(soThuHai) + ' ' + parseInt(soThuBa) + ' ' + parseInt(soThuNhat));
        } else if (parseInt(soThuHai) > parseInt(soThuNhat) && parseInt(soThuNhat) > parseInt(soThuBa)) {
            alert('Dãy số tăng dần : ' + parseInt(soThuBa) + ' ' + parseInt(soThuNhat) + ' ' + parseInt(soThuHai));
        } else if (parseInt(soThuHai) > parseInt(soThuBa) && parseInt(soThuBa) > parseInt(soThuNhat)) {
            alert('Dãy số tăng dần : ' + parseInt(soThuNhat) + ' ' + parseInt(soThuBa) + ' ' + parseInt(soThuHai));
        } else if (parseInt(soThuBa) > parseInt(soThuNhat) && parseInt(soThuNhat) > parseInt(soThuHai)) {
            alert('Dãy số tăng dần : ' + parseInt(soThuHai) + ' ' + parseInt(soThuNhat) + ' ' + parseInt(soThuBa));
        } else if (parseInt(soThuBa) > parseInt(soThuHai) && parseInt(soThuHai) > parseInt(soThuNhat)) {
            alert('Dãy số tăng dần : ' + parseInt(soThuNhat) + ' ' + parseInt(soThuHai) + ' ' + parseInt(soThuBa));
        } else if (parseInt(soThuNhat) == parseInt(soThuHai) && parseInt(soThuHai) > parseInt(soThuBa)) {
            alert('Dãy số tăng dần : ' + parseInt(soThuBa) + ' ' + parseInt(soThuHai) + ' ' + parseInt(soThuNhat));
        } else if (parseInt(soThuNhat) == parseInt(soThuBa) && parseInt(soThuBa) > parseInt(soThuHai)) {
            alert('Dãy số tăng dần : ' + parseInt(soThuHai) + ' ' + parseInt(soThuBa) + ' ' + parseInt(soThuNhat));
        } else if (parseInt(soThuBa) == parseInt(soThuHai) && parseInt(soThuHai) > parseInt(soThuNhat)) {
            alert('Dãy số tăng dần : ' + parseInt(soThuNhat) + ' ' + parseInt(soThuHai) + ' ' + parseInt(soThuBa));
        }
    } else {
        alert('Bạn cần nhập lại');
    }
}


//Bài 2 : Chào các Thành viên trong gia đình

var rdFather = document.getElementById('rdFather').value;
var rdMother = document.getElementById('rdMother').value;
var rdBrother = document.getElementById('rdBrother').value;
var rdSister = document.getElementById('rdSister').value;

var liBo = document.getElementById('liBo').onclick = function () {
    rdFather.checked = true;
    alert('Chào Bố');
}
var liMe = document.getElementById('liMe').onclick = function () {
    rdMother.checked = true;
    alert('Chào Mẹ');
}
var liAnhTrai = document.getElementById('liAnhTrai').onclick = function () {
    rdBrother.checked = true;
    alert('Chào Anh Trai');
}
var liEmGai = document.getElementById('liEmGai').onclick = function () {
    rdSister.checked = true;
    alert('Chào Em Gái');
}

// Bài 3 : Cho 3 số nguyên phân biệt chẵn lẻ
var btnChanLe = document.getElementById('btnChanLe').onclick = function () {
    var soA = document.getElementById('soA').value;
    var soB = document.getElementById('soB').value;
    var soC = document.getElementById('soC').value;

    if (isNaN(soA) || isNaN(soB) || isNaN(soC)) {
        alert('Bạn cần nhập lại');
    } else if (parseInt(soA) || parseInt(soB) || parseInt(soC)) {

        if(parseInt(soA) % 2 == 0 && parseInt(soB) % 2 == 0 && parseInt(soC) % 2 == 0 ){
            alert('Có 3 Số chẵn');

        }else if(parseInt(soA) % 2 != 0 && parseInt(soB) % 2 == 0 && parseInt(soC) % 2 == 0){
            alert('Có 2 Số chẵn và 1 Số lẻ');

        }else if(parseInt(soA) % 2 != 0 && parseInt(soB) % 2 != 0 && parseInt(soC) % 2 == 0){
            alert('Có 2 Số lẻ và 1 Số chẵn');

        }else if(parseInt(soA) % 2 != 0 && parseInt(soB) % 2 != 0 && parseInt(soC) % 2 != 0){
            alert('Có 3 Số Lẻ');

        }else if(parseInt(soA) % 2 != 0 && parseInt(soB) % 2 == 0 && parseInt(soC) % 2 == 0){
            alert('Có 2 Số chẵn và 1 Số lẻ');

        }else if(parseInt(soA) % 2 == 0 && parseInt(soB) % 2 != 0 && parseInt(soC) % 2 == 0){
            alert('Có 2 Số chẵn và 1 Số lẻ');

        }else if(parseInt(soA) % 2 == 0 && parseInt(soB) % 2 != 0 && parseInt(soC) % 2 != 0){
            alert('Có 2 Số lẻ và 1 Số chẵn');

        }else if(parseInt(soA) % 2 != 0 && parseInt(soB) % 2 == 0 && parseInt(soC) % 2 != 0){
            alert('Có 2 Số lẻ và 1 Số chẵn');

        }else if(parseInt(soA) % 2 == 0 && parseInt(soB) % 2 == 0 && parseInt(soC) % 2 != 0){
            alert('Có 2 Số chẵn và 1 Số lẻ');
        }
    }
}

//Bài 4 : Nhận diện tam giác

var btnNhanDangTamGiac = document.getElementById('btnNhanDangTamGiac').onclick = function () {
    var canhA = document.getElementById('canhA').value;
    var canhB = document.getElementById('canhB').value;
    var canhC = document.getElementById('canhC').value;

    if (isNaN(canhA) || isNaN(canhB) || isNaN(canhC)) {
        alert('Bạn cần nhập lại');
    } else if(parseInt(canhA) || parseInt(canhB) || parseInt(canhC)){
        if(parseInt(canhA) == parseInt(canhB) && parseInt(canhB) == parseInt(canhC)){
            alert (' Tam giác đều');

        }else if(parseInt(canhA) == parseInt(canhB) && parseInt(canhB) != parseInt(canhC)){
            alert('Tam giác cân');
        }else if(parseInt(canhA) == parseInt(canhC) && parseInt(canhC)!= parseInt(canhB)){
            alert('Tam giác cân');
        }else if(parseInt(canhA) != parseInt(canhC) && parseInt(canhC)== parseInt(canhB)){
            alert('Tam giác cân');

        }else if((parseInt(canhA * canhA) + parseInt(canhB * canhB)) == (canhC * canhC)){
            alert('Tam Giác Vuông');
        }else if((parseInt(canhA * canhA) + parseInt(canhC * canhC)) == (canhB * canhB)){
            alert('Tam Giác Vuông');
        }else if((parseInt(canhB * canhB) + parseInt(canhC * canhC)) == (canhA * canhA)){
            alert('Tam Giác Vuông');
        } else{
            alert('Tam Giác Thường');
        }
    }
}

