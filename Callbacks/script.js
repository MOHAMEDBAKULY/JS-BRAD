// const button = document.querySelector('#call');

// const changeColor = (e)  => {
//    e.target.classList.toggle('danger');
//    button.textContent = 'nini Mbaya na wewe'
//    button.style.width = '240px'
// }

// button.addEventListener('click', changeColor);

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

const createPost = (post)  => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            let error = true;

            if(!error) {
                posts.push(post);
                reslove();
            }else{
                reject('The user was not found!')
            }
           
           
        }, 3000)
    })
}

const getPosts = ()  => {
    setTimeout(() => {
     posts.forEach((post) => {
        const div = document.createElement('div');
        div.innerHTML = `<b>${post.title}</b> - ${post.body}`;
        div.className = "bbg-color";
        div.style.width = "200px";
        div.style.height = "20px";
        div.style.background = "grey"
        div.style.marginBottom = "10px"
        div.style.padding = '12px'
        div.style.borderRadius = "8px"
        document.querySelector('#posts-body').appendChild(div)
     })
    }, 1000)
}

const showError = (error) => {
    const h3 = document.createElement('h3')
    h3.innerHTML = `<b>${error}</b>`
    document.querySelector('#posts-body').appendChild(h3)
}

createPost({title: 'Post Three', body: 'This is post three'})
     .then(getPosts)
     .catch(showError);
        
  
