// importing SVG icons
import { menuSvgIcon, cancelSvgIcon, checkSvgIcon, deleteSvgIcon, editSvgIcon } from "./icons.js";

// initializing local storage
let todoListAppData = JSON.parse(localStorage.getItem("todoListAppData")) || [];

// targetting necessary elements
const orderBy = document.querySelector("#orderBy");
const filterTodo = document.querySelector("#filterTodo");
const emptySearch = document.querySelector("#emptySearch");
const newTodoInput = document.querySelector("#newTodoInput");
const noSearchFound = document.querySelector("#noSearchFound");
const emptyTodoInput = document.querySelector("#emptyTodoInput");
const searchTodoInput = document.querySelector("#searchTodoInput");
const addTodoContainer = document.querySelector("#addTodoContainer");
const searchResultTitle = document.querySelector("#searchResultTitle");
const searchTodoContainer = document.querySelector("#searchTodoContainer");
const allTodoItemContainer = document.querySelector("#allTodoItemContainer");

// global variables to cache option values
let orderByValue = "newest";
let filterValue = "filterValueAll";

// function which refreshs todo list with todo list data
function refreshList(todoListData) {
    // clears the todo list container
    allTodoItemContainer.innerHTML = "";
    if (todoListData.length === 0) {
        // check todo list data length and display message
        noSearchFound.classList.remove("hideElement");
    }
    else {
        // add class to hide unneccessary message
        noSearchFound.className = "hideElement";
        // for loop to add each todo with todo list data
        for (let i = 0; i < todoListData.length; i++) {
            // create div tag and add id & class
            const newDiv = document.createElement("div");
            newDiv.id = todoListData[i].id;
            newDiv.className = "todoListItem";

            // create p tag and add new todo value
            const todoData = document.createElement("p");
            todoData.innerText = todoListData[i].todo;

            // create input tag and change type to checkbox
            const todoCheckbox = document.createElement("input");
            todoCheckbox.type = "checkbox";
            todoCheckbox.id = i;
            todoCheckbox.className = "todoCheckBox";
            todoCheckbox.checked = todoListData[i].isDone;
            todoListData[i].isDone && todoData.classList.add("todoDone");

            // create input tag for edit todo
            const editTodo = document.createElement("input");
            editTodo.name = "editTodoItem";
            editTodo.className = "editTodoItem";
            editTodo.classList.add("hideElement");
            editTodo.value = todoListData[i].todo;

            // add event listener to checkbox to add or remove todo done class
            todoCheckbox.addEventListener("click", (evt) => {
                // target todo id for check
                const todoId = evt.target.parentElement.id;
                // toggling class based on todo data
                evt.target.checked ? todoData.classList.add("todoDone") : todoData.classList.remove("todoDone");
                // update todo data to local array
                todoListData.forEach((todoData) => {
                    if (todoData.id === todoId) {
                        todoData.isDone = evt.target.checked;
                        todoData.updatedAt = new Date().toISOString();
                    }
                });
                // store todo data to local storage
                localStorage.setItem("todoListAppData", JSON.stringify(todoListData));
            });

            // add input and p elements to div
            newDiv.append(todoCheckbox);
            newDiv.append(todoData);
            newDiv.append(editTodo);

            // create svg icons
            const menuIcon = menuSvgIcon();
            const editIcon = editSvgIcon();
            const deleteIcon = deleteSvgIcon();
            const cancelIcon = cancelSvgIcon();
            const checkIcon = checkSvgIcon();

            // add event listener to add or remove hide icon class
            menuIcon.addEventListener("click", () => {
                menuIcon.classList.add("hideElement");
                editIcon.classList.remove("hideElement");
                deleteIcon.classList.remove("hideElement");
                cancelIcon.classList.remove("hideElement");
            });

            // add event listener to add or remove hide icon class
            editIcon.addEventListener("click", () => {
                checkIcon.classList.remove("hideElement");
                editIcon.classList.add("hideElement");
                deleteIcon.classList.add("hideElement");
                todoData.classList.add("hideElement");
                editTodo.classList.remove("hideElement");
            });

            // add event listener to add or remove hide icon class
            cancelIcon.addEventListener("click", () => {
                menuIcon.classList.remove("hideElement");
                todoData.classList.remove("hideElement");
                editIcon.classList.add("hideElement");
                checkIcon.classList.add("hideElement");
                cancelIcon.classList.add("hideElement");
                deleteIcon.classList.add("hideElement");
                editTodo.classList.add("hideElement");
                editTodo.value = todoData.innerText;
            });

            // add event listener to toggle and save todo check
            checkIcon.addEventListener("click", (e) => {
                // target todo id for edit
                const todoId = e.target.parentElement.parentElement.id;
                // update todo data to local array
                todoListData.forEach((todoData) => {
                    if (todoData.id === todoId) {
                        todoData.todo = e.target.parentElement.parentElement.children[2].value;
                        todoData.updatedAt = new Date().toISOString();
                    }
                });
                // store todo data to local storage
                localStorage.setItem("todoListAppData", JSON.stringify(todoListData));
                // call refresh list function to display updated todo list data
                refreshList(todoListAppData);
            });

            // create wrapper for all svg icons
            const todoIconsWrapper = document.createElement("div");
            todoIconsWrapper.id = "todoIconsWrapper";

            // add all svg icons to parent
            todoIconsWrapper.append(menuIcon);
            todoIconsWrapper.append(editIcon);
            todoIconsWrapper.append(checkIcon);
            todoIconsWrapper.append(deleteIcon);
            todoIconsWrapper.append(cancelIcon);

            // add todo icons wrapper
            newDiv.append(todoIconsWrapper);

            // add div to all todo list container
            allTodoItemContainer.append(newDiv);
        }
    }
};

// call refresh list function to initalize todo list
refreshList(todoListAppData);

// function which adds new todo to the all todos list
function addNewTodo() {
    // add todo data to local array
    todoListAppData.push({
        id: crypto.randomUUID(),
        todo: newTodoInput.value,
        isDone: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    });

    // store todo data to local storage
    localStorage.setItem("todoListAppData", JSON.stringify(todoListAppData))

    // call refresh list function to update todo list
    refreshList(todoListAppData);
};

// function which clears search input and display all todo list
function clearSearch() {
    searchTodoInput.value = "";
    emptySearch.classList.add("hideElement");
    noSearchFound.classList.add("hideElement");
    searchResultTitle.classList.add("hideElement");
    refreshList(todoListAppData);
};

// function which toggles filter option ui and refresh data based on filter option
function toggleFilterOptions(todoListData, selectedFilter = "filterValueAll", isSearched = false) {
    // add class to hide unneccessary message
    searchResultTitle.classList.add("hideElement");
    // extracting all filter options
    const allOptions = filterTodo.children;
    // loop which toggles ui filter option
    for (let i = 0; i < allOptions.length; i++) {
        if (allOptions[i].id === selectedFilter) {
            allOptions[i].className = "filterTodoItem filterTodoItemSelect";
        }
        else {
            allOptions[i].className = "filterTodoItem";
        }
    }

    // switch case statement which refreshs todo list data based on filter option
    switch (selectedFilter) {
        case "filterValueDone":
            const doneFilterTodoListData = todoListData.filter((todoData) => todoData.isDone === true);
            doneFilterTodoListData.length > 0 && (isSearched && searchResultTitle.classList.remove("hideElement"));
            refreshList(doneFilterTodoListData);
            break;
        case "filterValuePending":
            const pendingFilterTodoListData = todoListData.filter((todoData) => todoData.isDone === false);
            pendingFilterTodoListData.length > 0 && (isSearched && searchResultTitle.classList.remove("hideElement"));
            refreshList(pendingFilterTodoListData);
            break;
        default:
            todoListData.length > 0 && (isSearched && searchResultTitle.classList.remove("hideElement"));
            refreshList(todoListData);
    }
};

// function which search the todo from the todo list data
function searchTodoListAppData() {
    // add class to hide unneccessary message
    emptySearch.classList.add("hideElement");
    noSearchFound.classList.add("hideElement");
    emptyTodoInput.classList.add("hideElement");
    searchResultTitle.classList.add("hideElement");

    if (searchTodoInput.value.trim() === "") {
        // check if search input is empty and display error message
        emptySearch.classList.remove("hideElement");
        return;
    }

    // after filtering search input data, we store it in const variable
    const searchTodoListAppData = todoListAppData.filter((todoData) => todoData.todo.includes(searchTodoInput.value));

    // conditional to display todo list data or error message
    if (searchTodoListAppData.length > 0) {
        toggleFilterOptions(searchTodoListAppData, filterValue, true);
    }
    else {
        allTodoItemContainer.innerHTML = "";
        noSearchFound.classList.remove("hideElement");
    }
};

// function which sorts the todo based on option selected
function orderByTodoListData(todoListData, orderByOption = "newest") {
    if (orderByOption === "newest") {
        const newestOrderData = todoListData.toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        toggleFilterOptions(newestOrderData, filterValue);
    }
    else if (orderByOption === "oldest") {
        const oldestOrderData = todoListData.toSorted((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        toggleFilterOptions(oldestOrderData, filterValue);
    }
    else if (orderByOption === "lastModified") {
        const lastModifiedOrderData = todoListData.toSorted((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        toggleFilterOptions(lastModifiedOrderData, filterValue);
    }
};

// Add eventlistner to add new todo and clear todo input field
addTodoContainer.addEventListener("submit", (evt) => {
    // add prevent default to stop page being refresh
    evt.preventDefault();
    // adding class to hide unncessary message
    emptyTodoInput.classList.add("hideElement");
    // calling clear search function to clear search input field
    clearSearch();
    if (newTodoInput.value.trim() === "") {
        // check if todo input field is empty and display error message
        emptyTodoInput.classList.remove("hideElement");
        return;
    }
    // calling add new todo function to add new todo and save it
    addNewTodo();
    // clearing todo input field
    newTodoInput.value = "";
});

// Add eventlistner to parent to remove todo
allTodoItemContainer.addEventListener("click", (e) => {
    // conditional to check if mouse click was correct
    if (e.target.id === "deleteBtn") {
        // target todo id to be removed
        const removeTodo = e.target.parentElement.parentElement.id;
        // after filtering todo data to be removed, we store rest data in const variable
        const updatedTodoListAppData = todoListAppData.filter((todoData) => todoData.id !== removeTodo);
        // update todo data to local array
        todoListAppData = updatedTodoListAppData;
        // store todo data to local storage
        localStorage.setItem("todoListAppData", JSON.stringify(todoListAppData))
        // call refresh list function to update todo list
        refreshList(todoListAppData);
    }
});

// Add eventlistner to search todo from todo list data
searchTodoContainer.addEventListener("submit", (evt) => {
    // add prevent default to stop page being refresh
    evt.preventDefault();
    // calling search todo function 
    searchTodoListAppData();
});

// Add eventlistner to sort todo from todo list data
orderBy.addEventListener("change", (evt) => {
    // add prevent default to stop page being refresh
    evt.preventDefault();
    // calling clear search function to clear search input field
    clearSearch();
    // finding order by option value and updating the global variable
    orderByValue = evt.target.value;
    // calling order by todo list function to display todo list data based on the option selected
    orderByTodoListData(todoListAppData, orderByValue);
});

// Add eventlistner to filter todo from todo list data
filterTodo.addEventListener("click", (e) => {
    // conditional to check if mouse click was correct
    if (e.target.classList[0] === "filterTodoItem") {
        // calling clear search function to clear search input field
        clearSearch();
        // finding filter value and updating the global variable
        filterValue = e.target.id;
        // calling order by todo list function to display todo list data based on the option cached in global variable
        orderByTodoListData(todoListAppData, orderByValue);
    }
});