import Job from '../Models/Job.js';
import User from '../Models/Auth.js';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

export const publishJob = async (req, res) => {
  try {
    const {
      jobTitle,
      jobDescription,
      currentJobCat,
      subCategory,
      jobTags,
      imgUrl,
    } = req.body;
    const job = new Job({
      jobTitle,
      jobDescription,
      jobCategory: currentJobCat,
      jobSubcategory: subCategory,
      jobTags,
      imgUrl,
      postedBy: req.auth._id,
    });
    await job.save();
    res.json(job);
  } catch (error) {
    console.error(error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const currentPage = req.params.page || 1;
    const perPage = 20;
    const jobs = await Job.find()
      .skip((currentPage - 1) * perPage)
      .sort({ createdAt: -1 })
      .limit(perPage)
      .populate(
        'postedBy',
        'fullname fulladdress.country image email createdAt'
      );
    res.json(jobs);
  } catch (error) {
    console.error(error);
  }
};

export const uploadPFP = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.files.image.path);
    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePFP = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.auth._id,
      { image: req.body },
      {
        new: true,
      }
    );
    user.password = undefined;
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { email, ctrystate, zip, city, address, country } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.json({
        error: 'An account with the specified email exists.',
      });
    }
    const user1 = await User.findByIdAndUpdate(
      req.auth._id,
      {
        email,
        fulladdress: {
          address,
          city,
          state: ctrystate,
          zip,
          country,
        },
      },
      {
        new: true,
      }
    );
    user1.password = undefined;
    res.json(user1);
  } catch (error) {
    console.log(error);
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { postID } = req.body;
    const job = await Job.findByIdAndDelete(postID);
    if (job) res.json({ info: 'Success' });
  } catch (error) {
    console.log(error);
  }
};

export const getJob = async (req, res) => {
  const { _id } = req.params;
  const job = await Job.findById(_id).populate(
    'postedBy',
    'fullname fulladdress.country image email createdAt'
  );
  try {
    res.json(job);
  } catch (error) {
    console.log(error);
  }
};

export const getMyJobs = async (req, res) => {
  const _id = req.auth._id;
  const job = await Job.find({ postedBy: _id }).populate(
    'postedBy',
    'fullname fulladdress.country image email createdAt'
  );
  try {
    res.json(job);
  } catch (error) {
    console.log(error);
  }
};
