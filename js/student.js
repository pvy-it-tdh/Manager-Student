function emailIsValid(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function save() {
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let gender = "";
  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else if (document.getElementById("fmale").checked) {
    gender = document.getElementById("fmale").value;
  }

  // xử lí Fullname
  if (_.isEmpty(fullname)) {
    fullname = "";
    document.getElementById("fullname-error").innerHTML =
      "Vui lòng nhập họ tên";
  } else if (fullname.trim().length <= 2) {
    fullname = "";
    document.getElementById("fullname-error").innerHTML =
      "Không được nhỏ hơn 2 kí tự";
  } else if (fullname.trim().length > 50) {
    fullname = "";
    document.getElementById("fullname-error").innerHTML =
      "Không được lớn hơn 50 kí tự";
  } else {
    document.getElementById("fullname-error").innerHTML = "";
  }

  // xử lí email
  if (_.isEmpty(email)) {
    email = "";
    document.getElementById("email-error").innerHTML = "Vui lòng nhập email";
  } else if (!emailIsValid(email)) {
    email = "";
    document.getElementById("email-error").innerHTML =
      "Email không đúng định dạng";
  } else {
    document.getElementById("fullname-error").innerHTML = "";
  }

  // xử lí Phong
  if (_.isEmpty(phone)) {
    phone = "";
    document.getElementById("phone-error").innerHTML = "Vui lòng nhập SĐT";
  } else if (phone.trim().length > 10) {
    phone = "";
    document.getElementById("phone-error").innerHTML = "SĐT không đúng";
  } else {
    document.getElementById("phone-error").innerHTML = "";
  }

  // xử lí Address
  if (_.isEmpty(address)) {
    address = "";
    document.getElementById("address-error").innerHTML =
      "Vui lòng nhập địa chỉ";
  } else {
    document.getElementById("address-error").innerHTML = "";
  }

  // xử lí Gender
  if (_.isEmpty(gender)) {
    gender = "";
    document.getElementById("gender-error").innerHTML =
      "Vui lòng chọn giới tính";
  } else {
    document.getElementById("gender-error").innerHTML = "";
  }
}
