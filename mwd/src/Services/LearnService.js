import Parse from "parse";

// CREATE ACTION - new task
export const createTask = (name, location, date, time, frequency, image) => {
  console.log("Creating: ", name);
  console.log(name, location, date, time, frequency, image);
  console.log(image[name]);

  //const {base64, fileName} = image;
  //const  imageFile = new  Parse.File(fileName, {base64});

  // 2. Save the file
  /*try {
	const responseFile =  parseFile.save();
	const Gallery = Parse.Object.extend('Gallery');
	const gallery = new  Gallery();
	gallery.set('picture', responseFile);

	gallery.save();
	alert('The file has been saved to Back4app.');
  } catch (error) {
	  console.log(
	    'The file either could not be read, or could not be saved to Back4app.',
	  );
	}*/

  const imageFile = new Parse.File(image.name(), { base64: btoa("My file content") });
  //console.log("Test image: ", imageFile)
  
  //const imageFile = new Parse.File(image);//, { base64: state.preview });
  console.log("Test image: ", imageFile)
  //imageFile.save()

  const Task = Parse.Object.extend("Task");
  const task = new Task();
  const temp = createDay(date);
  console.log("The day object", temp);
  task.set("name", name);
  task.set("location", location);
  task.set("date", date);
  task.set("image", imageFile);

  // This is our issue. We need to pass a pointer to the database
  // but we can only figure out how to pass an object. Once we get 
  // this resolved, our data will be fully functioning and linked 
  // properly
  //task.set("Day", temp);
  task.set("time", time);
  task.set("frequency", frequency);
  return task.save().then((result) => {
    return result;
  });
};

export const getAllTasks = () => {
  const Task = Parse.Object.extend("Task");
  const query = new Parse.Query(Task);
  return query.find().then((result) => {
    return result;
  });
};

// DELETE operation - remove lesson by ID
export const removeTask = (id) => {
  const Task = Parse.Object.extend("Task");
  const query = new Parse.Query(Task);
  return query.get(id).then((task) => {
    task.destroy();
  });
};

// READ operation - get lesson by ID
export const getById = (id) => {
  const Task = Parse.Object.extend("Task");
  const query = new Parse.Query(Task);
  return query.get(id).then((result) => {
    // return Lesson object with objectId: id
    return result;
  });
};

// CREATE ACTION - new task
export const createDay = (date) => {
  console.log("Creating: ", date);
  const Day = Parse.Object.extend("Day");
  const day = new Day();
  day.set("date", date);
  return day.save().then((result) => {
    return result;
  });
};

export const getAllDays = () => {
  const Day = Parse.Object.extend("Day");
  const query = new Parse.Query(Day);
  return query.find().then((result) => {
    return result;
  });
};

// READ operation - get lesson by ID
export const getDayById = (id) => {
  const Day = Parse.Object.extend("Day");
  const query = new Parse.Query(Day);
  return query.get(id).then((result) => {
    // return Lesson object with objectId: id
    return result;
  });
};