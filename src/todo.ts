interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export function getTodosByCount(count:number) {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(responce => responce.json())
    .then(responce  => {
      const result = responce as Todo[];
      if (result.length > count) {
        result.length = count
      }
      console.log(result)
  })

}
