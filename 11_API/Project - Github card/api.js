// const requestURL = 'https://api.github.com/users/kaustavxg';
// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestURL);
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         // console.log(this.responseText);
//         const data = JSON.parse(this.responseText)
//         // why JSON.parse because ye string tha, chaiya tha as object to isliye wrap krke convert krdia 
      
//         console.log(data);
//         console.log(typeof data);
//         console.log(data.followers);
        


//         // ASSIGNMENT
//         // object mein se photo and follower nikalke card banaiye or jaise hi sab aa jaye toh button form krke usko card mein convert kr dijiye

        
        
        
        
//     }
// }
// xhr.send();


const buttons = document.querySelector("#api_card")
const input = document.querySelector('#github_id')
const cardContainer = document.querySelector('#cardContainer')

buttons.addEventListener('click', function(e){
    const username = input.value.trim();
    if(!username) return;
    const requestURL = `https://api.github.com/users/${username}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL);
    xhr.onreadystatechange = function(){


        console.log(xhr.readyState);
        if(xhr.readyState === 4){
            cardContainer.innerHTML = "";
            if(xhr.status === 200){
           
                const data = JSON.parse(this.responseText);
                // console.log(data.login, data.avatar_url, data.followers, data.bio);

                const card = document.createElement('div');
                card.className = "card";

                const avatar = document.createElement('img');
                avatar.src = data.avatar_url;

                const git_user = document.createElement('h4');
                git_user.textContent = `Username: ${data.login}`;

                const name = document.createElement('h4');
                name.textContent = `Name: ${data.name}`;

                const follower = document.createElement('p');
                follower.textContent = `Followers: ${data.followers}`;

                const bio = document.createElement('p');
                bio.textContent = `Bio: ${data.bio}`;

                const email = document.createElement('p');
                email.textContent = `Email: ${data.email || "Not available"}`;

                const location = document.createElement('p');
                location.textContent = `Location: ${data.location || "Not available"}`;

                const profileUrl = document.createElement('a');
                profileUrl.href = data.html_url;
                profileUrl.target = "_blank";
                profileUrl.textContent = "View Profile";

                // appending all this into card div
                card.appendChild(avatar);
                card.appendChild(git_user);
                card.appendChild(name);
                card.appendChild(follower);
                card.appendChild(bio);
                card.appendChild(email);
                card.appendChild(location);
                card.appendChild(profileUrl);

                // appending card into card container;

                cardContainer.appendChild(card);
            }
        } 
        else {
           cardContainer.innerHTML = "<p>User not found, please enter a valid username!</p>"
        }  
    }
xhr.send()
})






