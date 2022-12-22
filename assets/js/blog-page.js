let blogs = [];

function getData(event) {
    event.preventDefault()

    let projectName = document.getElementById('project-name').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let description = document.getElementById('description-box').value;
    // let technologies = document.getElementById('').value;
    let image = document.getElementById('input-image').files;

    image = URL.createObjectURL(image[0]);

    let addBlog = {
        projectName,
        startDate,
        endDate,
        description,
        image
    }

    blogs.push(addBlog);

    console.log(blogs);
    showData();
}

function showData() {
    document.getElementById("post-blog").innerHTML = ``
    for( i = 0; i < blogs.length; i++) {
        document.getElementById('post-blog').innerHTML += `<div class="card-blog">

        <div class="content-blog">

            <div class="thumbnail">
                <img src="${blogs[i].image}" alt="">
            </div>
            
            <div class="title-blog">
                <h3><a href="blog.html">${blogs[i].projectName}</a></h3>
                <p>durasi : 3 bulan</p>
            </div>
        
            <div class="description-output">
            ${blogs[i].description}    
            </div>

            <div class="technologies-output">
                <div class="nodejs">
                    <img src="assets/img/nodejs.png" alt="">
                </div>
                <div class="nextjs">
                    <img src="assets/img/nextjs.png" alt="">
                </div>
                <div class="reactjs">
                    <img src="assets/img/reactjs.png" alt="">
                </div>
                <div class="typescript">
                    <img src="assets/img/typescript.png" alt="">
                </div>
            </div>
            
            <div class="opsi-blog">
                <div class="edit-blog">
                    <a href="">edit</a>
                </div>

                <div class="delete-blog">
                    <a href="">delete</a>
                </div>
            </div>

        </div>

    </div>`
    }
}