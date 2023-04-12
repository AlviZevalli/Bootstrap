var numFields = 0;
var fields = [];

function buatFields() {
  numFields = document.getElementById("numFields").value;
  var container = document.getElementById("fieldsContainer");
  container.innerHTML = "Jumlah Field Terbentuk : " + numFields;

  for (var i = 0; i < numFields; i++) {
    if (!fields[i]) {
      fields[i] = document.createElement("input");
      fields[i].type = "text";
      fields[i].name = "field" + i;
    }
    container.appendChild(fields[i]);
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
  }

  var button = document.createElement("button");
  button.innerHTML = "OK";

  var body = document.getElementsByTagName("body")[0];
  container.appendChild(document.createElement("br"));
  body.appendChild(button);

  button.addEventListener("click", function () {
    var radioGroupName = "fields";
    var radioContainer = document.createElement("div");
    for (var i = 0; i < numFields; i++) {
      var x = document.createElement("input");
      x.setAttribute("type", "radio");
      x.name = radioGroupName;
      x.value = fields[i].value;
      radioContainer.appendChild(x);
      radioContainer.appendChild(
        document.createTextNode(
          fields[i].value
        )
      );
      radioContainer.appendChild(document.createElement("br"));

      x.addEventListener("click", function () {
        submitButton.style.display = "inline-block";
      });
    }

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(radioContainer);

    var submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.style.display = "none";

    button.addEventListener("click", function () {
      submitButton.style.display = "inline-block";
    });

    submitButton.addEventListener("click", function () {
      var radioButtons = document.getElementsByName("fields");
      var selectedValue;
      for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
          selectedValue = radioButtons[i].value;
          break;
        }
      }
      var nama = document.getElementById("fname").value;
      var jml = document.getElementById("numFields").value;
      var pilihan = "";
      for (var i = 0; i < numFields; i++) {
        pilihan += fields[i].value;
        if (i < numFields - 1) {
          pilihan += ", ";
        }
      }

      if (selectedValue) {
        var hasil =
          "Hallo, nama saya " +
          nama +
          ", saya mempunyai sejumlah " +
          jml +
          " pilihan yaitu " +
          pilihan +
          ", dan saya memilih " +
          selectedValue;
        alert(hasil);
      } else {
        alert("Mohon pilih salah satu pilihan.");
      }
    });

    container.appendChild(submitButton);
  });
}
