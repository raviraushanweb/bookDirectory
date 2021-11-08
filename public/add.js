const addForm = document.getElementById("add-form");
const category = document.getElementById("category");
const publishedDate = document.getElementById("publishedDate");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const price = document.getElementById("price");
const publication = document.getElementById("publication");

const addBook = async (e) => {
  e.preventDefault();

  if (
    category.value === "" ||
    publishedDate.value === "" ||
    title.value === "" ||
    author.value === "" ||
    price.value === ""
  ) {
    alert("Please fill the fields!");
  }

  const sendBody = {
    category: category.value,
    publishedDate: publishedDate.value,
    title: title.value,
    author: author.value,
    pages: pages.value,
    price: price.value,
    publication: publication.value,
  };

  try {
    const res = await fetch("/api/addBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendBody),
    });

    if (res.status === 400) {
      throw Error("Store already exists!");
    }
    if (res.status === 500) {
      throw Error("Internal server error!");
    }

    alert("Book added!");
    window.location.href = "/add.html";
  } catch (err) {
    alert(err);
    return;
  }
};

addForm.addEventListener("submit", addBook);
