function showAddress(option) {
    const address = {
        1: "Ngõ 165 Chùa Bộc, Đống Đa, Hà Nội.",
        2: "Đường Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội.",
        3: "Xóm 8b đường Tăng Thiết Giáp, Cổ Nhuế, Từ Liêm, Hà Nội (đi qua siêu thị Metro hướng từ đường Hoàng Quốc Việt)."
    };
    document.getElementById('address').innerHTML = address[option.value];
};

function total() {
    console.log('fired');
    const prices = {
        1: 300000,
        2: 600000,
        3: 800000,
        4: 200000,
    }
    var index = document.getElementById('hour').value;
    var hour = document.getElementById('hour_length').value || 1;
    var price = prices[index] * hour;
    var moreFees = 0;
    var more = document.getElementsByClassName('more');
    console.log(more)
    for (i = 0; more[i]; i++) {
        if (more[i].checked) {
            switch (more[i].value) {
                case '2':
                    moreFees += 300000;
                    break;
                case '3':
                    moreFees += 200000 * hour;
                    break;
            }
        }
    }
    document.getElementById('info').innerHTML = price + moreFees + " VND";
};

function validateName(name) {
    var value = name.value;
    var errorMessage = document.getElementById(name.id + "_error");
    var noError;
    if (!value) {
        errorMessage.innerHTML = 'Hãy nhập tên của bạn!';
        errorMessage.style.display = "block";
        noError = false;
    } else if (value.length < 3) {
        errorMessage.innerHTML = 'Tên của bạn không được ít hơn 3 kí tự!';
        errorMessage.style.display = "block";
        noError = false;
    } else if (value.length > 50) {
        errorMessage.innerHTML = 'Tên của bạn không được nhiều hơn 50 kí tự!';
        errorMessage.style.display = "block";
        noError = false;
    } else {
        errorMessage.style.display = "none";
        noError = true;
    }
    return noError;
}

function validateTel(name) {
    var value = name.value;
    var errorMessage = document.getElementById(name.id + "_error");
    var noError;
    if (!value) {
        errorMessage.innerHTML = 'Hãy nhập số điện thoại của bạn!';
        errorMessage.style.display = "block";
        noError = false;
    } else if (value.length < 3) {
        errorMessage.innerHTML = 'Số điện thoại của bạn không được ít hơn 3 kí tự!';
        errorMessage.style.display = "block";
        noError = false;
    } else if (value.length > 50) {
        errorMessage.innerHTML = 'Số điện thoại của bạn không được nhiều hơn 50 kí tự!';
        errorMessage.style.display = "block";
        noError = false;
    } else {
        errorMessage.style.display = "none";
        noError = true;
    }
    return noError;
}

function validateNumber(name) {
    total();
    var value = parseInt(name.value);
    var errorMessage = document.getElementById(name.id + "_error");
    var noError;
    if (!value) {
        var message;
        switch (name.id) {
            case 'hour_length':
                message = 'Hãy nhập số giờ muốn đặt sân!';
                break;
            case 'player_length':
                message = 'Hãy nhập số người chơi.';
                break;
            case 'team_length':
                message = 'Hãy nhập số đội chơi.';
                break;
        }
        errorMessage.innerHTML = message;
        errorMessage.style.display = "block";
        noError = false;
    } else if (value < 0) {
        errorMessage.innerHTML = 'Chỉ được phép nhập số dương!';
        errorMessage.style.display = "block";
        noError = false;
    } else {
        errorMessage.style.display = "none";
        noError = true;
    }
    return noError;
}

function check() {
    var name = document.getElementById('full_name');
    var tel = document.getElementById('telephone');
    var hour = document.getElementById('hour_length');
    var player = document.getElementById('player_length');
    var team = document.getElementById('team_length');
    var checkName = validateName(name);
    var checkTel = validateTel(tel);
    var checkHour = validateNumber(hour);
    var checkPlayer = validateNumber(player);
    var checkTeam = validateNumber(team)
    if (checkName && checkTel && checkHour && checkPlayer && checkTeam) {
        total();
        return true
    } else {
        return false;
    }
}

window.onload = function() {
    var currentUrl = new URL(window.location.href);
    var field = currentUrl.searchParams.get("field");
    var option = document.getElementById('field_name')
    if (field) option.value = field;
    showAddress(option);
    total();
}