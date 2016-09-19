(function () {

  var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  mongoose.Promise = global.Promise;

  mongoose.connect(process.env.MONGODB_URI);

  var StudentSchema = new Schema({
    st_first_name: {type: String, required: true},
    st_middle_name: {type: String, required: true},
    st_last_name:  {type: String, required: true},
    // st_dob: {type: Date},
    st_gender: {type: String},
    // st_primary_contact_name: {type: String, required: true},
    // st_primary_contact: {type: String, required: true},
    // ne_type_id: Schema.Types.ObjectId,
    // st_primary_contact_rel: {type: String, required: true},
    st_created: {type: Date, default: Date.now()}
  });

  var SessionType = new Schema({
    se_type_name: {type: String, required: true},
    se_type_desc: String,
    se_type_created: {type: Date, default: Date.now()}
  });

  var SessionSchema = new Schema({
    se_type_id: {type: Schema.Types.ObjectId, ref: 'SessionType'},
    st_students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
    se_created: {type: Date, default: Date.now()}
  });

  var AttendanceSchema = new Schema({
    st_student_id : {type: Schema.Types.ObjectId, ref: 'Student'},
    se_session_id: {type: Schema.Types.ObjectId, ref: 'Session'},
    at_created: {type: Date, default: Date.now()},
    at_status: {type: Boolean, default: true}
  });

  exports.Student = mongoose.model('Student', StudentSchema);
  exports.Session = mongoose.model('Session', SessionSchema);
  exports.SessionType = mongoose.model('SessionType', SessionType);
  exports.Attendance = mongoose.model('Attendance', AttendanceSchema);

})();
