const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
	try {
		const notes = JSON.parse(fs.readFileSync('notes.json').toString());
		return notes;
	} catch (e) {
		return [];
	}
};

const saveNotes = notes => {
	fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
	const notes = loadNotes();
	const checkIfNoteExists = notes.find(note => note.title === title);

	if (!checkIfNoteExists) {
		notes.push({ title, body });
		console.log(
			chalk.inverse.green(`${title} added successfully to your notes`)
		);
		saveNotes(notes);
	} else {
		console.log(chalk.inverse.yellow('Note title taken!'));
	}
};

const removeNote = title => {
	const notes = loadNotes();
	const checkIfNoteExists = notes.find(note => note.title === title);
	if (checkIfNoteExists) {
		const notesAfterDeleteThisOne = notes.filter(note => note.title !== title);
		saveNotes(notesAfterDeleteThisOne);
		console.log(chalk.inverse.green(`${title} was removed successfully`));
		return notesAfterDeleteThisOne;
	} else {
		console.log(chalk.inverse.red(`this note doesn't exist `));
	}
};
const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.inverse('your notes...'));
	notes.forEach(note => console.log(note.title));
};
const readNote = title => {
	const notes = loadNotes();
	const note = notes.find(note => note.title === title);
	if (note) {
		console.log(chalk.inverse(note.title));
		console.log(note.body);
	} else {
		console.log(chalk.inverse.red('not found'));
	}
};
module.exports = { addNote, removeNote, readNote, listNotes };
