function AddCompliment() {
  const message = document.getElementById('CommentContainer').value;
  const number = document.getElementById('identifier').value;

  if(message&&number){
    const text = document.createElement( 'p' );
    const compliment = document.createTextNode(number+" || "+message);
    text.appendChild(compliment);
    document.body.appendChild(text);

    document.getElementById('CommentContainer').value = '';
  } else {
    alert('학번과 칭찬을 모두 입력해주세요');
  }
} 