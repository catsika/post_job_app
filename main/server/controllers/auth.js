import { comparePassword, hashPassword } from '../helpers/encryptPass';
import jwt from 'jsonwebtoken';

import User from '../Models/Auth';
import Job from '../Models/Job';
export const signUp = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    dob,
    password,
    address,
    city,
    zip,
    selectedCountry,
    countryState,
  } = req.body;
  if (
    !firstname &&
    !lastname &&
    !address &&
    !city &&
    !zip &&
    !selectedCountry
  ) {
    return res.json({ error: 'Please Check Your Info' });
  }
  if (!email) {
    return res.json({ error: 'Please enter a valid email address' });
  } else {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat))
      return res.json({ error: 'Please enter a valid email address' });
  }
  if (!dob) {
    return res.json({ error: 'You must provide a full name' });
  } else {
    const validDate = Date.parse(dob);
    if (isNaN(validDate))
      return res.json({ error: 'Please enter a valid date of birth' });
    else {
      const today = new Date();
      const birthDate = new Date(dob);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 18)
        return res.json({ error: 'You need be 18 or above in order signup' });
      if (age > 85)
        return res.json({
          error: 'You need to be 85 or below in order to sign up',
        });
    }
  }
  if (password) {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const secure = passwordRegex.test(password);
    if (!secure) {
      return res.json({
        error: 'Password is required and should be 6 digits minimum',
      });
    }
  }

  const checkEmail = await User.findOne({ email });

  if (checkEmail)
    return res.json({
      error: 'An account with this email is already registered',
    });

  const hashedPassword = await hashPassword(password);

  const newUser = new User({
    fullname: {
      firstname,
      lastname,
    },
    dob,
    email,
    password: hashedPassword,
    fulladdress: {
      country: selectedCountry,
      address,
      city,
      state: countryState,
      zip,
    },
  });
  try {
    await newUser.save();
    return res.json({ success: 'True' });
  } catch {
    return res.json({
      error: 'Not Create An Account At This Time , Try Again Later',
    });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({
      error: 'An account with the specified email does not exist.',
    });
  }
  const match = await comparePassword(password, user.password);
  if (!match) {
    return res.json({ error: 'Something went wrong. Please try again' });
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  user.password = undefined;
  res.status(200).json({ user, token });
};

export const totalJobs = async (req, res) => {
  try {
    const total = await Job.find().estimatedDocumentCount();
    res.json(total);
  } catch (error) {}
};
