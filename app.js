let data = JSON.parse(localStorage.getItem("data")) || [];

const newItem = document.querySelector("#newItem");
const btnAddItem = document.querySelector("#btnAddItem");
const btnRefreshItems = document.querySelector("#btnRefreshItems");
const btnSaveItems = document.querySelector("#btnSaveItems");
const btnClearAllItems = document.querySelector("#btnClearAllItems");
const listContainer = document.querySelector("#listContainer");
const msgCheck = document.querySelector("#msgCheck");

btnAddItem.addEventListener("click", function (e) {
    e.preventDefault();
    const addNewItem = newItem.value.trim();
    if (addNewItem.value != "" && addNewItem.length > 0) {
        data.push(addNewItem)
        addItem();
        newItem.value = "";
        if (!(msgCheck.classList.contains("msg"))) {
            msgCheck.classList.add("msg");
        }
    }
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        const delItem = e.target.className;
        data.splice(parseInt(delItem[delItem.length - 1]), 1);
        listContainer.textContent = "";
        refreshList();
    }
    else if (e.target.nodeName === "INPUT") {
        if (e.target.checked) {
            const itemLi = e.target.closest("li").id;
            const itemLiCheck = document.querySelector(`#${itemLi}`);
            itemLiCheck.classList.add("item");
            itemLiCheck.style.textDecoration = "line-through";
            itemLiCheck.style.color = "#808080";
        }
        else {
            const itemLi = e.target.closest("li").id;
            const itemLiCheck = document.querySelector(`#${itemLi}`);
            itemLiCheck.classList.remove("item");
            itemLiCheck.style.textDecoration = "none";
            itemLiCheck.style.color = "#000";
        }
    }
});

function refreshList() {
    if (data.length === 0) {
        msgCheck.classList.remove("msg");
    }
    else {
        listContainer.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            const newLi = document.createElement("li");
            const itemCheckbox = document.createElement("input");
            const btnDelete = document.createElement("button");
            newLi.id = `item${i}`;
            itemCheckbox.type = "checkbox";
            itemCheckbox.id = i;
            btnDelete.append("Delete");
            btnDelete.id = "btnDelete";
            btnDelete.className = `btnDelItem${i}`
            newLi.append(itemCheckbox);
            newLi.append(data[i]);
            newLi.append(btnDelete);
            listContainer.append(newLi);
        }
    }
};
refreshList();

btnRefreshItems.addEventListener("click", function (e) {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem("data"))) {
        data = JSON.parse(localStorage.getItem("data"));
        refreshList();
    }
    else {
        data = [];
        listContainer.innerHTML = "";
        refreshList();
    }

});

btnSaveItems.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(data));
});

btnClearAllItems.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("data");
    data = [];
    listContainer.innerHTML = "";
    refreshList();
});

function addItem() {
    const newLi = document.createElement("li");
    const itemCheckbox = document.createElement("input");
    const btnDelete = document.createElement("button");
    newLi.id = `item${data.length - 1}`;
    itemCheckbox.type = "checkbox";
    itemCheckbox.id = data.length - 1;
    btnDelete.append("Delete");
    btnDelete.id = "btnDelete";
    btnDelete.className = `btnDelItem${data.length - 1}`
    newLi.append(itemCheckbox);
    newLi.append(data[data.length - 1]);
    newLi.append(btnDelete);
    listContainer.append(newLi);
};