const userSkills = [];
const inputEl = $("input")[0];

$(".list-container").on("click", "button, .delete", function (evt) {
  if (evt.target.className === "add-skill" && inputEl.value.length > 0) {
    userSkills.push(inputEl.value);
    $(`<li><span class="delete">x</span>${inputEl.value}</li>`).appendTo(
      ".list-parent"
    );
    inputEl.value = "";
    
  } else if (evt.target.className === "delete") {
    
    $(this).closest("li").remove();
    userSkills.pop();
  }
});

