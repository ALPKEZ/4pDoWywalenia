const articles = [
    {
      id: 'art1',
      title: 'article',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti animi dicta porro doloribus incidunt minus molestias quaerat quis harum!',
      author: 'Me',
    },
    {
      id: 'art2',
      title: 'article',
      content:
        'Natus praesentium distinctio, reiciendis doloribus dolorem, nobis deserunt unde aperiam voluptas eligendi qui veniam iusto nihil fugit! Nesciunt, ducimus temporibus?',
      author: 'Me',
    },
    {
      id: 'art3',
      title: 'article',
      content:
        'Reiciendis earum accusamus atque ducimus maiores nihil culpa impedit voluptate incidunt repellendus libero, vel, quidem at? Numquam veniam quae nesciunt.',
      author: 'Me',
    },
    {
      id: 'art4',
      title: 'article',
      content:
        'Minus obcaecati veniam sed voluptate ab provident, illo necessitatibus voluptatem unde quaerat. Adipisci, quae voluptatibus. At nulla repellendus animi cum?',
      author: 'Me',
    },
    {
      id: 'art5',
      title: 'trailer',
      content:
        'Officia eius, magnam saepe at architecto accusantium illo distinctio pariatur cum impedit. Labore accusamus iure ratione, laboriosam dolorem minus odit',
      author: 'Me',
    },
    {
      id: 'art6',
      title: 'trailer',
      content:
        'Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.',
      author: 'Me',
    },
    {
      id: 'art7',
      title: 'trailer',
      content:
        'Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.',
      author: 'Me',
    },
  ];
  


  const container = document.getElementById('articlesContainer');

  const articleElements = articles.map(article => {
      const articleDiv = document.createElement('div');
      articleDiv.className = 'article';
  
      const title = document.createElement('h2');
      title.textContent = article.title;
      articleDiv.appendChild(title);
  
      const content = document.createElement('p');
      content.textContent = article.content;
      articleDiv.appendChild(content);
  
      const author = document.createElement('p');
      author.textContent = `Author: ${article.author}`;
      articleDiv.appendChild(author);
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      articleDiv.appendChild(editButton);
  
      const editForm = document.createElement('div');
      editForm.className = 'edit-form';
      editForm.style.display = 'none';
  
      const titleInput = document.createElement('input');
      titleInput.type = 'text';
      titleInput.value = article.title;
      editForm.appendChild(titleInput);
  
      const contentInput = document.createElement('textarea');
      contentInput.value = article.content;
      editForm.appendChild(contentInput);
      
      const authorInput = document.createElement('textarea');
      authorInput.value = article.author;
      editForm.appendChild(authorInput);
  
      const saveButton = document.createElement('button');
      saveButton.textContent = 'Save';
      editForm.appendChild(saveButton);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete'
      editForm.appendChild(deleteButton)
  
      articleDiv.appendChild(editForm);
  
      editButton.addEventListener('click', () => {
          editForm.style.display = editForm.style.display === 'none' ? 'block' : 'none';
      });
  
      saveButton.addEventListener('click', () => {
          article.title = titleInput.value;
          article.content = contentInput.value;
          article.author = 
          title.textContent = article.title;
          content.textContent = article.content;
          author.textContent = article.author;
          editForm.style.display = 'none';
      });

      deleteButton.addEventListener('click', () => {
        articleDiv.style.display = 'none';
      });
  
      return articleDiv;
  });
  
  articleElements.forEach(articleDiv => container.appendChild(articleDiv));
