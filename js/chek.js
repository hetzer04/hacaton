const buttons = document.getElementsByClassName("button");
const chek_box = document.getElementById("chek");

var tovar1 = {
    name: "tovar1",
    count: 1,
    prise: 300,
    draw: function () {
        chek_box.innerHTML += `<div class="chek_tovar">
        <img src="src/tovar2.jpeg" width = "50px" height = "50px">
        <span>Синий Курт Шоро Классический 30г</span>
        <div style="display: flex;">
            <button onclick="tovar1.inc();">+</button>
            <span>${this.count}</span>
            <button onclick="tovar1.dec();">-</button>
        </div>
        <span style="text-align: center">${this.count * this.prise} тг./шт</span></div>`;
    },
    inc: function () {
        this.count = this.count + 1;
        chek.draw();
    },
    dec: function() {
        this.count = this.count - 1;
        if (this.count < 1) {
            chek.removeTovar("tovar1");
            this.count = 1;
        }
        chek.draw();
    }
}
var tovar2 = {
    name: "tovar2",
    count: 1,
    prise: 370,
    draw: function () {
        chek_box.innerHTML += `<div class="chek_tovar">
        <img src="src/tovar1.jpeg" width = "50px" height = "50px">
        <span>Зелёный Шоро курт лайт соленый 30 г</span>
        <div style="display: flex;">
            <button onclick="tovar2.inc();">+</button>
            <span>${this.count}</span>
            <button onclick="tovar2.dec();">-</button>
        </div>
        <span style="text-align: center">${this.count * this.prise} тг./шт</span></div>`;
    },
    inc: function () {
        this.count = this.count + 1;
        chek.draw();
    },
    dec: function() {
        this.count = this.count - 1;
        if (this.count < 1) {
            chek.removeTovar("tovar2");
            this.count = 1;
        }
        chek.draw();
    }
}
var tovar3 = {
    name: "tovar3",
    count: 1,
    prise: 370,
    draw: function () {  
        chek_box.innerHTML += `<div class="chek_tovar">
        <img src="src/tovar3.jpeg" width = "50px" height = "50px">
        <span>Жёлтый Курутики Шоро м/у 30г.</span>
        <div style="display: flex;">
            <button onclick="tovar3.inc();">+</button>
            <span>${this.count}</span>
            <button onclick="tovar3.dec();">-</button>
        </div>
        <span style="text-align: center">${this.count * this.prise} тг./шт</span></div>`;
    },
    inc: function () {
        this.count = this.count + 1;
        chek.draw();
    },
    dec: function() {
        this.count = this.count - 1;
        if (this.count < 1) {
            chek.removeTovar("tovar3");
            this.count = 1;
        }
        chek.draw();
    }
}
var tovar4 = {
    name: "tovar4",
    count: 1,
    prise: 2.000,
    draw: function () {
        chek_box.innerHTML += `<div class="chek_tovar">
        <img src="src/tovar4.jpeg" width = "50px" height = "50px">
        <span>Курт Казахстанский</span>
        <div style="display: flex;">
            <button onclick="tovar4.inc();">+</button>
            <span>${this.count}</span>
            <button onclick="tovar4.dec();">-</button>
        </div>
        <span style="text-align: center">${this.count * this.prise} /кг</span></div>`;
    },
    inc: function () {
        this.count = this.count + 1;
        chek.draw();
    },
    dec: function() {
        this.count = this.count - 1;
        if (this.count < 1) {
            chek.removeTovar("tovar4");
            this.count = 1;
        }
        chek.draw();
    }
}
var tovar5 = {
    name: "tovar5",
    count: 1,
    prise: 2590,
    draw: function () {
        chek_box.innerHTML += `<div class="chek_tovar">
        <img src="src/tovar5.jpeg" width = "50px" height = "50px">
        <span>Курт с базиликом</span>
        <div style="display: flex;">
            <button onclick="tovar5.inc();">+</button>
            <span>${this.count}</span>
            <button onclick="tovar5.dec();">-</button>
        </div>
        <span style="text-align: center">${this.count * this.prise} /кг.</span></div>`;
    }, 
    inc: function () {
        this.count = this.count + 1;
        chek.draw();
    },
    dec: function() {
        this.count = this.count - 1;
        if (this.count < 1) {
            this.count = 1;
            chek.removeTovar("tovar5");
        }
        chek.draw();
    }
}
var tovar6 = {
    name: "tovar6",
    count: 1,
    prise: 2190,
    draw: function () {
        chek_box.innerHTML += `<div class="chek_tovar">
        <img src="src/tovar6.jpeg" width = "50px" height = "50px">
        <span>Курт острый с паприкой</span>
        <div style="display: flex;">
            <button onclick="tovar6.inc();">+</button>
            <span>${this.count}</span>
            <button onclick="tovar6.dec();">-</button>
        </div>
        <span style="text-align: center">${this.count * this.prise}  /кг.</span></div>`;
    },
    inc: function () {
        this.count = this.count + 1;
        chek.draw();
    },
    dec: function() {
        this.count = this.count - 1;
        if (this.count < 1) {
            this.count = 1;
            chek.removeTovar("tovar6");
        }
        chek.draw();
    }
}

var chek = {
    tovarList: [],
    prise: 0,
    delivary: 500,
    addTovar: function (index) {
        let inItem = false;
        this.tovarList.forEach((e) => {
            if (e.name == index) {
                e.count++;
                inItem = true;
            }
        })
        if (!inItem) {
            switch (index) {
                case "tovar1":
                    tovar1.draw();
                    this.tovarList.push(tovar1);
                    break;
                case "tovar2":
                    tovar2.draw();
                    this.tovarList.push(tovar2);
                    break;
                case "tovar3":
                    tovar3.draw();
                    this.tovarList.push(tovar3);
                    break;
                case "tovar4":
                    tovar4.draw();
                    this.tovarList.push(tovar4);
                    break;
                case "tovar5":
                    tovar5.draw();
                    this.tovarList.push(tovar5);
                    break;
                case "tovar6":
                    tovar6.draw();
                    this.tovarList.push(tovar6);
                    break;
            }
        }
        this.draw();
    },
    removeTovar: function(index) {
        switch (index) {
            case "tovar1":
                this.tovarList.splice(this.tovarList.indexOf(tovar1), 1);
                break;
            case "tovar2":
                this.tovarList.splice(this.tovarList.indexOf(tovar2), 1);
                break;
            case "tovar3":
                this.tovarList.splice(this.tovarList.indexOf(tovar3), 1);
                break;
            case "tovar4":
                this.tovarList.splice(this.tovarList.indexOf(tovar4), 1);
                break;
            case "tovar5":
                this.tovarList.splice(this.tovarList.indexOf(tovar5), 1);
                break;
            case "tovar6":
                this.tovarList.splice(this.tovarList.indexOf(tovar6), 1);
                break;
        }
        this.draw();
    },
    draw: function () {
        chek_box.innerHTML = '';
        this.prise = 0;
        this.tovarList.forEach(e => {
            this.prise += e.prise * e.count;
            e.draw();
        })
        document.getElementById("prise").textContent = `Итого: ${this.prise} тг.`
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons.item(i).addEventListener("pointerdown", function (e) {
        chek.addTovar(e.target.id);
    });
};
