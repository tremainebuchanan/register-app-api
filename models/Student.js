(function () {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    //mongoose.connect(process.env.MONGODB_URI);

    var StudentSchema = new Schema({
        st_first_name: {type: String, required: true},
        st_middle_name: {type: String, required: true},
        st_last_name:  {type: String, required: true},
        st_dob: {type: Date},
        st_gender: {type: String},
        st_primary_contact_name: {type: String, required: true},
        st_primary_contact: {type: String, required: true},
        ne_type_id: Schema.Types.ObjectId,
        st_primary_contact_rel: {type: String, required: true},
        st_created: {type: Date, default: Date.now()}
    });
    
    module.exports = mongoose.model('Student', StudentSchema);
})();

