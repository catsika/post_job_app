import { SyncOutlined } from '@ant-design/icons';
export const SignIn = ({
  email,
  password,
  handleSubmit,
  loading,
  setEmail,
  setPassword,
}) => (
  <form onSubmit={handleSubmit}>
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
      className='form-control'
      aria-describedby='passwordHelpBlock'
      required
      onChange={(e) => setPassword(e.target.value)}
    />

    <button
      type='submit'
      className='btn btn-primary form-control p-7 mt-2'
      disabled={loading}>
      {loading ? <SyncOutlined spin /> : 'Login'}
    </button>
  </form>
);
