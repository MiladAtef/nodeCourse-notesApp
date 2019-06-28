const yargs = require('yargs');
const notes = require('./notes');

//adding new note
yargs.command({
	command: 'add',
	describe: 'add a new note',
	builder: {
		title: {
			describe: 'the note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'the note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		notes.addNote(argv.title, argv.body);
	}
});

//removing existing note
yargs.command({
	command: 'remove',
	describe: 'remove a new note',
	builder: {
		title: {
			describe: 'the note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.removeNote(argv.title);
	}
});

//listing all notes
yargs.command({
	command: 'list',
	describe: 'list all notes',
	handler() {
		notes.listNotes();
	}
});

//read existing note
yargs.command({
	command: 'read',
	describe: 'read a note',
	builder: {
		title: {
			describe: 'the note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.readNote(argv.title);
	}
});

yargs.parse();
