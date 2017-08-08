
export class Init {
  load()
  {
    if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined ){
       console.log('nothing here');
       let todos = [
         {text: 'item foo'},
         {text: 'item fdsffs'},
         {text: 'item 3'}
       ];
       localStorage.setItem('todos', JSON.stringify(todos));
       return ;
    } else {
      console.log('found');

    }
  }
}
