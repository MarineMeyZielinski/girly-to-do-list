// On crée un tableau pour stocker les tâches

let tasks = [];

// On sélectionne les éléments du DOM dont on a besoin

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// On ajoute un écouteur d'événement sur le bouton "Ajouter"

addTaskBtn.addEventListener("click", () => {
  // Récupère la valeur saisie et retire les espaces superflus

  const newTask = taskInput.value.trim();

  // Si la saisie n'est pas vide, on ajoute la tâche au tableau

  if (newTask !== "") {
    tasks.push(newTask);

    // On vide le champ de saisie pour la prochaine tâche

    taskInput.value = "";

    // On met à jour l'affichage des tâches

    renderTasks();
  }
});

/**
 * Fonction qui affiche la liste des tâches à l'écran
 * Elle parcourt le tableau tasks et crée un <li> pour chaque élément
 */

function renderTasks() {
  // On vide d'abord la liste existante

  taskList.innerHTML = "";

  // Pour chaque tâche dans le tableau...

  tasks.forEach((task, index) => {
    // ...on crée un élément de liste

    const li = document.createElement("li");
    li.textContent = task;

    // On crée un bouton "Supprimer" pour chaque tâche

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";

    // On ajoute un écouteur pour retirer la tâche du tableau

    deleteBtn.addEventListener("click", () => {
      // splice retire 1 élément à la position index

      tasks.splice(index, 1);

      // puis on rafraîchit l'affichage

      renderTasks();
    });

    // On ajoute le bouton "Supprimer" dans l'<li>, puis l'<li> dans la liste

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
