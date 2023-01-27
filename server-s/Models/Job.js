import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    jobCategory: {
      type: String,
      required: true,
    },
    jobSubcategory: {
      type: String,
      required: true,
    },
    postedBy: {
      type: ObjectId,
      ref: 'User',
    },
    imgUrl: {
      url: String,
      public_id: String,
    },
    jobTags: [],
  },
  { timestamps: true }
);

export default mongoose.model('Job', jobSchema);
