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

const createPost = (post, callback)  => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

const getPosts = ()  => {
    setTimeout(() => {
     posts.forEach((post) => {
        const div = document.createElement('div');
        div.innerHTML = `<b>${post.title}</b> - ${post.body}`;
        document.querySelector('#posts-body').appendChild(div)
     })
    }, 800)
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts)
