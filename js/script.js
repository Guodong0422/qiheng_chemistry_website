// Toggle image details on click
function toggleImageDetails(imgElement) {
  const title = imgElement.getAttribute('data-title');
  const reference = imgElement.getAttribute('data-reference');
  
  const detailsContainer = imgElement.nextElementSibling;
  
  // Toggle display
  if (detailsContainer.style.display === 'block') {
    detailsContainer.style.display = 'none';
  } else {
    detailsContainer.innerHTML = `
      <h3>${title}</h3>
      <p><strong>Reference:</strong> ${reference}</p>
    `;
    detailsContainer.style.display = 'block';
  }
}

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}
