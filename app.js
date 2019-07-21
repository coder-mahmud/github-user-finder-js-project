//init github
const github = new GitHub();
const ui = new UI();

const searchForm = document.getElementById('search');
searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const userText = document.getElementById('searchUser').value;

	if(userText !==''){
		//make http call
		github.getUser(userText)
		.then(data => {
			console.log(data);
			if(data.profile.message =='Not Found'){
				ui.showAlert('User not found','alert alert-danger');
			}else{
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);

			}
		})
	} 
});

document.getElementById('clear_all').addEventListener('click', ui.clearProfile.bind(this));