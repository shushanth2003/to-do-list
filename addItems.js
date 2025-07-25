const completedButton = document.createElement("button");
completedButton.textContent = "+";
const addItemsClick = () => {
    const addItems = document.getElementById("additems");
    document.querySelector('button[onclick="addItemsClick()"]').style.display = "none";
    // Create new elements for every call
    const radioTag = document.createElement("input");
    radioTag.type = "checkbox";
    radioTag.name = "completeGroup"; // All radios in a group

    const inputTag = document.createElement("input");
    inputTag.type = "text";
    inputTag.placeholder = "Enter item";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    
    

    // Listen for enter key on THIS input
    inputTag.addEventListener('keydown', (event) => {
        if (event.key === "Enter" && inputTag.value.trim() !== "") {
            // You can process the value or just leave it in place
            // Optionally, make input read-only or disable editing
            inputTag.disabled = true; // optional!
        }
    });

    // Wrap in a div (optional)
    const wrapper = document.createElement("div");
    wrapper.className = 'item-row';

    wrapper.appendChild(radioTag);
    wrapper.appendChild(inputTag);
    wrapper.appendChild(editButton);
    wrapper.appendChild(deleteButton);
    wrapper.appendChild(completedButton);
    addItems.appendChild(wrapper);

    //delete the particular container
    deleteButton.addEventListener('click',()=>{
        wrapper.remove();
        if (addItems.children.length === 0) {
        document.getElementById("addItemBtn").style.display = "inline-block";
    }
    });
    editButton.addEventListener('click',()=>{
        inputTag.disabled=false;
        inputTag.focus();
    })
    radioTag.addEventListener('change',()=>{
        if(radioTag.checked){
            inputTag.style.textDecoration='line-through';
            inputTag.disabled=true;
        }else{
            inputTag.style.textDecoration="none";
        }

    })
}
const addsecondItems=()=>{
    addItemsClick();
}
completedButton.onclick=addsecondItems;
