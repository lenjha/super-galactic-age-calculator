import { User } from './../js/scripts.js';

describe('User', function(){
  let user = new User(10);

  // beforeEach(function(){
  // });

  it('should accept an integer', function(){
    expect(user.age).toEqual(10);
  });

  it('should calculate age on Mercury in seconds', function(){
    user.calcAgeMercury();
    expect(user.ageMercurySeconds).toEqual(75686400);
  });

  it('should calculate age on Mercury from the seconds', function(){
    user.calcAgeMercury();
    expect(user.ageMercury).toEqual(2.4);
  });
});
