let input = [];
const todo = ['hello'];
while(input !== 'quit' && input !== 'q'){
    input = prompt("What would u like to do?")
    if (input === 'list'){
        console.log('//////\\\\\\')
        for( let i = 0; i < todo.length ; i++){
            console.log(`${i}:${todo[i]}`)
        }
        console.log('\\\\\\//////')
    } else if (input === 'new'){
        const newTodo = prompt("What u like to add");
        todo.push(newTodo);
        console.log(`${newTodo}    added to the list`);
    }else if (input === 'delete'){
        const del = parseInt(prompt("what u like to delete:"));
        if(!Number.isNaN(del)){
            const deleted = todo.splice(del,1);
        console.log(`${deleted[0]} is delete from the list`);
        }
        else{
            console.log("Enter the valid index");
        }
        
    }
}
console.log("OK QUIT THE APP!!")