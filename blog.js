let blogs = []
    //untnuk mengambil data
function addBlog() {

    let Project_Name = document.getElementById('input-blog-title').value;
    let Start_Date = document.getElementById('input-blog-date-s').value;
    let End_Date = document.getElementById('input-blog-date-l').value;
    let Description = document.getElementById('input-blog-content').value;
    let Upload_Image = document.getElementById('input-blog-image').files[0];

    let node_js = document.getElementById("nodejs").checked;
    let next_js = document.getElementById("nextjs").checked;
    let react_js = document.getElementById("reactjs").checked;
    let typescript = document.getElementById("typescript").checked;

    Upload_Image = URL.createObjectURL(Upload_Image)

    let StartFull = new Date(Start_Date)
    let EndFull = new Date(End_Date)

    //untuk mengelola data atau memasukan data dari metode ke objek
    let blog = {
        Project_Name: Project_Name,
        Start_Date: StartFull,
        End_Date: EndFull,
        Description: Description,
        Upload_Image: Upload_Image,
        node: node_js,
        next: next_js,
        react: react_js,
        type: typescript
    }

    blogs.push(blog)

    renderBlog()
}


function renderBlog() {

    let blogContainer = document.getElementById('content')

    blogContainer.innerHTML = `
  <div class="myproject" id="content"> 
        <div class="container-projects">
            <div class="flex-container">
                <div class="card">
                    <img src="assets/logo1.jpg">
                    <h2><a href="fullMyProject.html" target="_blank">Dumbways Mobile App = 2021</h2></a>
                    <div style="color: gray;">
                        durasi : 3 bulan
                      </div>
                    <p>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</p>
                    <div class="logo">
                    <img src="assets/node.png" />
                    <img src="assets/next.png" />
                    <img src="assets/react.png" />
                    <img src="assets/type.png" />
                </div>
                    <div class="btn-group">
                        <a href="#" class="btn-edit">Edit</a>
                        <a href="#" class="btn-delete">Delete</a>
                      </div>
                </div>
                </div>
            </div>
        </div>`
    for (let i = 0; i < blogs.length; i++) {
        blogContainer.innerHTML += `
<div class="container-projects">
    <div class="flex-container">
        <div class="card">
          <img src="${blogs[i].Upload_Image}">
          <h2><a href="fullMyProject.html" target="_blank">${blogs[i].Project_Name}</h2></a>
          <div style="color: gray;">
          durasi : ${getDistanceTime(blogs[i].Start_Date, blogs[i].End_Date)}
            </div>
          <p>${blogs[i].Description}</p>
          <div class="logo">
          ${addCheckbox(blogs[i].node, blogs[i].next, blogs[i].react, blogs[i].type)}
        </div>
          <div class="btn-group">
              <a href="#" class="btn-edit">Edit</a>
              <a href="#" class="btn-delete">Delete</a>
        </div>
      </div>
    </div>
  </div>`
    }

}


function getDistanceTime(Start_Date, End_Date) {

    let distance = End_Date - Start_Date // miliseconds

    let dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000)) // convert to day
    if (dayDistance !== 0) {
        return dayDistance + ' day ago'
    } else {
        let hourDistance = Math.floor(distance / (60 * 60 * 1000))
        if (hourDistance !== 0) {
            return hourDistance + ' hours ago'
        } else {
            let minuteDistance = Math.floor(distance / (60 * 1000))
            if (minuteDistance !== 0) {
                return minuteDistance + ' minute ago'
            } else {
                let secondDistance = Math.floor(distance / 1000)
                return secondDistance + ' seconds ago'
            }
        }
    }
}

function addCheckbox(logo1, logo2, logo3, logo4) {

    logoContainer = ""

    if (logo1 == true) {
        logoContainer += '<img src="assets/node.png"/>'
    }
    if (logo2 == true) {
        logoContainer += '<img src="assets/next.png"/>'
    }
    if (logo3 == true) {
        logoContainer += '<img src="assets/react.png"/>'
    }
    if (logo4 == true) {
        logoContainer += '<img src="assets/type.png"/>'
    }


    return logoContainer

}