const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const ProfileSchema = new Schema({
  _id: { type: String, default: shortid.generate },
  firstName: String,
  lastName: String,
  username: String,
  description: String,
  profilePicture: String, // TODO: update to have image upload
  uiColor: String, // string #XXXXXX
  //reputation: { type: Number, default: 0 }, // need to implement update
  //postCount: { type: Number, default: 0 }, // need to implement update
},
{
  toObject: { getters: true },
  toJSON: { getters: true },
  timestamps: true
});

ProfileSchema.virtual('postCount', {
  ref: 'post',
  localField: '_id',
  foreignField: 'profileId',
  count: true,
});


const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;
