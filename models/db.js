(function () {

  var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  var schemaOptions = {
    toJSON: {
      virtuals: true
    }
  };
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.MONGODB_URI);

  var StudentSchema = new Schema({
    st_first_name: {type: String, required: true},
    //st_middle_name: {type: String, required: true},
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

  var SubjectSchema = new Schema({
    su_title: {type: String, required: true},
    su_created: {type: Date, default: Date.now()},
    su_desc: {type: String}
  });

  var InstructorSchema = new Schema({
    in_first_name: {type: String, required: true},
    in_last_name: {type: String, required: true},
    in_created: {type: String, default: Date.now()},
    or_id: {type: Schema.Types.ObjectId, ref: 'Organization'},
    in_email: {type: String, required: true, unique: true},
    in_password: {type: String, required: true}
  }, schemaOptions);

  var LocationSchema = new Schema({
    lo_title: {type: String, required: true},
    lo_created: {type: Date}
  });

  var SessionSchema = new Schema({
    se_created: {type: Date, default: Date.now()},
    se_name: {type: String, required: true},
    //se_start_time: {type: Date }
    //,
    // se_end_time: {type: Date},
    // se_duration: {type: Number},
    // se_day: {type: String},
    //st_students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
    su_subject_id: {type: Schema.Types.ObjectId, ref: 'Subject'},
    in_instructor_id: {type: Schema.Types.ObjectId, ref: 'Instructor'}
    // lo_location_id: {type: Schema.Types.ObjectId, ref: 'Location'}
  });

  var AttendanceSchema = new Schema({
    st_student_id : {type: Schema.Types.ObjectId, ref: 'Student'},
    se_session_id: {type: Schema.Types.ObjectId, ref: 'Session'},
    at_created: {type: Date, default: Date.now()},
    at_status: {type: Boolean, default: true}
  });

  var UserTypeSchema = new Schema({
    us_type_title: {type: String, required: true},
    us_type_desc: {type: String},
    us_type_created: {type: Date, default: Date.now()}
  });

  var UserSchema = new Schema({
    us_first_name: {type: String, required: true},
    us_last_name: {type: String, required: true},
    us_email: {type: String, required: true, unique: true},
    us_password: {type: String, required: true, select: false},
    //us_password_salt: {type: String, required: true, select: false},
    us_created: {type: Date, select: false},
    or_id: {type: Schema.Types.ObjectId, ref: 'Organization'},
    us_type_id: {type: Schema.Types.ObjectId, ref: 'UserType'}
  });

  var OrganizationSchema = new Schema({
    or_name: {type: String, required: true},
    us_id: {type: Schema.Types.ObjectId, ref: 'User'},
    instructors: [{type: Schema.Types.ObjectId, ref: 'Instructor'}]
  });

  InstructorSchema.virtual('name').get(function () {
    return this.in_first_name + ' ' + this.in_last_name;
  });

  var AssignmentSchema = new Schema({
    or_id: {type: Schema.Types.ObjectId, ref: 'Organization'},
    subjects: [{type: Schema.Types.ObjectId, ref: 'Subject'}],
    us_id: {type: Schema.Types.ObjectId, ref: 'User'},
    as_created: {type: Date, default: Date.now()}
  });

  exports.Student = mongoose.model('Student', StudentSchema);
  exports.Session = mongoose.model('Session', SessionSchema);
  exports.SessionType = mongoose.model('SessionType', SessionType);
  exports.Attendance = mongoose.model('Attendance', AttendanceSchema);
  exports.Location = mongoose.model('Location', LocationSchema);
  exports.Instructor = mongoose.model('Instructor', InstructorSchema);
  exports.Subject = mongoose.model('Subject', SubjectSchema);
  exports.User = mongoose.model('User', UserSchema);
  exports.Organization = mongoose.model('Organization', OrganizationSchema);
  exports.UserType = mongoose.model('UserType', UserTypeSchema);
  exports.Assignment = mongoose.model('Assignment', AssignmentSchema);

})();
