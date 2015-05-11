exports.definition = {
	config: {
		columns: {
			"idNote":"INTEGER PRIMARY KEY AUTOINCREMENT",
		    "noteTitle": "text",
		    "noteDescription": "text",
		    "date": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "note",
			idAttribute:"idNote"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};