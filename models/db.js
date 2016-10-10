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
  //mongoose.connect(process.env.MONGODB_LOCAL);

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
    st_created: {type: Date, default: Date.now()},
    st_contact: {type: String},
    or_id: {type: Schema.Types.ObjectId, ref: 'Organization'}
  }, schemaOptions);

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

  var AttendanceTypeSchema = new Schema({
    at_type_title: {type: String, required: true},
    at_type_desc: {type: String},
    at_type_created: {type: Date, default: Date.now()}
  });

  var AttendanceSchema = new Schema({
    st_id : {type: Schema.Types.ObjectId, ref: 'Student'},
    re_id: {type: Schema.Types.ObjectId, ref: 'Register'},
    at_created: {type: Date, default: Date.now()},
    at_type_id: {type: Schema.Types.ObjectId, ref: 'AttendanceType'},
    at_marked_by: {type: Schema.Types.ObjectId, ref: 'User'},
    or_id: {type: Schema.Types.ObjectId, ref: 'Organization'},
    su_id: {type: Schema.Types.ObjectId, ref: 'Subject'}
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
    us_id: {type: Schema.Types.ObjectId, ref: 'User'}, //admin user
    or_created: {type: Date, default: Date.now()}
  });

  InstructorSchema.virtual('name').get(function () {
    return this.in_first_name + ' ' + this.in_last_name;
  });

  StudentSchema.virtual('name').get(function () {
    return this.st_first_name + ' ' + this.st_last_name;
  });

  var AssignmentSchema = new Schema({
    or_id: {type: Schema.Types.ObjectId, ref: 'Organization'},
    subjects: [{type: Schema.Types.ObjectId, ref: 'Subject'}],
    us_id: {type: Schema.Types.ObjectId, ref: 'User'},
    as_created: {type: Date, default: Date.now()}
  });

  var RegisterSchema = new Schema({
    su_id: {type: Schema.Types.ObjectId, ref: 'Subject'},
    students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
    re_start : {type: Date},
    re_end: {type: Date},
    re_created: {type: Date, default: Date.now()},
    re_assigned_to: {type: Schema.Types.ObjectId, ref: 'User'},
    re_last_marked: {type: Date},
    re_no_marked: {type: Number, default: 1}, //number of times a register is marked for the day
    re_mark_on: [{type: String}], //days of the week a register should be marked, weekly, mondays
    or_id: {type: Schema.Types.ObjectId, ref: 'Organization'},
    temp_period: {type: String}
  }, schemaOptions);


  RegisterSchema.virtual('count').get(function(){
    return this.students.length;
  });

  exports.Student = mongoose.model('Student', StudentSchema);
  exports.Session = mongoose.model('Session', SessionSchema);
  exports.SessionType = mongoose.model('SessionType', SessionType);
  exports.Attendance = mongoose.model('Attendance', AttendanceSchema);
  exports.AttendanceType = mongoose.model('AttendanceType', AttendanceTypeSchema);
  exports.Location = mongoose.model('Location', LocationSchema);
  exports.Instructor = mongoose.model('Instructor', InstructorSchema);
  exports.Subject = mongoose.model('Subject', SubjectSchema);
  exports.User = mongoose.model('User', UserSchema);
  exports.Organization = mongoose.model('Organization', OrganizationSchema);
  exports.UserType = mongoose.model('UserType', UserTypeSchema);
  exports.Assignment = mongoose.model('Assignment', AssignmentSchema);
  exports.Register = mongoose.model('Register', RegisterSchema);

})();
