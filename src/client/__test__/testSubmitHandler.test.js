import submitHandler from '../js/submitHandler'

describe('Test Client', () => {

  test('the submit handler fail with error due to empty input', () => {

    expect(submitHandler).toThrow(Error);
  })
})