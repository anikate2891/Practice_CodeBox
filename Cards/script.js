const users = [
 {
    name: "Amit Sharma",
    picUrl: "https://images.unsplash.com/photo-1763598363324-cd072a67dc61?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Web Developer",
    bio: "Frontend + Backend pe kaam karta hai."
  },
  {
    name: "Riya Sen",
    picUrl: "https://images.unsplash.com/photo-1763598925601-dae5e1c30ce3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "UI/UX Designer",
    bio: "Minimal, fast, user-friendly designs banati hai."
  },
  {
    name: "Kabir Das",
    picUrl: "https://images.unsplash.com/photo-1762324858945-3fd82fe78bcd?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Data Analyst",
    bio: "Numbers, patterns aur insights nikalna iski speciality."
  },
  {
    name: "Neha Gupta",
    picUrl: "https://images.unsplash.com/photo-1762325658226-3a8bc64a6fd8?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Mobile App Developer",
    bio: "Android + iOS hybrid apps React Native se banati hai."
  },
  {
    name: "Arjun Mehta",
    picUrl: "https://images.unsplash.com/photo-1762745188344-e453c5474d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "DevOps Engineer",
    bio: "CI/CD pipelines, cloud infra aur automation handle karta hai."
  },
  {
    name: "Sara Khan",
    picUrl: "https://plus.unsplash.com/premium_photo-1763265293425-f7ad17012b13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Content Creator",
    bio: "Tech, productivity aur lifestyle pe short informative content."
  },
{
    name: "Vikram Singh",
    picUrl: "https://images.unsplash.com/photo-1762743412345-a31d94cd5a88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Backend Developer",
    bio: "APIs, auth, databases—pure server side ka banda."
  },
  {
    name: "Meera Das",
    picUrl: "https://plus.unsplash.com/premium_photo-1762591318545-462f9c69051e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Graphic Designer",
    bio: "Branding, posters, thumbnails—visual clarity strong."
  },
  {
    name: "Rohan Pal",
    picUrl: "https://images.unsplash.com/photo-1762391965624-279023a2481d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Cybersecurity Analyst",
    bio: "Network auditing, threat detection, security patches."
  },
  {
    name: "Ananya Roy",
    picUrl: "https://images.unsplash.com/photo-1762795116942-1faf2ae6cf84?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Machine Learning Engineer",
    bio: "Models train karti hai, data pipeline optimise karti hai."
  },
  {
    name: "Soham Ghosh",
    picUrl: "https://images.unsplash.com/photo-1762810521065-61ff659e9fb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Systems Engineer",
    bio: "Servers, hardware, infra—low level cheeze handle."
  },
  {
    name: "Priya Jadhav",
    picUrl: "https://images.unsplash.com/photo-1762810602195-599ea70234f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Digital Marketer",
    bio: "SEO, ads, analytics—traffic grow karwana skill."
  },
  {
    name: "Farhan Ali",
    picUrl: "https://images.unsplash.com/photo-1762757076979-cc016f6df284?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Cloud Architect",
    bio: "AWS, GCP infra set karna aur scale karwana."
  },
  {
    name: "Tanisha Verma",
    picUrl: "https://images.unsplash.com/photo-1762421670361-974d54d7b5c3?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Product Manager",
    bio: "Requirements, roadmap, execution."
  }

];

let main = document.querySelector('main');
sum = '';


users.forEach(function(dets){
    sum = sum + `
<div class="card">
    <img src= ${dets.picUrl} alt="">
    <h3>${dets.name}</h3>
    <h4>${dets.profession}</h4>
    <p>${dets.bio}</p>
</div>
`
})

main.innerHTML = sum

