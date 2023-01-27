import { SyncOutlined } from '@ant-design/icons';
export const Personal = ({
  firstname,
  lastname,
  dob,
  email,
  password,
  setFirstName,
  setLastName,
  setEmail,
  setDob,
  setPassword,
  validateEmail,
}) => (
  <form>
    <div className=' mb-3'>
      <div className='d-flex formx'>
        <div className='mb-3'>
          <label className='form-label'>First Name</label>
          <input
            value={firstname}
            type='text'
            className='form-control'
            required
            placeholder='John'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='mb-3 mx-3'>
          <label className='form-label'>Last Name</label>
          <input
            value={lastname}
            type='text'
            className='form-control'
            required
            placeholder='Smith'
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className='mb-3 mx-3'>
          <label className='form-label'>Date Of Birth</label>
          <div className='justify-content-center'>
            <div className='d-flex'>
              <input
                value={dob}
                type='date'
                className='form-control'
                min="1900-04-01" max="2050-04-30"
                required
                onChange={(e) => {
                  {
                    setDob(e.target.value);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='mb-3 pt-3'>
      <label
        htmlFor='exampleInputEmail1'
        className='form-label'>
        Email address
      </label>
      <input
        value={email}
        type='email'
        className='form-control'
        id='exampleInputEmail1'
        placeholder='person@example.com'
        aria-describedby='emailHelp'
        required
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
      />
      <div
        id='emailHelp'
        className='form-text'>
        We'll never share your email with anyone else.
      </div>
    </div>
    <label
      htmlFor='inputPassword5'
      className='form-label'>
      Password
    </label>
    <input
      value={password}
      type='password'
      id='inputPassword5'
      className='form-control'
      aria-describedby='passwordHelpBlock'
      required
      onChange={(e) => setPassword(e.target.value)}
    />
    <div
      id='passwordHelpBlock'
      className='form-text'>
      Your password must be 8-20 characters long, contain letters and numbers,
      and must not contain spaces, special characters, or emoji.
    </div>
  </form>
);

export const Address = ({
  setCity,
  setAddress,
  setCountryState,
  setZip,
  sortedCountries,
  getSelectedCountry,
  city,
  zip,
  countryState,
  address,
  selectedCountry,
  loading,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div className='mb-3'>
      <label className='form-label' />
      <select
        className='mb-3 form-control'
        id='select_box'>
        {sortedCountries.map((ctr) => (
          <option value={ctr}>{ctr}</option>
        ))}
      </select>
    </div>

    <div className='mb-3'>
      <label className='form-label' />
      <input
        value={address}
        type='text'
        className='form-control'
        placeholder='Address'
        required
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>

    <div className='mb-3'>
      <label className='form-label' />
      <input
        value={city}
        type='text'
        className='form-control'
        placeholder='City'
        required
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
    <div className='mb-3'>
      <label className='form-label' />
      <input
        value={countryState}
        type='text'
        className='form-control'
        placeholder='State (optional)'
        onChange={(e) => setCountryState(e.target.value)}
      />
    </div>
    <div className='mb-3'>
      <label className='form-label' />
      <input
        value={zip}
        type='text'
        className='form-control'
        placeholder='Zip'
        required
        onChange={(e) => setZip(e.target.value)}
      />
    </div>
    <button
      type='submit'
      className='btn btn-primary form-control p-7 mt-2'
      disabled={loading}>
      {loading ? <SyncOutlined spin /> : 'Submit'}
    </button>
  </form>
);
