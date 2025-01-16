// Seletores
const goalInput = document.getElementById("goalInput");
const addGoalButton = document.getElementById("addGoalButton");
const goalList = document.getElementById("goalList");

// Função para carregar as metas do localStorage
function loadGoals() {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  goalList.innerHTML = ""; // Limpa a lista
  goals.forEach((goal, index) => renderGoal(goal, index));
}

// Função para salvar as metas no localStorage
function saveGoals(goals) {
  localStorage.setItem("goals", JSON.stringify(goals));
}

// Função para adicionar uma nova meta
function addGoal(goalText) {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.push(goalText);
  saveGoals(goals);
  renderGoal(goalText, goals.length - 1);
}

// Função para renderizar uma meta na interface
function renderGoal(goal, index) {
  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-white p-4 rounded-lg shadow-md";

  // Texto da meta
  const text = document.createElement("span");
  text.textContent = goal;

  // Botão de editar
  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.className = "bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500";
  editButton.addEventListener("click", () => editGoal(index));

  // Botão de excluir
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.className = "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600";
  deleteButton.addEventListener("click", () => deleteGoal(index));

  li.appendChild(text);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  goalList.appendChild(li);
}

// Função para editar uma meta
function editGoal(index) {
  const goals = JSON.parse(localStorage.getItem("goals"));
  const newText = prompt("Edite sua meta:", goals[index]);
  if (newText !== null && newText.trim() !== "") {
    goals[index] = newText;
    saveGoals(goals);
    loadGoals();
  }
}

// Função para excluir uma meta
function deleteGoal(index) {
  const goals = JSON.parse(localStorage.getItem("goals"));
  goals.splice(index, 1);
  saveGoals(goals);
  loadGoals();
}

// Evento para adicionar uma meta ao clicar no botão
addGoalButton.addEventListener("click", () => {
  const goalText = goalInput.value.trim();
  if (goalText) {
    addGoal(goalText);
    goalInput.value = "";
  }
});

// Carregar metas ao abrir a página
loadGoals();