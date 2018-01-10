import { User } from './../js/scripts.js';

describe('User', function(){
  let user = new User("user");
  user.age = 10;

  // beforeEach(function(){
  // });

  it('should accept an integer', function(){
    expect(user.age).toEqual(10);
  });
  it('should calculate age on Mercury in seconds', function(){
    user.calcAgeMercury();
    expect(user.ageMercurySeconds).toEqual(75686400);
  });
});
