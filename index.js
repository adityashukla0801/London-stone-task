const rqnge = [
  {
    id: 11,
    value: "light",
  },
  {
    id: 22,
    value: "medium",
  },
  {
    id: 33,
    value: "dark",
  },
];

const colors = [
  { id: 1, name: "Grey", value: "#AAAAAB", count: 0, range: [11, 22] },
  { id: 2, name: "Natural", value: "#C5C0B8", count: 0, range: [11, 22] },
  { id: 3, name: "Beige", value: "#E5CFB2", count: 0, range: [11, 22] },
  { id: 4, name: "Brown", value: "#958C7D", count: 0, range: [11, 22] },
  { id: 5, name: "Buff", value: "#CDC1B1", count: 0, range: [11, 22] },
  { id: 6, name: "Cream", value: "#F9F3EC", count: 0, range: [11] },
  { id: 7, name: "Charcoal", value: "#6A6B6B", count: 0, range: [33] },
  { id: 8, name: "Black", value: "#494941", count: 0, range: [33] },
  { id: 9, name: "Silver", value: "#C9C9C9", count: 0, range: [11] },
];

const productList = [
  {
    name: "Product 1",
    description: "Description of the Product 1",
    rate: 21,
    currency: "$",
    colorId: 9,
    range: 11,
  },
  {
    name: "Product 2",
    description: "Description of the Product 2",
    rate: 24,
    currency: "$",
    colorId: 1,
    range: 22,
  },
  {
    name: "Product 3",
    description: "Description of the Product 3",
    rate: 25,
    currency: "$",
    colorId: 7,
    range: 33,
  },
  {
    name: "Product 4",
    description: "Description of the Product 4",
    rate: 26,
    currency: "$",
    colorId: 1,
    range: 11,
  },
  {
    name: "Product 5",
    description: "Description of the Product 5",
    rate: 27,
    currency: "$",
    colorId: 2,
    range: 11,
  },
  {
    name: "Product 6",
    description: "Description of the Product 6",
    rate: 28,
    currency: "$",
    colorId: 6,
    range: 33,
  },
  {
    name: "Product 7",
    description: "Description of the Product 7",
    rate: 29,
    currency: "$",
    colorId: 3,
    range: 11,
  },
  {
    name: "Product 8",
    description: "Description of the Product 8",
    rate: 21,
    currency: "$",
    colorId: 2,
    range: 22,
  },
  {
    name: "Product 9",
    description: "Description of the Product 9",
    rate: 19,
    currency: "$",
    colorId: 1,
    range: 33,
  },
  {
    name: "Product 10",
    description: "Description of the Product 10",
    rate: 17,
    currency: "$",
    colorId: 9,
    range: 11,
  },
  {
    name: "Product 11",
    description: "Description of the Product 11",
    rate: 15,
    currency: "$",
    colorId: 8,
    range: 22,
  },
  {
    name: "Product 12",
    description: "Description of the Product 12",
    rate: 11,
    currency: "$",
    colorId: 7,
    range: 33,
  },
  {
    name: "Product 13",
    description: "Description of the Product 13",
    rate: 13,
    currency: "$",
    colorId: 6,
    range: 11,
  },
  {
    name: "Product 14",
    description: "Description of the Product 14",
    rate: 10,
    currency: "$",
    colorId: 5,
    range: 22,
  },
  {
    name: "Product 15",
    description: "Description of the Product 15",
    rate: 20,
    currency: "$",
    colorId: 4,
    range: 33,
  },

  {
    name: "Product 16",
    description: "Description of the Product 16",
    rate: 16,
    currency: "$",
    colorId: 2,
    range: 11,
  },
  {
    name: "Product 17",
    description: "Description of the Product 17",
    rate: 14,
    currency: "$",
    colorId: 1,
    range: 33,
  },
  {
    name: "Product 18",
    description: "Description of the Product 18",
    rate: 12,
    currency: "$",
    colorId: 9,
    range: 11,
  },
  {
    name: "Product 19",
    description: "Description of the Product 19",
    rate: 12,
    currency: "$",
    colorId: 9,
    range: 11,
  },
  {
    name: "Product 20",
    description: "Description of the Product 20",
    rate: 12,
    currency: "$",
    colorId: 9,
    range: 11,
  },
  {
    name: "Product 21",
    description: "Description of the Product 21",
    rate: 18,
    currency: "$",
    colorId: 3,
    range: 11,
  },
];

const activeFilter = {
  range: [],
  color: [],
};

let filteredProductsArr = [];

const container = document.getElementById("swatches-container");
const rangeCheckboxes = document.querySelectorAll("#range-checkboxes input");

function calculateCount(colorList, filteredProducts) {
  // Reset all counts to 0
  colorList.forEach((color) => (color.count = 0));

  // Iterate through the filtered products and update counts for matching colors
  filteredProducts.forEach((product) => {
    const matchingColor = colorList.find(
      (color) => color.id === product.colorId
    );
    if (matchingColor) {
      matchingColor.count++;
    }
  });
}

// Update the range counts dynamically based on filtered products
function updateRangeCounts(colorsArr) {
  const lightCount = colorsArr
    .filter((c) => c.range.includes(11)) // Check if the range includes 11 for light
    .reduce((acc, cur) => acc + cur.count, 0);

  const mediumCount = colorsArr
    .filter((c) => c.range.includes(22)) // Check if the range includes 22 for medium
    .reduce((acc, cur) => acc + cur.count, 0);

  const darkCount = colorsArr
    .filter((c) => c.range.includes(33)) // Check if the range includes 33 for dark
    .reduce((acc, cur) => acc + cur.count, 0);

  document.getElementById("light-count").textContent = `(${lightCount})`;
  document.getElementById("medium-count").textContent = `(${mediumCount})`;
  document.getElementById("dark-count").textContent = `(${darkCount})`;
}

function isPaleColor(hex) {
  // Convert HEX to RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // YIQ formula to determine contrast
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq > 200; // Pale if YIQ is above 200
}

function filterFromActiveFilter() {
  let filteredProducts = productList;

  // Filter products by active range
  if (activeFilter.range.length) {
    filteredProducts = filteredProducts.filter((product) =>
      activeFilter.range.includes(product.range)
    );
  }

  // Filter products by active color
  if (activeFilter.color.length) {
    filteredProducts = filteredProducts.filter((product) =>
      activeFilter.color.some((color) => color.id === product.colorId)
    );
  }

  // Recalculate counts based on the filtered products
  calculateCount(colors, filteredProducts);
  updateRangeCounts(colors);

  // Display the filtered products
  showProductList(filteredProducts);
}

filterFromActiveFilter();

colors.forEach((color, index) => {
  const swatch = document.createElement("div");
  swatch.className = "swatch";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = `color-${index}`;
  input.name = "colors";
  input.value = color.name;

  const label = document.createElement("label");
  label.htmlFor = `color-${index}`;
  label.className = "swatch-label";

  const colorBox = document.createElement("div");
  colorBox.className = "color-box";
  colorBox.style.backgroundColor = color.value;

  // Add a black border for very pale colors
  if (isPaleColor(color.value)) {
    colorBox.style.border = "1px solid black";
  }

  const colorNameDiv = document.createElement("div");
  colorNameDiv.className = "color-name-div";
  const colorName = document.createElement("span");
  colorNameDiv.append(colorName);
  colorName.className = "color-name";
  colorName.textContent = color.name;

  const count = document.createElement("span");
  count.className = "count";
  count.textContent = `(${color.count})`;

  label.append(colorBox, colorNameDiv, count);
  swatch.append(input, label);
  container.appendChild(swatch);
});

function showProductList(filteredProducts) {
  const container = document.getElementById("filtered-products-container");
  container.innerHTML = ""; // Clear previous products

  // Create and append product elements
  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: ${product.currency}${product.rate}</p>
      `;
    container.appendChild(productDiv);
  });
}

// Event listener for range checkboxes
rangeCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    // Update color checkboxes based on the selected ranges
    updateColorCheckboxesState();
  });
});

// Function to enable or disable color checkboxes based on the selected ranges
function updateColorCheckboxesState() {
  const rangeCheckboxes = document.querySelectorAll("#range-checkboxes input");

  // Check if no range checkbox is selected
  const noneChecked = Array.from(rangeCheckboxes).every(
    (checkbox) => !checkbox.checked
  );

  // If no checkboxes are checked, enable all color checkboxes
  if (noneChecked) {
    colors.forEach((color) => {
      const colorCheckbox = document.getElementById(`color-${color.id - 1}`);
      colorCheckbox.disabled = false; // Enable all color checkboxes
      const label = document.querySelector(
        `label[for='color-${color.id - 1}']`
      );
      label.classList.remove("disabled-label"); // Remove disabled class from labels
    });
    return; // Exit the function early
  }

  // Disable all color checkboxes initially
  colors.forEach((color) => {
    const colorCheckbox = document.getElementById(`color-${color.id - 1}`);
    colorCheckbox.disabled = true; // Disable all color checkboxes
    const label = document.querySelector(`label[for='color-${color.id - 1}']`);
    label.classList.add("disabled-label"); // Add disabled class to labels
  });

  // Enable only the colors that match the selected ranges
  rangeCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const rangeId = parseInt(checkbox.id.split("-")[1]); // Get the range ID
      colors.forEach((color) => {
        if (color.range.includes(rangeId)) {
          const colorCheckbox = document.getElementById(
            `color-${color.id - 1}`
          );
          colorCheckbox.disabled = false; // Enable matching color checkboxes
          const label = document.querySelector(
            `label[for='color-${color.id - 1}']`
          );
          label.classList.remove("disabled-label"); // Remove disabled class from labels
        }
      });
    }
  });
}

// Existing event listener for color checkboxes
colors.forEach((color, index) => {
  const input = document.getElementById(`color-${index}`);

  input.addEventListener("change", (e) => {
    if (e.target.checked) {
      // If checked, add the color to the array
      filteredProductsArr.push(color);
      activeFilter.color.push(color);
    } else {
      // If unchecked, remove the color from the array
      filteredProductsArr = filteredProductsArr.filter(
        (c) => c.id !== color.id
      );
      activeFilter.color = activeFilter.color.filter((c) => c.id !== color.id);
    }

    // Update the range checkboxes state based on selected colors
    updateRangeCheckboxesState(filteredProductsArr);
    // Fetch products based on selected colors
    filterFromActiveFilter();
  });
});

// Event listeners for range checkboxes
rangeCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    const rangeId = parseInt(e.target.id.split("-")[1]); // Extract range ID

    if (e.target.checked) {
      activeFilter.range.push(rangeId); // Add the range to selected ranges
    } else {
      activeFilter.range = activeFilter.range.filter((id) => id !== rangeId); // Remove the range if unchecked
    }

    // Update displayed products based on selected ranges
    filterFromActiveFilter();
  });
});

// Function to enable or disable range checkboxes based on the selected colors
function updateRangeCheckboxesState(selectedColors) {
  const rangeCheckboxes = document.querySelectorAll("#range-checkboxes input");
  const rangeLabels = document.querySelectorAll("#range-checkboxes label"); // Select all labels

  // Disable all range checkboxes and labels first
  rangeCheckboxes.forEach((checkbox) => {
    checkbox.disabled = true; // Disable the checkbox
  });
  rangeLabels.forEach((label) => {
    label.classList.add("disabled-label"); // Add class to visually indicate disabled state
  });

  // Enable checkboxes and labels that match any of the selected colors' ranges
  if (selectedColors.length > 0) {
    selectedColors.forEach((color) => {
      color.range.forEach((rangeId) => {
        const checkbox = document.getElementById(`range-${rangeId}`);
        const label = document.querySelector(`label[for='range-${rangeId}']`); // Get the label for the checkbox
        if (checkbox) {
          checkbox.disabled = false; // Enable checkbox for the selected color's range
          if (label) {
            label.classList.remove("disabled-label"); // Remove disabled class from the label
          }
        }
      });
    });
  } else {
    rangeCheckboxes.forEach((checkbox) => {
      checkbox.disabled = false; // Disable the checkbox
    });
    rangeLabels.forEach((label) => {
      label.classList.remove("disabled-label"); // Add class to visually indicate disabled state
    });
  }
}
