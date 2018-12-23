const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  description: String,
  profilePicture: String, // TODO: change to actual image storage
  headerPicture: String, // TODO: change to actual image storage
  admins: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: 'profile'
    }
  }],
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;