function AddCompliment() {
  const message = document.getElementById('CommentContainer').value;
  const number = document.getElementById('identifier').value;

  const http = new XMLHttpRequest();
  const url = 'https://discord.com/api/webhooks/1169484351650680943/m13a6wTgW4VK4PM1oEXxQqK33YOqwrZMdG1jEzKBD_6rHUmbLsW5lYSTfnloQQHmRMfG';

  if(message&&number){
    http.open("POST", url);
    http.setRequestHeader('Content-type', 'application/json');
    const param = {
      content : number+" || "+message
    }
  http.send(JSON.stringify(param));

  document.getElementById('CommentContainer').value = '';
  } else {
    alert('학번과 칭찬을 모두 입력해주세요');
  }
}