import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todolist = [];

const showMenu = () => {
  console.log('\n--- TODO LIST MENU ---');
  console.log('1. Add Task');
  console.log('2. View Tasks');
  console.log('3. Exit');

  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter task: ', (task) => {
          todolist.push(task);
          console.log('✅ Task added successfully!');
          showMenu(); 
        });
        break;

      case '2':
        console.log('\n📝 Tasks:');
        if (todolist.length === 0) {
          console.log('No tasks yet.');
        } else {
          todolist.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
          });
        }
        showMenu(); 
        break;

      case '3':
        console.log('👋 Exiting...');
        rl.close(); 
        break;

      default:
        console.log('❌ Invalid choice. Try again.');
        showMenu(); 
    }
  });
};

// Start program
showMenu();
